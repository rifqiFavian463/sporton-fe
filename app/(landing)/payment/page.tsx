import { PaymentOptions } from "../components/payment/payment-options";
import { PaymentSteps } from "../components/payment/payment-steps";

function Payment() {
  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-20">
        <div className="text-5xl font-bold text-center mb-11">Payment</div>
        <div className="grid grid-cols-2 gap-14">
          <PaymentOptions />
          <PaymentSteps />
        </div>
      </div>
    </main>
  );
}

export default Payment;
