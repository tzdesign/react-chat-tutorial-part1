import React, { Component } from 'react';
import './Chat.css';
import ChatList from './comps/ChatList';



class App extends Component {

  constructor(props) {
    super(props);

    this.chatList = null;

    this.state = {
      messages : [
        {
          text:'hi',
          you:false
        },
        {
          text:'Hi yourself',
          you: true
        },
         {
          text:'hi',
          you:false
        },
        {
          text:'Hi yourself',
          you: true
        },
      ]
    };
  }

  sendMessage(e){
    if(e.key === 'Enter'){
      const value = e.target.value
      e.target.value = null

      const messages = this.state.messages;

      messages.push(
        {
          text:value,
          you:true
        }
      );

      this.setState({messages});
    }
  }


  render() {
    return (
      <div className="App">
        <ChatList messages={this.state.messages} />
        <div className="textWrapper">
          <input type="text" placeholder="Nachricht" onKeyPress={this.sendMessage.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
