import React from "react";
import ProfileCSS from "./Profile.module.css";

function Profile() {
  return (
    <div className={ProfileCSS.pageContainer}>
      <div className={ProfileCSS.profileContainer}>
        <p>Welcome to My Profile!</p>
      </div>
    </div>
  );
}
export default Profile;
