import React from "react";
import PropTypes from "prop-types";

const Bookmark = (props) => {
    const changeClasses = () => {
        return props.status ? "bi-bookmark-heart-fill" : "bi-bookmark";
    };

    return (
        <i
            className={`bi ${changeClasses()}`}
            onClick={() => props.toggle(props.id)}
        ></i>
    );
};

Bookmark.propTypes = {
    status: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default Bookmark;
