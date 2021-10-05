import styled from 'styled-components'
import Image from 'next/image'

import { PrimaryButton } from 'components/button'
import SignUp from 'components/illustrations/sign-up.svg'

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: ${(props) => props.theme.formElementBackground};
`

const SignUpHeader = styled.h3`
  font-size: ${(props) => props.theme.typeScale.header3};
`

const SignUpText = styled.p`
  font-size: ${(props) => props.theme.typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`

const Modal = () => (
  <ModalWrapper>
    <Image src={SignUp} alt="Sign up for an account!" />
    <SignUpHeader>Sign Up</SignUpHeader>
    <SignUpText>
      Sign up today to get access to all of our content and features!
    </SignUpText>
    <PrimaryButton onClick={() => console.log('You signed up!')}>
      Sign Up
    </PrimaryButton>
  </ModalWrapper>
)

export default Modal
