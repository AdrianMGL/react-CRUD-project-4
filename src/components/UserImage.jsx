import React, { useEffect, useState } from "react";
import axios from "axios";

const UserImage = () => {
  const [randomUsers, setRandomUsers] = useState({});

  /** */
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setRandomUsers(res.data.results[0]));
  }, []);
  //console.log(randomUsers);

  /** */
  return (
    <div className="img__header">
      <img src={randomUsers?.picture?.large} alt="" />
    </div>
  );
};

export default UserImage;
