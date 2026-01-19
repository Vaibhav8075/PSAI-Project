import ServiceBlock from "./ServiceBlock";
import img1 from "../../assets/honesty.jpg";
import img2 from "../../assets/manpower.jpg";
import img4 from "../../assets/training.jpg";
import img3 from "../../assets/negotiation.jpg";
import img5 from "../../assets/executive.jpg";

const ServicesSection = () => {
  return (
    <>
      <ServiceBlock
        title="Manpower consultancy"
        image={img2}
        text={[
          "PJIPL is one of Central India’s fastest emerging names in Manpower consultancy which provides a wide range of recruitment solutions for diverse requirements.",
          "We have a clear vision of achieving success and growth for both organizations and candidates. Hence we have managed to position ourselves as an extremely reliable recruitment firm in a short span of time. We act as a channel for perfect synergy between the organizations and candidates by providing the right fit for both.",
        ]}
        reverse={false}
      />

      <ServiceBlock
        title="Honesty is our reflection"
        image={img1}
        text={[
          "PJIPL firmly believe in maintaining highest level of integrity and confidentiality of our customers. We are here to build long term relationships and not a mere sales and have made stringent internal policies to not disclose any of the clients or candidates confidential/personal information and keep a check on their adherence .",
          "PJIPL honestly represent our clients to candidates and our candidates to clients. PJIPL do not promise what PJIPL cannot deliver. Our Honesty is our reflection.",
        ]}
        reverse={true}
      />

      <ServiceBlock
        title="Executive Search"
        image={img5}
        text="PJIPL is among the top executive search firms in India, specializing in recruiting highly qualified candidates at leadership roles across functions and levels for a number of Indian & global companies."
        reverse={false}
      />

      <ServiceBlock
        title="Negotiations & Recruitment"
        image={img3}
        text="PJIPL has a inhouse negotiation framework, with which we are able to set the agenda, establish the tone of the negotiation, and direct how the negotiation proceeds."
        reverse={true}
      />

      <ServiceBlock
        title="Training & Development"
        image={img4}
        text="Post-Recruitment and Selection of candidates, PJIPL works closely with Client's HRM Department and for On-Boarding, Training and Development."
        reverse={false}
      />
    </>
  );
};

export default ServicesSection;
