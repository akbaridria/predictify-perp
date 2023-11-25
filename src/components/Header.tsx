'use client'

import { Button } from "./Button"
import { Logo } from "./Logo"
import { usePathname } from "next/navigation"
import { Modal } from "./Modals"
import { useConnect } from 'wagmi'
import { Close } from "./Icons"
import { useState } from "react"

export const Header = () => {
  const [openModalWallet, setOpenModalWallet] = useState(false);

  const route = usePathname()  
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

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
            <Button onClick={() => setOpenModalWallet(true)}>
              <div className="text-sm">Connect Wallet</div>
            </Button>
          </div>
          }
        </div>
      </div>

      {/* start modal  */}
        <Modal isOpen={openModalWallet}>
          <div className="bg-black p-4 rounded-sm max-w-full w-[400px]" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div>Select Wallet</div>
              <button onClick={() => setOpenModalWallet(false)}><Close customClass="w-4 h-4 stroke-white" /></button>
            </div>
            <div className="grid grid-cols-1 gap-[2px] mt-4">
              {
                connectors.map((connector) => {
                  return (
                    <button key={`wallet-${connector.id}`} className="bg-orange-50/10 rounded-sm hover:bg-orange-50/30 transition-all" onClick={() => connect({ connector })}>
                      <div className="flex items-center gap-1 justify-center">
                        <img src={`/${connector.name === 'MetaMask' ? 'metamask.svg' : 'coinbase.svg' }`} alt={connector.name} className={`w-6 h-6 ${connector.name !== 'MetaMask' && 'rounded-full'}`} />
                        <div className="p-2">{connector.name}</div>
                      </div>
                    </button>
                  )
                })
              }
            </div>
          </div>
        </Modal>
      {/* end modals */}
    </div>
  )
}