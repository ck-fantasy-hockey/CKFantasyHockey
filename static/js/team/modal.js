var Modal = function Modal(_ref) {
  var handleCloseAccept = _ref.handleCloseAccept,
      handleCloseReject = _ref.handleCloseReject,
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
          { className: "dashboard-button", onClick: handleCloseAccept },
          "Yes"
        ),
        React.createElement(
          "button",
          { className: "dashboard-button", onClick: handleCloseReject },
          "No"
        )
      )
    )
  );
};

export default Modal;