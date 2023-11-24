import { Button } from "@/components/Button";

export const MarketPosition = () => {
  const  a = [1,2,3,4,5,5,5,5,5,5];

  return (
    <div className="bg-orange-50/10 rounded-sm text-sm">
      <div className="flex items-center gap-2 pt-4 pl-4">
        <div className="px-2 py-1">Active Orders (5)</div>
        <div className="px-2 py-1 opacity-[0.5]">Order History (10)</div>
      </div>
      <div className="overflow-auto">
        <table className="w-full my-4">
          <thead>
            <tr className="border-y-[1px] border-primary-gray">
              <td className="p-4 whitespace-nowrap">Symbol</td>
              <td className="p-4 whitespace-nowrap">Size</td>
              <td className="p-4 whitespace-nowrap">Entry Price</td>
              <td className="p-4 whitespace-nowrap">Direction</td>
              <td className="p-4 whitespace-nowrap">Duration</td>
              <td className="p-4 whitespace-nowrap"></td>
            </tr>
          </thead>
          <tbody>
            {
              a.map((item, index) => {
                return (
                  <tr key={`open-position-${index}`} className="border-y-[1px] border-primary-gray">
                    <td className="p-4 whitespace-nowrap">ETH/USDT</td>
                    <td className="p-4 whitespace-nowrap">1.000 USDT</td>
                    <td className="p-4 whitespace-nowrap">35.256,00 </td>
                    <td className="p-4 whitespace-nowrap">Up</td>
                    <td className="p-4 whitespace-nowrap">5 Minutes</td>
                    <td className="p-4 whitespace-nowrap">
                      <Button>
                        Claim
                      </Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}