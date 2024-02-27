import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Profile.css";
const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <customProfile>
        <div className="content-profile-page">
          <div className="profile-user-page card d-flex flex-column">
            <div>
              <div className="img-user-profile">
                <img className="profile-bgHome" src={user?.coverImage} />
                <img className="avatar" src={user.avatar} alt="jofpin" />
              </div>
              <h4>
                <button className="">ROLE : {user.role}</button>
              </h4>
              <div className="user-profile-data">
                <h2 className="fw-semibold">{user.fullName}</h2>
                <p>@{user.userName}</p>
                <p>Email: {user.email}</p>
              </div>
              <div className="description-profile">
                Front-end | Security Researcher | CSS Warrior |{" "}
                <a href="https://twitter.com/bullgit" title="bullgit">
                  <strong>@bullgit</strong>
                </a>{" "}
                | I love to create small things for the internet!
              </div>
            </div>
            <ul className="data-user">
              <li>
                <a>
                  <strong>3390</strong>
                  <span>Requested Link</span>
                </a>
              </li>
              <li>
                <a>
                  <strong>718</strong>
                  <span>ETH</span>
                </a>
              </li>
              <li>
                <a>
                  <strong>239</strong>
                  <span>Connected Wallet</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </customProfile>
    </div>
  );
};

export default Profile;
