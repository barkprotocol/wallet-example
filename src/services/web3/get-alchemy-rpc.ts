// src/services/get-alchemy-rpc.ts

import { NetworkName } from '@/types';

// Load environment variables
const ALCHEMY_SOLANA_MAINNET = process.env.ALCHEMY_SOLANA_MAINNET as string;
const ALCHEMY_SOLANA_DEVNET = process.env.ALCHEMY_SOLANA_DEVNET as string;

/**
 * Gets the appropriate Alchemy RPC URL for the specified network.
 *
 * @param network - The network for which to get the RPC URL.
 * @returns The RPC URL for the specified network.
 * @throws Will throw an error if the network is unknown or if environment variables are missing.
 */
export async function getAlchemyRpcUrl(network: NetworkName): Promise<string> {
  // Validate environment variables
  if (!ALCHEMY_SOLANA_MAINNET || !ALCHEMY_SOLANA_DEVNET) {
    throw new Error('Alchemy RPC URLs are not defined in environment variables');
  }

  // Return the corresponding RPC URL based on the network
  switch (network) {
    case 'mainnet-beta':
      return ALCHEMY_SOLANA_MAINNET;
    case 'devnet':
      return ALCHEMY_SOLANA_DEVNET;
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
}
