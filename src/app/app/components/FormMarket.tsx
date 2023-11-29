'use client'

import { Button } from "@/components/Button";
import { Close, Refresh, Spinner, Trending, Usdt } from "@/components/Icons";
import { MouseEventHandler, useEffect, useState } from "react";
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import { DummyUSDT__factory, PerpHub__factory } from '../../../../protocol-contracts/typechain-types'
import datas from '../../../../protocol-contracts/datas/contracts.json'
import { Modal } from "@/components/Modals";
import { ModalTx } from "@/components/ModalTx";

interface FormMarketProps {
  token: string
}
export const FormMarket = ({ token }: FormMarketProps) => {

  const [direction, setDirection] = useState(0);
  const [time, setTime] = useState('minutes')
  const [spesificTime, setSpesificTime] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [balance, setBalance] = useState(0);
  const [limit, setLimit] = useState(0);
  const [openModalOrder, setOpenModalOrder] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [tx, setTx] = useState('');
  const [openModalTx, setOpenModalTx] = useState(false);

  const { address } = useAccount()
  const times = ['minutes', 'hours'];
  const spesifcTimes = [1,2,3,4,5];
  const directions = ['Long', 'Short'];

  const balanceUser = useContractRead({
    abi: DummyUSDT__factory.abi,
    address: datas.usdtContract as `0x${string}`,
    functionName: 'balanceOf',
    args: [address as `0x${string}`]    
  })

  const balanceContract = useContractRead({
    abi: DummyUSDT__factory.abi,
    address: datas.usdtContract as `0x${string}`,
    functionName: 'balanceOf',
    args: [datas.hubContract as `0x${string}`]
  })

  const openPosition = useContractRead({
    abi: PerpHub__factory.abi,
    address: datas.hubContract as `0x${string}`,
    functionName: 'totalCurrentTrade'
  })

  useEffect(() => {
    setBalance(!!balanceUser.data ? Number(balanceUser?.data / BigInt(10 ** 18)) : 0);
  }, [balanceUser.data])

  useEffect(() => {
    const getData = () => {
      if(!!balanceContract.data) {
        const openVolume = !!openPosition.data ? openPosition.data : BigInt(0);
        // TODO check again when open positioin has value
        setLimit((Number(balanceContract.data) / (10 ** 18) - Number(openVolume) / (10 ** 18))*0.1 )
      }
    }
    getData()
  }, [balanceContract.data, openPosition.data])

  useEffect(() => {
    const am = (!!amount ? amount: 0)
    const sptime = (!!spesificTime ? spesificTime: 0);
    setValidForm((time === 'minutes' ? sptime >= 5 : true) && !(am > limit) && !(am + (am*0.1) > balance) && !(am < 5));
  }, [amount, balance, limit, spesificTime, time])

  return (
    <div className="flex-none grid grid-cols-1 gap-4 p-4 bg-orange-50/10 border-[1px] border-primary-gray min-w-[275px] h-fit">
      <div className="grid grid-cols-2 bg-orange-100/10 text-sm">
        {
          directions.map((item, index) => {
            return (
              <button key={`direction-${index}`} className={`${direction === (item === 'Long' ? 0 : 1) ? 'bg-orange-600' : null } flex items-center justify-center gap-2 hover:bg-orange-600 p-2 transition-all`} onClick={() => setDirection(index)}>
                <Trending customClass={`w-4 h-4 stroke-white ${item === 'Long' ? 'rotate-[345deg]' : 'rotate-[70deg]'}`} />
                <div>{ item }</div>
              </button>
            )
          })
        }
      </div>

      <div className="grid gap-2 text-sm ">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">1</div>
          <div>Input time</div>
        </div>
        <div className="bg-orange-100/10 p-4 rounded-sm grid grid-cols-1 gap-2">
          <div className="flex items-center gap-2">
            {
              times.map((item, index) => {
                return (
                  <button key={`time-${index}`} className={`${time === item ? 'bg-orange-600' : null} px-2 py-1 rounded-sm hover:bg-orange-600 transition-all`} onClick={() => (setTime(item), setSpesificTime(5))}>
                    { item }
                  </button>
                )
              })
            }
          </div>
          <div className="flex items-center gap-2">
            {
              spesifcTimes.map((item, index) => {
                return (
                  <button key={`spesific-time-${index}`} className={`${spesificTime === (time[0] === 'm' ? item * 5 : item) ? 'bg-orange-600' : null} px-2 py-1 rounded-sm hover:bg-orange-600 transition-all`} onClick={() => (time[0] === 'm' ? setSpesificTime(item * 5) : setSpesificTime(item))}>
                    { time[0] === 'm' ? item * 5 : item }{ time[0] }
                  </button>
                )
              })
            }
          </div>
          <div className="border-primary-gray border-[1px] bg-orange-200/10 px-3 py-2 rounded-sm">
            <input type="text" className="bg-transparent focus:outline-none w-full" placeholder="0.0" value={spesificTime} onChange={(e) => setSpesificTime(Number(e.target.value))} />
          </div>
          {
            (time === 'minutes' ? spesificTime < 5 : false) && <div className="text-red-600">time should be higher than 5 minutes</div>
          }
        </div>
      </div>

      <div className="text-sm grid grid-cols-1 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">2</div>
          <div>Input amount</div>
        </div>
        <div className="bg-orange-100/10 p-4 rounded-sm grid grid-cols-1 gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div><span className="opacity-[0.5]">Limit</span>: { new Intl.NumberFormat().format(limit) }</div>
              <button onClick={() => balanceContract.refetch()}>
                <Refresh customClass={`w-4 h-4 stroke-white ${balanceUser.isLoading ? 'animate-spin' : null}`} />
              </button>
            </div>
            <div className="flex items-center gap-1">
              <div><span className="opacity-[0.5]">Balance</span>: { new Intl.NumberFormat().format(balance) }</div>
              <button onClick={() => balanceUser.refetch()}>
                <Refresh customClass={`w-4 h-4 stroke-white ${balanceUser.isLoading ? 'animate-spin' : null}`} />
              </button>
            </div>
            
          </div>
          <div className="border-primary-gray border-[1px] bg-orange-200/10 px-3 py-2 rounded-sm">
            <input type="text" className="bg-transparent focus:outline-none w-full" placeholder="0.0" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
          </div>
          {
            amount + (amount * 0.1) > balance && <div className="text-sm text-red-600">Insufficient balance</div>
            || amount > limit && <div className="text-sm text-red-600">Max size trade limit is {new Intl.NumberFormat().format(limit)}</div>
          }
          <Button onClick={() => setOpenModalOrder(true)} disabled={!validForm}>
            <div>
              Submit Order
            </div>
          </Button>
        </div>
      </div>
      
      {/* start modal  */}
      { openModalOrder && <ModalOrder setTx={(v: string) => {
        setTx(v)
        setOpenModalTx(true)
        setOpenModalOrder(false)
      }} isOpen={openModalOrder} token={token} direction={direction} time={time} timeSpesific={(!!spesificTime ? spesificTime: 0)} amount={amount} close={() => setOpenModalOrder(false)} /> }
      
      <ModalTx close={() => setOpenModalTx(false)} isOpen={openModalTx} tx={tx} />
      {/* end modal  */}

    </div>
  );
};

