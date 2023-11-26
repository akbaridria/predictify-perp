import { Button } from "./Button"
import { Arrow, CheckFill, Close } from "./Icons"
import { Modal } from "./Modals"
import datas from '../../protocol-contracts/datas/contracts.json'
import { MouseEventHandler } from "react";

interface Props {
  tx: string;
  isOpen: boolean;
  close: MouseEventHandler
}
export const ModalTx = ({ tx, isOpen, close }: Props) => {

  return (
    <Modal isOpen={isOpen}>
      <div className="bg-black rounded-sm p-4 rounded-sm w-[350px] max-w-full">
        <div className="bg-orange-50/10 p-4 rounded-sm">
          <div className="grid grid-cols-1 gap-4">

            <button className="justify-end items-center flex" onClick={close}>
              <Close customClass="w-4 h-4 stroke-white" />
            </button>

            <div className="flex items-center justify-center gap-2">
              <div className="text-lg">Transaction Submited</div>
              <CheckFill customClass="w-6 h-6 fill-green-500" />
            </div>
              
            <div className="opacity-[0.5]">
              Your transaction has been submitted successfully to the blockchain!
            </div>
            <Button>
              <a href={datas["block-explorer"] + 'tx/' + tx} target="_blank" className="flex items-center justify-center gap-2">
                <div className="text-sm">View On Explorer</div>
                <Arrow customClass="w-4 h-4 stroke-white" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}