import React from 'react';
import { Container } from '@/components/ui/container';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';

interface PaymentLayoutProps {
  children: React.ReactNode; // To render nested components or pages
}

const PaymentLayout: React.FC<PaymentLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header /> {/* Render the header component */}
      <main className="flex-1">
        <Container>
          {children} {/* Render nested components or pages */}
        </Container>
      </main>
      <Footer /> {/* Render the footer component */}
    </div>
  );
};

export default PaymentLayout;
