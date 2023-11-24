"use client";

import {
  createChart,
  ColorType,
  Time,
  AreaData,
  WhitespaceData,
} from "lightweight-charts";
import React, { useEffect, useRef } from "react";

interface Props {
  data: (AreaData<Time> | WhitespaceData<Time>)[];
  value: number;
}
export const ChartMarket = () => {
  const data = [
    { time: "2018-12-22", value: 32.51 },
    { time: "2018-12-23", value: 31.11 },
    { time: "2018-12-24", value: 27.02 },
    { time: "2018-12-25", value: 27.32 },
    { time: "2018-12-26", value: 25.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 25.46 },
    { time: "2018-12-29", value: 23.92 },
    { time: "2018-12-30", value: 22.68 },
    { time: "2018-12-31", value: 22.67 },
  ];

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
          <div className="text-lg font-semibold">ETH/USDT</div>
          <div>3.100</div>
        </div>
      </div>
    </div>
  );
};
