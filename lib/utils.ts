import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function generateCustomId() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const random = Math.random;

  return (
    letters.charAt((random() * 26) | 0) +
    letters.charAt((random() * 26) | 0) +
    letters.charAt((random() * 26) | 0) +
    ((random() * 900 + 100) | 0).toString() +
    letters.charAt((random() * 26) | 0) +
    letters.charAt((random() * 26) | 0)
  );
}
