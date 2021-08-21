import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTech } from "../../actions/techAction";

function AddTechModal(props) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const onSubmit = () => {
    if (first === "" || last === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      props.addTech({
        firstName: first,
        lastName: last,
      });
      M.toast({ html: `${first} ${last} was add as a tech` });
      setFirst("");
      setLast("");
    }
  };
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="first"
              value={first}
              onChange={(e) => {
                setFirst(e.target.value);
              }}
            />
            <label htmlFor="first" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="last"
              value={last}
              onChange={(e) => {
                setLast(e.target.value);
              }}
            />
            <label htmlFor="first" className="active">
              First Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
}
AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
