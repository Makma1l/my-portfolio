"use client";

import React, { act, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MyProjectsList = [
  {
    id: 1,
    title: "1st Project",
    link: "https://furniture-router-dom.vercel.app/",
    img: "/Screenshot 2024-08-05 130512.png",
    type: "web",
  },
  {
    id: 2,
    title: "2nd Project",
    link: "https://my-figma-s-work.vercel.app/",
    img: "/Screenshot 2024-08-05 130444.png",
    type: "mobile",
  },
  {
    id: 3,
    title: "3rd Project",
    link: "https://protected-to-do.vercel.app/",
    img: "/Screenshot 2024-08-05 130345.png",
    type: "mobile",
  },
];

export default function MyProjects() {
  const [activeType, setActiveType] = useState("all");

  const filteredProjects = MyProjectsList.filter((project) => {
    if (activeType === "all") {
      return true;
    }
    return project.type === activeType;
  });

  return (
    <main id="projects" className="w-full px-24 min-h-screen">
      <h1 className="text-center font-bold text-4xl mb-5">My Projects</h1>
      <div className="flex gap-3 justify-center mt-[80px] mb-2">
        <button
          className={` border-slate-600 hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
            activeType === "all" ? "" : ""
          }`}
          onClick={() => setActiveType("all")}
        >
          All
        </button>
        <button
          className={` border-slate-600 hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
            activeType === "all" ? "" : ""
          }`}
          onClick={() => setActiveType("web")}
        >
          Web
        </button>
        <button
          className={` border-slate-600 hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
            activeType === "all" ? "" : ""
          }`}
          onClick={() => setActiveType("mobile")}
        >
          Mobile
        </button>
      </div>
      <section className=" flex ml-24 mt-5 flex-col sm:grid sm:grid-cols-3 space-y-5 items-center pb-5">
        {filteredProjects.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={project.id}
            className="w-[400px] h-[330px] col-span-1"
          >
            <Image
              src={project.img}
              width={600}
              height={600}
              alt={project.title}
              className="rounded-[10px]"
            />
            <Link
              href={project.link}
              target="_blank"
              className="inline-block my-2 font-bold hover:text-gray-400 text-xl"
            >
              {project.title}
            </Link>
            <p>Check my work</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
