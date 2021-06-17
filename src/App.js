import React from "react";
import classes from './App.module.css';
import {connect} from "react-redux";
import Search from "./components/search/search";
import Loading from "./components/loading/loading";
import Snippets from "./components/snippets/snippets";
import Modal from "./components/snippets/Modal/modal";
import {closeModal} from "./store/actions/actions";

class App extends React.Component {
    render() {
        return <div className={classes.App}>
            <Search/>
            {this.props.loading ? <Loading/> : <Snippets/>}
            {this.props.isOpenModal ?
                <Modal selectedBook={this.props.selectedBook} closeModal={this.props.closeModal}/> : null}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        loading: state.reducer.loading,
        isOpenModal: state.reducer.isOpenModal,
        selectedBook: state.reducer.selectedBook
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
