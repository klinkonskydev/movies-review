import { ButtonHTMLAttributes, useState } from 'react'

import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  checked?: boolean
  onClick?: (checked: boolean) => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  onClick,
  checked = false,
  ...rest
}: ButtonProps) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleClick = () => {
    const newValue = !isChecked

    setIsChecked(newValue)
    !!onClick && onClick(newValue)
  }

  return (
    <S.Button checked={isChecked} onClick={handleClick} {...rest}>
      {!!children && <span>{children}</span>}
      {!!isChecked && <S.Image src="/plus.svg" alt="unmark item" />}
    </S.Button>
  )
}
export default Button
