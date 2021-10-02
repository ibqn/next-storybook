import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Main page</title>
      </Head>
      <Container>
        <div>main page</div>
      </Container>
    </>
  )
}
