import solution1 from "../../../assets/solution/solution1.png";
import solution2 from "../../../assets/solution/solution2.png";
import solution3 from "../../../assets/solution/solution3.png";
import solution4 from "../../../assets/solution/solution4.png";
import solution5 from "../../../assets/solution/solution5.png";
import solution6 from "../../../assets/solution/solution6.png";
import solution7 from "../../../assets/solution/solution7.png";
import solution8 from "../../../assets/solution/solution8.png";
const FeatureSolution = () => {
  return (
    <div className="bg-[#021D4A] py-5 px-20">
      <div className="px-4 md:px-8 lg:px-20 mx-auto backdrop:sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-10 lg:py-20 bg-[#082C6B] text-white shadow-2xl rounded-2xl">
        <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={solution1}
                alt="service1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              IP PBX , IVR & CHAT
            </h6>

            <p>
              The basic and advance call management features along with IVR are
              embed as a standard features on top of our platform. This allow
              the users to set their IVR , programmable in a corporate pattern
              so that the business can be monitored closely.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={solution2}
                alt="service1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              CONTACT CENTER AGENTS MONITORING- INBOUND / OUTBOUND
            </h6>
            <p>
              Ensure you never miss out critical information of any business
              call. All calls are automatically recorded and stored on the
              secure cloud for later needs.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={solution3}
                alt="service1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              WEBRTC BASED CONFERENCE, WITH PEXIP CONFERENCE INTEGRATION
            </h6>
            <p>
              Solution allow you to connect to WebRTC using a simple dialing
              through Deltapath mobile application or Engage Desktop client, to
              connect to conference room where H.323/ SIP call can be connected
              immediately.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={solution4}
                alt="service1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              MS TEAM INTEGRATION FOR TELEPHONY
            </h6>
            <p>
              We provide our solution for MS team user who wants to connect to
              their telephony system , simply buy E1 licenses and connect to our
              system without any need to upgrade to E3 / E5 for telephony
              feature.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={solution5}
                alt="service5"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              VOICE & VIDEO RECORDING
            </h6>
            <p>
              Our built in Voice & Video recording can allow all the calls to be
              recorded for a better audit purpose. This can be configured as per
              the corporate requirement whether to enable or disable the call.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={solution6}
                alt="service6"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              OMNICHANNEL AGENTS INTEGRATION WITH LINE / FACEBOOK/ WHATSPP
            </h6>
            <p>
              Get a handy feature to manage business calls easily. Build up
              client loyalty using ACD capabilities to forward the calls to
              office extension, Skype or personal mobile.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={solution7}
                alt="service6"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              CISCO, AVAYA, POLY, YEALINK & OTHER ANALOG / VOIP PHONE
              INTEGRATION
            </h6>
            <p>
              Your phone need not to be replaced regardless of any platform you
              want to connect in future , at a one time price without any
              customized license part number required anymore.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={solution8}
                alt="service6"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Application integration through API, SDK and customized
              development
            </h6>
            <p>
              Our set of API and SDK can help corporate to integrate to their
              existing in-house built application , CRM or any other critical
              services where the users want to include workforce management with
              the call functionalities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSolution;
