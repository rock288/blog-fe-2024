import React from "react"
import { BreadcrumbCollapsed } from "./breadcrumb-collapsed"
import { Layout } from "@/components/common/layout"

interface Props {}

export function Post(props: Props) {
  const {} = props

  return (
    <Layout>
      <BreadcrumbCollapsed />
    </Layout>
  )
}
