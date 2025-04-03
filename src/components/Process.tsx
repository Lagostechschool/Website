
import React from 'react';

const Process = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="heading text-3xl md:text-4xl mb-6">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Our comprehensive learning program is designed to support you at every stage of your data science journey.
          </p>
        </div>

        <div className="grid gap-12 relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative md:grid md:grid-cols-2 md:gap-8 items-center reveal ${
                index % 2 === 1 ? 'md:rtl' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${index % 2 === 1 ? 'md:text-right md:ltr' : ''}`}>
                <div className="absolute left-[50%] -translate-x-1/2 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                  {index + 1}
                </div>
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-4 flex items-center md:block">
                    <span className="flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <div className="text-muted-foreground">
                    <ul className="space-y-2">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="bg-blue-50/50 p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400" />
                  <h4 className="font-semibold text-xl mb-4">{step.sectionTitle}</h4>
                  <ul className="space-y-3">
                    {step.sectionItems.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    title: "Pre-Class Preparation",
    items: [
      "Prepare with foundational concepts before your first class",
      "Set up your technical environment with our guidance",
      "Get access to pre-course materials to jumpstart your learning"
    ],
    sectionTitle: "PRE-CLASS",
    sectionItems: [
      "Pre Course Learning",
      "Pre Course Assignment",
      "Technical Setup and Device Setting"
    ]
  },
  {
    title: "Instructor-Led Learning",
    items: [
      "Engage in interactive sessions with industry professionals",
      "Apply concepts through hands-on exercises and projects",
      "Receive personalized feedback and support from instructors"
    ],
    sectionTitle: "PHYSICAL CLASSES",
    sectionItems: [
      "Instructor-led physical classes",
      "Technical Support",
      "Assignment",
      "Exam Registration Support"
    ]
  },
  {
    title: "Post-Class Support",
    items: [
      "Join our community of data professionals",
      "Access all class materials and recordings",
      "Receive ongoing support as you apply your new skills"
    ],
    sectionTitle: "POST-CLASS",
    sectionItems: [
      "Study Group",
      "Access to Class Recordings",
      "Course Completion Certification",
      "Exam Registration Support",
      "Access to Exam Practice Questions",
      "Access to Mock Exam",
      "Ongoing Support"
    ]
  }
];

export default Process;
