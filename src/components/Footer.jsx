const links = [
  {
    title: "LinkedIn Profile",
    url: "https://www.linkedin.com/in/mohgad",
  },
  {
    title: "Send me an e-mail",
    url: "mailto:gadsoftwaredeveloper@gmail.com",
  },
  {
    title: "GitHub Page",
    url: "https://github.com/GADMuhammad?tab=repositories",
  },
  {
    title: "Front-end Mentor Profile",
    url: "https://www.frontendmentor.io/profile/GADMuhammad",
  },
];

export default function Footer() {
  return (
    <footer className="px-20 bg-lightBlue py-5 flex-wrap max-md:flex-col max-md:gap-3 max-md:items-center max-md:px-2 flex text-2xl justify-evenly gap-8 font-Dosis tracking-wide">
      {links.map(({ title, url }) => (
        <a key={title} target="_blank" href={url}>
          {title}
        </a>
      ))}
    </footer>
  );
}
