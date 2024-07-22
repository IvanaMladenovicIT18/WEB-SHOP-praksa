import React from "react";

const ConfirmationDialog = React.forwardRef(({ onSave, onClose }, ref) => {
    return (
        <>
            <div className="modal fade" id="exampleModal" ref={ref} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Potvrda porudzbine</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            Da li ste sigurni da zelite da kreirate porudzbinu?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Zatvori</button>
                            <button type="button" className="btn btn-primary" onClick={onSave}>Sacuvaj promene</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});
  
  export default ConfirmationDialog;
  