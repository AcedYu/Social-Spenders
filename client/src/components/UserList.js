import React from "react";

const UserList = ({ type, list }) => {
  return (
    <div className="input-group mb-3 mt-1">
      <input
        type="text"
        className="form-control"
        name="following_search"
        placeholder={"Filter " + type}
      />
      <ul className="list-group">
      </ul>
    </div>
  )
}

export default UserList;