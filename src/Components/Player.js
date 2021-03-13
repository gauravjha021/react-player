import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon class="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon class="play" icon={faPlay} size="2x" />
        <FontAwesomeIcon class="skip-forward" icon={faAngleRight} size="2x" />
      </div>
    </div>
  );
};

export default Player;
