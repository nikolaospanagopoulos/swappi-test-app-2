import React from 'react';

// i use a custom message component with color as props , so that an error can appear where necessary with appropriate color


const Message = ({children,color}) => {
    return (
        <div>
            <h4 style={{color:color}}>{children}</h4>
        </div>
    );
}
 
export default Message;