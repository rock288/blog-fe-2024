import { UploadType } from "@/types/upload"
import DialogDeleteUpload from "./dialog-delete-upload"
import { URL_API } from "@/configs"
import { useEffect } from "react"

type Props = UploadType & {
  onDelete: (id: string) => void
}

export function Upload(props: Props) {
  const { path } = props
  const baseUrl = URL_API?.endsWith("/") ? URL_API.slice(0, -1) : URL_API
  const imagePath = path?.startsWith("/") ? path : `/${path}`
  const imageUrl = `${baseUrl}${imagePath}`

  useEffect(() => {
    console.log("Image URL:", imageUrl)
    console.log("URL_API:", URL_API)
    console.log("Path:", path)
  }, [imageUrl, path])

  return (
    <section data-title="upload" className="flex flex-col p-2 mb-2">
      <div className="max-w-[300px] aspect-[40/21] mb-2 border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={path}
          className="w-full h-full object-contain"
          crossOrigin="anonymous"
          onError={(e) => {
            console.error("Image load error:", imageUrl)
            const target = e.target as HTMLImageElement
            target.style.display = "none"
          }}
        />
      </div>
      <div className="flex gap-2">
        <DialogDeleteUpload upload={props} onDelete={props.onDelete} />
      </div>
    </section>
  )
}

