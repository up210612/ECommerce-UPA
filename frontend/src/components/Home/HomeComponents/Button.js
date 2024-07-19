import React from "react";
import { useNavigate } from "react-router-dom";

function CustomButton({ children, to, onClick, ...props }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button 
    type="button" 
    className="btn btn-link"
    onClick={handleClick}
    {...props}
    >
      {children}
    </button>
  );
}

export default CustomButton;
