import React, { Component } from "react";

class Profile extends Component {
  state = {
    profile: null,
    error: ""
  };

  componentDidMount = () => {
    this.loadUserProfile();
  };

  loadUserProfile = () => {
    this.props.auth.getUserProfile((profile, err) =>
      this.setState({ profile, err })
    );
  };

  render() {
    const { profile } = this.state;
    if (!profile) return null;

    return (
      <>
        <h1>Profile</h1>
        <p>{profile.nickname}</p>
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </>
    );
  }
}

export default Profile;
