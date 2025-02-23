import { MyInfo } from "./my-info"

type Props = {
  site?: string
}

export function Header({ site }: Props) {
  return (
    <header className="flex justify-between p-2 pt-8">
      <MyInfo site={site} />
    </header>
  )
}
