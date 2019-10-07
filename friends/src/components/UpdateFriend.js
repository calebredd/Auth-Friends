import React from "react";
import { axiosWithAuth } from "../axiosWithAuth";
export default class UpdateFriend extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params;
    this.getFriend = this.getFriend.bind(this);
    // this.name=props.name;
    // this.email=props.email;
    // this.age=props.age;
    // this.updateFriend = this.updateFriend.bind(this);
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

  getFriend = () =>
    axiosWithAuth()
      .get(`friends/${this.id.id}`)
      .then(res => {
        console.log(res.data);
        this.name = res.data.name;
        this.age = res.data.age;
        this.email = res.data.email;
        console.log(this.name);
        // this.props.history.push("/Friends");
      })
      .catch(err => console.error(err));

  updateFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`friends/${this.id}`, {
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
    console.log(Number(this.id.id));
    this.getFriend();

    return (
      <div>
        <form name="updateFriend" onSubmit={e => this.updateFriend(e)}>
          <input type="text" name="name" placeholder={this.name} />
          <input type="number" name="age" placeholder={this.age} />
          <input type="email" name="email" placeholder={this.email} />
          <br />
          <button type="submit">Update Friend</button>
        </form>
      </div>
    );
  }
}
