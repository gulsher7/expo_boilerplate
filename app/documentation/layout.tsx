import React from 'react';

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen py-8 bg-gray-50 dark:bg-gray-900">
      {children}
    </section>
  );
} 