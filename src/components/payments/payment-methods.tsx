'use client';

import React from 'react';
import { Card } from '@/components/ui/card'; // Ensure this is correctly implemented

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;  // URL or path to an icon/image representing the payment method
}

interface PaymentMethodsProps {
  methods: PaymentMethod[];
}

export const PaymentMethods = ({ methods }: PaymentMethodsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {methods.map((method) => (
        <Card key={method.id} className="flex items-center p-4 shadow-md">
          <img src={method.icon} alt={method.name} className="w-8 h-8 mr-4" />
          <p className="font-semibold">{method.name}</p>
        </Card>
      ))}
    </div>
  );
};
