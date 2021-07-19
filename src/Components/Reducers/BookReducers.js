const BookReducers = (state=[],action)=>{
    switch(action.type){
        case "ADDBOOK" :
            let books = [...state];
            let book = {...action.payload}
            book["id"] = books.length+1;
            books.push(book);
            return books;
            break;
    }
    return state;
}
export default BookReducers;