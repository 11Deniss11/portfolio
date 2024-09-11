import React, { useEffect } from "react";
import FrostGlassBox from "../components/FrostGlassBox";
import Mech20 from "../assets/Mech20Cropped.jpg";
// import SparkansLogoSVG from "../assets/SparkansLogoSVG.svg";

interface Props {
  setPageName: (pageName: string) => void;
  setBackgroundColourTop: (colour: number[]) => void;
  setBackgroundColourBottom: (colour: number[]) => void;
}

function Mechatronics({
  setPageName,
  setBackgroundColourTop,
  setBackgroundColourBottom,
}: Props) {
  useEffect(() => {
    setPageName("Mechatronics Class");
    setBackgroundColourTop([64, 62, 49]);
    setBackgroundColourBottom([27, 26, 64]);
  }, [setPageName]);
  return (
    <div style={{ height: "710vh", overflow: "hidden" }}>
      <FrostGlassBox
        divStyle={{
          top: "15%",
          left: "5%",
          width: "40.2%",
          height: "60%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={textColour}>Mechatronics 35 (WIP, scroll for expert systems)</h1>
      </FrostGlassBox>
      <FrostGlassBox
        divStyle={{
          top: "15%",
          right: "5%",
          height: "60%",
          width: "43%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <img
          src={Mech20}
          alt="Image of Mechatronics 25 FTC Challenge"
          style={{
            marginLeft: "3%",
            marginTop: "3.2%",
            width: "90%",
            objectFit: "cover",
          }}
        />
      </FrostGlassBox>
      {/* Expert Systems */}
      <FrostGlassBox
        divStyle={{
          top: "80%",
          left: "5%",
          right: "5%",
          height: "56%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ ...textColour, textAlign: "center",marginBottom: "3%" }}>Expert Systems</h1>
        <h2 style={{ ...textColour, textIndent: "50px" }}>Expert Systems are software that use artificial intelligence trained on databases of expert's data to emulate the sort of decisions that a human expert would make.
          Some of it's use cases include Medical Diagnosis, Language translation, Customer Support, and more.
        </h2>
        <h1 style={{ ...textColour, textAlign: "center", marginTop: "7%", fontSize: "28px" }}>There are 5 Fundamental Components of an Expert System</h1>
      </FrostGlassBox>
      {/* Knowledge Base */}
      <FrostGlassBox
        divStyle={{
          top: "141%",
          left: "5%",
          height: "50%",
          width: "29vw",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      ></FrostGlassBox>
      <FrostGlassBox
        divStyle={{
          top: "141%",
          right: "5%",
          left: "38vw",
          height: "50%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ ...textColour, textAlign: "center",marginBottom: "6%", fontSize: "35px" }}>Knowledge Base</h1>
        <h2 style={{ ...textColour, textIndent: "50px", marginRight: "0.3%" }}>Expert systems require a database of knowledge to learn from to be able to preform their task like a human would.
          This could be a dataset of images with tags or a set of rules with a goal or anything that can be represented in a digital file. 
          It is sometimes accompanied by an aquisition component which will let users to add more data to the knowledge base and 
          allow the system to train itself on this new data to improve it's accuracy.
        </h2>
      </FrostGlassBox>
      {/* Interference Engine */}
      <FrostGlassBox
        divStyle={{
          top: "196%",
          left: "5%",
          right: "38vw",
          height: "50%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ ...textColour, textAlign: "center", marginBottom: "6%", fontSize: "35px" }}>Interference Engine</h1>
        <h2 style={{ ...textColour, textIndent: "50px", marginRight: "0.3%" }}>The interference engine will take and interpret the knowledge base and the user's input and generate an output based on this data.
          It is the brain of the expert system and is responsible for making all the decisions based on it's knowledge base and the user input.
        </h2>
      </FrostGlassBox>
      <FrostGlassBox
        divStyle={{
          top: "196%",
          right: "5%",
          height: "50%",
          width: "29vw",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      ></FrostGlassBox>
      {/* A User Interface */}
      <FrostGlassBox
        divStyle={{
          top: "251%",
          left: "5%",
          height: "50%",
          width: "29vw",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      ></FrostGlassBox>
      <FrostGlassBox
        divStyle={{
          top: "251%",
          right: "5%",
          left: "38vw",
          height: "50%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ ...textColour, textAlign: "center",marginBottom: "6%", fontSize: "35px" }}>User Interface</h1>
        <h2 style={{ ...textColour, textIndent: "50px", marginRight: "0.3%" }}>This is the front-end which allows for a non-expert user to use the software.
          It is anything that interfaces with the users including buttons, text, and more. It often coexists with
          an explanation component which will help explain the output to a non-expert user.
        </h2>
      </FrostGlassBox>
      {/* Why we need expert systems */}
      <FrostGlassBox
        divStyle={{
          top: "306%",
          left: "5%",
          right: "5%",
          height: "50%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ ...textColour, textAlign: "center",marginBottom: "3%" }}>Why do we need Expert Systems?</h1>
        <h2 style={{ ...textColour, textIndent: "50px" }}>Expert Systems reduce the need for human experts, allowing for
          more users in places without experts to access the technology which would otherwise be limited to the number of 
          experts available. It could also save time and money as it could be used to automate tasks that would 
          otherwise require a human expert.
        </h2>
        <h1 style={{ ...textColour, textAlign: "center", marginTop: "7%", fontSize: "28px" }}>Three Different Ways Expert Systems are being Used Today:</h1>
      </FrostGlassBox>
      {/* Medical Industry */}
      <FrostGlassBox
        divStyle={{
          top: "361%",
          left: "5%",
          right: "38vw",
          height: "40%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ ...textColour, textAlign: "center", marginBottom: "6%", fontSize: "35px" }}>Expert System for Diagnosing Malaria</h1>
        <h2 style={{ ...textColour, textIndent: "50px", marginRight: "0.3%" }}> This expert system is used to diagnose 
          Malaria and other diseases in developing countries where there aren't as many medical experts. It's knowledge 
          base is a lot of data from Malaria patients and it's interference engine uses this data to diagnose patients.
        </h2>
      </FrostGlassBox>
      <FrostGlassBox
        divStyle={{
          top: "361%",
          right: "5%",
          height: "40%",
          width: "29vw",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      ></FrostGlassBox>
      {/* Language Translation */}
      <FrostGlassBox
        divStyle={{
          top: "406%",
          left: "5%",
          height: "50%",
          width: "29vw",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      ></FrostGlassBox>
      <FrostGlassBox
        divStyle={{
          top: "406%",
          right: "5%",
          left: "38vw",
          height: "50%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ ...textColour, textAlign: "center",marginBottom: "6%", fontSize: "35px" }}>Language Translation</h1>
        <h2 style={{ ...textColour, textIndent: "50px", marginRight: "0.3%" }}>If you ever used Google Translate, 
          you've likely seen that it's not perfect. A regular non-expert system will struggle to transfer the full 
          meaning of the text. Expert systems can be used to improve this by using a knowledge base of Languages and 
          their translations by experts to generate more accurate translations.
        </h2>
      </FrostGlassBox>
      {/* Customer Service */}
      <FrostGlassBox
        divStyle={{
          top: "461%",
          left: "5%",
          right: "38vw",
          height: "40%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ ...textColour, textAlign: "center", marginBottom: "6%", fontSize: "35px" }}>Customer Service</h1>
        <h2 style={{ ...textColour, textIndent: "50px", marginRight: "0.3%" }}>Expert systems are beginning to see use 
          in customer service where they are used to answer common questions and help customers with their problems. 
          They may be able to reduce costs and improve the availability of customer service.
        </h2>
      </FrostGlassBox>
      <FrostGlassBox
        divStyle={{
          top: "461%",
          right: "5%",
          height: "40%",
          width: "29vw",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      ></FrostGlassBox>
      {/* How is Matlab and Simulink used in Expert Systems */}
      <FrostGlassBox
        divStyle={{
          top: "506%",
          left: "5%",
          right: "5%",
          height: "63%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ ...textColour, textAlign: "center",marginBottom: "3%" }}>How is Matlab and Simulink Used in Expert Systems?</h1>
        <h2 style={{ ...textColour, textIndent: "50px" }}>Matlab is a common programming language used to create expert 
          systems with it's excellent support for matrix operations and it's widely used in the industry. Simulink is a
          visual programming language that is used to create simulations of electrical and mechanical systems which can 
          be used seemlessly with Matlab to create expert systems. In our mechatronics course we learned to use both 
          with embedded systems. (not really expert systems but close enough I don't really want to mention expert 
          systems in my final portfolio since we're not doing that in the course)
        </h2>
        <h1 style={{ ...textColour, textAlign: "center", marginTop: "3%", fontSize: "28px" }}>Here is an example of an Expert System built on Matlab and/or Simulink:</h1>
      </FrostGlassBox>
      {/* Expert System Example */}
      <FrostGlassBox
        divStyle={{
          top: "574%",
          left: "5%",
          height: "53%",
          width: "29vw",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      ></FrostGlassBox>
      <FrostGlassBox
        divStyle={{
          top: "574%",
          right: "5%",
          left: "38vw",
          height: "53%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ ...textColour, textAlign: "center",marginBottom: "6%", fontSize: "35px" }}>Decoding Words From Brain Signals</h1>
        <h2 style={{ ...textColour, textIndent: "50px", marginRight: "0.3%" }}>This expert system created by 
          the University of Texas, Austin, is able to decode words from brain signals with reasonable accuracy, which 
          could be used to help those who are unable to speak. It uses a knowledge base of brain signals processed with 
          Matlab and other Mathworks products for signal processing. This Expert system effectively uses 5 different AI 
          models for each step of the process they are using, so rather than there being one inference engine and 
          knowledge base, there is more like 5 of each.
        </h2>
      </FrostGlassBox>
      {/* Sources */}
      <FrostGlassBox
        divStyle={{
          top: "632%",
          left: "5%",
          right: "5%",
          height: "70%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ ...textColour, textAlign: "center",marginBottom: "3%" }}>Sources:</h1>
        <h2 style={{ ...textColour, fontSize: "20px", marginRight: "0.3%" }}>
          <a style={{ ...textColour, textDecoration: "underline"}} 
          href="https://www.mygreatlearning.com/blog/expert-systems-in-artificial-intelligence/">
          Bhat, Samudyata. “What Are Expert Systems in Artificial Intelligence? 2024.” Great Learning Blog: Free Resources 
          What Matters to Shape Your Career!, 2 Sept. 2024</a>
          <br />
          <br />
          <a style={{ ...textColour, textDecoration: "underline"}} 
          href="https://www.devopsschool.com/blog/what-are-expert-systems-and-use-cases-of-expert-systems/">
          Ashwani KJunior Software Engineer at Cotocus pvt. ltdEmail- contact@devopsschool.com. “What 
          Are Expert Systems and Use Cases of Expert Systems?” DevOpsSchool.Com, 22 Sept. 2023</a>
          <br />
          <br />
          <a style={{ ...textColour, textDecoration: "underline"}} 
          href="https://www.scirp.org/journal/paperinformation?paperid=86252">
          Nkuma-Udah, Kenneth Ikechukwu, et al. “Medical Diagnosis Expert System for Malaria and Related Diseases for Developing 
          Countries.” SCIRP, Scientific Research Publishing, 27 June 2018</a>
          <br />
          <br />
          <a style={{ ...textColour, textDecoration: "underline"}} 
          href="https://www.expert.ai/blog/self-service-customer-support-solutions/">
          Team, Expert.ai. “Self-Service Customer Support Solutions.” Expert.Ai, 4 July 2022</a>
          <br />
          <br />
          <a style={{ ...textColour, textDecoration: "underline"}} 
          href="https://www.mathworks.com/company/user_stories/ut-austin-researchers-convert-brain-signals-to-words-and-phrases-using-wavelets-and-deep-learning.html">
          “UT Austin Researchers Convert Brain Signals to Words and Phrases Using Wavelets and Deep 
          Learning.” MATLAB & Simulink</a>
        </h2>
      </FrostGlassBox>
    </div>
  );
}

const textColour: React.CSSProperties = {
  color: "rgba(133, 133, 52)",
};

export default Mechatronics;
