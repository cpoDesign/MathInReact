import React from 'react';
import { Menu } from './Menu';
import { toast, ToastContainer } from 'react-toastify';

function GenRandomNo(){
  return Math.floor((Math.random() * 100) + 1);
}

class AdditionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: GenRandomNo(),
      secondNumber: GenRandomNo(),
      result:0,
      enteredResult:0,
      enterResult:0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    var total = Number(this.state.firstNumber) + Number(this.state.secondNumber);
//    console.log(`Expected result: ${total} EnteredResult: ${this.state.enteredResult}`);

    if(total===Number(this.state.enteredResult)){
      this.setState({result:"Well done"});
        toast.success(`Well done it is ${this.state.enteredResult}`);
    }else{
        toast.warning(`Wrong answer ${this.state.enteredResult}`);
      this.setState({result:"Wrong, try again."});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ToastContainer />
        <input type="number" value={this.state.firstNumber}
        onChange={(e)=>this.setState({firstNumber: e.target.value})} />
        <br/>
        <input type="number" value={this.state.secondNumber}
        onChange={(e)=>this.setState({secondNumber: e.target.value})} />
        <br/>
        <input type="number" value={this.state.enteredResult}
        onChange={(e)=>this.setState({enteredResult: e.target.value})} />
        <input type="submit" value="Submit" />
        {this.state.result}
      </form>
    );
  }
}

function MathPage({props}) {
  return (
    <div>
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col margintopbottom">
            <h2>Math</h2>
            <h6 className="margintopbottom20">Math</h6>
            <AdditionForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MathPage;
