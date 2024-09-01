# BARK Payments Dapp

Bootstrapped from [crowdfunding-platform](https://github.com/barkprotocol/crowdfunding-platform.git)

![Thumbnail](./assets/thumbnail.png)

**BARK Payments** is a modern payment processing and DeFi platform designed to simplify transactions for businesses and consumers. This project provides a demo featuring animated notifications and a payment form component to showcase typical use cases.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Frameworks](#frameworks)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [AnimatedListDemo](#animatedlistdemo)
  - [PaymentForm](#paymentform)
- [Wallet](#wallet)
- [Merchant Dashboard](#merchant-dashboard)
- [User Dashboard](#user-dashboard)
- [Contributing](#contributing)
- [License](#license)

## Overview

**BARK Payments** combines modern payment processing with DeFi functionalities, aiming to streamline transactions and offer advanced financial services. This project demonstrates practical implementations with animated notifications and a user-friendly payment form component.

## Features

- **Animated Notifications**: View a list of notifications with smooth animations.
- **Payment Form**: A simple form for processing payments.

## Frameworks

- **Next.js 14**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Solana/wen3.js**: JavaScript library for integrating with the Solana blockchain.
- **Shadcn/UI**: UI components for building modern interfaces.
- **Lucide Icons**: A set of beautiful, open-source icons.
- **Tanstack Query**: Data fetching and state management library.
- **Neon Database**: Serverless database for scalable applications.
- **NextAuth (with Google OAuth)**: Authentication library for Next.js applications with Google OAuth integration.

## BARK Token (BARK) Use Cases

The BARK token can be utilized across various domains, enhancing functionality and user engagement within its ecosystem:

- **Payment Solutions**
- **Governance and Voting**
- **Staking and Yield Farming**
- **DeFi and Financial Services**
- **Incentives and Rewards**
- **Gaming and NFTs**
- **Charity and Fundraising**
- **Access and Membership**
- **Identity and Authentication**
- **Interoperability**

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/barkprotocol/bark-payments-monorepo.git
   cd bark-payments-monorepo
   ```

2. **Install dependencies:**

   Using `pnpm`:

   ```bash
   pnpm install
   ```

   or using `yarn`:

   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add your environment variables. Example:

   ```dotenv
   DATABASE_URL=your-database-url
   NEXTAUTH_SECRET=your-nextauth-secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server:**

   Using `pnpm`:

   ```bash
   pnpm run dev
   ```

   or using `yarn`:

   ```bash
   yarn dev
   ```

   Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- **Notifications List**: The `AnimatedListDemo` component displays a list of notifications with animated transitions.
- **Payment Form**: The `PaymentForm` component is used to collect payment details.

## Components

### AnimatedListDemo

This component displays a list of notifications with smooth animations. It also includes the `PaymentForm` component.

#### Example Usage:

```tsx
import AnimatedListDemo from '@/components/animated-list-demo';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to BARK Payments</h1>
      <AnimatedListDemo />
    </div>
  );
}
```

**Key Features:**

- **Notification List**: Displays notifications with various types (e.g., payment received, user signed up).
- **Animation**: Notifications scale up on hover and have a shadow effect.
- **Theming**: Supports light and dark modes.

### PaymentForm

This component allows users to enter payment details and is designed to be user-friendly.

#### Example Usage:

```tsx
import PaymentForm from '@/components/payment-form';

export default function CheckoutPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <PaymentForm />
    </div>
  );
}
```

**Features:**

- **Form Fields**: Includes fields for payment information.
- **Validation**: Handles basic validation and user input.

## Wallet

The Wallet component allows users to manage their digital assets. It provides functionalities to view balances, send tokens, and view transaction history.

### Key Features:

- **Balance Overview**: Displays the current balance of various tokens.
- **Send Tokens**: Functionality to send tokens to other addresses.
- **Transaction History**: View and filter past transactions.

### Example Usage:

```tsx
import Wallet from '@/components/wallet';

export default function WalletPage() {
  return (
    <div>
      <h1>Your Wallet</h1>
      <Wallet />
    </div>
  );
}
```

## Merchant Dashboard

The Merchant Dashboard provides a suite of tools for businesses to manage payments, view transaction history, and track earnings.

### Key Features:

- **Payment Management**: View and manage incoming and outgoing payments.
- **Transaction History**: Detailed history of all transactions.
- **Earnings Overview**: Track earnings and transaction fees.

### Example Usage:

```tsx
import MerchantDashboard from '@/components/merchant-dashboard';

export default function MerchantPage() {
  return (
    <div>
      <h1>Merchant Dashboard</h1>
      <MerchantDashboard />
    </div>
  );
}
```

## User Dashboard

The User Dashboard provides users with a personalized interface to manage their account, view transaction history, and interact with the platform.

### Key Features:

- **Account Management**: Update account details and manage preferences.
- **Transaction History**: View a comprehensive list of all transactions.
- **Notifications**: Access recent notifications and updates.

### Example Usage:

```tsx
import UserDashboard from '@/components/user-dashboard';

export default function UserPage() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <UserDashboard />
    </div>
  );
}
```

## Contributing

We welcome contributions to improve BARK Payments. Please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**

   ```sh
   git checkout -b feature/your-feature-name
   ```

3. **Commit your changes:**

   ```sh
   git commit -m "Describe your changes"
   ```

4. **Push to the branch:**

   ```sh
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For more information, visit the [BARK Payments Documentation](https://github.com/barkprotocol/bark-payments-ui/doc).
