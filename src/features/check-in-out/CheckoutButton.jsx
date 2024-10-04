import Button from "../../ui/Button";
import { useCheckOut } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckOut } = useCheckOut();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
