import React, {Component} from 'react'
import axios from 'axios'

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

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

class NASA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: ''
    }
    //link method textChanged with the constructor
    this.getImage = this.getImage.bind(this)
  }

  getImage(event){
    var self = this
    axios.get(url)
      .then(function(response){
        console.log('Image', response.data.url)
        self.setState({imgUrl: response.data.url})
      })
      .catch(function(error){

      })
  }
  /*Create Virtual DOM to add a physic DOM */
  render(){
    return(
      <div>
        <img src={this.state.imgUrl} />
        <br/>
        <button onClick={this.getImage}>PUSH ME!</button>
      </div>
    )
  }
}
export {App, NASA}
