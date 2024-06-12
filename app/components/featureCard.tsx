import React from 'react';

export interface FeatureCardProps {
  mode: 'primary' | 'secondary';
  title: string;
  description: string;
  imgSrc: string;
  altText: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ mode, title, description, imgSrc, altText }) => {
	const baseStyles = 'flex flex-col gap-1 p-8 rounded-3xl';
	
    const modeStyles = {
		primary: 'bg-custom-light-gray dark:bg-custom-dark',
		secondary: 'bg-white dark:bg-black',
  	};
	
	const selectedMode = modeStyles[mode];
	
	return (
	<div className={`${baseStyles} ${selectedMode}`}>
		<h3 className="text-4xl font-font-semibold">{title}</h3>
		<p>{description}</p>
		<img
			className="w-full"
			src={imgSrc}
			alt={altText}
		/>
	</div>
	);
}

export default FeatureCard;