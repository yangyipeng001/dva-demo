import { connect } from "dva";
import { Component } from "react";

export default connect((state) => {
  console.log("ExamplePage state", state); //sy-log
  return state;
})(
  class ExamplePage extends Component {
    render() {
      return (
        <div>
          <h3>ExamplePage</h3>
        </div>
      );
    }
  }
);
