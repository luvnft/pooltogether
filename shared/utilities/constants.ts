import { VaultList } from '@shared/types'
import { JSONSchemaType } from 'ajv'
import { Address } from 'viem'

/**
 * Network IDs
 */
export enum NETWORK {
  'mainnet' = 1,
  'goerli' = 5,
  'sepolia' = 11155111,
  'bsc' = 56,
  'bsc-testnet' = 97,
  'xdai' = 100,
  'polygon' = 137,
  'mumbai' = 80001,
  'optimism' = 10,
  'optimism-goerli' = 420,
  'avalanche' = 43114,
  'fuji' = 43113,
  'celo' = 42220,
  'celo-testnet' = 44787,
  'arbitrum' = 42161,
  'arbitrum-goerli' = 421613
}
export type NETWORK_NAME = keyof typeof NETWORK

/**
 * POOL token addresses
 */
export const POOL_TOKEN_ADDRESSES = Object.freeze({
  [NETWORK.mainnet]: '0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e',
  [NETWORK.polygon]: '0x25788a1a171ec66Da6502f9975a15B609fF54CF6',
  [NETWORK.optimism]: '0x395ae52bb17aef68c2888d941736a71dc6d4e125',
  [NETWORK.sepolia]: '0x68a100a3729fc04ab26fb4c0862df22ceec2f18b'
})

/**
 * USDC token addresses
 *
 * NOTE: All addresses are lowercase
 */
export const USDC_TOKEN_ADDRESSES: { [chainId: number]: Lowercase<Address> } = {
  [NETWORK.mainnet]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  [NETWORK.polygon]: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  [NETWORK.optimism]: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
  [NETWORK.sepolia]: '0x4d5f2cd31701f3e5de77b3f89ee7b80eb87b4acc'
}

/**
 * Second constants
 */
export const SECONDS_PER_MINUTE = 60
export const SECONDS_PER_HOUR = 3_600
export const SECONDS_PER_DAY = 86_400
export const SECONDS_PER_YEAR = 31_536_000

/**
 * Minute constants
 */
export const MINUTES_PER_HOUR = 60
export const MINUTES_PER_DAY = 1_440

/**
 * CoinGecko API URL
 */
export const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3'

/**
 * Token Prices API URL
 */
export const TOKEN_PRICES_API_URL = 'https://token-prices.api.cabana.fi'

/**
 * Prize Pools
 */
export const PRIZE_POOLS: {
  chainId: NETWORK
  address: Address
  options: { prizeTokenAddress: Address; drawPeriodInSeconds: number; tierShares: number }
}[] = [
  {
    chainId: NETWORK.sepolia,
    address: '0x858029ed93B97D9015A63A5CC63E5872EE67F88c',
    options: {
      prizeTokenAddress: '0x68A100A3729Fc04ab26Fb4C0862Df22CEec2f18B',
      drawPeriodInSeconds: 7_200,
      tierShares: 100
    }
  }
]

/**
 * Prize Pool Graph API URLs
 */
export const PRIZE_POOL_GRAPH_API_URLS = Object.freeze({
  [NETWORK.sepolia]:
    'https://api.studio.thegraph.com/query/50959/pt-v5-prize-pool-eth-sepolia/v0.0.1'
})

/**
 * TWAB Graph API URLs
 */
export const TWAB_GRAPH_API_URLS = Object.freeze({
  [NETWORK.sepolia]:
    'https://api.studio.thegraph.com/query/50959/pt-v5-twab-control-eth-sepolia/v0.0.1'
})

/**
 * CoinGecko platform IDs
 */
export const COINGECKO_PLATFORMS = Object.freeze({
  [NETWORK.mainnet]: 'ethereum',
  [NETWORK.bsc]: 'binance-smart-chain',
  [NETWORK.xdai]: 'xdai',
  [NETWORK.polygon]: 'polygon-pos',
  [NETWORK.optimism]: 'optimistic-ethereum',
  [NETWORK.avalanche]: 'avalanche',
  [NETWORK.celo]: 'celo',
  [NETWORK.arbitrum]: 'arbitrum-one'
})
export type COINGECKO_PLATFORM = keyof typeof COINGECKO_PLATFORMS

/**
 * CoinGecko native token IDs
 */
export const COINGECKO_NATIVE_TOKEN_IDS: Record<NETWORK, string> = Object.freeze({
  [NETWORK.mainnet]: 'ethereum',
  [NETWORK.goerli]: 'ethereum',
  [NETWORK.sepolia]: 'ethereum',
  [NETWORK.bsc]: 'binancecoin',
  [NETWORK['bsc-testnet']]: 'binancecoin',
  [NETWORK.xdai]: 'xdai',
  [NETWORK.polygon]: 'matic-network',
  [NETWORK.mumbai]: 'matic-network',
  [NETWORK.optimism]: 'ethereum',
  [NETWORK['optimism-goerli']]: 'ethereum',
  [NETWORK.avalanche]: 'avalanche-2',
  [NETWORK.fuji]: 'avalanche-2',
  [NETWORK.celo]: 'celo',
  [NETWORK['celo-testnet']]: 'celo',
  [NETWORK.arbitrum]: 'ethereum',
  [NETWORK['arbitrum-goerli']]: 'ethereum'
})

/**
 * PoolTogether API URL
 */
export const POOLTOGETHER_API_URL = 'https://pooltogether-api.com'

