import './Button__styles.css'

function Button (props) {
    return (
        <button className={props.color}>{props.title}</button>
    )
}

export default Button