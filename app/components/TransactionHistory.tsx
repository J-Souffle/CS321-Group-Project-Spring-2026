import React from 'react';

export interface Contribution {
  id: string;
  date: string;
  amount: number;
  note?: string;
}

export interface SavingsGoal {
  id: string;
  name: string;
  targetDate: string;
  currentAmount: number;
  targetAmount: number;
  contributions: Contribution[];
}

const goals: SavingsGoal[] = [
  {
    id: '1',
    name: 'Emergency Fund',
    targetDate: '2026-12-31',
    currentAmount: 4200,
    targetAmount: 10000,
    contributions: [
      { id: 'c1', date: '2026-03-01', amount: 1000, note: 'Initial deposit' },
      { id: 'c2', date: '2026-03-15', amount: 500, note: 'Paycheck transfer' },
      { id: 'c3', date: '2026-03-28', amount: 3500, note: 'Tax refund' },
      { id: 'c12', date: '2026-04-02', amount: -800, note: 'Car repair' },
    ]
  },
  {
    id: '2',
    name: 'New Car Downpayment',
    targetDate: '2027-06-01',
    currentAmount: 2500,
    targetAmount: 8000,
    contributions: [
      { id: 'c4', date: '2026-01-10', amount: 1000 },
      { id: 'c5', date: '2026-02-10', amount: 750 },
      { id: 'c6', date: '2026-03-10', amount: 750 },
    ]
  },
  {
    id: '3',
    name: 'Japan Trip',
    targetDate: '2026-10-15',
    currentAmount: 3000,
    targetAmount: 4500,
    contributions: [
      { id: 'c7', date: '2025-11-01', amount: 1000 },
      { id: 'c8', date: '2025-12-25', amount: 500, note: 'Christmas money' },
      { id: 'c9', date: '2026-01-15', amount: 500 },
      { id: 'c10', date: '2026-02-15', amount: 600 },
      { id: 'c11', date: '2026-03-15', amount: 600 },
      { id: 'c13', date: '2026-04-05', amount: -200, note: 'Flight deposit' },
    ]
  }
];

export default function TransactionHistoryView() {
  const allTransactions = goals.flatMap(goal => 
    goal.contributions.map(c => ({ ...c, goalName: goal.name }))
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="flex flex-col space-y-4 animate-in fade-in duration-300">
      {allTransactions.map(t => {
        const isPositive = t.amount >= 0;
        return (
          <div key={t.id} className="flex flex-row justify-between items-center border-b border-gray-200 pb-4 last:border-0">
            <div className="flex flex-col">
              <span className="text-gray-900 font-medium">
                {new Date(t.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="text-gray-500 text-sm">
                {t.note || (isPositive ? 'Contribution' : 'Withdrawal')}
              </span>
            </div>
            <div className={`font-bold text-lg ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? '+' : '-'}${Math.abs(t.amount).toLocaleString()}
            </div>
          </div>
        );
      })}
      {allTransactions.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No transactions found.
        </div>
      )}
    </div>
  );
}
