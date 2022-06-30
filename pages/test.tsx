import { NextPage } from 'next'
import Layout from '../components/Layout'
import { sendClickEvent } from '../utils/gtm'

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

  const handleCountUp = () => {
    setCount(count+1)
    sendClickEvent('count_up')
  }

  return (
    <>
      <Layout title="Test page" description='Test' keywords={['test1', 'test2']}>
        <Page>
          <div>Test page</div>
          <Button onClick={handleCountUp}>Test button</Button>
          <div>{count}</div>
        </Page>
      </Layout>
    </>
  )
}

export default TestPage
