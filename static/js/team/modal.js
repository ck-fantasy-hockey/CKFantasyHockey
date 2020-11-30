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
      React.createElement(
        "div",
        { className: "button-container" },
        React.createElement(
          "p",
          null,
          "Are you sure you want to delete this team?"
        ),
        React.createElement(
          "button",
          { className: "dashboard-button", onClick: handleClose },
          "Yes"
        ),
        React.createElement(
          "button",
          { className: "dashboard-button", onClick: handleClose },
          "No"
        )
      )
    )
  );
};

export default Modal;