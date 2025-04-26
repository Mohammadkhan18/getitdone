
import { FaPuzzlePiece, FaHandsHelping, FaBuilding, FaRegLightbulb } from "react-icons/fa";

const cardData = [
  {
    icon: <FaPuzzlePiece size={50} className="text-blue-700 mx-auto mb-4" />,
    title: "Customized Solutions",
    description: "At BVMC, we understand that each business is unique. Our team of business setup consultants provides solutions that align with your goals and requirements, ensuring a seamless business setup in Dubai and UAE. Whether you’re looking to establish your presence in the Mainland or a Free Zone, our company formation services are customized to meet your specific business needs.",
  },
  {
    icon: <FaHandsHelping size={50} className="text-blue-700 mx-auto mb-4" />,
    title: "Ongoing Support System",
    description: "We don’t just help you set up your business — we provide ongoing support to ensure your success. From company formation in Dubai to handling regulatory compliance, our team is dedicated to offering continuous assistance, helping you navigate any challenges as your business grows. With BVMC’s expert business setup services, you can focus on your core business activities while we handle the complexities.",
  },
  {
    icon: <FaBuilding size={50} className="text-blue-700 mx-auto mb-4" />,
    title: "Cost-Effective Solutions",
    description: "We understand that the cost of company formation is a crucial factor for every entrepreneur. At BVMC, we provide cost-effective business setup solutions that ensure you get the best value for your investment. We offer transparent pricing, so you know exactly what to expect with no hidden fees.",
  },
  {
    icon: <FaRegLightbulb size={50} className="text-blue-700 mx-auto mb-4" />,
    title: "Bank Account Opening",
    description: "Opening a corporate bank account in the UAE is crucial for business operations, and we have a remarkable 99% success rate in assisting our clients with the process. Our experts will evaluate your financial needs, assist with document preparation, and guide you through the application process for both national and international banks, ensuring a smooth experience with minimal delays.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {cardData.map((card, index) => (
          <div key={index} className="bg-gray-900 text-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            {card.icon}
            <h3 className="text-2xl font-semibold text-center  mb-4">{card.title}</h3>
            <p className=" text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
