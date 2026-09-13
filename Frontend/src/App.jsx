// import { Component } from "react"

import { useState } from "react"
import Navbar from "../components/Navbar"
import UrlInput from "../components/URL_input"
import ChatBox from "../components/Chatbox";
function App() {

  const [showChat, setShowChat] = useState(false);

  return (
    <>


      <Navbar />


      {/* <UrlInput /> */}

      {
        showChat
          ? <ChatBox setShowChat={setShowChat} />
          : <UrlInput setShowChat={setShowChat} />
      }
    </>

  )
}

export default App