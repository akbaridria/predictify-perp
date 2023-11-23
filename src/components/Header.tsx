export const Header = () => {
  
  return (
    <div className="p-4 border-[1px] border-grey-400 bg-grey-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-lg">PerdictifyPerp</div>
          <div className="flex items-center gap-2">
            <button className="flex text-sm items-enter border-[1px] border-orange-600 rounded-sm text-black px-3 py-2 hover:bg-orange-600 hover:text-white transition-all shadow-sm">
              Connect Wallet
            </button>
            <button className="flex text-sm items-enter bg-orange-600 hover:bg-orange-700 transition-all rounded-sm text-white px-3 py-2 shadow-sm">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}