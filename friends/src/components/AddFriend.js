import React from "react";
import { axiosWithAuth } from "../axiosWithAuth";
export default class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.addFriend = this.addFriend.bind(this);
  }
  // const [friends, setFriends] = useState([]);
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("friends")
  //     .then(res => {
  //       // console.log(res.data);
  //       setFriends(res.data);
  //     })
  //     .catch(err => console.error(err));
  // }, []);

  addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("friends", {
        name: e.target.name.value,
        age: e.target.age.value,
        email: e.target.email.value
      })
      .then(res => {
        // console.log(res.data);
        this.props.history.push("/Friends");
      })
      .catch(err => console.error(err));
  };
  render() {
    return (
      <div>
        <form name="newFriend" onSubmit={e => this.addFriend(e)}>
          <input type="text" name="name" placeholder="Name" />
          <input type="number" name="age" placeholder="Age" />
          <input type="email" name="email" placeholder="Email" />
          <br />
          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}
