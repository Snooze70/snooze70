import React from "react";

const MeditationCategoryCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={icon} alt={`${title} icon`} />
      <span className="text-green-800 text-lg">{title}</span>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const MeditationCategories = ({ categories }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 my-8">
      {categories.map((category, index) => (
        <MeditationCategoryCard
          key={index}
          icon={category.icon}
          title={category.title}
          description={category.description}
        />
      ))}
    </div>
  );
};

export default MeditationCategories;
