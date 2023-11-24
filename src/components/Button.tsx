import { ReactNode } from "react";

type ModeButton = "primary" | "outline"

interface Props {
  mode?: ModeButton;
  disabled?: boolean;
  children: ReactNode
}

export const Button = ({ mode = 'primary', disabled=false, children }: Props) => {
  const variant = {
    primary: 'bg-orange-600 hover:bg-orange-700 transition-all rounded-sm text-white px-3 py-2 shadow-sm',
    outline: 'hover:bg-orange-50/10 transition-all rounded-sm text-white px-3 py-2 shadow-sm'
  }

  return (
    <button className={variant[mode] + ' ' + `${disabled ? 'opacity-[0.5]': null}`} disabled={disabled}>
      { children }
    </button>
  )
}