/**
 * Block explorer mapping
 */
export const BLOCK_EXPLORERS: Record<NETWORK, { name: string; url: string }> = Object.freeze({
  [NETWORK.mainnet]: { name: 'Etherscan', url: 'https://etherscan.io/' },
  [NETWORK.goerli]: { name: 'Etherscan', url: 'https://goerli.etherscan.io/' },
  [NETWORK.sepolia]: { name: 'Etherscan', url: 'https://sepolia.etherscan.io/' },
  [NETWORK.bsc]: { name: 'BscScan', url: 'https://bscscan.com/' },
  [NETWORK['bsc-testnet']]: { name: 'BscScan', url: 'https://testnet.bscscan.com/' },
  [NETWORK.xdai]: { name: 'GnosisScan', url: 'https://gnosisscan.io/' },
  [NETWORK.polygon]: { name: 'PolygonScan', url: 'https://polygonscan.com/' },
  [NETWORK.mumbai]: { name: 'PolygonScan', url: 'https://mumbai.polygonscan.com/' },
  [NETWORK.optimism]: { name: 'Etherscan', url: 'https://optimistic.etherscan.io/' },
  [NETWORK['optimism-goerli']]: { name: 'Etherscan', url: 'https://goerli-optimism.etherscan.io/' },
  [NETWORK.avalanche]: { name: 'Snowtrace', url: 'https://snowtrace.io/' },
  [NETWORK.fuji]: { name: 'Snowtrace', url: 'https://testnet.snowtrace.io/' },
  [NETWORK.celo]: { name: 'CeloScan', url: 'https://celoscan.io/' },
  [NETWORK['celo-testnet']]: { name: 'CeloScan', url: 'https://alfajores.celoscan.io/' },
  [NETWORK.arbitrum]: { name: 'ArbiScan', url: 'https://arbiscan.io/' },
  [NETWORK['arbitrum-goerli']]: { name: 'ArbiScan', url: 'https://goerli.arbiscan.io/' }
})

/**
 * Stablecoin addresses
 *
 * NOTE: All addresses are lowercase
 */
export const STABLECOIN_ADDRESSES: Record<NETWORK, Lowercase<string>[]> = {
  [NETWORK.mainnet]: [
    '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
    '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
    '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd' // GUSD
  ],
  [NETWORK.goerli]: [],
  [NETWORK.sepolia]: [
    '0x0aa9e2e0b37fb54c19e45cb246b17b0e700ab98d', // DAI
    '0x4d5f2cd31701f3e5de77b3f89ee7b80eb87b4acc', // USDC
    '0xa99b3a8503260ab32753c382eac297acd4a43908' // GUSD
  ],
  [NETWORK.bsc]: [],
  [NETWORK['bsc-testnet']]: [],
  [NETWORK.xdai]: [],
  [NETWORK.polygon]: [],
  [NETWORK.mumbai]: [],
  [NETWORK.optimism]: [],
  [NETWORK['optimism-goerli']]: [],
  [NETWORK.avalanche]: [],
  [NETWORK.fuji]: [],
  [NETWORK.celo]: [],
  [NETWORK['celo-testnet']]: [],
  [NETWORK.arbitrum]: [],
  [NETWORK['arbitrum-goerli']]: []
}

/**
 * Vault factory addresses
 */
export const VAULT_FACTORY_ADDRESSES: { [chainId: number]: Address } = Object.freeze({
  [NETWORK.sepolia]: '0x3341DAC0912B630F1A8c237b64F6861e9fa11d79'
})

/**
 * Liquidation pair factory addresses
 */
export const LIQUIDATION_PAIR_FACTORY_ADDRESSES: { [chainId: number]: Address } = Object.freeze({
  [NETWORK.sepolia]: '0x1cA3CF8B47B596F2d9b440EdC59542539619bAec'
})

/**
 * Vault list schema
 */
export const VAULT_LIST_SCHEMA: JSONSchemaType<VaultList> = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    version: {
      type: 'object',
      properties: {
        major: { type: 'integer' },
        minor: { type: 'integer' },
        patch: { type: 'integer' }
      },
      required: ['major', 'minor', 'patch']
    },
    timestamp: { type: 'string' },
    tokens: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          chainId: { type: 'integer' },
          address: { type: 'string' },
          name: { type: 'string', nullable: true },
          decimals: { type: 'integer', nullable: true },
          symbol: { type: 'string', nullable: true },
          extensions: {
            type: 'object',
            properties: {
              underlyingAsset: {
                type: 'object',
                properties: {
                  address: { type: 'string', nullable: true },
                  symbol: { type: 'string', nullable: true },
                  name: { type: 'string', nullable: true },
                  logoURI: { type: 'string', nullable: true }
                },
                nullable: true
              }
            },
            nullable: true
          },
          tags: { type: 'array', items: { type: 'string' }, nullable: true },
          logoURI: { type: 'string', nullable: true }
        },
        required: ['chainId', 'address']
      }
    },
    keywords: { type: 'array', items: { type: 'string' }, nullable: true },
    tags: { type: 'object', properties: {}, required: [], nullable: true },
    logoURI: { type: 'string', nullable: true }
  },
  required: ['name', 'version', 'timestamp', 'tokens']
}

/**
 * Max uint256 value
 */
export const MAX_UINT_256 = 2n ** 256n - 1n

/**
 * Null Address
 */
export const NULL_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
