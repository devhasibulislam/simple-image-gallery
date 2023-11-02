import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import { createContext, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const SelectImages = createContext(null);

export default function Home() {
  const [images, setImages] = useState([]);

  return (
    <SelectImages.Provider value={{ images, setImages }}>
      <main
        className={`h-screen w-screen flex flex-row items-center justify-center md:p-0 p-4 ${inter.className}`}
      >
        <section className="lg:w-1/2 md:w-3/4 w-full bg-white rounded-lg shadow">
          <div className="flex flex-col gap-y-2">
            <Header />
            <hr />
            <Gallery />
          </div>
        </section>
      </main>
    </SelectImages.Provider>
  );
}
