import { NextPage } from 'next'
import Layout from '../components/layout'

import styled from 'styled-components'
import { useState } from 'react'

const Page = styled.div`
  padding: 30px;
`

const Button = styled.button`
  padding: 10px;
`

const TestPage: NextPage = () => {
  let [count, setCount] = useState(0)

  return (
    <>
      <Layout title="Test page" description='Test'>
        <Page>
          <div>Test page</div>
          <Button onClick={() => setCount(count+1)}>Test button</Button>
          <div>{count}</div>
        </Page>
      </Layout>
    </>
  )
}

export default TestPage
