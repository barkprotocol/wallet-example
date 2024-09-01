'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card'; // Ensure you have a Card component
import { Spinner } from '@/components/ui/spinner'; // Ensure you have a Spinner component for loading state

interface PaymentProcessingProps {
  isProcessing: boolean; // Indicates if payment is being processed
  isSuccess?: boolean; // Optional prop to indicate success state
  error?: string; // Optional prop to display error messages
}

export const PaymentProcessing: React.FC<PaymentProcessingProps> = ({ isProcessing, isSuccess, error }) => {
  return (
    <Card className="p-4 shadow-lg bg-white">
      <div className="flex flex-col items-center">
        {isProcessing && (
          <div className="flex items-center justify-center mb-4">
            <Spinner className="mr-2" /> {/* Spinner displayed while processing */}
            <span>Processing your payment...</span> {/* Display loading text */}
          </div>
        )}
        {isSuccess && !isProcessing && (
          <div className="text-green-500 text-center">
            Payment was successful! {/* Display success message */}
          </div>
        )}
        {error && !isProcessing && (
          <div className="text-red-500 text-center">
            {error} {/* Display error message */}
          </div>
        )}
      </div>
    </Card>
  );
};
