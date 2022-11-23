import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ _id, name, color }) => {
    return (
        <span key={_id} className={`badge m-1 bg-${color}`}>
            {name}
        </span>
    );
};

Qualitie.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default Qualitie;
