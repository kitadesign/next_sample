import type { AppProps } from 'next/app'

const Blog = ({ pageProps }: AppProps) => {
  return (
    <ul>
      {pageProps.posts.map((post: any) => {
        <li>{post.title}</li>
      })}
    </ul>
  )
}

export default Blog
