import styled from 'styled-components'
import { css } from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes,
} from 'styled-components-modifiers'

const BUTTON_MODIFIERS = {
  small: ({ theme }) => css`
    font-size: ${theme.typeScale.helperText};
    padding: 8px;
  `,
  large: (props) => css`
    font-size: ${props.theme.typeScale.header5};
    padding: 16px 24px;
  `,
  warning: ({ theme }) => css`
    background: none;
    color: ${theme.status.warningColor};

    &:hover,
    &:focus {
      background-color: ${theme.status.warningColorHover};
      outline: 3px solid ${theme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({ theme }) => css`
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonWarning: ({ theme }) => css`
    border: 2px solid ${theme.status.warningColor};
  `,
  error: ({ theme }) => css`
    background: none;
    color: ${theme.status.errorColor};

    &:hover,
    &:focus {
      background-color: ${theme.status.errorColorHover};
      outline: 3px solid ${theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${theme.status.errorColorActive};
    }
  `,
  primaryButtonError: ({ theme }) => css`
    background-color: ${theme.status.errorColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonError: ({ theme }) => css`
    border: 2px solid ${theme.status.errorColor};
  `,
  success: ({ theme }) => css`
    background: none;
    color: ${theme.status.successColor};

    &:hover,
    &:focus {
      background-color: ${theme.status.successColorHover};
      outline: 3px solid ${theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({ theme }) => css`
    background-color: ${theme.status.successColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonSuccess: ({ theme }) => css`
    border: 2px solid ${theme.status.warningColor};
  `,
}

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${(props) => props.theme.typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};

  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryHoverColor};
    border-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${(props) => props.theme.disabled};
    border: none;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

Button.propTypes = {
  modifiers: styleModifierPropTypes(BUTTON_MODIFIERS),
}

const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  border: 2px solid transparent;

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    border-color: ${(props) => props.theme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

const SecondaryButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};

  &:disabled {
    border: 2px solid ${(props) => props.theme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${(props) => props.theme.primaryColor};

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export { Button, PrimaryButton, SecondaryButton, TertiaryButton }
