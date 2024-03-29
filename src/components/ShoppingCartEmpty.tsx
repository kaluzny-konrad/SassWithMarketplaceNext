type Props = {};

export default function ShoppingCartEmpty({}: Props) {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-1">
      <h3 className="font-semibold text-2xl">Your cart is empty</h3>
      <p className="text-muted-foreground text-center">
        Whoops! Nothing to show here yet.
      </p>
    </div>
  );
}
