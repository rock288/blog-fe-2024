import { URL_API } from "@/configs"
import { LocalStorageClass } from "@/utils/localstorage"

export async function fetchUploads() {
  const data = await fetch(`${URL_API}v1/upload`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LocalStorageClass.getItem("token")}`,
    },
  })

  const uploads = await data.json()
  return uploads.data.results
}

export async function getAllUploads() {
  const data = await fetch(`${URL_API}v1/upload`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LocalStorageClass.getItem("token")}`,
    },
  })
  const uploads = await data.json()
  return uploads?.data
}

export async function createUpload(file: File) {
  const formData = new FormData()
  formData.append("image", file)

  const data = await fetch(`${URL_API}v1/upload`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${LocalStorageClass.getItem("token")}`,
    },
  })

  const upload = await data.json()
  return upload.data
}

export async function deleteUpload(idUpload: string) {
  const data = await fetch(`${URL_API}v1/upload/${idUpload}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LocalStorageClass.getItem("token")}`,
    },
  })

  const res = await data.json()
  return res.data
}
