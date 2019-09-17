import React from 'react';

const Scrollbar = (props) => {
    return (
        <div style={{overflowY: 'scroll', border:'1px solid black', height: '100px'}}>
            {props.children}
        </div>
    );
}

export default Scrollbar;
