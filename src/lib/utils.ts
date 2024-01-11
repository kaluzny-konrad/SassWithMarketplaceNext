import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: 'PLN' | 'USD' | 'EUR' | 'GBP' | 'BDT' 
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'PLN', notation = 'compact' } = options

  const numericPrice =
    typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}

export function absoluteUrl(path: string) {
  if (typeof window !== "undefined") return path;
  if (process.env.NEXT_PUBLIC_SERVER_URL) return `https://${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
  return `http://localhost:${process.env.PORT ?? 3000}${path}`;
}
