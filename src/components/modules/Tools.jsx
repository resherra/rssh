const languages = ["C"," C++" , "JavaScript" , "HTML" , "CSS"]
const frameworks = ["React", "TailwindCSS", "Next.js", "React Query", "Axios", "Vite", "Webpack" ]
const others = ["Unix-like systems", "Make", "Git"]
const exploring = ["TypeScript", "Node.js", "Fastify", "DBs", "and Docker"]

const listTemplate = (section, data, check) =>
{
    return (
      <div className="flex flex-col gap-3">
        <p className=" font-sans text-xl font-medium">{section}</p>
        <>
          {check ? "Currently exploring and building skills in" : ""} {data.join(", ")}
        </>
      </div>
    )
}

export default function Tools() {
  return (
    <div className="font-mono flex ">
      <div className="flex flex-col gap-10">
        <h5 className=" font-sans text-2xl">Tools and technologies i work with on a daily basis:</h5>
        {listTemplate("Languages", languages)}
        {listTemplate("Web frameworks, libraries and tools", frameworks)}
        {listTemplate("Others", others)}
        {listTemplate("Technologies of Interest:", exploring, 1)}
        {/* <p>
          Currently i&apos;m exploring: <span>{exploring.join(", ")} </span>
        </p> */}
      </div>
    </div>
  )
}
