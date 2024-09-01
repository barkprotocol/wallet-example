export function formatCurrency(amount: number, currency: string): string {
    const options: Intl.NumberFormatOptions = {
      style: 'currency',
      currency,
      minimumFractionDigits: currency === 'SOL' || currency === 'SPL' ? 0 : 2,
    };
  
    // Convert the smallest unit to standard unit (e.g., lamports to SOL)
    const conversionFactor = currency === 'SOL' || currency === 'SPL' ? 1000000000 : 100; // adjust for smallest unit
  
    return new Intl.NumberFormat('en-US', options).format(amount / conversionFactor);
  }
  