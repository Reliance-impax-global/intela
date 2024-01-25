import { useState, useRef } from "react";
import PropTypes from "prop-types";
import sendIcon from "../../../assets/images/Vector (1).png";
import inputFIcon from "../../../assets/images/Vector (2).png";

const ChatPopup = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message.trim(), sender: "You", timestamp: new Date() },
      ]);
      setMessage("");
    }
  };

  const handleChatClose = () => {
    onClose();
  };

  const handleFileIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return (
    <>
      <dialog className="modal" open>
        <div className="modal-box bg-[#021D4A] text-white border-2 border-blue-950 p-6 my-5 rounded-md w-screen">
          <div className="text-right">
            <button className="bg-[#021D4A]" onClick={handleChatClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <h3
            className="font-bold text-lg text-center mb-4"
            style={{
              fontFamily: "Roboto",
              fontSize: "40px",
              fontWeight: 400,
              lineHeight: "35px",
              letterSpacing: "0em",
            }}
          >
            Chat with Us
          </h3>
          <hr />
          <div className="border-2 border-blue-800 px-5 py-2">
            <div className="chat-messages my-10">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat ${
                    index % 2 === 0 ? "chat-start" : "chat-end"
                  }`}
                >
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Chat avatar"
                        src="https://i.ibb.co/s15WdK0/20170204-170429.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    {msg.sender}
                    <time className="text-xs opacity-50">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </time>
                  </div>
                  <div className="chat-bubble bg-white text-black">
                    <div className="message-text">{msg.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="w-full relative">
                <div className="relative mt-96">
                  <textarea
                    placeholder="Type your message"
                    className="input input-bordered text-black message-input border-none w-96 rounded-md pl-10 pt-3"
                    value={message}
                    onChange={handleChange}
                    style={{
                      borderRadius: "0",
                      width: "90%",
                      marginRight: "75px",
                    }}
                  />
                  <button
                    type="submit"
                    className="absolute top-1/2 right-12 transform -translate-y-1/2"
                  >
                    <img className="w-8" src={sendIcon} alt="" />
                    <img
                      className="w-8 absolute -right-12 top-1 cursor-pointer"
                      src={inputFIcon}
                      alt=""
                      onClick={handleFileIconClick}
                    />
                  </button>

                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

ChatPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ChatPopup;
