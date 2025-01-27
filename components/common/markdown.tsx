"use client"

import { BaseProps } from "@/types/common"
import React, { useState } from "react"
import { default as ReactMarkdown } from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import { ButtonCopy } from "./button-copy"

type Props = BaseProps & {
  children: string
  prefix?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LinkRenderer = (props: any) => {
  return (
    <a
      id={props.id}
      href={props.href}
      target={props.href.startsWith("#") ? "_self" : "_blank"}
      rel="noreferrer"
    >
      {props.children}
    </a>
  )
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImageRenderer = (props: any) => {
  const [src] = useState(props.src)

  // eslint-disable-next-line @next/next/no-img-element
  return <img id={props.id} src={src} alt="z" />
}

const Markdown = React.memo(({ className, prefix, children }: Props) => {
  return (
    <ReactMarkdown
      className={`${className ?? ""} prose max-w-full`}
      remarkPlugins={[remarkGfm, remarkBreaks]}
      remarkRehypeOptions={{ clobberPrefix: prefix }}
      components={{
        a: LinkRenderer,
        img: ImageRenderer,
        sup: ({ children }) => (
          <sup className="m-0.5 rounded-full bg-gray-200 px-1">{children}</sup>
        ),
        code({ className, children }) {
          const language = /language-(\w+)/.exec(className || "")?.[1]
          const isCodeBlock = !!language
          const codeText = String(children).replace(/\n$/, "")

          return (
            <>
              {isCodeBlock ? (
                <>
                  <div className="flex">
                    <span className="flex-auto">{language} </span>
                    <ButtonCopy
                      className="mr-2 justify-end text-gray-400"
                      text={codeText} // クリップボードにコピーする対象として、SyntaxHighlighter に渡すソースコード部分を指定
                    />
                  </div>
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={isCodeBlock ? language : "plaintext"}
                  >
                    {codeText}
                  </SyntaxHighlighter>
                </>
              ) : (
                <span className="bg-aws-squid-ink/10 border-aws-squid-ink/30 inline rounded-md border px-1 py-0.5">
                  {codeText}
                </span>
              )}
            </>
          )
        },
      }}
    >
      {children}
    </ReactMarkdown>
  )
})

Markdown.displayName = "markdown"

export default Markdown
