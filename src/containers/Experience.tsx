import React from 'react';

// Define the types of props that Experience component receives
interface ExperienceProps {
  jobTitle: string;
  companyName: string;
  startDate: Date;
  endDate?: Date; // endDate is optional
}

const Experience: React.FC<ExperienceProps> = ({ jobTitle, companyName, startDate, endDate }) => {
  // Component logic

  // Example JSX using the props
  return (
    <div>
      <h2>{jobTitle}</h2>
      <p>Company: {companyName}</p>
      <p>Start Date: {startDate.toDateString()}</p>
      {endDate && <p>End Date: {endDate.toDateString()}</p>}
    </div>
  );
};

export default Experience;


