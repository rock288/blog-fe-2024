import { Layout } from "@/components/common/layout"
import { CreatePost } from "@/modules/admin/create-post"

export default async function Page() {
  return (
    <Layout>
      <CreatePost />
    </Layout>
  )
}
