import React from "react";

function homeScore(props) {
    return (
      <div className="homeButtons">
        <button className="homeButtons__touchdown" onClick={() => props.td()}>Home Touchdown</button>
        {/* <button className="homeButtons__fieldGoal" onClick={() => props.fg()}>Home Field Goal</button> */}
      </div>
    );
  }



  