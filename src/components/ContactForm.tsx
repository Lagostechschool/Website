
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    courses: '',
    learningMode: 'physical'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, learningMode: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          courses: '',
          learningMode: 'physical'
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-white to-blue-50/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Get Started
          </span>
          <h2 className="heading text-3xl md:text-4xl mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-muted-foreground text-lg">
            Fill the form to receive the course modules, programme fee and duration within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 reveal">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="whatsapp" className="block text-sm font-medium">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="Your WhatsApp number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="courses" className="block text-sm font-medium">
                  What Course(s) are you interested in? <span className="text-red-500">*</span>
                </label>
                <input
                  id="courses"
                  name="courses"
                  type="text"
                  required
                  placeholder="e.g., Python, SQL, Data Analysis"
                  value={formData.courses}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium mb-2">
                  Mode of learning <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  {['Physical', 'Virtual', 'Private sessions'].map((mode) => (
                    <label key={mode} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="learningMode"
                        value={mode.toLowerCase()}
                        checked={formData.learningMode === mode.toLowerCase()}
                        onChange={() => handleRadioChange(mode.toLowerCase())}
                        className="form-radio h-5 w-5 text-primary"
                      />
                      <span className="ml-2">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={cn(
                  "w-full rounded-lg bg-primary text-white py-3 px-6 font-medium transition-all",
                  (isSubmitting || isSubmitted) ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90"
                )}
              >
                {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted Successfully!' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
