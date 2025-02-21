const links = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/mohgad",
  },
  {
    title: "GitHub",
    url: "https://github.com/GADMuhammad?tab=repositories",
  },
  {
    title: "Front-end Mentor Profile",
    url: "https://www.frontendmentor.io/profile/GADMuhammad",
  },
];

export default function Footer() {
  return (
    <footer className="px-20 bg-lightBlue py-5 flex-wrap max-sm:flex-col max-sm:gap-3 max-sm:items-center max-sm:px-2 flex text-2xl justify-evenly font-Dosis tracking-wide">
      {links.map(({ title, url }) => (
        <a key={title} target="_blank" href={url}>
          {title}
        </a>
      ))}
    </footer>
  );
}
