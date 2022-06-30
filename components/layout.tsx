import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface Props {
  children?: React.ReactNode
  title?: string
  description?: string
  keywords?: string[]
}

const Layout = ({ children, title, description, keywords }: Props) => {
  const pageTitle = title || 'ページタイトル'
  const pageDescription =description || 'ページ概要'
  return (
    <>
      <div className="wrap">
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta name="keywords" content={keywords && keywords?.join(',')} />
          <meta property="og:description" content={pageDescription} />
        </Head>
        <header>
          <h1>{pageTitle}</h1>
        </header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/posts">Posts</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer>&copy; Next.js Test</footer>
      </div>
    </>
  )
}

export default Layout
