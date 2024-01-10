import uiuxFeature21 from "../../../assets/uiux-design/grid 1.png";
import uiuxFeature22 from "../../../assets/uiux-design/ui-design-2 1.png";
import uiuxFeature23 from "../../../assets/uiux-design/prototyping 1.png";
import uiuxFeature24 from "../../../assets/uiux-design/web-design-2 1.png";
import uiuxFeature25 from "../../../assets/uiux-design/idea 1.png";
import uiuxFeature26 from "../../../assets/uiux-design/ux-design 1.png";

const FeatureTwo = () => {
  return (
    <div className="bg-[#021D4A] py-5">
      <div className="px-4 md:px-8 lg:px-20 mx-auto backdrop:sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-10 lg:py-20 bg-[#082C6B] text-white shadow-2xl rounded-2xl">
        <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature21}
                alt="Ui Ux Feature Two 1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              INFORMATION ARCHITECTURE / WIREFRAME
            </h6>

            <p>
              We organize the content and flow of an application or website and
              create usable content structures from complex sets of information,
              developing an outline for content organization, information
              relationships, and navigation.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature22}
                alt="Ui Ux Feature Two 2"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              VISUAL DESIGN PROCESS
            </h6>
            <p>
              Our visual design process goes beyond aesthetics; it is rooted in
              experience design. We prioritize functionality and usability to
              create user experiences that resonate with your audience based
              upon an explicit understanding of users, tasks, and environments.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature23}
                alt="Ui Ux Feature Two 3"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">PROTOTYPE CREATION</h6>
            <p>
              The prototype creation process is where we create, review, and
              refine an interactive simulation or sketch of the final product.
              This allows us to fully visualize the end result of the product
              and gauge its usability before it’s final deployment.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature24}
                alt="Ui Ux Feature Two 4"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">UX/UI TESTING</h6>
            <p>
              We use techniques such as Concurrent Think Aloud (CTA),
              Retrospective Think Aloud (RTA), Concurrent Probing (CP),
              Retrospective Probing (RP), site analytics, and A/B Testing to
              evaluate the usability of the final product with real users.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature25}
                alt="Ui Ux Feature Two 5"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">DISCOVERY PROCESS</h6>
            <p>
              During the discovery process, we thoroughly research user
              information, technical restraints, and business goals and
              requirements through user and stakeholder interviews, content and
              site audits, task analysis, and ecosystem mapping.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature26}
                alt="Ui Ux Feature Two 6"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">UX AUDIT PROCESS</h6>
            <p>
              We use empirical methods to boost conversions and ensure that key
              user-specific activities such as actions, menu items, and main
              navigation are easily located and identifiable, making it easy for
              users to achieve their goals within the site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
