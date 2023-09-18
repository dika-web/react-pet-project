import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import React from "react";

const Modal = ({ children }) => {
  const elFef = useRef(null);

  if (!elFef.current) {
    elFef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elFef.current);

    return () => modalRoot.removeChild(elFef.current);
  }, []);

  return createPortal(<div>{children}</div>, elFef.current);
};

export default Modal;
