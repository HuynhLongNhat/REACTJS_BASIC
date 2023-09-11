import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ListUser.scss";

function ListUser() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get("https://reqres.in/api/users?page=2");
      setUser(res && res.data && res.data.data ? res.data.data : {});
    };
    fetchData();
  }, []);

  const handleViewDetailUser = (user) => {
    navigate(`${user.id}`);
  };

  return (
    <div className="list-user-container">
      <div className="title">Fetch all list users</div>
      <div className="list-user-content">
        {user && user.length > 0
          ? user.map((item, index) => (
              <div
                className="child"
                key={item.id}
                onClick={() => handleViewDetailUser(item)}
              >
                {index + 1} - {item.first_name} {item.last_name}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ListUser;
