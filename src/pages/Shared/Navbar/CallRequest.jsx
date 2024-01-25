import { useState } from "react";
import ChatPopup from "./ChatPopup";

const CallRequest = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openChat = () => {
    setChatOpen(true);
  };

  const closeChat = () => {
    setChatOpen(false);
  };

  return (
    <>
      <button
        className="px-4 py-2 font-medium bg-yellow-500 hover:bg-blue-950 hover:text-white text-black rounded-lg text-sm"
        onClick={() => setModalOpen(true)}
      >
        Free Call
      </button>

      {modalOpen && (
        <dialog className="modal" open>
          <div className="modal-box bg-[#021D4A] text-white">
            <div className="text-right">
              <button className="bg-[#021D4A]" onClick={closeModal}>
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
              className="font-bold text-lg text-center"
              style={{
                fontFamily: "Roboto",
                fontSize: "40px",
                fontWeight: 400,
                lineHeight: "35px",
                letterSpacing: "0em",
              }}
            >
              Call Back Request
            </h3>
            <p className="py-4 text-center">
              Fill below details and we will get back to you.
            </p>
            <hr className="border-t-2 border-blue-950 my-4" />
            <div className="modal-action">
              <form method="dialog">
                <div className="flex justify-between items-center">
                  <h3 className="mr-24">Name:</h3>
                  <input
                    type="text"
                    placeholder="Type Your Name"
                    className="input input-bordered w-full max-w-xs text-black"
                    style={{ borderRadius: "0" }}
                  />
                </div>
                <div className="flex mt-10 items-center">
                  <h3 className="mr-6" style={{ whiteSpace: "nowrap" }}>
                    Contact Number:
                  </h3>

                  <input
                    type="number"
                    placeholder="Your Phone Number"
                    className="input input-bordered w-full max-w-xs text-black"
                    style={{ borderRadius: "0" }}
                  />
                </div>
                <div className="text-center mt-10">
                  <a
                    className="bg-[#BD981B] text-black w-full md:w-[150px] px-8 py-3 mr-0 md:mr-4 mt-5 md:mb-0"
                    href="#"
                    onClick={openChat}
                  >
                    Request a Call
                  </a>

                  <h2 className="text-xl my-4">Or</h2>
                  <a
                    href="#"
                    className="underline"
                    onClick={openChat}
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "25px",
                      fontWeight: 400,
                      lineHeight: "41px",
                      letterSpacing: "0em",
                      textAlign: "center",
                    }}
                  >
                    Chat With Us
                  </a>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      )}

      {chatOpen && (
        <div className="chat-popup">
          <ChatPopup onClose={closeChat} />
        </div>
      )}
    </>
  );
};

export default CallRequest;
