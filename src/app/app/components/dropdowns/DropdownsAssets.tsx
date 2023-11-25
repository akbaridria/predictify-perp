import { Chevron, Usdt } from "@/components/Icons"
import { listIcons } from "@/utils"
import datas from '../../../../../protocol-contracts/datas/contracts.json';
import { MouseEventHandler, useRef } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface Props {
  isOpen: boolean;
  open: (value: boolean) => void;
  value: string;
  setToken: (v: string) => void;
}

export const DropdownAssets = ({ isOpen, open, value, setToken }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="relative cursor-pointer">
      <div ref={ref} className="flex items-center gap-1" onClick={() => open(!isOpen)}>
        <div className="relative mr-[12px]">
          {getIcon('ATOM-USDT')}
          <Usdt customClass="w-6 h-6 rounded-full absolute top-0 left-[10px] z-[-1] border-[1px] border-white" />
        </div>
        <div>{ value }</div>
        <Chevron customClass="w-4 h-4 stroke-white rotate-[90deg]" />
      </div>

      {
        isOpen && <BodyDropdown open={() => open(false)} reference={ref} value={value} setToken={setToken} />
      }
    </div>
  )
}

export const getIcon = (props: string) => {
  const Icon = listIcons[props];
  return (
    <Icon customClass="w-6 h-6 rounded-full border-[1px] border-white" />
  )
}

export const BodyDropdown = ({ open, reference, value, setToken }: { open: MouseEventHandler, reference: React.RefObject<HTMLDivElement>, value: string, setToken: (v: string) => void }) => {
  const ref = useOutsideClick(open, reference)

  return (
    <div ref={ref} className={`absolute top-[2.5rem] w-[275px] h-fit left-0 bg-black rounded-sm text-sm z-[100] shadow-sm p-4`}>
      <div className="bg-orange-50/10 border-[1px] border-primary-gray rounded-sm">
        <div className="grid grid-cols-[1fr_70px] opacity-[0.5]">
          <div className="px-3 py-2">Token Pair</div>
          {/* <div className="px-3 py-2">Price</div> */}
        </div>
        <div className="grid grid-cols-1">
          {
            datas.dataFeed.map((item, index) => {
              return (
                <div onClick={() => setToken(item.name)} key={`data-feed-${index}`} className={`grid grid-cols-[1fr_50px] px-3 py-2 text-sm hover:bg-orange-50/10 ${value === item.name ? 'bg-orange-50/10' : null}`}>
                  <div className="flex items-center gap-2">
                    <div className="relative mr-[12px]">
                      {getIcon(item.name)}
                      <Usdt customClass="w-6 h-6 rounded-full absolute top-0 left-[10px] z-[-1] border-[1px] border-white" />
                    </div>
                    <div className="whitespace-nowrap opacity-[0.5]">{item.name}</div>
                  </div>
                  {/* <div>$3.000</div> */}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}