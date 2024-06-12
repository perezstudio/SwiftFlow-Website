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
  return (
	<div>
		<div>
			<div>
				<div>
					<img
						className="h-8 w-auto"
						src={sectionIcon}
						alt={altText}
					/>
					<span>{subheading}</span>
				</div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div>
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