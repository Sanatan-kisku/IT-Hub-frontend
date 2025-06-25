import React from 'react';
import HeroSection from '../components/HeroSection';
import NoticeBoard from '../components/NoticeBoard';
import ProfileSection from '../components/ProfileSection';
import QuickLinks from '../components/QuickLinks';
import StudentCorner from '../components/StudentCorner';
import Leaderboard from '../components/Leaderboard';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NoticeBoard />
      <ProfileSection />
      <QuickLinks />
      <StudentCorner />
      <Leaderboard />
    </>
  );
}
