'use client';

import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件，判断何时显示按钮
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true); // 当滚动超过200px时显示按钮
      } else {
        setIsVisible(false); // 否则隐藏按钮
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 清理事件监听器
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 点击按钮返回顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 rounded-full bg-[#F3E7DB] text-slate-800 z-50 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
