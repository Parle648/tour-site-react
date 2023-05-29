import { useState } from 'react'
import '../../../../styles/index.css'
import romb from '../../../../img/romb.svg'

function Selectlist (props) {
    const [item, setToggle] = useState()

    return (
        <div className="Selectlist">
            <img className="select-img" src={romb} alt="" />
            <div className="select__inner-block">
                <h2 className="select__header">{props.title}</h2>
            </div>
        </div>
    )
}

export default Selectlist