import { ChartMarket } from "@/app/app/components/ChartMarket";
import { FormMarket } from "@/app/app/components/FormMarket";
import { MarketPosition } from "@/app/app/components/MarketPosition";
import { OverviewMarket } from "@/app/app/components/OverviewMarket";

export default function Home() {

  return (
    <main>
      <div className="p-4">
        <div className="container mx-auto bg-orange-50/10 border-[1px] border-primary-gray rounded-sm">
          <div className="p-4">
            <OverviewMarket />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(270px,350px)] gap-4 container mx-auto my-4">
          <ChartMarket />
          <FormMarket />
          <MarketPosition />
        </div>
      </div>
    </main>
  )
}
