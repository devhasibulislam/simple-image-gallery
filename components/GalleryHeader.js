/**
 * Title: Write a program using JavaScript on GalleryHeader
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
 * Date: 02, November 2023
 */

import React from "react";

const GalleryHeader = ({ selectThumbnails, handleDeleteClick }) => {
  return (
    <nav className="py-4 px-6">
      <article className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">
          {selectThumbnails.length === 0 ? (
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
                checked={selectThumbnails.length > 0}
                className="h-5 w-5 accent-blue-500 cursor-pointer"
                onChange={() => setSelectThumbnails([])}
              />
              {selectThumbnails.length} Files Selected
            </label>
          )}
        </h1>
        <button
          className="text-red-500 font-medium"
          onClick={handleDeleteClick}
        >
          Delete files
        </button>
      </article>
    </nav>
  );
};

export default GalleryHeader;
