'use client';

import { Arrow, Warn } from "@/components/Icons";
import { DropdownAssets } from "./dropdowns/DropdownsAssets";
import { useState } from "react";

export const OverviewMarket = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-16">
        <DropdownAssets isOpen={openDropdown} open={(value: boolean) => setOpenDropdown(value)}  />
        <div className="hidden md:block">
          <div className="text-sm opacity-[0.5]">24H change</div>
          <div className="text-green-500">+1.80%</div>
        </div>
        <div className="hidden md:block">
          <div className="text-sm opacity-[0.5]">24H change</div>
          <div className="text-green-500">+1.80%</div>
        </div>
        <div className="hidden md:block">
          <div className="text-sm opacity-[0.5]">24H change</div>
          <div className="text-green-500">+1.80%</div>
        </div>
        <div className="hidden md:block">
          <div className="text-sm opacity-[0.5]">24H change</div>
          <div className="text-green-500">+1.80%</div>
        </div>
      </div>
      <div className="text-sm">
        <div className="opacity-[0.5] flex items-center gap-1">
          <div>Oracle Address</div>
          <Warn customClass="w-4 h-4 fill-white stroke-2 cursor-pointer" />
        </div>
        <a href="#" className="flex items-center gap-1 hover:underline">
          <div>0x981...123</div>
          <Arrow customClass="w-4 h-4 fill-white rotate-[315deg]" />
        </a>
      </div>
    </div>
  );
};
