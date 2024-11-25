import React from 'react';
import { Calendar, ShoppingCart, Heart, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ currentTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'menu', icon: Calendar, label: 'メニュー' },
    { id: 'shopping', icon: ShoppingCart, label: '買い物リスト' },
    { id: 'favorites', icon: Heart, label: 'お気に入り' },
    { id: 'guide', icon: HelpCircle, label: '使い方' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-[88px] z-40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {tabs.map(({ id, icon: Icon, label }) => (
            <motion.button
              key={id}
              onClick={() => onTabChange(id)}
              className={`
                relative flex items-center gap-2 py-4 px-4 transition-colors
                ${currentTab === id ? 'text-[#007AFF]' : 'text-gray-400 hover:text-gray-600'}
              `}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Icon className="h-5 w-5" strokeWidth={1.5} />
              <span className="text-sm font-medium">{label}</span>
              {currentTab === id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#007AFF]"
                  transition={{ 
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
}