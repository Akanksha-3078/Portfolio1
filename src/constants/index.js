export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Frontend Development',
    position: 'HTML, CSS, JAVASCRIPT, REACT',
    img: 'assets/fend.png',
    review:
      "I specialize in frontend development, proficient in HTML, CSS, and JavaScript to build responsive and user-friendly websites. With React, I create dynamic, interactive user interfaces, ensuring smooth performance and a seamless user experience.",
  },
  {
    id: 2,
    name: 'Designing',
    position: 'FIGMA, TAILWIND, THREEJS, CANAVA',
    img: 'assets/review2.png',
    review:
      'I am skilled in UX design and proficient with tools like Figma and Canva for creating engaging and intuitive interfaces. With Tailwind CSS, I design responsive layouts efficiently, and I leverage Three.js for immersive 3D web experiences.',
  },
  {
    id: 3,
    name: 'Problem-Solving',
    position: 'PYTHON, JAVA ',
    img: 'assets/review3.png',
    review:
      'I am skilled in problem-solving with both Java and Python, handling various programming tasks effectively.Her experience includes designing solutions and implementing code to address different issues, demonstrating a solid understanding of problem-solving techniques.',
  },
  
  
];

export const myProjects = [
  {
    title: 'Cuberto App Clone - Modern UI/UX Design Platform',
    desc: 'This project is a meticulous recreation of the Cuberto App, showcasing a sleek and modern user interface. Built using HTML, CSS, and JavaScript, it emphasizes responsive design and smooth animations for an interactive user experience.',
    subdesc:
      'Developed with clean, semantic HTML, custom CSS animations, threejs and JavaScript, this project highlights a robust front-end design approach that aligns with current web development trends.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/htmllogo.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/csslogo.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/javascriptlogo.png',
      },
    ],
  },
  {
    title: 'Brainwave App - Sleek Parallax Effects and Bento Box Layouts',
    desc: 'This project showcases a modern website designed with React.js and Tailwind CSS, featuring smooth parallax animations and a Bento box layout for a highly engaging user experience. The app emphasizes both visual aesthetics and functionality with a focus on mobile-first design principles.',
    subdesc:
      'Developed using the latest web technologies, including Vite for fast builds and Tailwind CSS for flexible styling, this project highlights key aspects of modern UI/UX trends such as complex layouts, interactive elements, and responsive design across devices.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/threejslogo.png',
      },
    ],
  },
  {
    title: 'Googly - Gemini API Integrated Platform',
    desc: 'Googly is a cutting-edge web application that integrates the Google Gemini API, providing dynamic and intelligent data interactions. Built with React.js, HTML, and CSS, the app delivers a sleek, fully responsive interface, ensuring optimal performance across devices.',
    subdesc:
      'This project leverages the power of the Gemini API to create a seamless, real-time user experience. Developed with React.js for a modular architecture and using HTML and CSS for precise layout and design, Googly showcases advanced front-end development techniques and API integration.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/htmllogo.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/csslogo.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/threejslogo.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Haldia Institute of Tecnology',
    pos: 'Electronics and Communication Engineer',
    duration: '2022 - Present',
    title: "I am pursuing a degree in Electronics and Communication Engineering at Haldia Institute of Technology. I am currently in her 3rd year and 5th semester of the program, actively engaging in my coursework, various academic activities and developing my skills.",
    icon: '/assets/collegelogo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Sudhir Memorial Institute',
    pos: 'Higher Secondary',
    duration: '2020 - 2022',
    title: "I completed my 12th grade from Sudhir Memorial Institute, where I not only focused on my academic growth but also actively participated in co-curricular activities. This experience helped me develop a well-rounded skill set, combining both knowledge and practical learning.",
    icon: '/assets/SMI.jpeg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Convent of Our Lady of Providence ',
    pos: 'Matriculation',
    duration: '2006 - 2020',
    title: "I completed my matriculation from Our Lady of Providence, where  I learned valuable morals and discipline. This experience helped me build a strong foundation for my future growth and development.",
    icon: '/assets/schoollogo.jpeg',
    animation: 'salute',
  },
];
