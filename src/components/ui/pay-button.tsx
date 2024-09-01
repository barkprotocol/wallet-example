'use client';

import React from 'react';
import { cn } from '@/lib/utils'; // Utility function to conditionally combine class names
import { Button } from '@/components/ui/button'; // Reusable Button component
import { Spinner } from '@/components/ui/spinner'; // Reusable Spinner component for loading state

interface PayButtonProps {
  onClick: () => void; // Function to handle button click
  isLoading?: boolean; // Optional prop to indicate loading state
  error?: string; // Optional prop to display error messages
  success?: boolean; // Optional prop to indicate success state
}

export const PayButton: React.FC<PayButtonProps> = ({ onClick, isLoading = false, error, success = false }) => {
  return (
    <div className="relative">
      <Button
        onClick={onClick}
        className={cn(
          'flex items-center justify-center p-2 rounded-md border text-white transition-colors duration-300',
          isLoading ? 'bg-gray-500 cursor-not-allowed' : success ? 'bg-green-500' : 'bg-blue-500'
        )}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Spinner className="mr-2" /> {/* Show spinner when loading */}
            <span>Loading...</span>
          </>
        ) : success ? (
          'Payment Successful'
        ) : (
          'Pay Now'
        )}
      </Button>
      {error && (
        <div className="mt-2 text-red-500 text-sm">
          {error} {/* Display error message */}
        </div>
      )}
    </div>
  );
};
