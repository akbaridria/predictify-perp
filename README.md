# PredictifyPerp - Real-Time Asset Price Prediction on Klaytn

PredictifyPerp is a decentralized platform on the Klaytn network that enables users to predict asset prices with a minimum time interval of 5 minutes. Powered by Orakle.Network for precise price feeds, this platform empowers users to forecast asset movements and potentially double their investment upon accurate predictions.

### Demo App:
[predictify-perp.vercel.app](https://predictify-perp.vercel.app/)

### Technology Stack:
- **Solidity:** Smart contract development language for creating secure predictions.
- **Orakl.Network:** Utilized as the oracle service providing accurate price feeds.
- **Wagmi.sh:** Wallet management tool for "connect wallet", contract interactiona and sending transaction

### Illustration:

![flow-predictifyperp](https://github.com/akbaridria/predictify-perp/assets/26589426/96497460-559d-45cf-848c-34444e45e1da)


### Contract Address (Klaytn Testnet Baobab):

| contract name      | Contract Address                                    | 
|--------------------|-----------------------------------------------------|
| PredictifyPerp Hub | 0x3332628072A6df5bEB176D4894C61fb79eE0A68C          |
| DummyUSDT          | 0x96d57427F710db5F2Ea08dBAb1d0Df34ACe1CF2b          |

### Contract Address Price Feed Consumer From Orakl.network (Klaytn Testnet Baobab):

| contract name      | Contract Address                                    | notes                                                                       |
|--------------------|-----------------------------------------------------|-----------------------------------------------------------------------------|
| KLAY-USDT          | not available                                       | orakl.network return of ```getData()``` and ```latestRoundData()``` is not the same   |
| BTC-USDT           | not available                                       | orakl.network return of ```getData()``` and ```latestRoundData()``` is not the same   |
| ETH-USDT           | not available                                       | orakl.network return of ```getData()``` and ```latestRoundData()``` is not the same   |
| ATOM-USD           | 0xD84659b5e6d7123e21ee80f13685D733a9a9a0b0          | -                                                                           |
| DOGE-USDT          | 0x98F4BC9fE125c725423deda5418681aB7c8F2CF3          | -                                                                           |
| LTC-USDT           | 0x151A407169e1B594fb26F002A4c3c9fc41f1deef          | -                                                                           |
| XRP-USDT           | 0x92dD2d62513bC4811666C4EF27248E902e41f18c          | -                                                                           |
| ADA-USDT           | 0x70cDE6bE67486017C52215Ad5d6740ce8EaBC9b8          | -                                                                           |
| FTM-USDT           | 0x88E3CD567754A0f5068aa4053F9887e97539F764          | -                                                                           |
