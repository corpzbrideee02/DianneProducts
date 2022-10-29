const productsReducer= (state = [] , action) => {

    switch(action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return action.payload.products

        default:
            return state
    }

}

export default productsReducer