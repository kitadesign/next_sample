import type { AppProps } from 'next/app'
import Link from 'next/link'
import styled from 'styled-components'

const Center = styled.div`
  text-align: center;
  margin: 10px 0 0 0;
`

const Blog = ({ pageProps }: AppProps) => {
  return (
    <>
      <Center><Link href='/test'>test</Link></Center>
      <ul>
        {pageProps?.posts.map((post: any) => {
          <li>{post.title}</li>
        })}
      </ul>
    </>
  )
}

export default Blog
