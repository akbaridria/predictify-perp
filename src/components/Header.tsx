'use client'

import { Button } from "./Button"
import { Logo } from "./Logo"
import { usePathname } from "next/navigation"

export const Header = () => {
  const route = usePathname()  

  return (
    <div className="p-4 border-b-[1px] border-b-primary-gray">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          {
            route !== '/' && <div className="flex items-center gap-2">
            <Button mode="outline">
              <div className="text-sm">Faucet</div>
            </Button>
            <Button>
              <div className="text-sm">Connect Wallet</div>
            </Button>
          </div>
          }
        </div>
      </div>
    </div>
  )
}