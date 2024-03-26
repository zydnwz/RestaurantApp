import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverlay = () => {
  return (
    <div className={classes.modal}>
      <CartItem name="Item 1" price="$10" quantity={2} />
      <CartItem name="Item 2" price="$15" quantity={1} />
      <div>
        <span>Total Amount:</span>
        <span>$50</span>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById('cart-overlay');

const Cart = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Cart;
