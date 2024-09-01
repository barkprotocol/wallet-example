import { PublicKey, SystemProgram } from '@solana/web3.js';

// Function to get the Program Derived Address (PDA) for a given seed and program ID
export async function getPda(seed: Uint8Array, programId: PublicKey): Promise<PublicKey> {
    const [pda, _] = await PublicKey.findProgramAddress([seed], ProgramId);
    return pda;
}
