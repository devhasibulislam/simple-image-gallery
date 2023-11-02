/**
 * Title: Write a program using JavaScript on Gallery
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
import { SelectImages } from "@/pages/index1";
import Image from "next/image";
import React, { useContext } from "react";

const Gallery = () => {
  const { images: photos, setImages } = useContext(SelectImages);

  return (
    <section className="h-full w-full p-6">
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              "group border rounded-lg relative before:content-[''] before:absolute before:h-full before:w-full hover:before:bg-black/50 before:rounded-lg before:transition-colors" +
              (index === 0 ? " col-span-2 row-span-2" : " col-span-1")
            }
          >
            <Image
              src={image.thumbnail}
              alt={"image" + index}
              height={index === 0 ? 390 : 184}
              width={index === 0 ? 390 : 184}
              className="h-full w-full max-w-full rounded-lg"
            />
            <input
              type="checkbox"
              name={image.id}
              id={image.id}
              className={
                "absolute top-4 left-4 h-5 w-5 accent-blue-500 group-hover:opacity-100 transition-opacity cursor-pointer" +
                " " +
                (photos.find((photo) => photo.id === image.id)
                  ? "opacity-100"
                  : "opacity-0")
              }
              onChange={() => {
                if (photos.find((photo) => photo.id === image.id))
                  setImages(photos.filter((photo) => photo.id !== image.id));
                else setImages([...photos, image]);
              }}
            />
          </div>
        ))}
        <div className="relative border-2 border-dashed rounded-lg">
          <input
            type="file"
            multiple
            name="images"
            id="images"
            className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
          />
          <div className="h-full w-full flex flex-col justify-center items-center gap-y-4">
            <Image
              src="/placeholder.png"
              alt="placeholder"
              height={20}
              width={20}
              priority
            />
            Add Images
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
