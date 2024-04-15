import featuredProjectsSection from '@/lib/content/featured-projects';
import { Wrapper } from '@/components';
import FeaturedProject from '@/components/ui/FeaturedProject';
import { getSectionAnimation } from '@/styles/animations'; // Import the function correctly

const FeaturedProjects = () => {
  return (
    <Wrapper id="projects" {...getSectionAnimation()}>
      <div className="mb-20 space-y-3 text-center lg:text-left">
        <h2 className="heading-secondary !mb-0 capitalize">
          {featuredProjectsSection.title}
        </h2>
        <p className="font-mono lg:hidden text-accent capitalize text-xs lg:mb-2.5">
          featured projects
        </p>
      </div>

      <div className="space-y-10 md:space-y-16 lg:space-y-36">
        {featuredProjectsSection.projects.map((project, i) => (
          <FeaturedProject
            video={project.video || ''}
            key={project.id}
            align={i % 2 === 0 ? 'right' : 'left'}
            {...project}
            {...getSectionAnimation()} // Call the function to get animation properties
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturedProjects;

