'use client';

import React, { useContext } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SessionContext } from '../wallet/sessions';
import { NetworkName } from '@/types';

export const SelectNetwork = () => {
  const { setSelectedNetwork } = useContext(SessionContext);

  return (
    <Select
      defaultValue={NetworkName.Devnet}
      onValueChange={(value) => setSelectedNetwork(value)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Network" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Network</SelectLabel>
          <SelectItem value={NetworkName.Mainnet}>
            {NetworkName.Mainnet}
          </SelectItem>
          <SelectItem value={NetworkName.Devnet}>
            {NetworkName.Devnet}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
