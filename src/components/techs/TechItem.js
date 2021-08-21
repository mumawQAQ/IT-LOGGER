import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTechs } from "../../actions/techAction";

function TechItem(props) {
  const onDelete = () => {
    props.deleteTechs(props.tech.id);
  };
  return (
    <li className="collection-item">
      <div>
        {props.tech.firstName} {props.tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
}
TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTechs: PropTypes.func.isRequired,
};
export default connect(null, { deleteTechs })(TechItem);
