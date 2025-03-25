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
