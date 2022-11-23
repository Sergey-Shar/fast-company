import React from "react";
import Qualitie from "../qualitie/Qualitie";
import Bookmark from "../bookmark/Bookmark";
import PropTypes from "prop-types";

const User = (props) => {
    return (
        <tr key={props._id}>
            <td className="align-middle">{props.name}</td>
            <td className="align-middle">
                {props.qualities.map((qualitie) => {
                    return <Qualitie key={qualitie._id} {...qualitie} />;
                })}
            </td>
            <td className="align-middle">{props.profession.name}</td>
            <td className="align-middle">{props.completedMeetings}</td>
            <td className="align-middle">{props.rate}</td>
            <td className="align-middle">
                <Bookmark
                    id={props._id}
                    status={props.bookmark}
                    toggle={props.onToggle}
                />
            </td>
            <td className="d-flex justify-content-center align-items-center">
                <button
                    className="btn btn-danger"
                    onClick={() => props.onDelete(props._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;
