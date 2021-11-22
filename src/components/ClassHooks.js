import { Component, useState } from "react";

class Newclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increase}> + </button>
        <button onClick={this.decrease}> - </button>
      </div>
    );
  }
}

// function CLassHooks() {
//   const [count, setCount] = useState(0);

//   const increase = () => {
//     setCount(count + 1);
//   };
//   const decrease = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={increase}> + </button>
//       <button onClick={decrease}> - </button>
//     </div>
//   );
// }

// export default CLassHooks;

export default Newclass;
