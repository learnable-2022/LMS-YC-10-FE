import React from 'react';




function PopUp(props) {


  return (props.trigger) ? (
    <div>
        <div>
            {props.children}
        </div>
    </div>
    ):"";
}

export default PopUp