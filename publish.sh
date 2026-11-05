#!/usr/bin/env bash
# Publish the site to the public Manithj/Manithj.github.io repo, which GitHub Pages serves.
# This repo (portfolio-src) stays private: only the files committed at HEAD are copied
# across, without any history. Run from anywhere inside this repo: ./publish.sh
set -euo pipefail

PUBLIC_REPO=https://github.com/Manithj/Manithj.github.io.git

src=$(git rev-parse --show-toplevel)
cd "$src"
if [ -n "$(git status --porcelain)" ]; then
  echo "Commit or stash your changes first; only committed files are published." >&2
  exit 1
fi

work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
git clone -q "$PUBLIC_REPO" "$work"
find "$work" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
git archive HEAD | tar -x -C "$work"
rm -f "$work/publish.sh"

cd "$work"
git add -A
if git diff --cached --quiet; then
  echo "Nothing new to publish."
  exit 0
fi
git commit -q -m "Publish $(git -C "$src" rev-parse --short HEAD)"
git push -q origin HEAD:main
echo "Published. GitHub Pages will update in a minute or two."
