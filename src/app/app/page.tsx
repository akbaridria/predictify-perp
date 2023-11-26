'use client'

import { ChartMarket } from "@/app/app/components/ChartMarket";
import { FormMarket } from "@/app/app/components/FormMarket";
import { MarketPosition } from "@/app/app/components/MarketPosition";
import { OverviewMarket } from "@/app/app/components/OverviewMarket";
import { getChartData } from "@/scripts/utils";
import { useEffect, useState } from "react";
import { AreaData, Time, WhitespaceData } from 'lightweight-charts';

export default function Home() {

  const [selectedToken, setSelectedToken] = useState('ATOM-USDT');
  const [dataChart, setDataChart] = useState<(AreaData<Time> | WhitespaceData<Time>)[]>([])
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMintPrice] = useState(0);
  const [percentageChange, setPercentageChange] = useState(0);

  useEffect(() => {

    const getData = async () => {
      const result = await getChartData(selectedToken)
      setDataChart(result.data);
      setMaxPrice(result.maxPrice);
      setMintPrice(result.minPriced);
      setPercentageChange(result.changePercentage);
    }

    getData()

    const interval = setInterval(() => {
      getData()
    }, 1500000000);

    return () => clearInterval(interval);

  }, [selectedToken]);

  return (
    <main>
      <div className="p-4">
        <div className="container mx-auto bg-orange-50/10 border-[1px] border-primary-gray rounded-sm">
          <div className="p-4">
            <OverviewMarket 
              selectedToken={selectedToken} 
              setToken={setSelectedToken} 
              price={dataChart.length > 0 ? dataChart[dataChart.length - 1].value : 0}
              maxPrice={maxPrice}
              minPrice={minPrice}
              changePercentage={percentageChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(270px,350px)] gap-4 container mx-auto my-4">
          <ChartMarket data={dataChart} tokenPair={selectedToken} />
          <FormMarket token={selectedToken} />
          <MarketPosition />
        </div>
      </div>
    </main>
  )
}
