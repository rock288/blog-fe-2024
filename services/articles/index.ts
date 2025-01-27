export async function getAllArticle() {
  const data = await fetch("http://localhost:8081/v1/article?limit=20&page=1")
  const posts = await data.json()
  return posts?.data
}
