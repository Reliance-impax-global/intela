import whsFeature1 from "../../../assets/wh-security/database 1.png";
import whsFeature2 from "../../../assets/wh-security/software 1.png";
import whsFeature3 from "../../../assets/wh-security/audit 1.png";
const WhsFeature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-14 lg:px-8 lg:py-20 bg-[#060F18]">
      <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-1">
        <div className="flex flex-col max-w-full sm:mx-auto sm:flex-row bg-[#091424] text-white p-10 rounded-2xl">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-10 h-10 rounded-full hover:animate-ping"
                src={whsFeature1}
                alt="Web Hosting Security Feature 1"
              />
            </div>
          </div>
          <div className="mb-10">
            <h6 className="my-10 text-xl font-bold leading-5">
              WEB HOSTING SECURITY
            </h6>
            <p className="mb-3 text-sm pr-10">
              Web hosting security services refer to a range of measures and
              solutions implemented to protect websites, web applications, and
              the associated data hosted on servers from various online threats
              and vulnerabilities. These services are crucial for maintaining
              the integrity, confidentiality, and availability of the hosted
              content.some key components of web hosting security
              services:Firewalls,SSL/TLS Encryption,Malware Scanning and
              Removal,DDoS Protection,Security Audits and Monitoring,Intrusion
              Detection and Prevention Systems (IDPS),Regular Software Updates
              and Patch Management, Access Control and Authentication,Backup and
              Disaster Recovery,Security Information and Event Management (SIEM)
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-full sm:mx-auto sm:flex-row bg-[#091424] text-white p-10 rounded-2xl">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 bg-yellow-500 animate-bounce">
              <img
                className="w-10 h-10 rounded-full hover:animate-ping"
                src={whsFeature2}
                alt="Web Hosting Security Feature 2"
              />
            </div>
          </div>
          <div className="my-10">
            <h6 className="mb-3 text-xl font-bold leading-5">
              CLOUD STORAGE PENTESTING
            </h6>
            <p className="mb-3 text-sm pr-10">
              Cloud storage penetration testing, often referred to as cloud
              storage pentesting, is a specialized security assessment process
              focused on identifying vulnerabilities, weaknesses, and potential
              security risks within cloud storage solutions. Cloud storage
              services allow users to store and access data remotely, often
              through a third-party providers infrastructure. Examples of
              popular cloud storage services include Amazon S3, Google Cloud
              Storage, Microsoft Azure Blob Storage, and others.Here are key
              aspects of cloud storage penetration testing are Authorization and
              Access Controls,Encryption and Data Protection,Configuration
              Management,Data Integrity,Cross-Origin Resource Sharing (CORS),
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full sm:mx-auto sm:flex-row bg-[#091424] text-white p-10 rounded-2xl">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-10 h-10 rounded-full hover:animate-ping"
                src={whsFeature3}
                alt="Web Hosting Security Feature 3"
              />
            </div>
          </div>
          <div className="my-10">
            <h6 className="mb-3 text-xl font-bold leading-5">
              LAPTOP SECURITY AUIDIT
            </h6>
            <p className="mb-3 text-sm pr-10 ">
              A laptop security audit is a comprehensive examination and
              assessment of the security measures and configurations implemented
              on a laptop computer. The primary goal of this audit is to
              identify vulnerabilities, weaknesses, and potential risks that
              could compromise the confidentiality, integrity, and availability
              of data stored on the laptop or the laptop itself. Conducting a
              security audit for laptops is essential in ensuring that they meet
              security standards, adhere to organizational policies, and
              mitigate the risks associated with various cyber threats.Key
              components of a laptop security audit may include are Operating
              System Security,User Authentication,Encryption,Patch Management
              etc..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhsFeature;
