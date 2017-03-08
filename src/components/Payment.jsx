import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

class Payment extends React.Component{
  
  onToken(token){
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }


  render() {
    return (
      
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_live_2GS7F8El7sjS1FyrI8PpJGhJ"
        name="Three Comma Co."
        description="Big Data Stuff"
        image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
        ComponentClass="div"
        panelLabel="Give Money"
        amount={1000000}
        currency="USD"
        locale="auto"
        email="info@vidhub.co"
     />
    )
  }
}

export default Payment;
