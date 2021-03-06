# Plataforma de NFTs con React y Ethereum

[![wakatime](https://wakatime.com/badge/user/8ef73281-6d0a-4758-af11-fd880ca3009c/project/a62eec76-9dc7-406a-8236-99bead2c9f7e.svg?style=for-the-badge)](https://wakatime.com/badge/user/8ef73281-6d0a-4758-af11-fd880ca3009c/project/a62eec76-9dc7-406a-8236-99bead2c9f7e)

```txt
npx create-react-app nft-react-eth --template cra-template-pwa
```

```txt
npm install -D tailwindcss postcss autoprefixer @craco/craco @heroicons/react @headlessui/react
```

```txt
npx tailwindcss init -p
```

```txt
npm i @tailwindcss/forms @tailwindcss/typography @tailwindcss/line-clamp @tailwindcss/aspect-ratio
```

```txt
npm i @metamask/detect-provider @openzeppelin/contracts babel-polyfill babel-preset-env babel-preset-stage-2 babel-preset-stage-3 babel-register chai chai-as-promised chai-bignumber react-router-dom truffle web3
```

```txt
npm i -g truffle
```

```txt
truffle init
```

```txt
truffle compile
```

```txt
truffle migrate
```

```txt
truffle migrate --reset
```

```txt
truffle console
```

```sol
nft = await NFTReactETH.deployed()
nft.name()
nft.symbol()
nft.mint("http...<n_token>")
nft.balanceOf("<address_from>")
nft.ownerOf(<id_token>)
nft.totalSupply()
nft.tokenByIndex(<index_token>)
nft.tokenOfOwnerByIndex("<address_from>", <index_token>)
```

```txt
truffle test
```

```txt
npm i react-toastify redux 
```

```txt
npm i redux redux-thunk react-redux redux-devtools-extension 
```

```txt
npm i @reduxjs/toolkit
```
