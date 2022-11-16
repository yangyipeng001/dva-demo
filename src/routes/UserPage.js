import { connect } from "dva";
import { Component } from "react";

export default connect(
  (state) => {
    console.log("UserPage state", state); //sy-log
    return { user: state.user };
  },
  {
    // mapDispatchToProps
    fetchUser: () => ({ type: "user/fetchUser" }),
  }
)(
  class UserPage extends Component {
    componentDidMount() {
      this.refresh();
    }

    refresh = () => {
      this.props.fetchUser();
    };

    render() {
      const { user } = this.props;
      return (
        <div>
          <h3>UserPage</h3>
          <p>{user.name.first}</p>
          <button onClick={this.refresh}>refresh</button>
        </div>
      );
    }
  }
);
