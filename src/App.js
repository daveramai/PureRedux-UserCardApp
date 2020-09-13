import React, { Component } from "react";
import user from "./images/user.png";
import "./App.css";
//redux related imports
import store from "./store";
import setLikes from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes = (e) => {
    const likes = e.target.dataset.likes;
    store.dispatch(setLikes(likes));
  };

  render() {
    const { name, description, likes, location } = store.getState(); //get values from the redux store and destructured it
    return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {likes}
          </p>
          <div>
            <button
              type="submit"
              onClick={this.updateLikes}
              data-likes="Driving, Gymming">
              Update Likes
            </button>
          </div>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>
      </div>
    );
  }

  // UNSAFE_componentWillMount() {
  //   store.subscribe(render);
  // }
}

export default App;
