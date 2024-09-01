import { Connection, PublicKey } from '@solana/web3.js';
import { PAYMENT_PROGRAM_ID } from './programid';

// Create a connection to the Solana cluster
const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

// Payment program ID
const paymentProgramId = new PublicKey(PAYMENT_PROGRAM_ID);

// Export the connection and program ID
export { connection, paymentProgramId };
