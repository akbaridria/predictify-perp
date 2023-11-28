/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/Button";
import { Arrow, Bolt, Decentralized, Stopwatch } from "@/components/Icons";
import datas from '@/datas.json';
import { Accordion } from "./components/Accordion";

export default function Home() {

  return (
    <main>
      <div className="container mx-auto p-4">
        <div className="my-4">
          <div className="text-center">
            <h1 className="text-[1.5rem] md:text-[3rem] font-semibold">
              Harness The Decentralized Power
              <br />
              For Real Time Trading
            </h1>
            <h4 className="opacity-[0.5] max-w-full w-[800px] mx-auto mt-5">
              Welcome to a revolutionary experience trading in Klaytn. Dive into the realm of real-time predictions on the Klaytn network with our platform, where decentralized power fuels every trade. 
            </h4>
            <div className="flex items-center gap-4 justify-center mt-12">
              <a href="/app" target="_blank">
                <Button>
                  <div>Lunch App</div>
                </Button>
              </a>
              <div>
                <a href="https://github.com/akbaridria/predictify-perp#readme" target="_blank">
                  <div className="flex items-center gap-2">
                    <div>Learn more</div>
                    <Arrow customClass="w-4 h-4 stroke-white rotate-[315deg]" />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center mt-12">
              <img src="/frame-2.png" alt="PredictifyPerp" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0e1111] p-4 my-6">
        <div className="container mx-auto">
          <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-center gap-2">
                <Decentralized customClass="w-8 h-8 stroke-white" />
                <div className="text-xl">Decentralized Accuracy</div>
              </div>
              <div className="opacity-[0.5] text-center">
                Utilize Orakle.Network's dependable data feeds, ensuring accuracy and transparency in predictions.
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-center gap-2">
                <Stopwatch customClass="w-8 h-8 stroke-white" />
                <div className="text-xl">Speed Market Prediction</div>
              </div>
              <div className="opacity-[0.5] text-center">
                Engage in rapid predictions for assets and cryptocurrencies, capitalizing on quick market movements.
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-center gap-2">
                <Bolt customClass="w-8 h-8 stroke-white" />
                <div className="text-xl">Instant Withdrawal</div>
              </div>
              <div className="opacity-[0.5] text-center">
                Enjoy the convenience of instant withdrawal, accessing your earnings promptly after successful predictions.
              </div>
            </div>
         
          </div>
        </div>
      </div>

      <div className="max-w-full w-[600px] mx-auto p-4 my-24">
        <div className="grid grid-cols-1 gap-6">
          <div className="text-center font-semibold text-2xl">
            You Ask, we Answer.
          </div>
          <div className="grid grid-cols-1 gap-3">
            {
              datas.faq.map((item, index) => {
                return (
                 <Accordion key={`faq-${index}`} question={item.questions} answer={item.answer} isOpen={index === 0 ? true : false} />
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}
