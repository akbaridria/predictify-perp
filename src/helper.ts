import { 
  Atom,
  Doge,
  Ltc,
  Ripple,
  Cardano,
  Ftm
} from '@/components/Icons'

export const listIcons = {
  'ATOM-USDT': Atom,
  'DOGE-USDT': Doge,
  'LTC-USDT' : Ltc,
  'XRP-USDT': Ripple,
  'ADA-USDT': Cardano,
  'FTM-USDT': Ftm
}

export const trimWallet = (wallet: string) => {
  return wallet.slice(0,6) + '...' + wallet.slice(-4);
}
