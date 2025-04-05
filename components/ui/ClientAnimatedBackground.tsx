'use client';

import dynamic from 'next/dynamic';

const AnimatedBackground = dynamic(
  () => import('@/components/ui/AnimatedBackground'),
  { ssr: false }
);

export default function ClientAnimatedBackground() {
  return <AnimatedBackground />;
}
