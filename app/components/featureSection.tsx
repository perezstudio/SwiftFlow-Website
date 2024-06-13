import React from "react";
import FeatureCard, { FeatureCardProps } from "./featureCard";
import ImageSwitcher from "./imageSwitcher";

export interface FeatureSectionProps {
  mode: "primary" | "secondary";
  title: string;
  heading: "primary" | "secondary" | "teal" | "blue" | "purple";
  description: string;
  subheading: string;
  sectionIcon: string;
  sectionIconDark?: string;
  altText: string;
  featureDetails: FeatureCardProps[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  mode,
  title,
  heading,
  description,
  subheading,
  sectionIcon,
  sectionIconDark,
  altText,
  featureDetails,
}) => {
  const processText = (text: string) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  const baseStyles =
    "flex flex-row max-w-full justify-center px-4 md:px-8 py-16";

  const modeStyles = {
    primary: "bg-custom-light-gray dark:bg-custom-dark",
    secondary: "bg-white dark:bg-black",
  };

  const selectedMode = modeStyles[mode];

  const baseHeading =
    "flex flex-row max-w-full text-4xl md:text-6xl font-semibold";

  const headingStyles = {
    primary: "text-custom-primary",
    secondary: "text-custom-secondary",
    teal: "text-custom-teal",
    blue: "text-custom-blue",
    purple: "text-custom-purple",
  };

  const selectedHeading = headingStyles[heading];

  return (
    <div className={`${baseStyles} ${selectedMode}`}>
      <div className="max-w-1200 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2	px-8">
          <div className="flex flex-row gap-2 items-center">
            <ImageSwitcher
              lightImgSrc={sectionIcon}
              darkImgSrc={sectionIconDark}
              altText={altText}
            />
            <span className="text-base font-semibold">{subheading}</span>
          </div>
          <h2 className={`${baseHeading} ${selectedHeading}`}>
            {processText(title)}
          </h2>
          <p className="max-w-xl">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2">
          {featureDetails.map((feature, index) => (
            <FeatureCard
              key={index}
              mode={feature.mode}
              title={feature.title}
              description={feature.description}
              imgSrc={feature.imgSrc}
              imgSrcDark={feature.imgSrcDark}
              altText={feature.altText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
