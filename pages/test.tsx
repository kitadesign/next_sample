import { NextPage } from 'next'
import Layout from '../components/layout'

import styled from 'styled-components'

const Page = styled.div`
  padding: 30px;
`

const Button = styled.button`
  padding: 10px;
`

const TestPage: NextPage = () => {
  return (
    <>
      <Layout title="Test page" description='Test'>
        <Page>
          <div>Test page</div>
          <Button>Test button</Button>
        </Page>
      </Layout>
    </>
  )
}

export default TestPage
