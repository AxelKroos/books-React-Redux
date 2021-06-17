import React from "react"
import classes from './search.module.css'
import {currentInput, startTheDownloads, showSnippets} from "../../store/actions/actions";
import {connect} from "react-redux";

class Search extends React.Component {
    render() {
        const gettingBooks = async () => {
            this.props.startTheDownloads()
            let get = this.props.currentBook
            const request = await fetch(`http://openlibrary.org/search.json?q=${get}`)
            let json = await request.json()
            json.docs.sort(function (a, b) {
                if (a.title > b.title) {
                    return 1
                }
                if (a.title < b.title) {
                    return -1
                }
                return 0;
            })
            this.props.showSnippets(json.docs)
        }

        return <div className={classes.search}>
            <input type="text" className={classes.input}
                   onChange={(event => {this.props.currentInput(event.target.value)})}/>
            <button className={classes.button} onClick={gettingBooks}>&#128270;</button>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        currentBook: state.reducer.currentBook
    }
}

function mapDispatchToProps(dispatch) {
    return {
        currentInput: (value) => dispatch(currentInput(value)),
        startTheDownloads: () => dispatch(startTheDownloads()),
        showSnippets: (value) => dispatch(showSnippets(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)