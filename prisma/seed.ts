import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

const posts = [
  {
    id: "1",
    slug: "the-vision-behind-swiftflow",
    type: "image",
    category: "Update",
    title: "Revolutionizing App Development: The Vision Behind SwiftFlow",
    date: "Jun 18th 2024",
    markdown: `
  Today, I am thrilled to answer some of the questions about our truly extraordinary platform – SwiftFlow. This is not just another development tool; it’s the culmination of years of innovation, dedication, and a vision to revolutionize the way we create apps.
  
  Many have ventured down this path before, attempting to build tools like SwiftFlow. Some projects faltered, others were acquired and shelved, and many simply couldn’t keep up with the ever-evolving technology landscape. So, what makes SwiftFlow different?
  
  ## Our Mission
  
  Our mission is profoundly simple yet ambitious:
  
  1.	Lower the barrier to entry for app creation and development.
  
  2.	Enhance workflows for seasoned Swift developers.
  
  3.	Simplify the learning process of Swift for non-developers.
  
  We’re not here to reinvent the wheel or disrupt your current development practices. We aim to enhance your workflow and welcome more people into the vibrant world of Swift development.
  
  ## The Power of SwiftFlow
  
  Swift is an extraordinary language, crafted to streamline development across the Apple ecosystem and beyond. Coupled with SwiftUI, it empowers developers to create apps faster and more efficiently than ever before. These advancements allow us to build a dynamic and responsive interface that leverages the full power of Apple’s incredible devices.
  
  With SwiftFlow, we keep abstractions to a minimum, ensuring cleaner, more performant code while seamlessly integrating with existing Apple APIs right out of the box. Our goal is not to change how you develop but to make it easier and faster to bring your next great app idea to life and deploy it effortlessly to the App Store.
  
  ## Roadmap & Timelines
  
  You might be wondering, “How long will this take? When can I get my hands on it?”
  
  Thanks to the phenomenal feedback and enthusiasm from our initial project announcement, we’ve outlined our initial roadmap, begun development, and made substantial progress on our first MVP. In the coming days, we’ll make this roadmap public, inviting the community to suggest crucial features and track our progress.
  
  ## Pricing
  
  One of the most frequently asked questions since our announcement has been about pricing. While still in flux, rest assured that we will seek community feedback to ensure the price aligns with the value SwiftFlow brings to you, your business, and your development workflow. During our beta phase, SwiftFlow will be absolutely FREE for all users, allowing us to refine and perfect this remarkable tool.
  
  ## An Open Platform
  
  Many similar solutions opt for closed-source models or impose paywalls. Our vision for SwiftFlow is different. We are committed to creating an open platform that lets you work without restrictions. When you export your code from SwiftFlow, it’s yours – no paywalls, no restrictions. You can edit and modify the exported code as you see fit, ensuring you never outgrow the platform. This openness allows you to build on your success, whether you continue to develop independently or bring in a development team to take your app to new heights.
  
  These are just some of the answers to the many questions we’ve received from our early signups. We are excited to continue this journey with you, answering your questions, and showcasing our progress. Share this project with your developer friends, and stay tuned for more updates!
  
  Sincerely,
  
  Kevin Perez
  
  Project Lead
      `.trim(),
    banner: "start-banner.png",
    thumbnail: "thumbnail-banner.png",
    excerpt: "testing the excerpt update",
    status: true,
  },
  {
    id: "2",
    slug: "90s-mixtape",
    type: "image",
    category: "Update",
    title: "A Mixtape I Made Just For You",
    date: "Jun 18th 2024",
    markdown: `
  # 90s Mixtape
  
  - I wish (Skee-Lo)
  - This Is How We Do It (Montell Jordan)
  - Everlong (Foo Fighters)
  - Ms. Jackson (Outkast)
  - Interstate Love Song (Stone Temple Pilots)
  - Killing Me Softly With His Song (Fugees, Ms. Lauryn Hill)
  - Just a Friend (Biz Markie)
  - The Man Who Sold The World (Nirvana)
  - Semi-Charmed Life (Third Eye Blind)
  - ...Baby One More Time (Britney Spears)
  - Better Man (Pearl Jam)
  - It's All Coming Back to Me Now (Céline Dion)
  - This Kiss (Faith Hill)
  - Fly Away (Lenny Kravits)
  - Scar Tissue (Red Hot Chili Peppers)
  - Santa Monica (Everclear)
  - C'mon N' Ride it (Quad City DJ's)
      `.trim(),
    banner: "start-banner.png",
    thumbnail: "start-banner-thumbnail.png",
    excerpt: "testing the excerpt update",
    status: true,
  },
];

for (const post of posts) {
  await prisma.post.upsert({
    where: { slug: post.slug },
    update: post,
    create: post,
  });
}
