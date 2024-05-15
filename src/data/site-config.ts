export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    logo?: Image;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        // {
        //     text: 'Projects',
        //     href: '/projects'
        // },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    footerNavLinks: [

    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/',
            logo: {
                src: 'public/post-1.jpg',
                alt: 'Instagram logo'
            }
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/',
            logo: {
                src: '/twitter-logo.png',
                alt: 'Twitter logo'
            }
        }
    ],
    hero: {
        title: 'Welcome to My Portfolio 🚀',
        text: "Hi! I'm **Manith**, Computer Engineering undergraduate student with a strong foundation in programming, data structures and algorithms. Skilled in languages such as Python, Java and C++. Familiarity with web development and databases. Strong analytical and problem-solving skills with a passion for staying current with the latest technology trends. Seeking opportunities to apply my skills and gain hands-on experience in the field. Willing to learn and grow as a Machine Learning Engineer to become a valuable asset to any organization.",
        image: {
            src: '/hero.jpeg',
            alt: 'Manith photo'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8,
    title: "",
    description: ""
};

export default siteConfig;