import classes from './modal.module.css'
import React from "react";

function Modal(props) {
    const book = props.selectedBook

    const language = () => {
        try {
            return <p style={{display: 'inline-block'}}>{book.language[0]}</p>
        } catch (error) {
            return <p style={{display: 'inline-block'}}>Не определено</p>
        }
    }

    const publisher = () => {
        try {
            return <p style={{display: 'inline-block'}}>{book.publish_place[0]}</p>
        }
        catch (error) {
            return <p style={{display: 'inline-block'}}>Не определено</p>
        }
    }
    return <div>
        <div className={classes.modal}>
            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}/>
            <div className={classes.description}>
                <h1>{book.title}</h1>
                <h4>Автор: {book.author_name}</h4>
                <div className={classes.otherDecription}>
                    <p>Год выпуска: {book.first_publish_year}</p>
                    <p>Перевод: {language()}</p>
                    <p>Место публикации: {publisher()}</p>
                    <p>Издатель: {book.publisher[0]}</p>
                </div>
            </div>
            <div className={classes.closeModal} onClick={props.closeModal}></div>
        </div>
        <div className={classes.bg} onClick={props.closeModal}></div>
    </div>
}

export default Modal