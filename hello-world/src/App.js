import React, {Component} from 'react'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      inputText : '',
      outputText: ''
    }
    //link method textChanged with the constructor
    this.textChanged = this.textChanged.bind(this)
  }

  textChanged(event){
    var name = event.target.value
    this.setState({outputText: name})
    this.setState({inputText: name})
  }
  render(){
    return(
      <div>
        <input type='text' onChange={this.textChanged} value={this.state.inputText}/>
        <br/>
        <a>Hello {this.state.outputText} how are you?</a>
      </div>
    )
  }
}

export default App
