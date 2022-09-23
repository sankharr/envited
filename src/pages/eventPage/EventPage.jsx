// packages
import React from "react";

// styling
import "./EventPage.scss";

// assets
import birthdayCake from "../../assets/Birthday cake.png";
import { AiOutlineCalendar } from "react-icons/ai";
import { GrNext } from "react-icons/gr";
import { VscLocation } from "react-icons/vsc"

const EventPage = () => {
  return (
    <div className="EventPage">
      <img src={birthdayCake} />
      <h2>Birthday Bash</h2>
      <p>Hosted by <span>Elysia</span></p>
      <div className="EventPage__infoTile">
        <div className="EventPage__firstSection">
          <AiOutlineCalendar className="EventPage__tileIcon"/>
        </div>
        <div className="EventPage__secondSection">
          <div className="EventPage__firstLine">18 August 6:00PM</div>
          <div className="EventPage__secondLine">
            to <span>19 August 1:00PM</span> UTC +10
          </div>
        </div>
        <div className="EventPage__thirdSection">
          <GrNext />
        </div>
      </div>
      <div className="EventPage__infoTile">
        <div className="EventPage__firstSection">
          <VscLocation className="EventPage__tileIcon"/>
        </div>
        <div className="EventPage__secondSection">
          <div className="EventPage__firstLine">Street name</div>
          <div className="EventPage__secondLine">Suburb, State, Postcode</div>
        </div>
        <div className="EventPage__thirdSection">
          <GrNext />
        </div>
      </div>
    </div>
  );
};

export default EventPage;
