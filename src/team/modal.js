const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {/* {children} */}
          <div className="button-container">
            <p>Are you sure you want to delete this team?</p>
            <button className="dashboard-button" onClick={handleClose}>Yes</button>
            <button className="dashboard-button" onClick={handleClose}>No</button>
          </div>
        </section>
      </div>
    );
  };

export default Modal;