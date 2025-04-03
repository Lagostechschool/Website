
import React from 'react';

const Testimonial = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto reveal">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-blue-400 p-1">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm mix-blend-soft-light" />
            
            <div className="relative bg-white rounded-[calc(1rem-2px)] p-8 md:p-10">
              <svg className="h-12 w-12 text-primary/20 mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              <p className="text-lg md:text-xl mb-6 text-muted-foreground">
                "Lagos Data School completely transformed my career prospects. The hands-on training and supportive instructors gave me the confidence and skills to land a role as a Data Analyst at a leading fintech company. The post-course support was exceptional - I still reference the materials and connect with the community regularly."
              </p>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-primary font-semibold text-lg">
                  OA
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Oluwaseun Adeyemi</p>
                  <p className="text-sm text-muted-foreground">Data Analyst, PayStack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
