import React, { useState, useEffect } from "react";
import sanityClient from "../client"
// import  sanityClient from "@sanity/client";



export default function Projects() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "projects"] {
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className= "text-5xl flex justify-center- cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Welcome to my Projects Page
                </h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((projects, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-300">
                            <a 
                            href={projects.link}
                            alt={projects.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{projects.title}
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(projects.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Where</strong>:{" "}
                                {projects.place}
                            </span>
                            <span>
                            <strong className="font-bold">Type</strong>:{" "}
                            {projects.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {projects.description}
                            </p>
                            <a href={projects.link} target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-500 font-bold hover:underLine hover:text-blue-300"
                            >
                                View Project{" "}
                                <span role="img" aria-label="right pointer">
                                    👉
                                </span>
                            </a>
                            
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}