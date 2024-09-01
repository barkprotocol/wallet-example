'use client';

import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { PaymentFormData, PaymentMethod } from '@/types/payments';
import { PayButton } from '@/components/ui/pay-button';
import { Input } from '@/components/ui/input';
import { Select, SelectOption } from '@/components/ui/select';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentMethods: PaymentMethod[];
  currencies: string[];
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, paymentMethods, currencies }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PaymentFormData>({
    defaultValues: {
      amount: 0,
      currency: currencies[0],
      paymentMethod: paymentMethods[0]?.id,
      description: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const processPayment = async (data: PaymentFormData) => {
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      // Simulate an API call to process the payment
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
      setIsSuccess(true);
      console.log('Payment processed successfully:', data);
    } catch (error) {
      setErrorMessage('Failed to process payment. Please try again.');
      setIsSuccess(false);
      console.error('Payment processing error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: PaymentFormData) => {
    await processPayment(data);
    if (isSuccess) {
      reset(); // Reset the form on success
      onClose(); // Close the modal
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
            Make a Payment
          </Dialog.Title>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                {...register('amount', { required: 'Amount is required', min: 0.01 })}
                className="mt-1 block w-full"
                placeholder="Enter amount"
                disabled={isLoading}
              />
              {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
            </div>

            <div>
              <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
              <Select
                id="currency"
                {...register('currency', { required: 'Currency is required' })}
                className="mt-1 block w-full"
                disabled={isLoading}
              >
                {currencies.map((currency) => (
                  <SelectOption key={currency} value={currency}>
                    {currency}
                  </SelectOption>
                ))}
              </Select>
              {errors.currency && <p className="text-red-500 text-sm">{errors.currency.message}</p>}
            </div>

            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method</label>
              <Select
                id="paymentMethod"
                {...register('paymentMethod', { required: 'Payment method is required' })}
                className="mt-1 block w-full"
                disabled={isLoading}
              >
                {paymentMethods.map((method) => (
                  <SelectOption key={method.id} value={method.id}>
                    {method.name} ({method.type})
                  </SelectOption>
                ))}
              </Select>
              {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>}
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <Input
                id="description"
                {...register('description')}
                className="mt-1 block w-full"
                placeholder="Enter a description (optional)"
                disabled={isLoading}
              />
            </div>

            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

            <div className="mt-4 flex justify-end">
              <PayButton type="button" onClick={onClose} className="mr-2" disabled={isLoading}>
                Cancel
              </PayButton>
              <PayButton type="submit" disabled={isLoading}>
                {isLoading ? 'Processing...' : isSuccess ? 'Success!' : 'Submit Payment'}
              </PayButton>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default PaymentModal;
