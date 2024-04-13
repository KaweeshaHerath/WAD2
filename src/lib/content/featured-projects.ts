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
        'Developed a user-friendly and interactive mobile application that recommends movies to users based on their preferences and ratings.',
      url: 'https://drive.google.com/file/d/1SJbV7uheI36G_LOMxMc8DFYqdAL6XzgW/view?usp=drive_link', // Access to the documentation 
      img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
      tags: ['NextJs', 'TypeScript', ' CSS', 'React' ,'HTML'],
    },
    
  ],
};

export default featuredProjectsSection;
