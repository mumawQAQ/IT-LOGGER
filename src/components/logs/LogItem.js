import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min";

function LogItem(props) {
  const onDelete = () => {
    props.deleteLog(props.log.id);
    M.toast({ html: "Log deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            props.log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => props.setCurrent(props.log)}
        >
          {props.log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{props.log.id}</span> last updated by{" "}
          <span className="black-text">{props.log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY,h:mm:ss a"></Moment>
        </span>
        <a href="#" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};
export default connect(null, { deleteLog, setCurrent })(LogItem);
