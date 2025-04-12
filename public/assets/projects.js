import chred from "./images/chred.png"
import gitfind from "./images/gitfind.png"
import multiStepsForm from "./images/multiStepsForm.png"
import fdf from "./images/fdf.png"
import msh from "./images/msh.png"


const projects = [
    {
        name: "FildeFer",
        desc: "Mini wireframe modeling program.",
        img: fdf,
        tools: ["C", "MinilibX", "GNU Make"],
        github: "https://github.com/resherra/FildeFer"
    },
    {
        name: "Msh",
        desc: "Unix shell that mimics the behavior of Bash.",
        img: msh,
        tools: ["C", "GNU Make"],
        github: "https://github.com/resherra/msh"
    },
    { 
        name: "Gitfind", 
        desc: "A simple app to lookup for github users.", 
        img: gitfind, 
        tools: ["React", "React Query", "Tailwindcss"], 
        live: "https://gitfind.resherra.vercel.app", 
        github: "https://github.com/resherra/gitfind" 
    },
    { 
        name: "Multi steps form", 
        desc: "Multi steps plan selection form", 
        img: multiStepsForm, 
        tools: ["React", "Tailwindcss"], 
        live: "https://multi-steps-form-w-react.vercel.app/", 
        github: "https://github.com/resherra/multi-steps-form-w-react" 
    },
]

export default projects
