import styled from 'styled-components'
import Image from 'next/image'

import { PrimaryButton } from 'components/button'
import SignUp from 'components/illustrations/sign-up.svg'
import { CloseIcon } from 'components/close-icon'

import { useDispatch, useSelector } from 'react-redux'
import { dialogSelector, hideDialog } from 'slices/dialog'

const Curtain = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
`

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

const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  border: none;
  right: 40px;
  top: 40px;
  background: none;
  padding: 0;
  /* height: 24px; */
  /* width: 24px; */
`

const Modal = () => {
  const dispatch = useDispatch()
  const show = useSelector(dialogSelector)

  console.log('dialog', show)

  if (!show) return null

  return (
    <Curtain>
      <ModalWrapper>
        <CloseButton onClick={() => dispatch(hideDialog())}>
          <CloseIcon />
        </CloseButton>
        <Image src={SignUp} alt="Sign up for an account!" />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>
          Sign up today to get access to all of our content and features!
        </SignUpText>
        <PrimaryButton onClick={() => console.log('You signed up!')}>
          Sign Up
        </PrimaryButton>
      </ModalWrapper>
    </Curtain>
  )
}

export default Modal
