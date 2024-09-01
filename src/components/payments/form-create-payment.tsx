'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PaymentFormData } from '@/types/payments';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectOption } from '@/components/ui/select';
import { PaymentMethod } from '@/types/payments';

// Dummy data for payment methods and currencies
const paymentMethods: PaymentMethod[] = [
  { id: '1', type: 'credit_card', name: 'Credit Card', details: '**** **** **** 1234' },
  { id: '2', type: 'debit_card', name: 'Debit Card', details: '**** **** **** 5678' },
  { id: '3', type: 'crypto', name: 'Crypto Wallet', details: '0xabc123...' },
  { id: '4', type: 'bank_transfer', name: 'Bank Transfer', details: 'Account Number: 123456789' },
];

const currencies: string[] = ['USD', 'EUR', 'SOL', 'USDC', 'BARK', 'SPL'];

const FormCreatePayment: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormData>({
    defaultValues: {
      amount: 0,
      currency: 'USD',
      paymentMethod: paymentMethods[0],
      description: '',
    },
  });

  const onSubmit = async (data: PaymentFormData) => {
    // Handle payment processing here
    console.log('Payment Data:', data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Create Payment</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
          <Input
            id="amount"
            type="number"
            step="0.01"
            {...register('amount', { required: 'Amount is required' })}
            className="mt-1 block w-full"
            placeholder="Enter amount"
          />
          {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
        </div>

        <div>
          <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
          <Select
            id="currency"
            {...register('currency', { required: 'Currency is required' })}
            className="mt-1 block w-full"
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
          />
        </div>

        <Button type="submit" className="mt-4">Submit Payment</Button>
      </form>
    </div>
  );
};

export default FormCreatePayment;
