"use client";

import {
  createChart,
  ColorType,
  Time,
  AreaData,
  WhitespaceData,
} from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  data: (AreaData<Time> | WhitespaceData<Time>)[];
  tokenPair: string;
}
export const ChartMarket = ({ data, tokenPair } : Props) => {

  const [price, setPrice] = useState(undefined);

  const backgroundColor = "transparent";
  const lineColor = "#ea580c";
  const textColor = "white";
  const areaTopColor = "#ea580c";
  const areaBottomColor = "rgb(234, 88, 12, 0)";

  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
        layout: {
          background: { type: ColorType.Solid, color: backgroundColor },
          textColor,
        },
        height: 500,
      });
    };

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      height: 500,
    });
    chart.applyOptions({
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
    });
    chart.timeScale().fitContent();
    
    

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
      crosshairMarkerVisible: false
    });
    newSeries.setData(data);

    chart.subscribeCrosshairMove(param => {
      if(param.time) {
        const data = param.seriesData.get(newSeries);
		    const price = data.value !== undefined ? data.value : data.close;
        setPrice(price);
      } else {
        setPrice(undefined);
      }
    })

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
    chartContainerRef,
  ]);

  return (
    <div className="flex-1 p-4 bg-orange-50/10 border-[1px] border-primary-gray min-h-[500px] rounded-sm">
      <div ref={chartContainerRef} className="relative">
        <div className="absolute top-[24px] left-[24px]">
          <div className="text-lg font-semibold">{tokenPair}</div>
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
};
