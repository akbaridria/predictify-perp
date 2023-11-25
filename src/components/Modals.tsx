import { MouseEventHandler, ReactNode } from "react"

interface Props {
  children: ReactNode;
  isOpen: boolean;
}
export const Modal = ({ children, isOpen } : Props) => {
  
  if(!isOpen) {
    return null;
  }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" onClick={() => console.log('here')}>
          { children }
        </div>
      </div>
    </div>
  )
}