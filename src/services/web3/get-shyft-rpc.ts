// src/services/get-shyft-rpc.ts

import { NetworkName } from '@/types';

const SHYFT_SOLANA_RPC_MAINNET = process.env.SHYFT_SOLANA_RPC_MAINNET as string;
const SHYFT_SOLANA_RPC_DEVNET = process.env.SHYFT_SOLANA_RPC_DEVNET as string;

/**
 * Gets the appropriate SHYFT RPC URL for the specified network.
 *
 * @param network - The network for which to get the RPC URL.
 * @returns The RPC URL for the specified network.
 * @throws Will throw an error if the network is unknown or if environment variables are missing.
 */
export async function getShyftRpcUrl(network: NetworkName): Promise<string> {
  // Validate environment variables
  if (!SHYFT_SOLANA_RPC_MAINNET || !SHYFT_SOLANA_RPC_DEVNET) {
    throw new Error('SHYFT RPC URLs are not defined in environment variables');
  }

  // Return the corresponding RPC URL based on the network
  switch (network) {
    case 'mainnet-beta':
      return SHYFT_SOLANA_RPC_MAINNET;
    case 'devnet':
      return SHYFT_SOLANA_RPC_DEVNET;
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
}
