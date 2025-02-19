import { useState } from "react";
import ImagePreview from "./ImagesPreview";

export default function ProjectTemp({ project }) {
  const [imageDisplayed, setImageDisplayed] = useState(false);

  const { imageSrc, projectTitle, description, technologies, links } = project;

  return (
    <div
      id="works"
      key={imageSrc}
      className="flex justify-between max-one:flex-col border-b border-b-solid items-center py-8 border-b-black max-one:gap-4 gap-10 "
    >
      {imageDisplayed && (
        <ImagePreview
          imageSrc={imageSrc}
          setImageDisplayed={setImageDisplayed}
        />
      )}
      <img
        className="transition-transform max-w-72 max-one:max-w-[450px] max-one:max-h-[450px] max-three:max-w-[300px] max-three:max-h-[300px] max-h-52 hover:scale-105 cursor-pointer duration-700"
        src={imageSrc}
        alt="Project thumbnail"
        onClick={() => setImageDisplayed(true)}
      />
      <div>
        <div className="flex max-two:flex-col flex-wrap mb-2 justify-between items-center">
          <h3 className="text-3xl max-three:text-2xl font-Dosis max-two:text-center mb-2 tracking-wide">
            {projectTitle}
          </h3>
          <div className="flex max-three:gap-2 gap-10">
            {links.map((link, index) => (
              <a
                key={link}
                href={link}
                target="_blank"
                className="px-10 max-three:px-4 py-1 text-center tracking-wider border-solid border-black border"
              >
                {index ? "Preview Site" : "View Code"}
              </a>
            ))}
          </div>
        </div>

        <p className="text-base max-three:text-sm mb-3 tracking-wide">
          {description}
        </p>
        <div className="flex gap-2 mb-4 flex-wrap">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="text-lg max-three:text-base px-4 max-three:px-2 border border-gray-300 rounded-md border-solid"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
