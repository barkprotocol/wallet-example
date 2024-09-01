import React from 'react';
import PaymentSummaryCard from '@/components/ui/payment-summary-card';
import { PaymentSummary } from '@/types/payments';

// Corrected sample summary data
const sampleSummary: PaymentSummary = {
  totalAmount: 2000000, // in smallest unit (e.g., lamports for SOL)
  currency: 'SOL', // Currency type
  fee: 500000, // Fee in smallest unit (e.g., lamports)
  netAmount: 1500000, // Total amount minus fee in smallest unit
};

const SummaryPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <PaymentSummaryCard summary={sampleSummary} />
    </div>
  );
};

export default SummaryPage;
