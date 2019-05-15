import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, title, location, to, from, description }
}) => {
  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
        {!to ? " Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
        <strong>Postion: </strong> {title}
      </p>
      {location && (
        <Fragment>
          <p>
            <strong>Location: </strong> {location && <span>{location}</span>}
          </p>
        </Fragment>
      )}
      {description && (
        <Fragment>
          <p>
            <strong>Description: </strong> {description}
          </p>
        </Fragment>
      )}
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired
};

export default ProfileExperience;
