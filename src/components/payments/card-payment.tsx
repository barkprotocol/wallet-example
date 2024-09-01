'use client';

import React from 'react';
import { Card } from '@/components/ui/card'; // Adjust path if necessary
import { Progress } from '@/components/ui/progress'; // Adjust path if necessary
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface CardPaymentsProps {
  imageLink: string;
  title: string;
  raised: number;
  goal: number;
  pdaAddress: string;
  currency: string;
  payments: number; // Assuming 'payments' is the number of transactions
  balance: number;
  total: number;
  fee: number; // Fee percentage or amount
}

export const CardPayments = ({
  imageLink,
  title,
  raised,
  goal,
  pdaAddress,
  currency,
  payments,
  balance,
  total,
  fee,
}: CardPaymentsProps) => {
  const pathname = usePathname();
  const progressPercentage = (raised / goal) * 100;
  const feePercent = fee; // Assuming fee is a percentage

  return (
    <Link
      href={`/${pathname.includes('/dashboard') ? 'dashboard/' : ''}payments/${pdaAddress}`}
      className="flex flex-col gap-4 rounded-md border p-4 shadow-md dark:shadow-gray-800 hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 w-full overflow-hidden rounded-md">
        <Image
          src={imageLink}
          alt="Payment image"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>

      <p className="text-lg font-semibold">{title}</p>

      <div className="flex flex-col gap-4">
        <Progress value={progressPercentage} max={100} />

        <div className="flex items-center justify-between text-sm font-medium">
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Raised</span>
            <span className="text-gray-900">
              {raised} {currency}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Goal</span>
            <span className="text-gray-900">
              {goal} {currency}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm font-medium">
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Payments</span>
            <span className="text-gray-900">{payments}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Balance</span>
            <span className="text-gray-900">
              {balance} {currency}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Total</span>
            <span className="text-gray-900">
              {total} {currency}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Fee</span>
            <span className="text-gray-900">
              {feePercent}%
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
