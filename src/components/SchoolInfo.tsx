
import React from 'react';
import { LineChart, BrainCircuit } from 'lucide-react';

interface SchoolInfoProps {
  type: 'data' | 'ai';
}

const SchoolInfo: React.FC<SchoolInfoProps> = ({ type }) => {
  const schools = {
    data: {
      name: 'School of Data',
      description: 'Our School of Data provides comprehensive training in data analytics, visualization, and management skills to help you excel in the data-driven world.',
      icon: <LineChart className="h-8 w-8 text-blue-500" />,
      color: 'bg-blue-50/80',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200/30',
      glowColor: 'shadow-blue-300/20'
    },
    ai: {
      name: 'School of AI',
      description: 'Our School of AI offers cutting-edge training in artificial intelligence, machine learning, and related fields for the next generation of AI professionals.',
      icon: <BrainCircuit className="h-8 w-8 text-yellow-700" />,
      color: 'bg-yellow-50/80',
      textColor: 'text-yellow-700',
      borderColor: 'border-yellow-200/30',
      glowColor: 'shadow-yellow-300/20'
    }
  };

  const school = schools[type];

  return (
    <div className={`${school.color} p-6 rounded-xl backdrop-blur-sm border ${school.borderColor} hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${school.glowColor}`}>
      <div className="flex items-start space-x-4">
        <div className="bg-white/80 p-3 rounded-lg shadow-sm pulse-blue relative">
          {school.icon}
          {/* Add subtle glow effect */}
          <div className={`absolute inset-0 rounded-lg ${type === 'data' ? 'bg-blue-500/10' : 'bg-yellow-500/10'} blur-md -z-10`}></div>
        </div>
        <div>
          <h3 className={`text-xl font-bold ${school.textColor} flex items-center`}>
            {school.name}
            {/* Futuristic dot indicator */}
            <span className={`ml-2 h-2 w-2 rounded-full ${type === 'data' ? 'bg-blue-500' : 'bg-yellow-500'} animate-pulse`}></span>
          </h3>
          <p className="text-muted-foreground mt-2">{school.description}</p>
        </div>
      </div>
      {/* Add tech pattern background decoration */}
      <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 opacity-5">
        <div className={`h-full w-full ${type === 'data' ? 
          "bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%230072f5%27%20fill-opacity%3D%270.4%27%3E%3Cpath%20d%3D%27M36%2034v6h6v-6h-6zm6%206v6h6v-6h-6zm-12%200h6v6h-6v-6zm12%200h6v6h-6v-6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" : 
          "bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23f59e0b%27%20fill-opacity%3D%270.4%27%3E%3Cpath%20d%3D%27M36%2034v6h6v-6h-6zm6%206v6h6v-6h-6zm-12%200h6v6h-6v-6zm12%200h6v6h-6v-6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"
        }`}></div>
      </div>
    </div>
  );
};

export default SchoolInfo;
