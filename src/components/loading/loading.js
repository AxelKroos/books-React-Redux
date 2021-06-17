import classes from './loading.module.css'

function Loading() {
    return <div className={classes.loader}>
        <div className={`${classes.inner} ${classes.one}`}></div>
        <div className={`${classes.inner} ${classes.two}`}></div>
        <div className={`${classes.inner} ${classes.three}`}></div>
    </div>
}

export default Loading