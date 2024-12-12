import { FC } from "react";

interface TestimonialCardProps {
    name: string,
    image: string,
    rating: string,
    text: string,
}
const TestimonialCard: FC<TestimonialCardProps> = ({ name, image, rating, text }) => (
    <div className="bg-[#0000000D] p-4 rounded-lg shadow-md m-4 w-64">
      <div className="flex items-center mb-4">
        <img src={ image } alt={name} className="w-8 h-8 rounded-full mr-2" /> {/* Placeholder */}
        <small className="font-medium">{name}</small>
        <span className="ml-2 text-yellow-400">{rating}</span>
      </div>
      <p className="text-sm pb-5">{text}</p>
    </div>
  );
export default TestimonialCard