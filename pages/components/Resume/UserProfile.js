import React from "react";

function UserProfile({data}) {
  if (!data) {
    return <div></div>; // or return null if you want to render nothing
  }
  return (
    <div className="text-center mb-8">
      <img
        className="h-36 w-auto rounded-full mx-auto"
        src="https://profile-assets.showwcase.com/5280/1644251162047-profile_2.png"
        alt="Logo"
      />
      <h2 className="text-2xl font-bold text-gray-950 ">
        {`${data.userInfo.title} ${data.userInfo.firstName} ${data.userInfo.lsatName}`}
      </h2>
      <h3 className="text-xl">{data.resume.title}</h3>
      <h3 className="text-base">{`( Experienced over ${data.resume.experience} )`}</h3>
    </div>
  );
}

export default UserProfile;
