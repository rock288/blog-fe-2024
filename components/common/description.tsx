import { FaLinkedin } from "react-icons/fa"

export function Description() {
  return (
    <section
      data-tile="info blog"
      className="pb-8 p-2 dark:text-white text-slate-600"
    >
      I&apos;m a software engineer working mostly in JavaScript and Go. I keep a
      development log for some of the projects I&apos;m working on and write
      about what I learn every day.{" "}
      <span>
        Connect with me on{" "}
        <a
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/tuan-nguyen-duc-linh-5b8675115/"
          className="underline align-text-bottom"
        >
          <FaLinkedin className="inline h-4 hover:text-green-500" />
        </a>
        .
      </span>
    </section>
  )
}
