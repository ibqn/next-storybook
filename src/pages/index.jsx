import Head from 'next/head'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { darkTheme, defaultTheme } from 'slices/theme'

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from 'components/button'
import Modal from 'components/modal'

const Container = styled.div`
  min-height: 100vh;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonBox = styled.div`
  display: flex;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 64px;

  & > button {
    margin: 5px;
  }
`

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`

export default function Home() {
  const dispatch = useDispatch()

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Buttons </title>
      </Head>
      <Container>
        <ButtonBox>
          <button
            style={{
              margin: '0 16px 24px',
              padding: '8px',
              background: 'none',
              cursor: 'pointer',
              border: '2px solid #000',
              marginTop: '60px',
            }}
            onClick={() => dispatch(darkTheme())}
          >
            Dark theme
          </button>
          <button
            style={{
              margin: '0 16px 24px',
              padding: '8px',
              background: 'none',
              cursor: 'pointer',
              border: '2px solid #000',
              marginTop: '60px',
            }}
            onClick={() => dispatch(defaultTheme())}
          >
            Default theme
          </button>
        </ButtonBox>
        <Section>
          <Title>App</Title>
          <PrimaryButton>primary</PrimaryButton>
          <SecondaryButton>secondary</SecondaryButton>
          <TertiaryButton>tertiary</TertiaryButton>
        </Section>

        <Section>
          <Title>Disabled</Title>
          <PrimaryButton disabled>Hello world</PrimaryButton>
          <SecondaryButton disabled>Goodbye world</SecondaryButton>
          <TertiaryButton disabled>Hey world</TertiaryButton>
        </Section>

        <Section>
          <Title>Modifiers</Title>
          {/* <PrimaryButton>Hello World</PrimaryButton> */}
          <PrimaryButton modifiers={['small']}>Hello World</PrimaryButton>
          <SecondaryButton modifiers="large">Goodbye World</SecondaryButton>
        </Section>

        <Section>
          <Title>Statuses</Title>
          <PrimaryButton modifiers={['success']}>Success</PrimaryButton>
          <SecondaryButton modifiers={['warning', 'secondaryButtonWarning']}>
            Warning
          </SecondaryButton>
          <TertiaryButton modifiers={['error', 'secondaryButtonError']}>
            Error
          </TertiaryButton>
        </Section>
        <Section>
          <Modal />
        </Section>
      </Container>
    </>
  )
}
