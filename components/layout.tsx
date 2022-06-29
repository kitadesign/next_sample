import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface Props {
  children?: React.ReactNode
  title?: string
  description?: string
}

const Layout = ({ children, title, description }: Props) => {
  const pageTitle = title || 'ページタイトル'
  return (
    <div className="wrap">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || 'ホームページ概要'} />
      </Head>
      <header>
        <h1>{pageTitle}</h1>
      </header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>&copy; Next.js Test</footer>
    </div>
  )
}

export default Layout
