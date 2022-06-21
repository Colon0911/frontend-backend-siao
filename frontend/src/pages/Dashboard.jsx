import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="senara-header">
        <div className="senara-logo">
          <div className="senara-img-logo" alt="" />
        </div>
        <div>
          <h3 className="senara-description-page">
            DIRECCION DISTRITO DE RIEGO ARENAL TEMPISQUE
          </h3>
        </div>

        <div>
          <p
            style={{
              color: "#07392a",
              fontSize: "2rem",
              textAlign: "right",
            }}
          >
            {user}
            <FontAwesomeIcon icon={faUser} size="2x" color="#07392a">
              {user}
            </FontAwesomeIcon>
          </p>

          <p
            style={{
              cursor: "pointer",
              color: "rgb(169, 0, 0)",
              fontSize: "2rem",
              textAlign: "right",
            }}
            onClick={logout}
          >
            Salir
            <FontAwesomeIcon
              icon={faDoorOpen}
              onClick={logout}
              size="2x"
              color="rgb(169, 0, 0)"
            ></FontAwesomeIcon>
          </p>
        </div>
      </div>
      <div className="senara-dashboard">
        <div className="senara-content-menu">
          <div className="senara-content">Form1</div>
          <div className="senara-content">Form2</div>
          <div className="senara-content">Form3</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
