import React from "react";
import {connect} from "react-redux";
import classes from './snippets.module.css';
import {openModal} from "../../store/actions/actions";

class Snippets extends React.Component {
    render() {

        const snippets = this.props.receivedBooks.map((book, index) => {
            //Ставим условие, что если изображение или имя автора не определено, то мы ничего не отображаем
            return book.cover_i === undefined || book.author_name === undefined ? null :
                <div className={classes.snippet} onClick={() => this.props.openModal(index)}>
                    <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}/>
                    <div className={classes.description}>
                        <p className={classes.author}>Автор: {book.author_name}</p>
                        <p className={classes.title}>{book.title}</p>
                    </div>
                </div>
        })

        return <div className={classes.snippets}>{snippets}</div>
    }
}

function mapStateToProps(state) {
    return {
        receivedBooks: state.reducer.receivedBooks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openModal: (index) => dispatch(openModal(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Snippets);