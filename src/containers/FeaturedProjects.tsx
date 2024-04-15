import React from 'react';
import featuredProjectsSection from '@/lib/content/featured-projects';
import { Wrapper } from '@/components';
import FeaturedProject from '@/components/ui/FeaturedProject';
import { getSectionAnimation } from '@/styles/animations';

const FeaturedProjects = () => {
  return (
    // Marking the parent component as a client component
    <React.Fragment>
      {/* Add the "use client" pragma here */}
      {/* @ts-ignore */}
      {' '}use client{' '}
      <Wrapper id="projects" {...getSectionAnimation()}>
        <div className="mb-20 space-y-3 text-center lg:text-left">
          <h2 className="heading-secondary !mb-0 capitalize">{featuredProjectsSection.title}</h2>
          <p className="font-mono lg:hidden text-accent capitalize text-xs lg:mb-2.5">featured projects</p>
        </div>

        <div className="space-y-10 md:space-y-16 lg:space-y-36">
          {featuredProjectsSection.projects.map((project, i) => (
            <FeaturedProject
              video={project.video || ''}
              key={project.id}
              align={i % 2 === 0 ? 'right' : 'left'}
              {...project}
              {...getSectionAnimation()}
            />
          ))}
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default FeaturedProjects;


