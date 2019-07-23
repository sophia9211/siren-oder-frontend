import ReactDOM from "react-dom";

const StorePortal = ({ children }) => {
  const el = document.getElementById("modal");
  return ReactDOM.createPortal(children, el);
};

export default StorePortal;
