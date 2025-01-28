"use client"

import { BaseProps } from "@/types/common"
import React, { useState } from "react"
import { default as ReactMarkdown } from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import { ButtonCopy } from "./button-copy"
import "./markdown.css"
import "./markdown_1.css"

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
      className={`${
        className ?? ""
      } markdown prose w-full break-words dark:prose-invert dark`}
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
                  <div className="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950">
                    <div className="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none">
                      {language}
                    </div>

                    <div className="sticky top-9 md:top-[5.75rem]">
                      <div className="absolute bottom-0 right-2 flex h-9 items-center">
                        <div className="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary">
                          <span className="" data-state="closed">
                            <ButtonCopy text={codeText} />
                          </span>
                        </div>
                      </div>
                    </div>
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
