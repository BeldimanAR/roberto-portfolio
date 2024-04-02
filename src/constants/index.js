export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "WTZ Technologies",
    icon: "/company/wtz-logo.png",
    iconBg: "black",
    date: "Mar 2017 - Apr 2020",
    points: [
      "Delivering cutting-edge web solutions for institutional clients by leveraging React.js and related technologies, while focusing on enhancing code quality and streamlining production processes for efficient delivery.",
      "Working closely with diverse teams, including designers, product managers, and fellow developers, to drive the development of top-notch products that meet client requirements and exceed expectations.",
      "Creating responsive designs and ensuring seamless user experiences across different devices and browsers to maximize accessibility and user engagement.",
      "Contributing to code reviews and fostering a collaborative environment by providing valuable feedback and suggestions to fellow developers, resulting in continuous improvement and optimized codebase.",
      "Successfully serving over 50 satisfied clients by leveraging technical expertise and business acumen to enhance their online presence and drive their growth, resulting in measurable improvements to their business operations and success.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Ahold Delhaize",
    icon: "/company/greensoft.png",
    iconBg: "#fff",
    date: "Apr 2020 - Jun 2022",
    points: [
      "Playing a pivotal role in an extensive multinational e-commerce project, involving a team of over 120 developers, to develop and manage high-traffic websites for a prominent company.",
      "Maintaining the highest standards of code quality and actively participating in code reviews to ensure optimal performance, scalability, and maintainability of the web applications.",
      "Taking on the responsibility of managing a dynamic and high-volume e-commerce site, catering to over 1 million customers weekly, and overseeing its smooth operation and continuous improvement.",
      "Collaborating closely with cross-functional teams, including designers, product managers, and developers, to deliver exceptional user experiences and meet the specific demands of the multinational company's e-commerce business.",
      "Experiencing the gratification of contributing to the success of the project by consistently delivering top-quality code and playing a vital role in the continuous enhancement of the web applications, resulting in increased customer satisfaction and business growth.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Beldiman Group",
    icon: "/company/logo BG.png",
    iconBg: "#fff",
    date: "Jun 2022 - Present",
    points: [
      "Spearheaded critical initiatives within multinational e-commerce projects, working alongside diverse teams to craft and manage high-traffic websites for leading organizations.",
      "Ensured the adherence to top-tier code quality standards, actively engaging in comprehensive code reviews to optimize performance, scalability, and maintainability of web applications.",
      "Took charge of managing dynamic e-commerce platforms catering to extensive customer bases, overseeing day-to-day operations, and driving continuous enhancement efforts to elevate user experiences.",
      "Fostered seamless collaboration across cross-functional teams, including designers, product managers, and developers, to deliver exceptional user experiences tailored to the specific needs of each project.",
      "Played an integral role in project success by consistently delivering high-quality code, driving improvements, and contributing to heightened customer satisfaction and business growth.",
    ],
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
    name: "Lyrics",
    description:
      "This is a Spotify clone made using React, Redux and Tailwind, it allows users to search and listen to music. Users can also view top charts, song popular around them and the lyrics. The project uses the Shazam API to access and play the music.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/lyrics.png",
    source_code_link: "https://github.com/BeldimanAR/Spotify-Clone",
  },
  {
    name: "Youtube-clone",
    description:
      "This is a YouTube clone made using React, Material-UI, it allows users to search and watch videos. Users can also search channels, view analytics. The project uses the YouTube API to access and display video content.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
    ],
    image: "/youtube.png",
    source_code_link: "https://github.com/BeldimanAR/youtube-app",
  },
  {
    name: "My old Portofolio",
    description:
      "I built a portfolio website using React, SASS, and Sanity, a schemaless backend for storing & querying JSON documents and real-time subscriptions. It's a great way to showcase my work and experience in a dynamic and user-friendly way.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: "/portofolio.png",
    source_code_link: "https://github.com/BeldimanAR/Beldiman-Portofolio",
  },
];

export { experiences, testimonials, projects };
