import { useEffect } from "react";

export default function ImagePreview({ imageSrc, setImageDisplayed }) {
  useEffect(() => {
    const handleExit = (e) => e.key === "Escape" && setImageDisplayed(false);
    document.addEventListener("keydown", handleExit);
    return () => document.removeEventListener("keydown", handleExit);
  }, [setImageDisplayed]);

  return (
    <dialog
      open
      className="z-10 mb-auto top-0 left-0 mt-20 fixed w-1/2 h-fit max-one:w-full max-one:h-fit"
    >
      <button
        onClick={() => setImageDisplayed(false)}
        className="absolute right-0 z-20"
      >
        <ion-icon name="close-circle-outline" />
      </button>
      <img className="w-full h-full" src={imageSrc} alt="" />
    </dialog>
  );
}
