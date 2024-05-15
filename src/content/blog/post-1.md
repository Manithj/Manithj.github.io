---
title: Demystifying Project AlphaFold — Where Artificial Intelligence Meets Biology 🧬
excerpt: Bioinformatics, as related to genetics and genomics, is a scientific sub-discipline that involves using computer science,
publishDate: 'May 10, 2024 '
isFeatured: true
tags:
  - Bioinformatics
  - Machine Learning
seo:
  image:
    src: '/Blog-1/1.webp'
    alt: Bioinformatics
---

![Protein Structure](/Blog-1/1.webp)


In recent years, the way we work has undergone a significant transformation, largely due to advancements in technology and changing attitudes toward work-life balance. One of the most notable changes has been the rise of remote work, allowing employees to work from the comfort of their own homes. While this shift has brought about many benefits, it has also introduced its fair share of challenges. Let's explore the advantages and disadvantages of working from home.

## **Contents**

1. Introduction : Defining Bioinformatics
2. What is Project AlphaFold ?
3. How it Works ?
4. What’s new in AlphaFold 3 ?

## **Introduction : Defining Bioinformatics**

Bioinformatics, as related to genetics and genomics, is a scientific sub-discipline that involves using computer science, applied mathematics & statistics to collect, store, analyze and disseminate biological data and information, such as DNA and amino acid sequences or annotations about those sequences. Scientists and clinicians use databases that organize and index such biological information to increase our understanding of health and disease and, in certain cases, as part of medical care.

