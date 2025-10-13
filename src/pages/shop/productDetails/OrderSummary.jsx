import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../../redux/features/cart/cartSlice'

const OrderSummary = () => {
  const  dispatch = useDispatch()
  const products = useSelector((store) => store.cart.products)
  const {tax, taxRate, totalPrice, grandTotal, selectedItems} = useSelector((store) => store.cart)

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className='order-summary' >
        <div className='px-6 py-4 space-y-5 order-summary-1'>
          <h2 className="text-xl order-summary-heading">Order Summary</h2>
          <p>Selected Items: {selectedItems}</p>
          <p>Total Price NGN{totalPrice.toFixed(2)}</p>
          <p>Tax({taxRate * 100}%); NGN{tax.toFixed(2)}</p>
          <h3>Grand Total: NGN{grandTotal.toFixed(2)}</h3>
          <div className="">
            <button 
            onClick={(e) => {
              e.stopPropagation()
              handleClearCart()
            }}
            className='order-summary-btn1'>
              <span>Clear Cart</span>
              <i className='ri-delete-bin-7-line icon'></i>
            </button>
            <button className='order-summary-btn2'>
              <span>Proceed to Checkout</span>
              <i className='ri-bank-card-line icon'></i>
            </button>
          </div>
        </div>
    </div>
  )
}

export default OrderSummary