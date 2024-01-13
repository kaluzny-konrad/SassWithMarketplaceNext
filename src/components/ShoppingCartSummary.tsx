import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";

type Props = {
  isMounted: boolean;
  isLoading: boolean;
  itemsLength: number;
  cartTotal: number;
  handleCheckout: () => void;
};

export default function ShoppingCartSummary({
  isMounted,
  itemsLength,
  isLoading,
  cartTotal,
  handleCheckout,
}: Props) {
  return (
    <section className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <div className="text-base font-medium text-gray-900">
            {isMounted ? (
              formatPrice(cartTotal)
            ) : (
              <Loader2Icon className="h-4 w-4 animate-spin text-muted-foreground" />
            )}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button
          disabled={!isMounted || itemsLength === 0 || isLoading}
          onClick={() => handleCheckout()}
          className="w-full"
          size="lg"
        >
          {isLoading ? (
            <Loader2Icon className="w-4 h-4 animate-spin mr-1.5" />
          ) : null}
          Checkout
        </Button>
      </div>
    </section>
  );
}
