var Modal = function Modal(_ref) {
  var handleClose = _ref.handleClose,
      show = _ref.show,
      children = _ref.children;

  var showHideClassName = show ? "modal display-block" : "modal display-none";

  return React.createElement(
    "div",
    { className: showHideClassName },
    React.createElement(
      "section",
      { className: "modal-main" },
      children,
      React.createElement(
        "button",
        { onClick: handleClose },
        "close"
      )
    )
  );
};

export default Modal;