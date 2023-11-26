'use client'

import { Button } from "./Button"
import { Logo } from "./Logo"
import { Modal } from "./Modals"
import { useAccount, useConnect, useNetwork, useSwitchNetwork, useDisconnect, useContractWrite, usePrepareContractWrite, useWalletClient } from 'wagmi'
import { ArrowRectangle, ArrowSquare, Chevron, Close, Spinner, Usdt } from "./Icons"
import { useEffect, useState } from "react"
import { trimWallet } from "@/helper"

import datas from '../../protocol-contracts/datas/contracts.json'
import makeBlockie from 'ethereum-blockies-base64'
import { DummyUSDT__factory } from '../../protocol-contracts/typechain-types'
import { ModalTx } from "./ModalTx"

export const Header = () => {
  const [openModalWallet, setOpenModalWallet] = useState(false);
  const [openModalFaucet, setOpenModalFaucet] = useState(false);
  const [loaidngFaucet, setLoadingFaucet] = useState(false);
  const [openModalTx, setOpenModalTx] = useState(false);
  const [hash, setHash] = useState("");

  const { connect, connectors, isLoading, pendingConnector } = useConnect()
  const { isConnected, connector, address } = useAccount()
  const { switchNetwork } = useSwitchNetwork()
  const { chain } = useNetwork()
  const { disconnect } = useDisconnect()

  useEffect(() => {
    if(isConnected) {
      setOpenModalWallet(false)
      if(connector?.chains) {
        if(connector?.chains[0].id !== chain?.id) {
          switchNetwork?.(connector?.chains[0].id)
        }
      }
    }
  }, [isConnected, connector, chain, switchNetwork])
  
  return (
    <div className="p-4 border-b-[1px] border-b-primary-gray">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          {
            <div className="flex items-center gap-2">
            {
              connector?.chains[0].id === chain?.id && chain?.id &&
              <Button mode="empty" onClick={() => setOpenModalFaucet(true)}>
                <div className="text-sm">Faucet</div>
              </Button>
            }
            {
              connector?.chains[0].id === chain?.id && chain?.id &&
              <div className="relative group cursor-pointer">
                <Button mode="outline">
                  <div className="flex items-center gap-2">
                    <img src={makeBlockie(address as string)} alt="wallet-identicon" className="w-5 h-5 rounded-full" />
                    <div className="text-sm">{ trimWallet(address as string) }</div>
                    <Chevron customClass="w-4 h-4 stroke-white rotate-[90deg]" />
                  </div>
                </Button>
                <div className="absolute top-[2.2rem] left-0 hidden group-hover:block w-full z-[100]">
                  <div className="bg-black rounded-sm group-hover:border-[1px] group-hover:border-primary-gray">
                    <div className="bg-orange-50/10">
                      <div className="grid grid-cols-1 text-sm">
                        <a href={datas["block-explorer"] + 'account/' + address} target="_blank" className="flex items-center gap-2 p-2 hover:bg-orange-50/10">
                          <ArrowSquare customClass="w-4 h-4 stroke-white" />
                          <div>View In Explorer</div>
                        </a>
                        <div className="flex items-center gap-2 p-2 hover:bg-orange-50/10" onClick={() => disconnect()}>
                          <ArrowRectangle customClass="w-4 h-4 stroke-white rotate-[180deg]" />
                          <div>Disconnect</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            {
              connector?.chains[0].id !== chain?.id && chain?.id &&
              <Button onClick={() => switchNetwork?.(connector?.chains[0].id)}>
                <div className="text-sm">Switch Network</div>
              </Button>
            }
            {
              !isConnected &&
              <Button onClick={() => setOpenModalWallet(true)}>
                <div className="text-sm">Connect Wallet</div>
              </Button>
            }
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
                    <button key={`wallet-${connector.id}`} className="bg-orange-50/10 rounded-sm hover:bg-orange-50/30 transition-all" onClick={() => connect({ connector })} disabled={isLoading}>
                      <div className={`flex items-center gap-1 justify-center ${isLoading && pendingConnector?.id && 'opacity-[0.5]'}`}>
                        { isLoading && pendingConnector?.id === connector.id && <Spinner customClass="mr-2" /> }
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

        <Modal isOpen={openModalFaucet}>
          <div className="bg-black rounded-sm p-4 w-[400px] max-w-full">
            <div className="bg-orange-50/10 p-4 rounded-sm grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between">
                <div>Faucet</div>
                <button onClick={() => setOpenModalFaucet(false)}>
                  <Close customClass="w-4 h-4 stroke-white" />
                </button>
              </div>
              <div className="flex items-center gap-1 border-[1px] border-primary-gray p-2 rounded-sm my-4">
                <div>200</div>
                <Usdt customClass="w-4 h-4 rounded-full border-[1px] border-white" />
              </div>
              <DoFuacet setTx={(hash: string) => {
                setHash(hash)
                setOpenModalFaucet(false)
                setOpenModalTx(true)
              }} />
            </div>
          </div>
        </Modal>

        <ModalTx isOpen={openModalTx} tx={hash} close={() => setOpenModalTx(false)} />
      {/* end modals */}
    </div>
  )
}

interface PropsFaucet {
  setTx: (v: string) => void
}

export const DoFuacet = ({setTx}: PropsFaucet) => {
  const { address } = useAccount();

  const { config } = usePrepareContractWrite({
    address: datas.usdtContract as `0x${string}`,
    abi: DummyUSDT__factory.abi,
    functionName: 'faucet',
    args: [address as `0x${string}`]
  })

  const {data, isLoading, write} = useContractWrite(config)
  
  useEffect(() => {
    if(!!data) {
      setTx(data.hash)
    }
  }, [data, setTx])

  return (
    <Button disabled={isLoading} onClick={() => (console.log('faucet'), write?.())}>
      <div className="flex items-center justify-center gap-2">
        {
          isLoading && <Spinner customClass={"w-4 h-4"} />
        }
        <div>Faucet</div>
      </div>
    </Button>
  )
}