'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { WalletIcon, CoinsIcon, ArrowRightLeftIcon, SendIcon } from 'lucide-react'

export default function Component() {
  const [isConnected, setIsConnected] = useState(false)
  const [solBalance, setSolBalance] = useState(0)
  const [barkBalance, setBarkBalance] = useState(0)
  const [transactions, setTransactions] = useState([])
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')

  const connectWallet = () => {
    setIsConnected(true)
    setSolBalance(Math.random() * 10)
    setBarkBalance(Math.random() * 1000)
    setTransactions([
      { id: 1, amount: 5, type: 'Received', token: 'BARK' },
      { id: 2, amount: 0.1, type: 'Sent', token: 'SOL' },
      { id: 3, amount: 20, type: 'Received', token: 'BARK' },
    ])
  }

  const sendTransaction = () => {
    if (amount && recipient) {
      setTransactions([
        { id: Date.now(), amount: parseFloat(amount), type: 'Sent', token: 'BARK' },
        ...transactions
      ])
      setBarkBalance(prev => prev - parseFloat(amount))
      setAmount('')
      setRecipient('')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Solana Wallet Mockup</CardTitle>
          <CardDescription>Simulated Solana wallet with BARK token</CardDescription>
        </CardHeader>
        <CardContent>
          {!isConnected ? (
            <Button onClick={connectWallet} className="w-full">
              <WalletIcon className="mr-2 h-4 w-4" /> Connect Wallet
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">SOL Balance:</span>
                <span className="flex items-center">
                  <CoinsIcon className="mr-2 h-4 w-4" />
                  {solBalance.toFixed(4)} SOL
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">BARK Balance:</span>
                <span className="flex items-center">
                  <CoinsIcon className="mr-2 h-4 w-4" />
                  {barkBalance.toFixed(2)} BARK
                </span>
              </div>
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Recipient address"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Amount (BARK)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <Button onClick={sendTransaction} className="w-full">
                  <SendIcon className="mr-2 h-4 w-4" /> Send BARK
                </Button>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Recent Transactions:</h3>
                <ul className="space-y-2">
                  {transactions.map((tx) => (
                    <li key={tx.id} className="flex items-center justify-between">
                      <span className={`flex items-center ${tx.type === 'Sent' ? 'text-red-500' : 'text-green-500'}`}>
                        <ArrowRightLeftIcon className="mr-2 h-4 w-4" />
                        {tx.type} {tx.amount} {tx.token}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          This is a mockup. No real blockchain interactions are occurring.
        </CardFooter>
      </Card>
    </div>
  )
}