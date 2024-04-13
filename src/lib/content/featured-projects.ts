import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects I've worked on",
  projects: [
    {
      id: getId(),
      name: 'Cine App',
      description: 'A Movie Reccomendation app.',
      tasks:
        'I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Stripe payments with secure authentication.',
      url: 'https://www.integraleads.xyz/',
      img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
      tags: ['NextJs', 'TypeScript', ' CSS', 'Express'],
    },
    {
      id: getId(),
      name: 'Calculator ',
      description: 'The AI-powered platform that simplifies proposal creation.',
      tasks:
        'Implemented NextAuth authentication, integrated Mailchimp for newsletter subscription, developed a custom hook for dark mode, created UI components in the Dashboard, and used Notion as a CMS for the blogs page.',
      url: 'https://www.uproposalgpt.com/',
      img: 'https://user-images.githubusercontent.com/68834718/279469731-be163482-20cd-4cb3-8bcb-bbb2c1a345b8.png',
      tags: ['Open AI', 'NextJs', 'jJavascript', 'CSS' , 'HTML' ],
    },
  ],
};

export default featuredProjectsSection;
