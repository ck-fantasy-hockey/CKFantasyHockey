const Modal = ({ handleCloseAccept, handleCloseReject, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {/* {children} */}
          <div className="button-container">
            <p>Are you sure you want to delete this team?</p>
            <button className="dashboard-button" onClick={handleCloseAccept}>Yes</button>
            <button className="dashboard-button" onClick={handleCloseReject}>No</button>
          </div>
        </section>
      </div>
    );
  };

export default Modal;