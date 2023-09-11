import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";
import logo from "../../assets/images/kieu.jpg";
import { connect } from "react-redux";

function Home(props) {
  const navigate = useNavigate();

  let listUsers = props.dataRedux;

  const handleDeleteUser = (user) => {
    console.log("check ", user);
    props.deleteUserRedux(user);
  };
  const handleCreateUser = () => {
    props.addUserRedux();
  };
  return (
    <>
      <div>hello world</div>
      <div>
        <img
          src={logo}
          style={{ width: "250px", height: "320px", marginTop: "20px" }}
        ></img>
      </div>
      <div>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <div key={item.id}>
                {index + 1}-{item.name} &nbsp;
                <span onClick={() => handleDeleteUser(item)}>x </span>
              </div>
            );
          })}
        <button onClick={handleCreateUser}>Add new</button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
