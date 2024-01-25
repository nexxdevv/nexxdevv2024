/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Image from "next/image"
import uniqid from "uniqid"

const projects = [
  {
    id: uniqid(),
    image: "/assets/projects/x.png",
    link: "https://twitter-project-x.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },
  {
    id: uniqid(),
    image: "/assets/projects/cmdb.png",
    link: "https://cmdb-chi.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
      "/assets/technologies/headless.png",
    ],
  },
  {
    id: uniqid(),
    image: "/assets/projects/tidal.png",
    link: "https://next-wave-music.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },
  {
    id: uniqid(),
    image: "/assets/projects/youtube.png",
    link: "https://next-youtube-clone-v2.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },

  {
    id: uniqid(),
    image: "/assets/projects/spotify.png",
    link: "https://spotify-clone-khaki-xi.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
      "/assets/technologies/gpt.png",
    ],
  },

  {
    id: uniqid(),
    image: "/assets/projects/netflix.png",
    link: "https://netflix-clone-one-lac.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },
  {
    id: uniqid(),
    image: "/assets/projects/tiktok.png",
    link: "https://next-tiktok-clone-zeta.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },

  {
    id: uniqid(),
    image: "/assets/projects/instagram.png",
    link: "https://next-insta-clone-three.vercel.app/",
    technologies: [
      "/assets/technologies/react.png",
      "/assets/technologies/next.png",
      "/assets/technologies/tw.png",
    ],
  },
]

const Projects = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <ul className="flex flex-wrap justify-center gap-4 mt-2">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </ul>
    </div>
  )
}

export default Projects

const Project = ({ link, image }) => {
  return (
    <li className="flex flex-col overflow-hidden rounded-xl aspect-auto">
      <Link href={link} className="overflow-hidden" target="_blank">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={image}
            className="w-full max-h-[400px] rounded-xl aspect-auto"
            alt=""
            width={440}
            height={400}
          />
        </div>
      </Link>

     
    </li>
  )
}
