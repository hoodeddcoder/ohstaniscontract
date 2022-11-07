import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  
  contractName: 'THEOHTANIS',
  tokenName: 'THEOHTANIS',
  tokenSymbol: 'OHTANIS',
  hiddenMetadataUri: 'ipfs://QmaQAsAYtZ8sed67cpyedMvw2De6MVWB7Da6nxRQnKhUpe/Hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.1,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.4,
    maxMintAmountPerTx: 7,
  },
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
