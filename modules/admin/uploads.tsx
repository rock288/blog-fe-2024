"use client"

import { deleteUpload, getAllUploads } from "@/services/upload"
import React, { useEffect, useState } from "react"
import { Upload } from "./upload"
import { UploadType } from "@/types/upload"

function Uploads() {
  const [uploads, setUploads] = useState<UploadType[]>([])

  const onGetUploads = async () => {
    const data = await getAllUploads()
    setUploads(data?.results ?? [])
  }

  async function onDelete(_id: string) {
    try {
      await deleteUpload(_id)
      window.alert("Delete success")
      onGetUploads()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error(e)
    }
  }

  useEffect(() => {
    onGetUploads()
  }, [])

  return (
    <div>
      {uploads.map((item, index) => (
        <Upload key={index} {...item} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default Uploads

