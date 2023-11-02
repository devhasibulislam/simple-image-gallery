/**
 * Title: Write a program using JavaScript on _index
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

import Gallery from "@/components/Gallery";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Simple Image Gallery</title>
        <meta
          name="description"
          content="Create a responsive image gallery using React JS with the following features: reordering, deleting multiple images, and setting a feature image. The gallery should be visually appealing and provide a seamless user experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Gallery />
    </>
  );
};

export default Index;
