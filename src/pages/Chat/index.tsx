import React, { Fragment } from "react";
import Header from "../../components/Header";
import InputComponent from "../../components/InputComponent";
import ChatBody from "../../components/ChatBody";

const Chat = () => {
  return (
    <Fragment>
      <Header />
      <ChatBody />
      <InputComponent />
    </Fragment>
  );
};

export default Chat;