![https://miro.medium.com/v2/resize:fit:773/1*Z9aACO5Nd0mqauVqkFZ2YQ.jpeg](https://miro.medium.com/v2/resize:fit:773/1*Z9aACO5Nd0mqauVqkFZ2YQ.jpeg)

Scales of Life

Life is organized into different levels, with smaller units combining to form larger, more complex ones. The most basic level contains atoms, which are the tiniest particles everything is made of. Atoms join together into molecules. Molecules then make up cells, which are the smallest units considered alive. Cells group together to form tissues like muscle tissue. Different tissues comprise organs like the heart or lungs. Organs work together as body systems within individual living things like animals or plants. Many individuals of the same kind living in one area form a population. Populations of various species interacting make up a community. The community along with the non-living environment like air, water and soil, make an ecosystem. Finally, all the ecosystems of the world form the highest level called the biosphere. Each smaller level builds up and supports the larger levels above it in a nested hierarchy.

![https://miro.medium.com/v2/resize:fit:875/1*EcHspeyKLfAmB88qLrVF5A.png](https://miro.medium.com/v2/resize:fit:875/1*EcHspeyKLfAmB88qLrVF5A.png)

Inside the body

Cells are the basic units that make up all living things. Inside each cell is a nucleus, which acts as the control center. The nucleus contains structures called chromosomes. Chromosomes are made up of long molecules called DNA. DNA is a code that provides instructions for how an organism is built and functions. The code is divided into smaller segments known as genes. Genes are the basic units of heredity that determine particular traits, like eye color or height. So at the smallest level, our genes carry the blueprints for our characteristics. Genes make up DNA molecules, which form chromosomes inside the nucleus of our cells. This hierarchical organization, from cells down to genes, packages the genetic instructions that guide every aspect of life in an efficient, structured way. The complexity of a whole organism arises from the coded information contained within the genes of its cells’ DNA.

![https://miro.medium.com/v2/resize:fit:875/1*Y4TmMy9BuIUdi9NXuHe0-A.png](https://miro.medium.com/v2/resize:fit:875/1*Y4TmMy9BuIUdi9NXuHe0-A.png)

Central Dogma of Molecular Biology

DNA is a twisty spiral ladder(double helix structure) made of small building blocks called nucleotides which consists,

1. Adenine (A)
2. Guanine (G)
3. Cytosine (C) &
4. Thymine (T)

![https://miro.medium.com/v2/resize:fit:875/1*2SHkMuLGCwa13RHipAu-Cg.png](https://miro.medium.com/v2/resize:fit:875/1*2SHkMuLGCwa13RHipAu-Cg.png)

The structure of a Nucleotide

It has instructions for making all the proteins our bodies need. To use these instructions, DNA is first copied into a messenger called RNA through a process called transcription.

The process of transcription involves creating a messenger RNA (mRNA) molecule that is complementary to a DNA sequence. During this process, the enzyme RNA polymerase reads along the DNA template strand and pairs each nucleotide base with its complementary RNA nucleotide. While DNA contains the four bases adenine (A), guanine (G), cytosine (C), and thymine (T), RNA molecules instead contain adenine (A), guanine (G), cytosine (C), and uracil (U) instead of thymine. So when RNA polymerase encounters an adenine (A) base on the DNA template, it will pair it with the RNA nucleotide uracil (U) when constructing the new mRNA strand. This is because uracil is structurally similar to thymine but without a methyl group, and it is the pyrimidine base found in RNA that is complementary to adenine, just as thymine in DNA is complementary to adenine. This A-U base pairing preserves the genetic information accurately as it is transcribed from DNA to mRNA.

![https://miro.medium.com/v2/resize:fit:724/1*LyCqaP3aDc3rJQ-lOdDP0g.jpeg](https://miro.medium.com/v2/resize:fit:724/1*LyCqaP3aDc3rJQ-lOdDP0g.jpeg)

Transcription & Translation

After the mRNA molecule is transcribed from DNA, it serves as the template for translation, the process of synthesizing proteins. Translation occurs at ribosomes, which are cellular machines composed of RNA and proteins. During translation, the ribosome reads the sequence of codons on the mRNA, which are triplets of nucleotides like AUG or GCC.

![https://miro.medium.com/v2/resize:fit:753/1*_vg1yqwH73idAdl-Hk552g.png](https://miro.medium.com/v2/resize:fit:753/1*_vg1yqwH73idAdl-Hk552g.png)

Codon

![https://miro.medium.com/v2/resize:fit:875/1*N9BgjWYR1D5WNm7XZAyA4w.png](https://miro.medium.com/v2/resize:fit:875/1*N9BgjWYR1D5WNm7XZAyA4w.png)

The Genetic Code

Each codon specifies a particular amino acid that needs to be added to the growing polypeptide chain. For example, the codon AUG codes for the amino acid methionine, while GCC codes for alanine. As the ribosome moves along the mRNA strand, it recruits transfer RNA (tRNA) molecules that are specific for each codon. The tRNAs carry the corresponding amino acids, which then get linked together in the order dictated by the mRNA sequence. This linking of amino acids based on the mRNA codons continues until a stop codon is reached, releasing the complete polypeptide chain that will fold into a functional protein. Thus, the nucleotide sequence of the mRNA acts as the blueprint for assembling the amino acid sequence of the protein product.

And that brings us to the basic understanding of proteins & amino acids in Bioinformatics.

## **What is Project AlphaFold ?**

AlphaFold stands as a groundbreaking advancement in structural biology, representing a pinnacle achievement in the realm of protein structure prediction. Developed by Google DeepMind, AlphaFold harnesses the power of deep learning to predict the three-dimensional structures of proteins with unprecedented accuracy. Through a complex interplay of neural networks and advanced algorithms, AlphaFold deciphers the intricate folding patterns of proteins, shedding light on their fundamental molecular architectures. This revolutionary technology holds immense promise for elucidating the structural underpinnings of proteins, facilitating drug discovery, and advancing our understanding of biological processes at the molecular level.

**Key Features of AlphaFold:**

![https://miro.medium.com/v2/resize:fit:690/0*kBNJ7BUoBdANq420.png](https://miro.medium.com/v2/resize:fit:690/0*kBNJ7BUoBdANq420.png)

**Deep Learning Architecture:** AlphaFold employs a sophisticated deep learning architecture, comprising multiple neural networks trained on vast datasets of protein sequences and structural data. This architecture enables AlphaFold to infer accurate protein structures from amino acid sequences, surpassing traditional methods in both speed and accuracy.

**Attention Mechanisms:** AlphaFold incorporates attention mechanisms, inspired by natural language processing techniques, to capture long-range interactions between amino acids within protein sequences. This allows the model to discern subtle spatial relationships and dependencies crucial for accurate structure prediction.

**Generative Modeling:** Utilizing generative modeling techniques, AlphaFold generates diverse structural predictions for a given protein sequence, providing insights into the structural variability and flexibility of proteins. This capability enhances our understanding of protein dynamics and conformational changes under different conditions.

**Uncertainty Estimation:** AlphaFold incorporates uncertainty estimation mechanisms to quantify the confidence levels associated with its predictions. By providing uncertainty estimates, AlphaFold enables researchers to assess the reliability of predicted protein structures and prioritize experimental validation efforts.

## **How it Works ?**

![https://miro.medium.com/v2/resize:fit:875/1*RoxxGsL_GJF8JS8-e8-OIA.png](https://miro.medium.com/v2/resize:fit:875/1*RoxxGsL_GJF8JS8-e8-OIA.png)

AlphaFold Architecture

**Input Sequence**

The process begins with an amino acid sequence of a protein, which is the linear chain of amino acids making up the protein.

**Multiple Sequence Alignment**

AlphaFold utilizes multiple sequence alignments (MSAs) to identify homologous(relative) protein sequences those evolutionary related to the input sequence. These MSAs help in understanding the evolutionary conservation of certain amino acids at specific positions, which is a clue to their structural importance.

**Neural Networks**

AlphaFold uses a deep learning architecture composed of multiple stacked neural networks. These networks predict various aspects of the protein structure, such as

- **Distance Predictions**: The networks predict the distances between pairs of amino acids.
- **Angle Predictions**: The networks also predict the angles between bonds within the protein.

**Structure Building**

Using the predicted distances and angles, the system iteratively builds a three-dimensional model of the protein. This involves placing the amino acids in 3D space and adjusting their positions to best match the predicted distances and angles while minimizing physical and energetic constraints.

**Refinement**

Once a preliminary structure is built, it undergoes further refinement to resolve any inconsistencies and improve accuracy. This refinement process ensures that the predicted structure is physically plausible and adheres closely to the predictions made by the neural networks.

**Confidence Scores**

AlphaFold provides a per-residue confidence score called the pLDDT (predicted Local Distance Difference Test) for each model. This score indicates the reliability of the predicted structure for each part of the protein.

The official research paper of Project AlphaFold provides more info about the indepth mechanism of the algorithm which you can refer from here [https://www.nature.com/articles/s41586-021-03819-2](https://www.nature.com/articles/s41586-021-03819-2)

## **What’s new in AlphaFold 3 ?**

![https://miro.medium.com/v2/resize:fit:875/0*aHWywpVQag9BqAvT.png](https://miro.medium.com/v2/resize:fit:875/0*aHWywpVQag9BqAvT.png)

This is a major upgrade from the older versions, AlphaFold and AlphaFold 2. This new version can now model how all kinds of molecules in living things fit together, which is a big deal for scientists studying biology. They made it even better by using this new Evoformer thing and diffusion network to make really accurate 3D models of molecules. And get this, it’s not just for proteins anymore it can also predict the shapes of DNA, RNA, and even small molecules! So, it’s like a super powerful tool for researchers to understand how all these molecules work together in living things.

As for the final remarks, I would like to thank Mrs. GAI Uwanthika for teaching me the fundamentals of Bioinformatics and Mr. Gihan Liyanage as my mentor in Artificial Intelligence.