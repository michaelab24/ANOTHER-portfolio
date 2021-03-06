import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
// import { VGithubIcon } from 'v-github-icon'

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
                    {/* <NavLink to="/post"
                    activeClassName="bg-red-400"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200">
                        Posts
                    </NavLink> */}
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
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                    url="https://www.facebook.com/michael.barnes.5682/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35 }}/> 
                    <SocialIcon 
                    url="https://www.linkedin.com/in/michael-barnes-3ab00714a/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35 }}/> 
                    {/* <VGithubIcon
                    url="https://github.com/michaelab24"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }}/> */}
                </div>
            </div>
        </header>
    )
}