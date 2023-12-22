import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
// import ListLaporanDb from './ListLaporanDb';
import ListUserDb from "./ListUserDb";

const HomeAdmin = () => {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="cards">
          <div className="card-inner">
            <h3>USER</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="cards">
          <div className="card-inner">
            <h3>LAPORAN</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="cards">
          <div className="card-inner">
            <h3>KOMUNITAS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        <div className="cards">
          <div className="card-inner">
            <h3>TINDAKAN</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>
      {/* <ListLaporanDb /> */}
      <ListUserDb />
    </main>
  );
};

export default HomeAdmin;
