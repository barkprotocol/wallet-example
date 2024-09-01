'use server';

import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { NetworkName } from '@/types';
import { getHeliusRpcUrl } from '@/services/web3';

/**
 * Gets the balance of a Solana wallet in SOL.
 *
 * @param walletAddress - The public key of the Solana wallet.
 * @param network - The network to use for the RPC connection.
 * @returns The balance of the wallet in SOL.
 * @throws Will throw an error if the RPC connection or balance retrieval fails.
 */
export async function getAccountBalance(
  walletAddress: string,
  network: NetworkName,
): Promise<number> {
  // Convert wallet address to a PublicKey instance
  const wallet = new PublicKey(walletAddress);
  
  // Get the RPC URL for the specified network
  const rpcUrl = await getHeliusRpcUrl(network);
  
  // Create a connection to the Solana blockchain
  const connection = new Connection(rpcUrl, 'confirmed');
  
  try {
    // Fetch the balance in lamports (the smallest unit of SOL)
    const balanceLamports = await connection.getBalance(wallet);
    
    // Convert lamports to SOL and return
    return balanceLamports / LAMPORTS_PER_SOL;
  } catch (error) {
    // Log the error for debugging purposes
    console.error(`Error retrieving balance for wallet ${walletAddress}:`, error);
    
    // Throw a new error with a descriptive message
    throw new Error('Failed to retrieve wallet balance');
  }
}

