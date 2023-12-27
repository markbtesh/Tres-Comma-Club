import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Fullstack Developer",
      icon: mobile,
    },
    {
      title: "Responsive Applications",
      icon: backend,
    },
    {
      title: "SEO Optimized",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      img: "https://aecostudios.com/wp-content/portfolio-uploads/2023/09/a64f7fc2-23a1-4158-815e-603ef507b6a1.jpg"
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      img: "https://aecostudios.com/wp-content/portfolio-uploads/2023/09/tasha-logo.png"
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      img: "https://aecostudios.com/wp-content/portfolio-uploads/2023/09/05a461cb-40c4-4ba3-98ac-d90fc38b083d.jpg"
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      img: "https://aecostudios.com/wp-content/portfolio-uploads/2023/11/yinyang.png"
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
        name: "pAInter-AI (DALL-e clone)",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vercel",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI",
          color: "pink-text-gradient",
        },
      ],
      image: "https://aecostudios.com/wp-content/portfolio-uploads/2023/11/malledemo.mp4#t=1",
      source_code_link: "https://github.com/",
    },
      name: "Shoptrakk.com",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Woocommerce",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
      image: "https://aecostudios.com/wp-content/portfolio-uploads/2022/05/WhatsApp-Video-2022-05-03-at-6.28.42-PM_Trim.mp4#t=1",
      source_code_link: "https://github.com/",
    },
    {
      name: "Legendbranding.com",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "elementor",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "https://aecostudios.com/wp-content/portfolio-uploads/2022/05/WhatsApp-Video-2022-05-03-at-6.49.58-PM.mp4#t=1",
      source_code_link: "https://github.com/",
    },
    {
      name: "Tornxronnykobo.com",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "shopify",
          color: "blue-text-gradient",
        },
        {
          name: "liquid",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "https://aecostudios.com/wp-content/portfolio-uploads/2023/09/18.09.2023_18.39.13_REC.mp4#t=1",
      source_code_link: "https://github.com/",
    },
    {
      name: "RKMBLLC.com",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "elementor",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "https://aecostudios.com/wp-content/portfolio-uploads/2023/09/18.09.2023_18.58.48_REC.mp4",
      source_code_link: "https://github.com/",
    },
    {
      name: "Revayareserve.com",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "shopify",
          color: "blue-text-gradient",
        },
        {
          name: "liquid",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "https://aecostudios.com/wp-content/portfolio-uploads/2022/05/WhatsApp-Video-2022-05-03-at-6.50.08-PM.mp4#t=1",
      source_code_link: "https://github.com/",
    },
    {
      name: "Autumnestate.co",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "woocommerce",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "https://aecostudios.com/wp-content/portfolio-uploads/2022/05/WhatsApp-Video-2022-05-03-at-6.50.09-PM.mp4",
      source_code_link: "https://github.com/",
    },
    {
      name: "Baruchhashempaint.com",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "elementor",
          color: "green-text-gradient",
        },
      ],
      image: "https://aecostudios.com/wp-content/portfolio-uploads/2023/09/18.09.2023_18.40.41_REC.mp4",
      source_code_link: "https://github.com/",
    },
    {
      name: "Purify-nyc.com",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "woocommerce",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "https://aecostudios.com/wp-content/portfolio-uploads/2023/09/18.09.2023_18.57.14_REC.mp4#t=1",
      source_code_link: "https://github.com/",
    },
    {
      name: "Beermayimseminary.com",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "https://aecostudios.com/wp-content/portfolio-uploads/2023/11/beermayim.mp4",
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
