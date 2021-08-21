import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TechItem from "./TechItem";
import { getTechs } from "../../actions/techAction";

function TechListModal(props) {
  useEffect(() => {
    props.getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!props.tech.loading &&
            props.tech.techs !== null &&
            props.tech.techs.map((tech) => (
              <TechItem tech={tech} key={tech.id} />
            ))}
        </ul>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  tech: state.tech,
});
TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getTechs })(TechListModal);
