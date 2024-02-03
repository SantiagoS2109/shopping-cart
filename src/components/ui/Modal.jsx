/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return (
    <div className="fixed left-0 top-0 z-10 h-screen w-full bg-white/20 backdrop-blur-sm transition-all">
      <div className="fixed left-1/2 top-1/2  max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-200 px-8 py-4 shadow-md transition-all">
        <button
          className=" absolute right-7 top-5 translate-x-3 rounded-sm border-none bg-none p-1 transition-all"
          onClick={close}
        >
          X
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
