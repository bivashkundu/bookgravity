'use client';

import React from 'react';
import DashboardWrapper from '@/layout/DashboardWrapper/DashboardWrapper';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
