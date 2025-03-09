import ProjectTemp from "./ProjectTemp";

const projectsContent = [
  {
    imageSrc:
      "projects-images/REST Countries API with color theme switcher.jpg",
    projectTitle: "Explore the whole world countries from your home",
    description:
      "An interactive web application that provides detailed information about countries worldwide. Users can browse a list of countries, search for a specific country by name, and filter results based on regions such as Africa, Europe, or Asia. Each country’s page includes key details like population, capital, area, official languages, and neighboring countries. Additionally, the app features a dark mode and light mode toggle, allowing users to switch themes for a more comfortable viewing experience. This project combines data fetching, user-friendly navigation, and responsive design for an engaging exploration of world geography.",
    technologies: [
      "React",
      "react-router-dom",
      "react-toastify",
      "react-select",
      "Tailwind-CSS",
      "styled-components",
      "framer-motion",
    ],
    links: [
      "https://github.com/GADMuhammad/REST-Countries-API-with-color-theme-switcher",
      "https://rest-countries-api-with-color-theme-switcher-red.vercel.app",
    ],
  },
  {
    imageSrc: "projects-images/demo-store-1.png",
    projectTitle:
      "Demo E-Commerce Store: A Showcase of Online Shopping Experience",
    description:
      "An e-commerce demo project built with React.js and styled using Tailwind CSS. This project showcases how to build a functional store interface, including features like product listings, a shopping cart, and user authentication. It's designed to help developers learn how to integrate front-end technologies like React and Tailwind CSS while simulating a real-world e-commerce store experience.",
    technologies: [
      "React",
      "react-router-dom",
      "react-slick",
      "Tailwind-CSS",
      "styled-components",
      "Sass",
      "framer-motion",
    ],
    links: [
      "https://github.com/GADMuhammad/demo-store",
      "https://demo-store-tan-one.vercel.app",
    ],
  },
  {
    imageSrc: "/projects-images/product-list-with-car.jpg",
    projectTitle: "Product list with cart",
    description:
      "The Product List with Cart challenge is an interactive e-commerce UI where users can browse products, add or remove them from a dynamically updating shopping cart, and practice state management and event handling.",
    technologies: ["React", "Tailwind-CSS", "framer-motion", "react-toastify"],
    links: [
      "https://github.com/GADMuhammad/Product-list-with-cart",
      "https://product-list-with-cart-nine-azure.vercel.app",
    ],
  },
  {
    imageSrc: "projects-images/E-commerce product page.jpg",
    projectTitle: "E-commerce product page",
    description:
      "The e-commerce Product Page is a responsive product page featuring an image gallery, quantity selection, and an interactive cart, helping developers practice UI interactions, state management, and modal functionality.",
    technologies: ["React", "Tailwind-CSS", "framer-motion", "react-toastify"],

    links: [
      "https://github.com/GADMuhammad/E-commerce-product-page",
      "https://e-commerce-product-page-alpha-tan.vercel.app",
    ],
  },
  {
    imageSrc: "projects-images/Agency landing page.jpg",
    projectTitle: "Agency landing page",
    description:
      "A modern and visually appealing website designed for a digital agency, showcasing its services, team, and portfolio. The page features a structured layout with a hero section, service highlights, client testimonials, and a call-to-action to encourage potential clients to get in touch. It emphasizes responsiveness, clean typography, and engaging visuals to create a professional and user-friendly experience.",
    technologies: [
      "React",
      "react-toastify",
      "react-slick",
      "Tailwind-CSS",
      "styled-components",
      "Sass",
      "framer-motion",
    ],
    links: [
      "https://github.com/GADMuhammad/Agency-landing-page",
      "https://agancy-landing-page-chi.vercel.app",
    ],
  },
  {
    imageSrc: "projects-images/omnifood project.png",
    projectTitle: "Omnifood Restaurant",
    description:
      "The Omnifood Optimizations project is a modern and responsive landing page for a food delivery service, showcasing optimized performance and enhanced user experience. It features an eye-catching hero section, detailed service explanations, customer testimonials, and a call-to-action for ordering healthy meals. With smooth animations, a mobile-friendly design, and improved loading times, the page provides an engaging and seamless browsing experience. 🚀",
    technologies: ["HTML5", "Native CSS", "Vanilla Javascript"],
    links: [
      "https://github.com/GADMuhammad/Omnifood-Optimizations",
      "https://gadmuhammad.github.io/Omnifood-Optimizations/",
    ],
  },
  {
    imageSrc: "projects-images/Advanced-DOM-Bankist.png",
    projectTitle: "Advanced-DOM-Bankist",
    description:
      "The Contact Form challenge is a simple yet effective web form designed for users to get in touch with a company or individual. It includes fields for entering a name, email, subject, and message, along with a submit button. The form is built to be user-friendly, responsive, and accessible, ensuring a smooth experience for visitors on any device.",
    technologies: ["HTML5", "Native CSS", "Vanilla Javascript"],
    links: [
      "https://github.com/GADMuhammad/Advanced-DOM-Bankist",
      "https://gadmuhammad.github.io/Advanced-DOM-Bankist",
    ],
  },
  {
    imageSrc: "projects-images/Todo app.jpg ",
    projectTitle: "To-Do App",
    description:
      "The To-Do App challenge is an interactive task management application that allows users to add, delete, and mark tasks as completed. It features filtering options to view active or completed tasks, and local storage to save progress even after refreshing the page. Designed with a clean and responsive UI, the app also includes a dark/light mode switch for better accessibility and user experience.",
    technologies: ["React", "Tailwind-CSS", "Sass", "framer-motion"],
    links: [
      "https://github.com/GADMuhammad/to-do-list---almadrasa",
      "https://to-do-list-almadrasa.vercel.app",
    ],
  },
  {
    imageSrc: "projects-images/FAQ Accordion.jpg",
    projectTitle: "FAQ Accordion",
    description:
      "The FAQ Accordion is a web app that displays a list of frequently asked questions with interactive accordion-style dropdowns. Users can click on a question to reveal or hide the answer, creating a smooth and engaging user experience. This project focuses on building a clean, responsive interface that enhances user interaction with collapsible sections for easy navigation.",
    technologies: ["React", "Tailwind-CSS", "framer-motion"],
    links: [
      "https://github.com/GADMuhammad/FAQ-Accordion",
      "https://faq-accordion-tau-eight.vercel.app",
    ],
  },
  {
    imageSrc: "projects-images/Contact form.jpg",
    projectTitle: "Contact form - Use it to contact me",
    description:
      "The Contact Form challenge is a simple yet effective web form designed for users to get in touch with a company or individual. It includes fields for entering a name, email, subject, and message, along with a submit button. The form is built to be user-friendly, responsive, and accessible, ensuring a smooth experience for visitors on any device.",
    technologies: ["React", "Tailwind-CSS", "framer-motion"],
    links: [
      "https://github.com/GADMuhammad/Contact-form",
      "https://contact-form-three-ebon.vercel.app",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section className="px-20 bg-lightBlue max-one:px-10 max-three:px-5 pt-10">
      <h1 className=" text-3xl mb-2">Featured works</h1>
      <main className="flex flex-col">
        {projectsContent.map((project) => (
          <ProjectTemp key={project.imageSrc} project={project} />
        ))}
      </main>
    </section>
  );
}
