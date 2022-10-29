const initialState = {
    addedItems:[],
    total: 0
}

const cartReducer= (state = initialState , action) => {
    switch(action.type) {

        /* ADD TO CART */
        case 'ADD_TO_CART':
            {
                /* actions.products returns all the products */ 
                let addedItem = action.products.find(item=> item.id === action.id)

                /*check if id already exists in the addedItems*/
               let existed_item= state.addedItems.find(item=> action.id === item.id)
               if(existed_item){
                  addedItem.quantity += 1 
                   return{...state, total: state.total + addedItem.price  }
               }
               else{
                  addedItem.quantity = 1;
                  /* compute total */
                  let newTotal = state.total + addedItem.price 
                  return{...state,addedItems: [...state.addedItems, addedItem],total : newTotal}
              }
            }

        /* INCREASE QUANTITY */
        case 'ADD_QUANTITY':{

            let addedItem = action.products.find(item=> item.id === action.id)
            addedItem.quantity += 1 
            let newTotal = state.total + addedItem.price
            return{
                ...state,
                total: newTotal
            }

        }

        
        /* DECREASE QUANTITY */
        case 'SUB_QUANTITY':{

            let addedItem = action.products.find(item=> item.id === action.id) 
            
            /* remove it if the quantity is zero,  */ 
            if(addedItem.quantity === 1){
                let new_items = state.addedItems.filter(item=>item.id !== action.id)
                let newTotal = state.total - addedItem.price
                return{ ...state, addedItems: new_items, total: newTotal }
            }
            else {
                addedItem.quantity -= 1
                let newTotal = state.total - addedItem.price
                return{...state,total: newTotal}
            }
        }

        /* REMOVE ITEM */
        case 'REMOVE_TO_CART':{
            let itemToRemove= state.addedItems.find(item=> action.id === item.id)
            let new_items = state.addedItems.filter(item=> action.id !== item.id)
            
            /* compute total */
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
            return{ ...state,addedItems: new_items,total: newTotal}
        }


        /* OPTIONAL: SHIPPING, it can be anything, just for demostration, I use 10 dollars*/
        case 'ADD_SHIPPING':{
            return{ ...state,total: state.total + 10 }

        }

        case 'SUB_SHIPPING':{
            return{ ...state,total: state.total - 10}
        }

        default:
            return state
    }

}


export default (cartReducer)