/**
 * Title: Write a program using JavaScript on Header
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 01, November 2023
 */

import images from "@/data/images";
import { SelectImages } from "@/pages/_index";
import React, { useContext } from "react";

const Header = () => {
  const { images: photos, setImages } = useContext(SelectImages);

  const handleDeleteFiles = () => {
    const imagesIds = images.filter((image) => image.id);
    const photosIds = photos.filter((photo) => photo.id);

    const filteredImages = imagesIds.filter(
      (imgIds) => !photosIds.includes(imgIds)
    );

    setImages(filteredImages);
  };

  return (
    <nav className="py-4 px-6">
      <article className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">
          {photos.length === 0 ? (
            "Gallery"
          ) : (
            <label
              htmlFor="select"
              className="flex flex-row justify-between items-center gap-x-4"
            >
              <input
                type="checkbox"
                name="select"
                id="select"
                checked={photos.length}
                className="h-5 w-5 accent-blue-500"
                readOnly
              />
              {photos.length} Files Selected
            </label>
          )}
        </h1>
        <button
          className="text-red-500 font-medium"
          onClick={handleDeleteFiles}
        >
          Delete files
        </button>
      </article>
    </nav>
  );
};

export default Header;
