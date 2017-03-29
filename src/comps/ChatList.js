import React,{Component} from 'react';
import ChatMessage from './ChatMessage';

class ChatList extends Component {
  constructor(props) {
    super(props)
    this.chatList = null;
  }

  componentDidUpdate() {
    this.chatList.scrollTop = this.chatList.scrollHeight;
  }

  render() {
    return (
      <div className="chatList" ref={(ChatList) => { this.chatList = ChatList;  }}>
        {this.props.messages.map((message,i) => (
          <ChatMessage key={i} text={message.text} you={message.you} />
        ))}
      </div>
    );
  }

}

export default ChatList;
