import { Button } from "@/components/Button";
import { useAccount, useContractWrite } from "wagmi";
import { getUserPositions } from "@/scripts/utils";
import { useEffect, useState } from "react";
import type { Position } from "@/scripts/utils";
import { Refresh, Spinner } from "@/components/Icons";
import moment from 'moment';
import { PerpHub__factory } from "../../../../protocol-contracts/typechain-types";
import datas from '../../../../protocol-contracts/datas/contracts.json';
import { ModalTx } from "@/components/ModalTx";

export const MarketPosition = () => {
  const { address } = useAccount()
  const [allPosition, setAllPosition] = useState<Position[]>([]);
  const [loading, setLoading] = useState(false);
  const [tx, setTx] = useState('');
  const [openModalTx, setOpenModalTx] = useState(false);

  const a = [1,1,1,1]
  useEffect(() => {
    const getData = async () => {
      if(address && !!address) {
        setLoading(true)
        setAllPosition([])
        const res = await getUserPositions(address as string)
        setAllPosition(res);
        setLoading(false)
      } else {
        setAllPosition([])
      }
    }

    getData()
  }, [address])

  const getLatestData = async () => {
    if(address && !!address) {
      setLoading(true);
      setAllPosition([])
      const res = await getUserPositions(address as string)
      setAllPosition(res);
      setLoading(false);
    } else {
      setAllPosition([])
    }
  }

  const formatDate = (date: number) => {
    return moment(date * 1000).format("LLLL");
  }

  return (
    <div className="bg-orange-50/10 rounded-sm text-sm">
      <div className="flex items-center justify-between gap-2 pt-4 pl-4">
       <div className="flex items-center gap-2">
          <div className="px-2 py-1">All Orders ({ allPosition.length })</div>
       </div>
       <button className="flex items-center gap-2 pr-4" onClick={() => getLatestData()}>
          <div>Refresh</div>
          <Refresh customClass={`w-4 h-4 stroke-white ${loading ? 'animate-spin' : null}`} />  
       </button>
      </div>
      <div className="overflow-auto">
        <table className="w-full my-4">
          <thead>
            <tr className="border-y-[1px] border-primary-gray opacity-[0.5]">
              <td className="p-4 whitespace-nowrap">Symbol</td>
              <td className="p-4 whitespace-nowrap">Size</td>
              <td className="p-4 whitespace-nowrap">Entry Price</td>
              <td className="p-4 whitespace-nowrap">Final Price</td>
              <td className="p-4 whitespace-nowrap">Direction</td>
              <td className="p-4 whitespace-nowrap">Expire Time</td>
              <td className="p-4 whitespace-nowrap"></td>
            </tr>
          </thead>
          <tbody>
            {
              allPosition.toReversed().map((item, index) => {
                return (
                  <tr key={`open-position-${index}`} className={`border-y-[1px] border-primary-gray ${item.status === 2 ? 'text-red-600' : item.status === 3 || item.status === 4 ? 'text-green-600' : null}`}>
                    <td className="p-4 whitespace-nowrap">{ item.symbol }</td>
                    <td className="p-4 whitespace-nowrap">{ item.size } USDT</td>
                    <td className="p-4 whitespace-nowrap">{ item.entryPrice} </td>
                    <td className="p-4 whitespace-nowrap">{ item.finalPrice }</td>
                    <td className="p-4 whitespace-nowrap">{ item.direction === 0 ? 'Up' : 'Down' }</td>
                    <td className="p-4 whitespace-nowrap">{ formatDate(item.endData) }</td>
                    <td className="p-4 whitespace-nowrap">
                      {
                        !!item.finalPrice && (item.direction === 0 ? item.finalPrice > item.entryPrice : item.finalPrice < item.entryPrice) && item.status !== 4 &&
                        <ButtonClaim oracleRoundId={!!item.oracleRoundId ? item.oracleRoundId : 0} roundId={item.roundId} setTx={(v: string) => {
                          setTx(v);
                          setOpenModalTx(true);
                          getLatestData();
                        }} />
                      }
                      {
                        item.status === 4 &&
                        <Button disabled={true}>
                          Claimed
                        </Button>
                      }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      
      {/* start modal  */}
      { openModalTx && <ModalTx tx={tx} close={() => setOpenModalTx(false)} isOpen={openModalTx} />}
      {/* end modalk  */}

    </div>
  )
}

interface ButtonClaimProps {
  oracleRoundId: number;
  roundId: number;
  setTx: (v: string) => void
}

export const ButtonClaim = ({ roundId, oracleRoundId, setTx } : ButtonClaimProps ) => {

  const { data, isLoading, write} = useContractWrite({
    abi: PerpHub__factory.abi,
    address: datas.hubContract as `0x${string}`,
    functionName: 'claim',
    args: [BigInt(oracleRoundId), BigInt(roundId)]
  })

  useEffect(() => {
    if(!!data) {
      setTx(data.hash);
    }
  }, [data, setTx])
  return (
    <Button disabled={isLoading} onClick={() => write?.()}>
      <div className="flex items-center gap-2">
        { isLoading && <Spinner customClass="w-4 h-4" /> }
        <div>Claim</div>
      </div>
    </Button>
  )
}