
import React from 'react';

const Stats = () => {
  return (
    <section className="section bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="heading text-3xl md:text-4xl mb-6">
            Lagos Data School by the Numbers
          </h2>
          <p className="text-muted-foreground text-lg">
            We've helped hundreds of students transform their careers and master data skills.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 glass rounded-xl reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const stats = [
  {
    value: "1,200+",
    label: "Students Trained"
  },
  {
    value: "15+",
    label: "Data Courses"
  },
  {
    value: "92%",
    label: "Employment Rate"
  },
  {
    value: "50+",
    label: "Corporate Clients"
  }
];

export default Stats;
