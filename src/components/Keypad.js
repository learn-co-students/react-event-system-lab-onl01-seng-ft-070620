import React, {Component} from "react"

export default class Keypad extends Component {
  handleTyping = () => {console.log("Entering password...")}

  render() {
    return (
      <input onKeyUp={this.handleTyping} type="password" />
    )
  }
}
