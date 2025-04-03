import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import Testimonial from '@/components/Testimonial';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { BrainCircuit, MessageSquareCode, Bot, Code, LineChart, Database, FileSpreadsheet, BarChart, BookOpen } from 'lucide-react';
import SchoolBadge from '@/components/SchoolBadge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with the reveal class
    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background bg-[url('https://assets.dryicons.com/uploads/icon/preview/8933/small_1x_c2525344-731a-4a38-928e-3cda64666aee.png')]">
      <div className="min-h-screen bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-[2px]">
        <Navbar />
        <Hero />
        
        {/* Advanced AI Courses Section - MOVED UP */}
        <section id="advanced-courses" className="section bg-yellow-50/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16 reveal">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">
                Advanced Specializations
              </span>
              <h2 className="heading text-3xl md:text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Cutting-Edge Specializations
              </h2>
              <p className="text-muted-foreground text-lg">
                Dive deep into specialized fields with our advanced programs designed for the next generation of professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Reordering advancedCourses array to show Prompt Engineering first */}
              {advancedCourses.map((course, index) => (
                <div 
                  key={index}
                  className="reveal"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`rounded-2xl overflow-hidden shadow-lg hover-scale transition-all duration-300 h-full flex flex-col backdrop-blur-sm ${course.active ? 'bg-white/80' : 'bg-white/30 opacity-75'}`}>
                    <div className={`h-48 ${course.active ? 'bg-gradient-to-br from-blue-500 to-blue-400' : 'bg-gradient-to-br from-gray-400 to-gray-300'} p-8 flex items-center justify-center text-white relative`}>
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <SchoolBadge school={course.school} />
                        {course.active ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 animate-pulse">
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <div className="w-20 h-20 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl">
                        {course.icon}
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className={`text-2xl font-bold mb-4 ${course.active ? '' : 'text-gray-500'}`}>{course.title}</h3>
                      <p className={`mb-6 flex-grow ${course.active ? 'text-muted-foreground' : 'text-gray-400'}`}>{course.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {course.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className={`px-3 py-1 rounded-full text-xs font-medium ${course.active ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-500'}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      {course.active && course.price && (
                        <div className="bg-gradient-to-r from-blue-500/10 to-blue-400/10 p-3 rounded-lg mb-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-blue-600 font-medium">Price:</span>
                            <span className="font-bold text-primary">{course.price}</span>
                          </div>
                          {course.duration && (
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-sm text-blue-600 font-medium">Duration:</span>
                              <span className="font-medium text-blue-800">{course.duration}</span>
                            </div>
                          )}
                        </div>
                      )}
                      {course.active ? (
                        <Link 
                          to="/register-prompt-engineering" 
                          className="inline-block font-medium text-primary link-underline"
                        >
                          Apply now
                        </Link>
                      ) : (
                        <span className="inline-block font-medium text-gray-400 pointer-events-none">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Courses Section - NOW AFTER ADVANCED COURSES */}
        <section id="courses" className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16 reveal">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">
                Our Schools
              </span>
              <h2 className="heading text-3xl md:text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Master In-Demand Skills at Our Specialized Schools
              </h2>
              <p className="text-muted-foreground text-lg">
                Choose from our comprehensive range of programs designed to help you excel in today's data-driven and AI-powered world.
              </p>
              
              <div className="mt-8 flex justify-center">
                <Tabs defaultValue="all" className="w-full max-w-md">
                  <TabsList className="grid w-full grid-cols-3 glass">
                    <TabsTrigger value="all">All Programs</TabsTrigger>
                    <TabsTrigger value="data">School of Data</TabsTrigger>
                    <TabsTrigger value="ai">School of AI</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  icon={course.icon}
                  school={course.school}
                  active={course.active}
                  price={course.price}
                  duration={course.duration}
                  className="reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          </div>
        </section>
        
        <Features />
        <Process />
        <Stats />
        <Testimonial />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

const courses = [
  {
    title: "Python for Data Analysis",
    description: "Learn how to use Python programming language for data analysis and data science in Ikeja, Lagos Data School Nigeria.",
    school: "data" as const,
    active: false,
    price: undefined,
    duration: undefined,
    icon: (
      <Code className="h-6 w-6" />
    )
  },
  {
    title: "R Programming",
    description: "R is a programming language for statistical computing used widely by professionals for data analysis and data science.",
    school: "data" as const,
    active: false,
    price: undefined,
    duration: undefined,
    icon: (
      <Code className="h-6 w-6" />
    )
  },
  {
    title: "SQL",
    description: "SQL or Structured Query Language as part of core data science skill helps to Query, extract and analyze data from databases.",
    school: "data" as const,
    active: false,
    price: undefined,
    duration: undefined,
    icon: (
      <Database className="h-6 w-6" />
    )
  },
  {
    title: "Advanced Excel for Data Analytics",
    description: "Advanced Microsoft Excel for data analytics is a training programme that takes you through the most successful tool created by Microsoft for getting insights into data.",
    school: "data" as const,
    active: false,
    price: undefined,
    duration: undefined,
    icon: (
      <FileSpreadsheet className="h-6 w-6" />
    )
  },
  {
    title: "Power BI for Data Analytics",
    description: "Power BI is a data visualization tool which trains learners on how to create interactive visuals and dashboards which helps in communicating business insights.",
    school: "data" as const,
    active: false,
    price: undefined,
    duration: undefined,
    icon: (
      <BarChart className="h-6 w-6" />
    )
  },
  {
    title: "Data Science",
    description: "Master the art of extracting insights from data through statistical analysis and visualization techniques.",
    school: "data" as const,
    active: false,
    price: undefined,
    duration: undefined,
    icon: (
      <LineChart className="h-6 w-6" />
    )
  }
];

// Reorder the advanced courses to show Prompt Engineering first
const advancedCourses = [
  {
    title: "Prompt Engineering",
    description: "Learn the art and science of crafting effective prompts for large language models to generate high-quality, relevant outputs for various applications.",
    icon: <MessageSquareCode className="w-12 h-12 text-white" />,
    school: "ai" as const,
    active: true,
    price: "₦200,000",
    duration: "1 Week",
    skills: ["LLMs", "ChatGPT", "Instruction Design", "Chain-of-Thought", "Evaluation"]
  },
  {
    title: "Machine Learning Engineering",
    description: "Master the complete machine learning workflow, from data preparation to model deployment, focusing on both supervised and unsupervised learning techniques.",
    icon: <BrainCircuit className="w-12 h-12 text-white" />,
    school: "ai" as const,
    active: false,
    price: undefined,
    duration: undefined,
    skills: ["Neural Networks", "Deep Learning", "MLOps", "Computer Vision", "NLP"]
  },
  {
    title: "Agentic AI Development",
    description: "Develop autonomous AI agents that can perform complex tasks, reason through multi-step problems, and interact with various tools and systems.",
    icon: <Bot className="w-12 h-12 text-white" />,
    school: "ai" as const,
    active: false,
    price: undefined,
    duration: undefined,
    skills: ["Autonomous Agents", "LangChain", "Tool Use", "Planning", "Multi-Agent Systems"]
  }
];

export default Index;
