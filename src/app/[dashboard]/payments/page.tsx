import PaymentsLayout from './layout';
import PaymentList from './payment-list';
import { getPaymentHistory } from '@/services/paymentService';

const PaymentsPage: React.FC = async () => {
  const history = await getPaymentHistory();

  return (
    <PaymentsLayout pathname="/payments">
      <div className="container mx-auto p-6">
        <PaymentList history={history} />
      </div>
    </PaymentsLayout>
  );
};

export default PaymentsPage;
