import { Github } from "./Icons"
import { Logo } from "./Logo"

export const Footer = () => {
  return (
    <div className="p-4 border-t-[1px] border-primary-gray">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <a href="https://github.com/akbaridria/predictify-perp" target="_blank" rel="noopener noreferrer">
            <Github customClass="w-6 h-6 fill-white" />
          </a>
        </div>
      </div>
    </div>
  )
}