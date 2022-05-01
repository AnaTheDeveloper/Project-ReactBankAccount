import classes from './SubTitle.module.css';

const SubTitle = (props) => {

    return (
        <div className={classes.subTitle}>
            {props.children}
        </div>
    );
};

export default SubTitle;