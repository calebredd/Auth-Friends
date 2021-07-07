import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import { Link, Route } from "react-router-dom";
import "../Friends.scss";
export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("friends")
      .then(res => {
        // console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const remove = e => {
    console.log(e.target.parentNode.id);
    const id = e.target.parentNode.id;
    axiosWithAuth()
      .delete(`friends/${id}`)
      .then(res => {
        // console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => console.error(err));
  };

  // console.log(friends);
  return (
    <div>
      {friends.map(friend => (
        <p key={friend.id} id={friend.id}>
          {friend.name} is {friend.age} years old and their email is{" "}
          <a href={friend.email}>{friend.email}</a>!
          <Link to={`/UpdateFriend/${friend.id}`}>
            <button id="update">Edit</button>
          </Link>
          <button id="delete" onClick={e => remove(e)}>
            X
          </button>
        </p>
      ))}
    </div>
  );
}
