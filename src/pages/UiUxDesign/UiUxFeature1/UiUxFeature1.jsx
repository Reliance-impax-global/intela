import uiuxFeature11 from "../../../assets/uiux-design/grid 1.png";
import uiuxFeature12 from "../../../assets/uiux-design/ux-design 1.png";
import uiuxFeature13 from "../../../assets/uiux-design/ui-design-2 1.png";
import uiuxFeature14 from "../../../assets/uiux-design/web-design-2 1.png";
import uiuxFeature15 from "../../../assets/uiux-design/coding 2.png";
import uiuxFeature16 from "../../../assets/uiux-design/smartphone 1.jpg";

const UiUxFeature1 = () => {
  return (
    <div className="bg-[#021D4A] py-5">
      <div className="px-4 md:px-8 lg:px-20 mx-auto backdrop:sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-10 lg:py-20 bg-[#082C6B] text-white shadow-2xl rounded-2xl">
        <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature11}
                alt="Wd Feature 1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              INFORMATION ARCHITECTURE DESIGN
            </h6>

            <p>
              Our developers use industry-leading tools to construct new content
              management lifecycles, content models, and robust Document
              Information Typing Architecture (DITA) all while streamlining
              organic processes for conversion rate optimization (CRO).
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature12}
                alt="Wd Feature 2"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              USER EXPERIENCE(UX) DEVELOPMENT
            </h6>
            <p>
              We construct highly responsive Graphical User Interfaces (GUI)
              that include elements like 2D/3D animations and embedded media,
              providing an organic, unified user experience throughout our
              custom solutions.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature13}
                alt="Wd Feature 3"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              USER INTERFACE (UI) DEVELOPMENT
            </h6>
            <p>
              Our UI/UX designers are experts in graphic libraries, including
              OpenGL and WebGL. We collaborate with your stakeholders and IT
              team to develop a style (including color palettes, logo designs
              and layouts) that harmonizes with your company culture.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature14}
                alt="Wd Feature 4"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              WEB & MOBILE APP UI/UX DEVELOPMENT
            </h6>
            <p>
              We utilize frameworks like Xamarin, DevExpress, Ionic,
              Appcelerator, and Apache Cordova to deliver highly responsive
              UI/UX designs that fully leverage touchscreen functionality and
              provide mobile-first user experiences for progressive web apps.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature15}
                alt="Wd Feature 5"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              FRONT-END PROGRAMMING
            </h6>
            <p>
              Our front-end development specialists are experts in key front-end
              languages (HTML5, CSS, JavaScript) and frameworks like jQuery,
              AngularJS, Node.js and Bootstrap. We ensure our tightly written
              code is optimized to work on multiple device types and browsers.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature16}
                alt="Wd Feature 6"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              INTUITIVE & INTERACTIVE SOLUTION
            </h6>
            <p>
              We use well-known UI guidelines like Human Interface Guidelines
              (HIG) and Material Design to develop intuitive solutions with
              goal-driven, usable designs that influence positive user responses
              and facilitate simple communication between a user and the
              interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiUxFeature1;
