import React from "react";
import { Link } from "@remix-run/react";

const MeditationCard = ({
  imageSrc,
  title,
  duration,
  description,
  tags = [],
  therapistName,
  additionalIcons = [],
}) => {
  return (
    <div className="flex flex-row border border-gray-300 rounded-md p-3 gap-4 text-green-800">
      <div>
        <img src={imageSrc} alt={title} className="object-cover" />
      </div>
      <div className="text-section">
        <h3 className="font-bold my-2">{title}</h3>
        <span className="text-gray-400 font-bold my-2">
          {duration} mins
        </span>
        <p className="text-wrap">{description}</p>

        {tags.length > 0 && (
          <div className="btn flex flex-row items-center gap-1 text-green-800 my-2">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="bg-gray-300 p-2 rounded-md text-sm m-2"
              >
                <Link to="#">{tag}</Link>
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-row items-center gap-4">
          <div className="circle-word flex flex-row items-center gap-2">
            <div className="bg-gray-400 rounded-full h-5 w-5"></div>
            <p>{therapistName}</p>
          </div>

          {additionalIcons.length > 0 && (
            <div className="image flex flex-row items-center gap-4">
              {additionalIcons.map((icon, index) => (
                <span key={index}>
                  <img
                    src={icon.src}
                    alt={icon.alt || ""}
                    className={icon.className || "h-5"}
                  />
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeditationCard;
