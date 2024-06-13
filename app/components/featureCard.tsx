import React from "react";
import ImageSwitcher from "./imageSwitcher";

export interface FeatureCardProps {
  mode: "primary" | "secondary";
  title: string;
  description: string;
  imgSrc: string;
  imgSrcDark?: string;
  altText: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  mode,
  title,
  description,
  imgSrc,
  imgSrcDark,
  altText,
}) => {
  const baseStyles = "flex flex-col gap-1 p-8 rounded-3xl";

  const modeStyles = {
    primary: "bg-custom-light-gray dark:bg-custom-dark",
    secondary: "bg-white dark:bg-black",
  };

  const selectedMode = modeStyles[mode];

  return (
    <div className={`${baseStyles} ${selectedMode}`}>
      <h3 className="text-3xl md:text-4xl font-semibold">{title}</h3>
      <p>{description}</p>
      {imgSrcDark ? (
        <ImageSwitcher
          lightImgSrc={imgSrc}
          darkImgSrc={imgSrcDark}
          altText={altText}
        />
      ) : (
        <ImageSwitcher lightImgSrc={imgSrc} altText={altText} />
      )}
    </div>
  );
};

export default FeatureCard;
