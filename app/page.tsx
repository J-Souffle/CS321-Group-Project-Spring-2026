import React from 'react';
import TransactionHistoryView from './components/TransactionHistory';

export default function page() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-gray-900">
      <main className="p-4 sm:p-8 max-w-5xl mx-auto w-full">
        <TransactionHistoryView />
      </main>
    </div>
  );
}
