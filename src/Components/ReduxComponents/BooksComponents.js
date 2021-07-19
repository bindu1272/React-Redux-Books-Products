import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../Actions/BooksActions';
import {bindActionCreators} from 'redux';
class BooksComponent extends Component{
    constructor(){
        super();
        this.state={
            books : {
                title : "",
                description : ""
            }
        }
    }
    submitHandler=()=>{
       this.props.addBook(this.state.books);
       let booksInfoEmpty = {
           title : " ",
           description : " "
       }
       this.setState({
           books : booksInfoEmpty,
       })
    }
   handler=(event)=>{
       let name = event.target.name;
       let value = event.target.value;
       let books = [...this.props.books];
       let book = {...this.state.books};
       book[name] = value
       this.setState({
            books : book,
       })
   }
    render(){
        return(
            <Fragment>
                <div>
                <label> Book - Title</label>
                <input type= "text" name = "title" value={this.state.books.title} onChange={this.handler}/>
                </div>
                <div>
                <label>Description</label>
                <input type= "text" name = "description" value= {this.state.books.description} onChange={this.handler} /> 
                </div>
                <button onClick={this.submitHandler}>Add Book</button>
                <h1>Books Name is </h1>
                {
                    this.props.books.map((x,i)=>{
                        return(
                            <h1>Title : {x.title}, Description : {x.description},Id : {</h1>
                        )
                    })
                }
            </Fragment>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        books : state.books
    };
};
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        addBook : addBook
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BooksComponent);