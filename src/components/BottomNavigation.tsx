import React from 'react';
import { Calendar, ShoppingCart, Heart, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface BottomNavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNavigation({ currentTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: 'menu', icon: Calendar, label: 'メニュー' },
    { id: 'shopping', icon: ShoppingCart, label: '買い物リスト' },
    { id: 'favorites', icon: Heart, label: 'お気に入り' },
    { id: 'guide', icon: HelpCircle, label: '使い方' },
  ];

  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 pb-safe pt-2 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center p-2 min-w-[72px] rounded-xl transition-colors ${
              currentTab === id 
                ? 'text-[#007AFF]' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Icon className="h-6 w-6" strokeWidth={1.5} />
            <span className="text-xs mt-1">{label}</span>
            {currentTab === id && (
              <motion.div
                layoutId="bottomNav"
                className="absolute bottom-0 w-12 h-0.5 bg-[#007AFF] rounded-full"
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}