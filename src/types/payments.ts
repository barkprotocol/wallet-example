// Represents a single payment method
export interface PaymentMethod {
    id: string;
    type: 'credit_card' | 'debit_card' | 'crypto' | 'bank_transfer' | 'paypal' | 'apple_pay' | string; // Added common types
    name: string;
    details: string; // e.g., card number (partially masked), account number, etc.
}

// Represents a single payment transaction
export interface PaymentTransaction {
    id: string;
    amount: number; // Amount in the smallest currency unit (e.g., cents for USD, lamports for SOL)
    currency: 'USD' | 'EUR' | 'SOL' | 'USDC' | 'BARK' | 'SPL' | string; // Added custom and new currencies
    date: string; // ISO 8601 date string
    status: 'pending' | 'completed' | 'failed' | 'refunded';
    method: PaymentMethod;
    description?: string; // Optional description for the transaction
}

// Represents a user's payment history
export interface PaymentHistory {
    transactions: PaymentTransaction[];
    totalSpent: number; // Total spent in the smallest currency unit
}

// Represents the payment form data
export interface PaymentFormData {
    amount: number; // Amount to be paid in the smallest currency unit
    currency: 'USD' | 'EUR' | 'SOL' | 'USDC' | 'BARK' | 'SPL' | string; // Added custom and new currencies
    paymentMethod: PaymentMethod;
    description?: string; // Optional description for the payment
}

// Represents the payment summary
export interface PaymentSummary {
    totalAmount: number; // Total amount in the smallest currency unit
    currency: 'USD' | 'EUR' | 'SOL' | 'USDC' | 'BARK' | 'SPL' | string; // Added custom and new currencies
    fee: number; // Transaction fee in the smallest currency unit
    netAmount: number; // Total amount minus fees in the smallest currency unit
}

// Represents a payment type for different payment methods
export interface PaymentType {
    type: 'BARK' | 'SEND' | 'SOL' | 'USDC' | 'SPL' | string; // Added custom types
    description: string;
}
