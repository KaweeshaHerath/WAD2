import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hello Everyone ',
    title: 'Kaweesha Herath.',
    tagline: 'I am interseting about web and mobile application development.',
    description:
    "I'm a passionate Front-End web developer as a beginner about web applications with React.js & Next.js with TypeScript & TailwindCSS and UI/UX designing.",
    specialText: 'Currently available for a studing , job & freelance',
    cta: {
        title: 'Get a touch about my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};