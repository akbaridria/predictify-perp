'use client'

import { Button } from "@/components/Button";
import { Trending } from "@/components/Icons";
import { useState } from "react";

export const FormMarket = () => {
  const [direction, setDirection] = useState(0);
  const [time, setTime] = useState('minutes')
  const [spesificTime, setSpesificTime] = useState<number>(15);
  
  const times = ['minutes', 'hours'];
  const spesifcTimes = [1,2,3,4,5];
  const directions = ['Long', 'Short'];

  return (
    <div className="flex-none grid grid-cols-1 gap-4 p-4 bg-orange-50/10 border-[1px] border-primary-gray min-w-[275px] h-fit">
      <div className="grid grid-cols-2 bg-orange-100/10 text-sm">
        {
          directions.map((item, index) => {
            return (
              <div key={`direction-${index}`} className={`${direction === (item === 'Long' ? 0 : 1) ? 'bg-orange-600' : null } flex items-center justify-center gap-2 hover:bg-orange-600 p-2 transition-all`}>
                <Trending customClass={`w-4 h-4 stroke-white ${item === 'Long' ? 'rotate-[345deg]' : 'rotate-[70deg]'}`} />
                <div>{ item }</div>
              </div>
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
                  <div key={`time-${index}`} className={`${time === item ? 'bg-orange-600' : null} px-2 py-1 rounded-sm hover:bg-orange-600 transition-all`}>
                    { item }
                  </div>
                )
              })
            }
          </div>
          <div className="flex items-center gap-2">
            {
              spesifcTimes.map((item, index) => {
                return (
                  <div key={`spesific-time-${index}`} className={`${spesificTime === (time[0] === 'm' ? item * 5 : item) ? 'bg-orange-600' : null} px-2 py-1 rounded-sm hover:bg-orange-600 transition-all`}>
                    { time[0] === 'm' ? item * 5 : item }{ time[0] }
                  </div>
                )
              })
            }
          </div>
          <div className="border-primary-gray border-[1px] bg-orange-200/10 px-3 py-2 rounded-sm">
            <input type="text" className="bg-transparent focus:outline-none" placeholder="0.0" value={spesificTime} onChange={(e) => setSpesificTime(Number(e.target.value))} />
          </div>
        </div>
      </div>

      <div className="text-sm grid grid-cols-1 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">2</div>
          <div>Input amount</div>
        </div>
        <div className="bg-orange-100/10 p-4 rounded-sm grid grid-cols-1 gap-2">
          <div className="flex items-center justify-between">
            <div></div>
            <div>Balance: 1000</div>
          </div>
          <div className="border-primary-gray border-[1px] bg-orange-200/10 px-3 py-2 rounded-sm">
            <input type="text" className="bg-transparent focus:outline-none" placeholder="0.0" value={spesificTime} onChange={(e) => setSpesificTime(Number(e.target.value))} />
          </div>
          <Button>
            <div>
              Submit Order
            </div>
          </Button>
        </div>
      </div>

    </div>
  );
};
