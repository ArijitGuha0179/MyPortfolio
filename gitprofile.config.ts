// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ArijitGuha0179', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Audits and Open Source Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['ArijitGuha0179/Song-Recommender','ArijitGuha0179/terminal-portfolio','ArijitGuha0179/Crypto_Transfer','ArijitGuha0179/realestate_dapp','ArijitGuha0179/crypto_exchange','ArijitGuha0179/Invsto-Recruiting-Assignment',], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ArijitGuha0179/JadeCTF-Writeups','ArijitGuha0179/Codehawks-Audits','ArijitGuha0179/TrailBlaze','ArijitGuha0179/PearlCTF_Challenges_Public_2024'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      "projects": [
    {
      "title": "Oswap",
      "description": "Created a full-stack dockerized wargame to teach web exploitation techniques, garnering over 100 unique users in the first month. Implemented Cronjob to sync containers and covered concepts such as XXE, SQLi, RCE, shell uploads, and type juggling.",
      "imageUrl": "https://i.postimg.cc/BnwxvDwY/thumbnail2.png",
      "link": "https://github.com/ArijitGuha0179/OSWAP"
    },
    {
      "title": "Crypto Staking App",
      "description": "Developed a decentralized staking web-app allowing users to buy and stake ERC20 token, claim rewards with a locking period of 1 day. Implemented admin functionality for managing staking pools, updating token contracts, and tracking user investments.",
      "imageUrl": "https://i.postimg.cc/SRq9PGJs/thumbnail.png",
      "link": "https://staking-pearl.vercel.app/"
    },
    {
      "title": "Crypto Exchange",
      "description": "Crypto Exchange is a DEX built on Uniswap V3, enabling token swaps, liquidity management, pool deployment, and price oracle integration. It offers detailed token info, liquidity data, and a top 10 tokens list by trading volume.",
      "imageUrl": "https://i.postimg.cc/MHKTR3ny/swap.png",
      "link": "https://github.com/ArijitGuha0179/crypto_dex"
    },
    {
      "title": "Song Recommender AI",
      "description": "Designed a web-app using React and Flask that recommends songs based on user inputs with an accuracy of 85%. Integrated a machine learning model trained on a Kaggle dataset to recommend songs using K-means clustering and cosine similarity.",
      "imageUrl": "https://i.postimg.cc/YS5Y677Q/archi-7.png",
      "link": "https://github.com/ArijitGuha0179/Song-Recommender"
    },
    {
      "title": "Real Estate Dapp",
      "description": "Established a blockchain platform for secure real estate transactions using smart contracts. Implemented NFT-based ownership transfer and designed an escrow contract to ensure secure transactions between buyers and sellers.",
      "imageUrl": "https://i.postimg.cc/cHfYTz12/thmbu.png",
      "link": "https://github.com/ArijitGuha0179/realestate_dapp"
    },
    {
      "title": "Crypto Transfer",
      "description": "A simple decentralized application (DApp) built for transferring ETH between accounts. It leverages Next.js for the frontend, Sanity.io for the backend and store transaction details, and Solidity for the smart contract logic. The smart contract is deployed on the Sepolia test network, and the frontend is hosted on Vercel.",
      "imageUrl": "https://i.postimg.cc/FHKymGGk/newthumb.png",
      "link": "https://github.com/ArijitGuha0179/Crypto_Transfer"
    }
  ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'arijit-guha-197a5420a',
    twitter: 'Arijit_G_2001',
    medium: '@archi4arijit',
    phone: '+91-9509510062',
    email: 'archi4arijit@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/ArijitGuha0179/MyPortfolio/blob/main/Arijit_CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'Python',
    'JavaScript',
    'Bash',
    'Solidity',
    'Flask',
    'Node',
    'React',
    'Next',
    'Docker',
    'Linux',
    'Git',
    'Sanity',
    'Hardhat',
    'Foundry',
    'Blockchain',
    'Cryptography',
    'SQL',
    'MongoDB'
],
  experiences: [
    {
      company: 'Disecto',
      position: 'Privacy and Security Engineer,Internship',
      from: 'May 2023',
      to: 'July 2023',
      companyLink: 'https://www.linkedin.com/company/disecto/',
    },
    {
      company: 'Japan Third Party-JTP',
      position: 'Software Engineer,Internship',
      from: 'February 2024',
      to: 'April 2024',
      companyLink: 'https://www.linkedin.com/company/j-t-p/',
    },
    {
      company: 'CyberLabs',
      position: 'Cyber Security Trainer,Full Time',
      from: 'April 2021',
      to: 'May 2024',
      companyLink: 'https://cyberlabs.club/',
    }
  ],
  certifications: [
    {
      name: 'Bitcoin for Developers',
      body: 'I completed an 18-hour comprehensive course on Bitcoin technology, covering essential topics such as cryptographic algorithms, digital signatures, transaction scripting, hashing, mining, and blockchain data structures. I gained in-depth knowledge of Bitcoin nodes, wallets, and the consensus mechanisms that secure the Bitcoin network. This course has equipped me with the technical skills necessary to work with Bitcoin technology and potentially contribute to its ecosystem.',
      year: 'June 2024',
      link: 'https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1721966236/4265362863AG.pdf',
    },
  ],
  educations: [
    {
      institution: 'Indian Institute of Technology(ISM),Dhanbad',
      degree: 'B.Tech in Electronics and Communication Engineering',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'DAV Public School, Balurghat',
      degree: '12th Grade',
      from: '2018',
      to: '2020',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'archi4arijit', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/ArijitGuha0179"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
