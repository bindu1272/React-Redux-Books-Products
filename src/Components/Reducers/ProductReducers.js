const ProductReducers = (state=[],action)=>{
    switch(action.type){
        case 'ADDPRODUCT' :
            let products = [...state];
            products.push(action.payload)
            return products;
            break;
    }
    return state;
}
export default ProductReducers;
