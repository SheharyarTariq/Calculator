import React from 'react';

function Button({children,handleClick,bg}) {
 const num=children;


    return (
        <button className={`p-4 border hover:bg-gray-600 text-white rounded-3xl ${bg}`} onClick={()=>handleClick(num)} >{children}</button>
    );
}

export default Button;