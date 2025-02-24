import React from 'react';
import './Order.css';
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>

      {/* Loop through basket items and display each CheckoutProduct */}
      {order.data.basket?.map((item, index) => (
        <CheckoutProduct
          key={index} // Use index as a key or you can use item.id if unique
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
            <h3 className='order__total'> Order total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount /100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={'$'}
        />
    </div>
  );
}

export default Order;
