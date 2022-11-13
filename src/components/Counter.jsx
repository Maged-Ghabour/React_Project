// import { Component } from "react";

// class Counter extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             count : 0,
//         };
//         // Bind In Constructor
//         this.increment = this.increment.bind(this)


//     }

//     increment(){
//         this.setState({count : this.state.count + 1});
//     }

//      // Class Properties
//     decrement = ()=> {
//         this.setState({count : this.state.count - 1});
//     }

    
//     reset (){
//         this.setState({count : 0});
//     }

// render(){
//     const {count} = this.state;
//     return(
//         <div>
//             <h4>{count}</h4>
//             <div style={{display:'flex'}}>
//             <button onClick={this.increment}>+</button>
//             <button onClick={this.decrement}>-</button>
//             {/* Bind Render */}
//             <button onClick={this.reset.bind(this)}>reset</button>
//             </div>
//         </div>
//     );
// }
// }

// export default Counter;
