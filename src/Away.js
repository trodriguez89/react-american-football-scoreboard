import React from "react";

function awayScore(props) {
    return (
      <div className="awayButtons">
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => props.td()}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => props.fg()}>Away Field Goal</button>
        </div>
      </div>
    )
  }

