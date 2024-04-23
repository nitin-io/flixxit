import { loadStripe } from '@stripe/stripe-js';
import { axiosWrapper } from '../../helpers/axios-wrapper';
import { useEffect, useState } from 'react';
import CheckoutForm from '../../components/CheckoutForm.jsx';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    axiosWrapper.get('/payments/config').then(({ publishable_key }) => {
      setStripePromise(loadStripe(publishable_key));
    });
    // setStripePromise(loadStripe());
  }, []);

  useEffect(() => {
    axiosWrapper
      .post('/payments/create-intent')
      .then(({ client_secret }) => setClientSecret(client_secret));
  }, []);

  return (
    <div>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
