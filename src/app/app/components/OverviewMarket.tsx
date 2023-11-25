'use client';

import { Arrow, Warn } from "@/components/Icons";
import { DropdownAssets } from "./dropdowns/DropdownsAssets";
import { useEffect, useState } from "react";
import datas from '../../../../protocol-contracts/datas/contracts.json';
import { trimWallet } from "@/scripts/helper";

interface Props {
  selectedToken: string;
  setToken: (v: string) => void;
  price: number | Record<string, unknown> | undefined;
  maxPrice: number;
  minPrice: number;
  changePercentage: number;
}

export const OverviewMarket = ({ selectedToken, setToken, price, maxPrice, minPrice, changePercentage }: Props) => {

  const [openDropdown, setOpenDropdown] = useState(false);
  const [aggregratorAddress, setAggregratorAddress] = useState('');

  useEffect(() => {
    const getAggregratorAddr = () => {
      const data = datas.dataFeed.filter((item) => item.name === selectedToken)
      if(data.length > 0) {
        setAggregratorAddress(data[0].aggregrator)
      }
    }

    getAggregratorAddr()

  }, [selectedToken])

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-16">
        <DropdownAssets isOpen={openDropdown} open={(value: boolean) => setOpenDropdown(value)} value={selectedToken} setToken={setToken}  />
        <div className="hidden md:block">
          <div className="text-sm opacity-[0.5]">Price</div>
          <div>${price?.toString()}</div>
        </div>
        <div className="hidden md:block">
          <div className="text-sm opacity-[0.5]">1h Change</div>
          <div className={`${changePercentage > 0 ? 'text-green-500' : 'text-red-500'}`}>{ changePercentage.toFixed(4) }%</div>
        </div>
        <div className="hidden md:block">
          <div className="text-sm opacity-[0.5]">1h High</div>
          <div >${ maxPrice }</div>
        </div>
        <div className="hidden md:block">
          <div className="text-sm opacity-[0.5]">1h Min</div>
          <div >${ minPrice }</div>
        </div>
      </div>
      <div className="text-sm">
        <div className="flex items-center gap-1 group cursor-pointer">
          <div className="opacity-[0.5]">Oracle Address</div>
          <div className="relative">
            <Warn customClass="w-4 h-4 fill-white stroke-2 cursor-pointer" />
            <div className="absolute right-0 top-[1.2rem] z-[100] hidden group-hover:block">
              <div className="bg-black p-2 rounded-sm shadow-sm">
                <div className="bg-orange-50/10 p-2 rounded-sm">
                  <div className="whitespace-nowrap">
                    We are using <a href="https://orakl.network/" target="_blank" className="text-orange-600 underline">orakl.network</a> as our <br /> oracle for the price feed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href={datas["block-explorer"] + 'account/' + aggregratorAddress} className="flex items-center gap-1 hover:underline" target="_blank">
          <div>{ trimWallet(aggregratorAddress) }</div>
          <Arrow customClass="w-4 h-4 fill-white rotate-[315deg]" />
        </a>
      </div>
    </div>
  );
};
