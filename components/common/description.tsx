import { FaLinkedin } from "react-icons/fa"

export function Description() {
  return (
    <section
      data-tile="info blog"
      className="pt-4 p-2 dark:text-white text-slate-600"
    >
      I'm a software engineer working mostly in JavaScript. I enjoy learning and
      striving to become a better version of myself each day. Here, I write
      about what I learn every day while also improving my English.{" "}
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
