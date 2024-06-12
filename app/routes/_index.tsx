import type { MetaFunction } from "@remix-run/node";import Header from "~/components/header";
import FeatureSection, { FeatureSectionProps } from "~/components/featureSection";

export const meta: MetaFunction = () => {
  return [
    { title: "SwiftFlow - The No Code Swift Editor" },
    { name: "SwiftFlow", content: "The world's first No Code editor for Swift!" },
  ];
};

const featureSections: FeatureSectionProps[] = [
  {
    mode: 'primary',
    title: "Build Visually.\nSwift at its heart.",
    heading: "primary",
    description: "Immerse yourself in a new era of app building with our visual editor, while staying true to the core of Swift. Design your app in a user-friendly, visual environment, making it easy to piece together your perfect user interface. But beneath that visual simplicity, the power of Swift and SwiftUI is at work, ensuring your app is robust, efficient, and ready to deliver a top-notch user experience. Bring your ideas to life through the power of visuals while harnessing the strength of Swift!",
    subheading: "Visual Editor",
    sectionIcon: "visual-editor-icon-light.svg",
    sectionIconDark: "visual-editor-icon-dark.svg",
    altText: "Visual Editor Icon",
    featureDetails: [
      {
        mode: 'secondary',
        title: 'Drag ‘n Drop',
        description: 'Experience the simplicity of app creation with our drag-and-drop feature.',
        imgSrc: 'drag-n-drop-light.svg',
        imgSrcDark: 'drag-n-drop-dark.svg',
        altText: "Drag 'n Drop Image"
      },
      {
        mode: 'secondary',
        title: 'Customizable Templates',
        description: 'Choose from a variety of customizable templates to jumpstart your project.',
        imgSrc: 'components-light.svg',
        imgSrcDark: 'components-dark.svg',
        altText: 'Components Image'
      },
      {
        mode: 'secondary',
        title: 'Customizable Templates',
        description: 'Choose from a variety of customizable templates to jumpstart your project.',
        imgSrc: 'template-icon.svg',
        altText: 'test'
      },
      {
        mode: 'secondary',
        title: 'Customizable Templates',
        description: 'Choose from a variety of customizable templates to jumpstart your project.',
        imgSrc: 'template-icon.svg',
        altText: 'test'
      },
    ],
  },
  {
    mode: 'secondary',
    title: "Advanced Features",
    heading: "purple",
    description: "Dive into the advanced features for experienced users.",
    subheading: "Advanced Editor",
    sectionIcon: "advanced-icon.svg",
    altText: "Advanced Features",
    featureDetails: [
      {
        mode: 'primary',
        title: 'Code Preview',
        description: 'See the live preview of your code as you type.',
        imgSrc: 'preview-icon.svg',
        altText: 'test'
      },
      {
        mode: 'primary',
        title: 'Real-time Collaboration',
        description: 'Work with your team in real-time with our collaboration tools.',
        imgSrc: 'collab-icon.svg',
        altText: 'test'
      },
      {
        mode: 'primary',
        title: 'Real-time Collaboration',
        description: 'Work with your team in real-time with our collaboration tools.',
        imgSrc: 'collab-icon.svg',
        altText: 'test'
      },
      {
        mode: 'primary',
        title: 'Real-time Collaboration',
        description: 'Work with your team in real-time with our collaboration tools.',
        imgSrc: 'collab-icon.svg',
        altText: 'test'
      },
    ],
  },
];

export default function Index() {
  return (
    <div>
      <Header />
      {featureSections.map((section, index) => (
        <FeatureSection key={index} {...section} />
      ))}
    </div>
  );
}
