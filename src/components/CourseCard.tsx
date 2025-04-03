
import React from 'react';
import { cn } from '@/lib/utils';
import SchoolBadge from './SchoolBadge';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  school: 'data' | 'ai';
  className?: string;
  style?: React.CSSProperties;
  active?: boolean;
  price?: string;
  duration?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  icon,
  school,
  className,
  style,
  active = false,
  price,
  duration,
}) => {
  return (
    <div 
      className={cn(
        "relative group rounded-2xl overflow-hidden backdrop-blur-sm border p-6 transition-all duration-300 hover-scale",
        active 
          ? "bg-white/80 border-primary/20 card-shadow" 
          : "bg-white/30 border-gray-100/30 opacity-75",
        className
      )}
      style={style}
    >
      {active && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      )}
      
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className={cn(
            "h-12 w-12 rounded-lg flex items-center justify-center",
            active ? "bg-blue-50 text-primary" : "bg-gray-50 text-gray-400"
          )}>
            {icon}
          </div>
          <div className="flex space-x-2">
            <SchoolBadge school={school} />
            {!active && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                Coming Soon
              </span>
            )}
            {active && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 animate-pulse">
                Active
              </span>
            )}
          </div>
        </div>
        
        <h3 className={cn(
          "text-xl font-semibold",
          !active && "text-gray-500"
        )}>{title}</h3>
        
        <p className={cn(
          "text-muted-foreground",
          !active && "text-gray-400"
        )}>{description}</p>
        
        {active && price && (
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-400/10 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-600 font-medium">Price:</span>
              <span className="font-bold text-primary">{price}</span>
            </div>
            {duration && (
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-blue-600 font-medium">Duration:</span>
                <span className="font-medium text-blue-800">{duration}</span>
              </div>
            )}
          </div>
        )}
        
        <a 
          href={active ? "#contact" : "#"} 
          className={cn(
            "inline-block text-sm font-medium link-underline",
            active ? "text-primary" : "text-gray-400 pointer-events-none"
          )}
        >
          {active ? "Apply now" : "Coming soon"}
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
