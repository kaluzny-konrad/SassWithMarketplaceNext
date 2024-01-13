"use client";

import { Product } from "@/payload-types";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";

type Props = {
  product: Product | null;
  index: number;
};

export default function ProductListing({ product, index }: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 * index);
    return () => clearTimeout(timer);
  }, [index]);

  if (!product || !isVisible) return <ProductPlaceholder />;

  if (isVisible && product) {
    return (
      <Link
        href={`/product/${product.id}`}
        className={cn("invisible h-full w-full cursor-pointer group/main", {
          "visible animate-in fade-in-5": isVisible,
        })}
      >
        <div className="flex flex-col w-full">
          <h3 className="mt-4 text-sm font-medium text-gray-700">
            {product.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-gray-900">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    );
  }

  return <div>ProductListing</div>;
}

const ProductPlaceholder = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden bg-zinc-100 aspect-square rounded-xl">
        <Skeleton className="w-full h-full" />
      </div>
      <Skeleton className="w-2/3 h-4 mt-4 rounded-lg" />
      <Skeleton className="w-16 h-4 mt-2 rounded-lg" />
      <Skeleton className="w-12 h-4 mt-2 rounded-lg" />
    </div>
  );
};
