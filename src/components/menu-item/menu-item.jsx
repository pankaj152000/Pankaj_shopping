import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router-dom";

const menuList = ({ title, imageUrl, size, linkUrl, match, history }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="backgroundimage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div
        className="content"
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(menuList);
