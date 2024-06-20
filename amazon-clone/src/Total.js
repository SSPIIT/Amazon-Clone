// import React from 'react'
// import './Total.css';
// /*---------------------------------------------------------------------*/
// import CurrencyFormat from 'react-currency-format';
// /*---------------------------------------------------------------------*/
// // import reducer, {initialState} from "./reducer";
// import { useStateValue } from './StateProvider';


// function Total() {
//   const [{cart}, dispatch] = useStateValue();
//   const getCartTotal = (cart)=> {
//     /*---------------------------------------------------------------------*/
//     cart.reduce((sum, item) => sum + item.price, 0);
//     /*---------------------------------------------------------------------*/
//   }
//   console.log({value});
//   return (
//     <div>
      
//       <CurrencyFormat
//       renderText={(value)=>(
//         <>
//         <p className='total_subtotal'>
//             Subtotal({cart.length} items): <strong>{`${value}`}</strong>
//         </p>
//         <p className='total_isAGift'>
//             <input type='checkbox'/>
//                 This order contains a gift
//         </p>
//         </>
//       )}
//       /*---------------------------------------------------------------------*/
//       decimalScale={2}
//       value={getCartTotal(cart)}
//       displayType={'text'}
//       thousandSeparator={true}
//       prefix={'$'}
//       /*---------------------------------------------------------------------*/
//       />
//       <div>
//       <button className='total_button'>Proceed to Buy</button>

//       </div>
      
//     </div>
//   )
// }

// export default Total


import React from 'react';
import './Total.css';
/*---------------------------------------------------------------------*/
import CurrencyFormat from 'react-currency-format';
/*---------------------------------------------------------------------*/
import { useStateValue } from './StateProvider';

function Total() {
  const [{ cart }, dispatch] = useStateValue();

  const getCartTotal = (cart) => {
    return cart.reduce((sum, item) => sum + Number(item.price), 0);
  };

  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className='total_subtotal'>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <p className='total_isAGift'>
              <input type='checkbox' />
              This order contains a gift
            </p>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      <div>
        <button className='total_button'>Proceed to Buy</button>
      </div>
    </div>
  );
}

export default Total;
