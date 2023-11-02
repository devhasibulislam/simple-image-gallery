/**
 * Title: Write a program using JavaScript on Index
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

import React, { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import images from "@/data/images";

const inter = Inter({ subsets: ["latin"] });

const Index = () => {
  const [selectThumbnails, setSelectThumbnails] = useState([]);
  const [thumbnails, setThumbnails] = useState(images);
  const [dragging, setDragging] = useState(false);
  const [draggedImage, setDraggedImage] = useState(null);

  // Handle new images
  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;

    const newImages = Array.from(selectedFiles).map((file, index) => {
      const id = thumbnails.length + index + 1;
      const thumbnail = URL.createObjectURL(file);

      return { id, thumbnail };
    });

    setThumbnails([...thumbnails, ...newImages]);
  };

  // Handle delete images
  const handleDeleteClick = () => {
    const updatedImages = thumbnails.filter(
      (image) => !selectThumbnails.some((selected) => selected.id === image.id)
    );

    setThumbnails(updatedImages);
    setSelectThumbnails([]);
  };

  // Handle drag start
  const handleDragStart = (image) => {
    setDragging(true);
    setDraggedImage(image);
  };

  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle drop image
  const handleDrop = (targetIndex) => {
    setDragging(false);

    if (draggedImage) {
      const updatedImages = thumbnails.filter(
        (image) => image.id !== draggedImage.id
      );
      updatedImages.splice(targetIndex, 0, draggedImage);

      setThumbnails(updatedImages);
      setDraggedImage(null);
    }
  };

  return (
    <main
      className={`h-screen w-screen flex flex-row items-center justify-center md:p-0 p-4 ${inter.className}`}
    >
      <section className="lg:w-1/2 md:w-3/4 w-full bg-white rounded-lg shadow">
        <div className="flex flex-col gap-y-2">
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
          <hr />
          <section className="h-full w-full p-6">
            <div
              className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6"
              onDragOver={handleDragOver}
            >
              {thumbnails.map((image, index) => (
                <div
                  key={index}
                  className={
                    "group border rounded-lg relative before:content-[''] before:absolute before:h-full before:w-full hover:before:bg-black/50 before:rounded-lg before:transition-colors before:cursor-move" +
                    (index === 0
                      ? " md:col-span-2 md:row-span-2"
                      : " col-span-1")
                  }
                  draggable={true}
                  onDragStart={() => handleDragStart(image)}
                  onDrop={() => handleDrop(index)}
                >
                  <Image
                    src={image.thumbnail}
                    alt={"image" + index}
                    height={index === 0 ? 390 : 184}
                    width={index === 0 ? 390 : 184}
                    className="h-full w-full max-w-full rounded-lg object-contain"
                  />
                  <input
                    type="checkbox"
                    name={image.id}
                    id={image.id}
                    className={
                      "absolute top-4 left-4 h-5 w-5 accent-blue-500 group-hover:opacity-100 transition-opacity delay-100 duration-100 ease-linear cursor-pointer" +
                      " " +
                      (selectThumbnails.find((photo) => photo.id === image.id)
                        ? "opacity-100"
                        : "opacity-0")
                    }
                    checked={
                      selectThumbnails.find((photo) => photo.id === image.id)
                        ? true
                        : false
                    }
                    onChange={() => {
                      if (
                        selectThumbnails.find((photo) => photo.id === image.id)
                      )
                        setSelectThumbnails(
                          selectThumbnails.filter(
                            (photo) => photo.id !== image.id
                          )
                        );
                      else setSelectThumbnails([...selectThumbnails, image]);
                    }}
                  />
                  {dragging && (
                    <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white border-2 border-dashed">
                      Drop Here
                    </div>
                  )}
                </div>
              ))}
              <div className="relative border-2 border-dashed rounded-lg p-4">
                <input
                  type="file"
                  multiple
                  name="images"
                  id="images"
                  className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
                  title="Try to upload photos..."
                  onChange={handleFileChange}
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
        </div>
      </section>
    </main>
  );
};

export default Index;
