import React from "react";
import image from "../mtns.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="beautiful mountain" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justfy-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="cursive home-name">Hello! I'm Michael</h1>
            </section>
        </main>
    )
}