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
        description: 'With our intuitive drag-and-drop feature, designing your dream app is as simple as selecting, dragging, and dropping components onto your canvas. No coding required. Just pure creativity.',
        imgSrc: 'drag-n-drop-light.svg',
        imgSrcDark: 'drag-n-drop-dark.svg',
        altText: "File Manager showing list of available views & models"
      },
      {
        mode: 'secondary',
        title: 'Components',
        description: 'Design and customize your own UI elements, creating reusable custom-made views that give you unparalleled control over your app’s look and feel.',
        imgSrc: 'components-light.svg',
        imgSrcDark: 'components-dark.svg',
        altText: 'User List Item Card Component'
      },
      {
        mode: 'secondary',
        title: 'Build to Major Platforms',
        description: 'Tailor your UI elements and functionality to the specific features of each platform without worrying about the intricacies of coding for different devices. Enter the broad universe of Apple users and let your app shine on any screen, any size, any platform.',
        imgSrc: 'platforms-light.svg',
        imgSrcDark: 'platforms-dark.svg',
        altText: 'Mac, iPad, & iPhone showing app built on SwiftFlow'
      },
      {
        mode: 'secondary',
        title: 'Export SwiftUI Code',
        description: 'Once your no-code design is complete, seamlessly export your project into clean, reusable SwiftUI code. Perfect for developers of all levels, this feature allows you to further refine, enhance, and integrate your app into larger projects – ready for the App Store.',
        imgSrc: 'code-editor-light.svg',
        imgSrcDark: 'code-editor-dark.svg',
        altText: 'Code editor showing a basic app struct with the Content View inside of the struct'
      },
    ],
  },
  {
    mode: 'secondary',
    title: "Advanced Logic\nMade Easy.",
    heading: "purple",
    description: "Construct and visualize app logic in a user-friendly, drag-and-drop interface. From defining user interactions to creating conditions, managing state changes, and setting up complex sequences, everything is done visually. The power to shape how your app responds and behaves is now at your fingertips.",
    subheading: "Logic Workflows",
    sectionIcon: "logic-workflows-light.svg",
    sectionIconDark: "logic-workflows-dark.svg",
    altText: "Logic Workflows Icon",
    featureDetails: [
      {
        mode: 'primary',
        title: 'No Code Actions',
        description: 'Unlock the full potential of your app with No Code Action Modules. Seamlessly trigger actions and automate workflows with ease, all without writing a single line of code. Experience the power of advanced functionality, simplified.',
        imgSrc: 'no-code-actions-light.svg',
        imgSrcDark: 'no-code-actions-dark.svg',
        altText: 'Group of cards showing available action modifiers'
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