interface ModalOrderProps {
  isOpen: boolean;
  direction: number ;
  amount: number | undefined;
  time: string;
  timeSpesific: number;
  close: MouseEventHandler
  token: string;
  setTx: (v: string) => void
}
export const ModalOrder = ({ isOpen, direction, amount, time, timeSpesific, close, token, setTx } : ModalOrderProps) => {
  const { address } = useAccount()

  const [isApproved, setIsApproved] = useState(true);

  const allowance = useContractRead({
    abi: DummyUSDT__factory.abi,
    address: datas.usdtContract as `0x${string}` ,
    functionName: 'allowance',
    args: [address as `0x${string}`, datas.hubContract as `0x${string}`]
  })
  
  const { data: approveTx, write: callApprove, isLoading: loadngCallApprove } = useContractWrite({
    abi: DummyUSDT__factory.abi,
    address: datas.usdtContract as `0x${string}`,
    functionName: 'approve',
    args: [datas.hubContract as `0x${string}`, BigInt(Number(amount) * (10 ** 18)) + BigInt(Number(amount) * (10 ** 17)) ]
  })

  const { data:orderTx, write: submitOrder, isLoading: loadingOrder } = useContractWrite({
    abi: PerpHub__factory.abi,
    address: datas.hubContract as `0x${string}`,
    functionName: 'createOrder',
    args: [BigInt(Number(amount) * (10 ** 18)), BigInt(Number(amount) * (10 ** 17)), token, BigInt((Math.floor(Date.now() / 1000))) + BigInt(timeSpesific * (time === 'minutes' ? 60 : 3600)), BigInt(direction) ]
  })

  const { isLoading } = useWaitForTransaction({
    hash: approveTx?.hash
  })

  useEffect(() => {
    setIsApproved(!!allowance.data && !!amount ? Number(allowance.data) / (10 ** 18) < amount + (amount * 0.1) : true);
  }, [allowance.data, amount])

  useEffect(() => {
    if(!!orderTx) {
      setTx(orderTx.hash)
    }
  }, [orderTx, setTx])

  useEffect(() => {
    allowance.refetch()
  }, [allowance])

  return (
    <Modal isOpen={isOpen}>
      <div className="bg-black max-w-full w-[400px] rounded-sm p-4">
        <div className="bg-orange-50/10 rounded-sm p-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between">
              <div>Order Confirmation</div>
              <button onClick={close}>
                <Close customClass="w-4 h-4 stroke-white" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2 text-sm bg-orange-100/10 p-4 rounded-sm">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">1</div>
                <div>Direction</div>
              </div>
              <div className="bg-orange-600 px-2 py-1 rounded-sm w-fit ml-7 flex items-center gap-1">
                <Trending customClass={`w-4 h-4 stroke-white ${direction === 0 ? 'rotate-[345deg]' : 'rotate-[70deg]'}`} />
                <div>{ direction === 0 ? 'Long' : 'Short' }</div> 
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 text-sm bg-orange-100/10 p-4 rounded-sm">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">2</div>
                <div>Time</div>
              </div>
              <div className="bg-orange-600 px-2 py-1 rounded-sm w-fit ml-7 flex items-center gap-1">
                <div>{timeSpesific} {time} </div> 
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 text-sm bg-orange-100/10 p-4 rounded-sm">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">3</div>
                <div>Amount</div>
              </div>
              <div className="bg-orange-600 px-2 py-1 rounded-sm w-fit ml-7 flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <div>{ amount }</div>
                  <Usdt customClass="w-4 h-4 rounded-full border-[1px] border-white" />
                </div> 
              </div>
            </div>

            <Button disabled={allowance.isLoading || isLoading || loadngCallApprove || loadingOrder} onClick={() => isApproved ? callApprove?.() : submitOrder?.() }>
              <div className="flex items-center justify-center gap-1 text-sm">
               { (allowance.isLoading || isLoading || loadngCallApprove || loadingOrder) && <Spinner customClass="w-4 h-4" /> }
                <div>
                  { isApproved ? 'Approve' : 'Submit' }
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}