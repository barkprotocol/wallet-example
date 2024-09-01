import { Connection, PublicKey } from '@solana/web3.js';

// Fetch all program accounts associated with a specific program ID
export async function getProgramAccounts(connection: Connection, programId: PublicKey) {
    const accounts = await connection.getProgramAccounts(programId);
    return accounts;
}
