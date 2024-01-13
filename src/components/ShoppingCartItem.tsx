import { formatPrice } from "@/lib/utils";
import { Product } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { XIcon, CheckIcon } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

type Props = {
    product: Product;
};

export default function ShoppingCartItem({product}: Props) {
  const { removeFromCart } = useCart();

  return (
    <li key={product.id} className="flex py-6 sm:py-10">

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <Link
                  href={`/product/${product.id}`}
                  className="font-medium text-gray-700 hover:text-gray-800"
                >
                  {product.name}
                </Link>
              </h3>
            </div>

            <p className="mt-1 text-sm font-medium text-gray-900">
              {formatPrice(product.price)}
            </p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9 w-20">
            <div className="absolute right-0 top-0">
              <Button
                aria-label="remove product"
                onClick={() => removeFromCart(product.id)}
                variant="ghost"
              >
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
