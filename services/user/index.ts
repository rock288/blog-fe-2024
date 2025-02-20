import { URL_API } from "@/configs"
import { UserLogin } from "@/types/user"

export async function userLogin(body: UserLogin) {
  const data = await fetch(`${URL_API}v1/auth/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const login = await data.json()
  return login
}

export async function fetchMe(body: UserLogin) {
  const data = await fetch(`${URL_API}v1/me`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const me = await data.json()
  return me
}
