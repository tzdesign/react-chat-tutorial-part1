import React from 'react';

const ChatMessage = (props) => (
  <div className={props.you?'you':'other'}>
    {props.text}
  </div>
);

ChatMessage.propTypes = {
  message: React.PropTypes.object
};

export default ChatMessage;
