import React from 'react';



const Button = props => {
  return (
    <button type={props.type} className="px-8 py-3 bg-cyan-600 text-cyan-100 hover:bg-gray-300 text-lg font-medium shadow-lg hover:shadow-2xl  hover:text-cyan-600 rounded-full"  onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;