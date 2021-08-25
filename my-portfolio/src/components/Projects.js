import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import '../index.css';

export default function Projects() {
  return (
    <body>
    <section id="projects" className="text-gray-400 bg-gray-900 body-font card">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h2>
        </div>
        <div className="flex flex-wrap -m-4" id="card1">
          {projects.map((project) => (
            <article>
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative card-description">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.title}
                  </h1>
                  <h2 className="title-font text-lg font-medium text-white mb-3">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
            </article>
          ))}
        </div>
      </div>
    </section>
    </body>
  );
}