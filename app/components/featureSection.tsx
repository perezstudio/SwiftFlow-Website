import FeatureCard, { FeatureCardProps } from './featureCard'

export interface FeatureSectionProps {
  mode: 'primary' | 'secondary';
  title: string;
  description: string;
  subheading: string;
  sectionIcon: string;
  altText: string;
  featureDetails: FeatureCardProps[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ mode, title, description, subheading, sectionIcon, altText, featureDetails }) => {
	const baseStyles = 'flex flex-row max-w-full justify-center px-8 py-16';
	
	const modeStyles = {
		primary: 'bg-custom-light-gray dark:bg-custom-dark',
		secondary: 'bg-white dark:bg-black',
	  };
	
	const selectedMode = modeStyles[mode];
	
  return (
	<div className={`${baseStyles} ${selectedMode}`}>
		<div className='max-w-1200 w-full'>
			<div className='px-8'>
				<div>
					<img
						className="h-8 w-auto"
						src={sectionIcon}
						alt={altText}
					/>
					<span>{subheading}</span>
				</div>
				<h2>{title}</h2>
				<p className='max-w-xl'>{description}</p>
			</div>
			<div className='grid grid-cols-2 gap-8'>
				{featureDetails.map((feature, index) => (
				  <FeatureCard
					key={index}
					mode={feature.mode}
					title={feature.title}
					description={feature.description}
					imgSrc={feature.imgSrc}
					altText={feature.altText}
				  />
				))}
			</div>
		</div>
	</div>
  );
}

export default FeatureSection;