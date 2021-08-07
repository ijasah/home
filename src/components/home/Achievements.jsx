import React from "react";
import Pdf from "../../editable-stuff/resume.pdf";

import axios from "axios";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  const handleRequest = async () => {
    const instaLink = "https://www.instagram.com/";
    const instaQuery = "/?__a=1";
    try {
      const response = await axios.get(instaLink + link + instaQuery);
      setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
    } catch (error) {
      setShowPic(false);
      console.error(error.message);
    }
  };

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
    <h2 className="display-4 mb-5 text-center">{heading}</h2>


      <div className="container container-fluid">
          <a className="btn btn-outline-dark btn-lg col-sm-4"> Insta Awards - By Infosys </a>
          <a className="btn btn-outline-dark btn-lg col-sm-4"> Rise Awards - By Infosys </a>
          <a className="btn btn-outline-dark btn-lg col-sm-4"> Techzooka - By Infosys </a>
          <a className="btn btn-outline-dark btn-lg col-sm-4"> Qiskit Challenge/Advanced Badge</a>

      </div>
    </div>
  );
};

export default AboutMe;
