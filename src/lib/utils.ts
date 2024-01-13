import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Metadata } from "next"

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

export function constructMetadata({
  title = 'YourName - the marketplace for digital assets',
  description = 'YourName is an marketplace.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@tutorialfromyt',
    },
    icons,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL!),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

export function absoluteUrl(path: string) {
  if (typeof window !== "undefined") return path;
  return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
}
