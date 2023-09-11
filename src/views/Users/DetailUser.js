import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function DetailUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios(`https://reqres.in/api/users/${id}`);
      setUser(res && res.data && res.data.data ? res.data.data : {});
    };
    fetchData();
  }, [id]);

  if (!id) {
    return <div>Loading...</div>;
  }
  const handleBackButton = () => {
    navigate("/user");
  };
  let isEmptyObj = Object.keys(user).length === 0;
  return (
    <>
      <div>Hello world from detail user with id: {id}</div>
      {isEmptyObj === false && (
        <>
          <div>
            User's Name : {user.first_name} - {user.last_name}
          </div>
          <div>User's Email :{user.email}</div>
          <div>
            <img src={user.avatar}></img>
          </div>
          <div>
            {" "}
            <button type="button" onClick={handleBackButton}>
              Back
            </button>
          </div>
        </>
      )}
    </>
  );
}
export default DetailUser;
