import { MyInfo } from "./my-info"

export function Header() {
  return (
    <header className="flex justify-between p-2 pt-8">
      <MyInfo />
    </header>
  )
}
