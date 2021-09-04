import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                    activeClassName="text-white"
                    className= "inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-green-200 text-4xl font-bold cursive tracking-widest">
                        Michael
                    </NavLink>
                    <NavLink to="/post"
                    activeClassName="bg-red-400"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200">
                        Posts
                    </NavLink>
                    <NavLink to="/projects" 
                    activeClassName="bg-red-400"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200">
                        Projects
                    </NavLink>
                    <NavLink to="/about" 
                    activeClassName="bg-red-400"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200">
                        About Me
                    </NavLink>
                    <NavLink to="/contact" 
                    activeClassName="bg-red-400"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200">
                        Contact Me
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}