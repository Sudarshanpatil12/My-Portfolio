import { p1, p2, p3, p4, p5, p6 } from "../assets";

export const projects = [
  
  {
    id: "1",
    title: "LEGACYLINK SOITAlumni",
    description:
      "A student networking platform that plays a vital role in providing mentorship, career guidance, and building a supportive community. A dedicated platform that helps bridge the gap between current students and alumni for mutual growth.",
    techStack: "MongoDB, Express.js, React.js, Node.js",
    highlights: ["mentorship", "career guidance", "student-alumni network"],
    image: p1,
    links: {
      github: "https://github.com/Sudarshanpatil12/Alumni_Network",
      live: "https://alumni-network-coral.vercel.app/",
    },
    layout: "reverse",
  },
  {
    id: "2",
    title: "Grocery Delivery Application",
    description:
      "A full-stack grocery delivery application that allows users to browse products, add to the cart, and place orders. It features secure login, order management, and payment integration.",
    techStack: "JavaScript, React.js, Node.js, Express.js, MongoDB",
    highlights: ["cart system", "payment integration", "order management"],
    image: p2,
    links: {
      github: "https://github.com/Sudarshanpatil12/Farm2Door",
      live: "https://farm2-door.vercel.app/",
    },
    layout: "normal",
  },
  {
  id: "6",
  title: "Personal Portfolio",
  description:
    "A personal portfolio website to showcase my skills, projects, and achievements. It includes sections for an about me, project highlights, resume, and contact information. The site is fully responsive with a modern UI and smooth animations.",
  techStack: "React.js, TailwindCSS, JavaScript",
  highlights: ["responsive design", "smooth animations", "modern UI"],
  image: p6,
  links: {
    github: "#", // add your repo link here
    live: "#",   // add your live portfolio link here
  },
  layout: "normal",
}
,
  {
    id: "3",
    title: "Amazon Clone",
    description:
      "A clone of the popular e-commerce site Amazon, with features like product search, product details, and cart management. It includes a user-friendly interface and real-time updates.",
    techStack: "HTML, CSS, JavaScript",
    highlights: ["product search", "cart management", "responsive design"],
    image: p3,
    links: {
      github: "#",
      live: "https://flourishing-gnome-c6199a.netlify.app/",
    },
    layout: "reverse",
  },
  {
    id: "4",
    title: "Weather App",
    description:
      "A weather application that provides current weather updates for any location. It uses the OpenWeatherMap API to fetch live data, and features a responsive design with location-based recommendations.",
    techStack: "HTML, CSS, JavaScript, OpenWeatherMap API",
    highlights: ["live weather data", "responsive UI", "API integration"],
    image: p4,
    links: {
      github: "#",
      live: "https://wheatherappbydarshan.netlify.app/",
    },
    layout: "normal",
  },
  {
  id: "5",
  title: "CGPA Calculator App",
  description:
    "A simple and interactive CGPA Calculator built using basic HTML, CSS, and JavaScript. It allows students to input their grades, credits, and instantly calculate CGPA with a clean user-friendly interface.",
  techStack: "HTML, CSS, JavaScript",
  highlights: ["grade input", "credit-based calculation", "instant results"],
  image: p5, 
  links: {
    github: "#", 
    live: "https://cgpabydarshan2.netlify.app/",  
  },
  layout: "default",
},

 
];
