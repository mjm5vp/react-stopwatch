import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props){
    super()
    this.state = {
      seconds: 0,
      paused: true
    }
  }

  increaseTime(){
    this.setState({
      seconds: this.state.seconds + 1,
      paused: false
    })

  }

  startTimer(e){
    console.log(this.state.pasued)
    if(this.state.paused){
      console.log("not paused")
      this.timer = setInterval( _ => this.increaseTime(), 1000)
    }
  }

  resetTimer(e){
    clearInterval(this.timer)
    this.setState({
      seconds: 0,
      paused: true
    })
  }

  pauseTimer(e){
    clearInterval(this.timer)
    this.setState({
      paused: true
    })

  }





  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.seconds}</h1>
        <div className="controls">
          <button onClick={ e => this.resetTimer(e) }>Reset</button>
          <button onClick={ e => this.startTimer(e) }>Start</button>
          <button onClick={ e => this.pauseTimer(e) }>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
