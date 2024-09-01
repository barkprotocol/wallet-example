import React from 'react';
import PaymentSummaryCard from '@/components/ui/payment-summary-card';
import { PaymentSummary } from '@/types/payments';

const summary: PaymentSummary = {
  totalAmount: 1000,
  fee: 50,
  netAmount: 950,
  currency: 'USD',
};

const PaymentPage: React.FC = () => {
  return (
    <div className="p-6">
      <PaymentSummaryCard summary={summary} />
    </div>
  );
};

export default PaymentPage;
