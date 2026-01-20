// import React from "react";
// import "./Profile.css";

// const Profile = () => {
//   const user = {
//     name: "Rahul Yadav",
//     username: "@rahul5",
//     email: "rahul@test.com",
//     country: "India 🇮🇳",
//     rating: 1450,
//     games: 128,
//     wins: 74,
//     losses: 39,
//     draws: 15,
//     memberSince: "2024",
//   };

//   return (
//     <div className="profile-page">
      
//       {/* HEADER */}
//       <div className="profile-header">
//         <div className="avatar">👤</div>

//         <div className="user-info">
//           <h2 title={user.name}>{user.name}</h2>
//           <p>{user.username}</p>
//           <span className="badge">♟ Chess Player</span>
//         </div>

//         <button className="edit-btn">Edit Profile</button>
//       </div>

//       {/* STATS */}
//       <div className="stats-grid">
//         <div className="stat-card green">
//           <h3>Games</h3>
//           <p>{user.games}</p>
//         </div>

//         <div className="stat-card blue">
//           <h3>Wins</h3>
//           <p>{user.wins}</p>
//         </div>

//         <div className="stat-card red">
//           <h3>Losses</h3>
//           <p>{user.losses}</p>
//         </div>

//         <div className="stat-card orange">
//           <h3>Draws</h3>
//           <p>{user.draws}</p>
//         </div>
//       </div>

//       {/* DETAILS */}
//       <div className="profile-details">
//         <h3>Profile Details</h3>

//         <div className="detail-row">
//           <span>Email</span>
//           <span>{user.email}</span>
//         </div>

//         <div className="detail-row">
//           <span>Country</span>
//           <span>{user.country}</span>
//         </div>

//         <div className="detail-row">
//           <span>Rating</span>
//           <span>{user.rating}</span>
//         </div>

//         <div className="detail-row">
//           <span>Member Since</span>
//           <span>{user.memberSince}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;






// import React, { useState } from "react";
// import "./Profile.css";

// const Profile = () => {
//   const [editMode, setEditMode] = useState(false);

//   const [profile, setProfile] = useState({
//     name: "Rahul Yadav",
//     username: "@rahul5",
//     email: "rahul@test.com",
//     country: "India",
//     rating: 1450,
//     memberSince: 2024,
//     games: 128,
//     wins: 74,
//     losses: 39,
//     draws: 15,
//   });

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     setEditMode(false);
//     console.log("UPDATED PROFILE:", profile);
//   };

//   return (
//     <div className="profile-page">
//       {/* ✅ CENTERED WRAPPER */}
//       <div className="profile-wrapper">

//         {/* HEADER */}
//         <div className="profile-header">
//           <div className="profile-left">
//             <div className="avatar"></div>
//             <div>
//               <h2 className="profile-name">{profile.name}</h2>
//               <p className="profile-username">{profile.username}</p>
//               <span className="badge">♟ Chess Player</span>
//             </div>
//           </div>

//           <button className="edit-btn" onClick={() => setEditMode(!editMode)}>
//             {editMode ? "Cancel" : "Edit Profile"}
//           </button>
//         </div>

//         {/* STATS */}
//         <div className="stats">
//           <div className="stat green">Games<br /><strong>{profile.games}</strong></div>
//           <div className="stat blue">Wins<br /><strong>{profile.wins}</strong></div>
//           <div className="stat red">Losses<br /><strong>{profile.losses}</strong></div>
//           <div className="stat orange">Draws<br /><strong>{profile.draws}</strong></div>
//         </div>

//         {/* DETAILS */}
//         <div className="profile-card">
//           <h3>Profile Details</h3>

//           <div className="row">
//             <span>Email</span>
//             {editMode ? (
//               <input name="email" value={profile.email} onChange={handleChange} />
//             ) : (
//               <span>{profile.email}</span>
//             )}
//           </div>

//           <div className="row">
//             <span>Country</span>
//             {editMode ? (
//               <input name="country" value={profile.country} onChange={handleChange} />
//             ) : (
//               <span>{profile.country}</span>
//             )}
//           </div>

//           <div className="row">
//             <span>Rating</span>
//             {editMode ? (
//               <input name="rating" value={profile.rating} onChange={handleChange} />
//             ) : (
//               <span>{profile.rating}</span>
//             )}
//           </div>

//           <div className="row">
//             <span>Member Since</span>
//             <span>{profile.memberSince}</span>
//           </div>

//           {editMode && (
//             <button className="save-btn" onClick={handleSave}>
//               Save Changes
//             </button>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Profile;














import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);

  // 🔥 LOAD FROM localStorage (IF EXISTS)
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("profileData");
    return saved
      ? JSON.parse(saved)
      : {
          name: "Rahul Yadav",
          username: "@rahul5",
          email: "rahul@test.com",
          country: "India",
          rating: 1450,
          memberSince: 2024,
          games: 128,
          wins: 74,
          losses: 39,
          draws: 15,
          avatar: null,
        };
  });

  // 🔥 SAVE TO localStorage ON CHANGE
  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify(profile));
  }, [profile]);

  // TEXT FIELD CHANGE
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // 🔥 IMAGE UPLOAD HANDLER (PERSISTENT)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setProfile({ ...profile, avatar: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    setEditMode(false);
    console.log("UPDATED PROFILE:", profile);
  };

  return (
    <div className="profile-page">
      <div className="profile-wrapper">

        {/* HEADER */}
        <div className="profile-header">
          <div className="profile-left">

            {/* AVATAR */}
            <label className="avatar-upload">
              <div
                className="avatar"
                style={{
                  backgroundImage: profile.avatar
                    ? `url(${profile.avatar})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {!profile.avatar && "Upload"}
              </div>

              {editMode && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  hidden
                />
              )}
            </label>

            <div>
              <h2 className="profile-name">{profile.name}</h2>
              <p className="profile-username">{profile.username}</p>
              <span className="badge">♟ Chess Player</span>
            </div>
          </div>

          <button className="edit-btn" onClick={() => setEditMode(!editMode)}>
            {editMode ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="stat green">
            Games<br /><strong>{profile.games}</strong>
          </div>
          <div className="stat blue">
            Wins<br /><strong>{profile.wins}</strong>
          </div>
          <div className="stat red">
            Losses<br /><strong>{profile.losses}</strong>
          </div>
          <div className="stat orange">
            Draws<br /><strong>{profile.draws}</strong>
          </div>
        </div>

        {/* DETAILS */}
        <div className="profile-card">
          <h3>Profile Details</h3>

          <div className="row">
            <span>Email</span>
            {editMode ? (
              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            ) : (
              <span>{profile.email}</span>
            )}
          </div>

          <div className="row">
            <span>Country</span>
            {editMode ? (
              <input
                name="country"
                value={profile.country}
                onChange={handleChange}
              />
            ) : (
              <span>{profile.country}</span>
            )}
          </div>

          <div className="row">
            <span>Rating</span>
            {editMode ? (
              <input
                name="rating"
                value={profile.rating}
                onChange={handleChange}
              />
            ) : (
              <span>{profile.rating}</span>
            )}
          </div>

          <div className="row">
            <span>Member Since</span>
            <span>{profile.memberSince}</span>
          </div>

          {editMode && (
            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;
