import { BaseProps } from "@/types/common"
import { PiCheck } from "react-icons/pi"
import { FaRegCopy } from "react-icons/fa"
import copy from "copy-to-clipboard"
import { useCallback, useState } from "react"

type Props = BaseProps & {
  text: string
}

export function ButtonCopy(props: Props) {
  const [showsCheck, setShowsCheck] = useState(false)

  const copyMessage = useCallback((message: string) => {
    copy(message)
    setShowsCheck(true)

    setTimeout(() => {
      setShowsCheck(false)
    }, 3000)
  }, [])

  return (
    <button
      className="flex gap-1 items-center select-none py-1"
      aria-label="copy"
      onClick={() => {
        copyMessage(props.text)
      }}
    >
      {showsCheck ? <PiCheck /> : <FaRegCopy />}
      {showsCheck ? "Copied" : "Copy"}
    </button>
  )
}
