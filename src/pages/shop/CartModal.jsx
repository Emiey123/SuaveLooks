// import React from 'react'
// import OrderSummary from './productDetails/OrderSummary'
// import { useDispatch } from 'react-redux'
// import { removeFromCart, updateQuantity } from '../../redux/features/cart/cartSlice'

// const CartModal = ({products, isOpen, onClose}) => {
//   const dispatch = useDispatch()

//   const handleQuantity = (type, id) => {
//     const payload = {type, id}
//     dispatch(updateQuantity(payload))
//   }

//   const handleRemove = (e, id) => {
//     dispatch(removeFromCart({id}))
//   }
//   return (
   

//     <div 
//     className={`cart-modal-overlay ${isOpen ? 'show' : ''}`}
//       style={{transition: 'opacity 300ms ease-in-out'}}
//     >
//       <div className="cart-modal-content">
//         <div className="cart-modal" >
//           <h2>My Bag</h2>
//           <i 
//             className='ri-close-large-fill cart-modal-i' 
//             onClick={onClose}>
//           </i>
//         </div>
        
//         <div className="">
//           {
//             products.length === 0 ? (<div>Your bag is empty</div>) : (
//               products.map((item, index) =>(
//                 <div key={index} className='cart-modal-item'>
//                   <div className='cart-modal-item-content'>
//                     <span className='cart-modal-index'>0{index + 1}</span>
//                     <img src={item.image || 'default-image.jpg'} alt={item.name || 'Product'}/>
//                   </div>
//                   <div className="cart-modal-item-price">
//                     <h5 className='text-lg font-medium'>{item.name}</h5>
//                     <p className='text-grey-600 text-sm'>NGN {Number(item.price).toFixed()}</p>
//                   </div>

//                   <div className="cart-modal-quantity flex flex-row md:justify-start justify-end items-center">
//                     <button className='cart-modal-quantity-btn'
//                     onClick={() => handleQuantity('decrement', item.id)}
//                     >-</button>
//                     <span>{item.quantity}</span>
//                     <button

//                     className='cart-modal-quantity-btn'
//                     onClick={() => handleQuantity('increment', item.id)}
//                     >+</button>
//                   </div>

//                   <div className="cart-modal-delete">
//                     <span
//                       onClick={(e) => handleRemove(e, item.id)} 
//                       className='text-red-500 hover:text-red-800 text-2xl'
//                       ><i className='ri-delete-bin-6-fill'></i></span>
//                   </div>
//                 </div>
//               ))
//             )
            
//           }
//         </div>
        

//         {/* calculation */}

//         {
//           products.length > 0 && (
//             <OrderSummary />
//           )
//         }
        
//       </div>
//     </div>
//   )
// }

// export default CartModal

import React from 'react';
import OrderSummary from './productDetails/OrderSummary';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/features/cart/cartSlice';

const CartModal = ({ products, isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleQuantity = (type, id) => {
    console.log(`Updating quantity: ${type} for product ID: ${id}`);
    const payload = { type, id };
    dispatch(updateQuantity(payload));
  };

  const handleRemove = (e, id) => {
    console.log(`Removing product ID: ${id}`);
    dispatch(removeFromCart({ id }));
  };

  console.log('Products in CartModal:', products);

  return (
    <div 
      className={`cart-modal-overlay ${isOpen ? 'show' : ''}`}
      style={{ transition: 'opacity 300ms ease-in-out' }}
    >
      <div className="cart-modal-content">
        <div className="cart-modal">
          <h2>My Bag</h2>
          <i 
            className="ri-close-large-fill cart-modal-i" 
            onClick={onClose}
          ></i>
        </div>
        <div className="">
          {products.length === 0 ? (
            <div>Your bag is empty</div>
          ) : (
            products.map((item, index) => (
              <div key={index} className="cart-modal-item">
                <div className="cart-modal-item-content">
                  <span className="cart-modal-index">0{index + 1}</span>
                  <img 
                    src={item.image ? `/src/assets/Images/${item.image}` : `/src/assets/Images/hero.png`} 
                    alt={item.name || 'Product'} 
                    className="cart-modal-item-image"
                    style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '10px', marginRight: '10px'}}
                  />
                </div>
                <div className="cart-modal-item-price">
                  <h5 className="text-lg font-medium">{item.name}</h5>
                  <p className="text-grey-600 text-sm">NGN {Number(item.price).toFixed()}</p>
                </div>
                <div className="cart-modal-quantity flex flex-row md:justify-start justify-end items-center">
                  <button 
                    className="cart-modal-quantity-btn"
                    onClick={() => handleQuantity('decrement', item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="cart-modal-quantity-btn"
                    onClick={() => handleQuantity('increment', item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-modal-delete">
                  <span
                    onClick={(e) => handleRemove(e, item.id)}
                    className="text-red-500 hover:text-red-800 text-2xl"
                  >
                    <i className="ri-delete-bin-6-fill"></i>
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
        {products.length > 0 && <OrderSummary />}
      </div>
    </div>
  );
};

export default CartModal;