
import React from 'react';
import { cn } from '@/lib/utils';

interface SchoolBadgeProps {
  school: 'data' | 'ai';
  className?: string;
}

const SchoolBadge: React.FC<SchoolBadgeProps> = ({ school, className }) => {
  const schoolConfig = {
    data: {
      name: 'School of Data',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700',
    },
    ai: {
      name: 'School of AI',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-700',
    }
  };

  const config = schoolConfig[school];

  return (
    <span 
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', 
        config.bgColor, 
        config.textColor,
        className
      )}
    >
      {config.name}
    </span>
  );
};

export default SchoolBadge;
