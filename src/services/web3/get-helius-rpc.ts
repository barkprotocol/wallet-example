// src/services/get-helius-rpc.ts

import { NetworkName } from '@/types';

const HELIUS_SOLANA_MAINNET = process.env.HELIUS_SOLANA_MAINNET as string;
const HELIUS_SOLANA_DEVNET = process.env.HELIUS_SOLANA_DEVNET as string;

/**
 * Gets the appropriate Helius RPC URL for the specified network.
 *
 * @param network - The network for which to get the RPC URL.
 * @returns The RPC URL for the specified network.
 * @throws Will throw an error if the network is unknown or if environment variables are missing.
 */
export async function getHeliusRpcUrl(network: NetworkName): Promise<string> {
  // Validate environment variables
  if (!HELIUS_SOLANA_MAINNET || !HELIUS_SOLANA_DEVNET) {
    throw new Error('Helius RPC URLs are not defined in environment variables');
  }

  // Return the corresponding RPC URL based on the network
  switch (network) {
    case 'mainnet-beta':
      return HELIUS_SOLANA_MAINNET;
    case 'devnet':
      return HELIUS_SOLANA_DEVNET;
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
}
