
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MessageSquareCode, CheckCircle2, Calendar, Clock, Users, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SchoolBadge from '@/components/SchoolBadge';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  company: z.string().optional(),
  background: z.string().min(10, { message: "Please provide some background information." }),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions to proceed."
  }),
});

const RegisterPromptEngineering = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState(""); // Store the webhook URL
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      background: "",
      termsAccepted: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!webhookUrl) {
      toast({
        title: "Missing Configuration",
        description: "Please enter a webhook URL in the admin settings below the form.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    console.log("Form values:", values);
    
    try {
      // Send data to webhook
      const response = await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', // Important for cross-origin requests
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          submittedAt: new Date().toISOString(),
          course: "Prompt Engineering Certification"
        }),
      });
      
      // Since we're using no-cors mode, we won't get a proper response
      // Instead, we'll just assume success if no error is thrown
      toast({
        title: "Application Submitted",
        description: "We will contact you shortly with next steps.",
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background bg-[url('https://assets.dryicons.com/uploads/icon/preview/8933/small_1x_c2525344-731a-4a38-928e-3cda64666aee.png')]">
      <div className="min-h-screen bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-[2px]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/20 to-transparent -z-10" />
          
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <SchoolBadge school="ai" className="animate-pulse" />
                  <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
                    Enrollment Open
                  </span>
                </div>

                <h1 className="heading text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  Prompt Engineering Certification
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                  Master the art and science of crafting effective prompts for large language models 
                  to generate high-quality, relevant outputs for various applications.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <span className="text-muted-foreground">Next Session: July 2023</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span className="text-muted-foreground">Duration: 1 Week</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-muted-foreground">Limited to 25 Students</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-blue-500" />
                    <span className="text-muted-foreground">Certificate Awarded</span>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="inline-block bg-gradient-to-r from-blue-500/10 to-blue-400/10 p-4 rounded-lg">
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <span className="text-sm text-blue-600 font-medium">Course Fee</span>
                        <div className="text-2xl font-bold text-primary">₦200,000</div>
                      </div>
                      <a href="#registration-form" className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                        Register Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400 rounded-full opacity-20 animate-pulse blur-3xl" />
                  <div className="relative flex items-center justify-center h-full">
                    <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/30 transform hover:scale-105 transition-all duration-500">
                      <MessageSquareCode className="h-32 w-32 text-primary" strokeWidth={1.25} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Side - Course Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Course Overview */}
              <Card className="border-0 bg-white/80 backdrop-blur-md shadow-md">
                <CardHeader>
                  <CardTitle>Course Overview</CardTitle>
                  <CardDescription>What you'll learn in this program</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The Prompt Engineering Certification is designed to give you a comprehensive understanding of how to 
                    effectively craft prompts for Large Language Models like GPT-4, Claude, and others. You'll learn 
                    practical techniques that can be applied immediately in your work to achieve better results.
                  </p>
                </CardContent>
              </Card>

              {/* Syllabus */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Course Syllabus</h2>
                <div className="space-y-4">
                  {syllabus.map((item, index) => (
                    <Card key={index} className="border border-blue-100/50 bg-white/70 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                          {item.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Registration Form */}
            <div id="registration-form">
              <div className="sticky top-28">
                <Card className="border border-blue-100/50 bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Register for Prompt Engineering</CardTitle>
                    <CardDescription>Fill out the form below to apply</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company/Organization (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Where do you work?" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="background"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Background</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your experience with AI and your goals for taking this course" 
                                  {...field} 
                                  className="min-h-[100px]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="termsAccepted"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-normal">
                                  I agree to the terms and conditions for this program
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Application"}
                        </Button>
                      </form>
                    </Form>

                    {/* Admin Section - Hidden in production but useful for setup */}
                    <div className="mt-6 p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50">
                      <h3 className="text-sm font-semibold mb-2">Admin Settings</h3>
                      <p className="text-xs text-gray-500 mb-2">
                        Enter your webhook URL that will receive form submissions.
                        You can create a webhook using Make.com, Zapier, or Google Apps Script to save submissions to Google Sheets.
                      </p>
                      <Input
                        type="text"
                        placeholder="https://hook.eu1.make.com/..."
                        value={webhookUrl}
                        onChange={(e) => setWebhookUrl(e.target.value)}
                        className="text-xs"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Once set up, you can hide this section in production.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

const syllabus = [
  {
    title: "Day 1: Introduction to Prompt Engineering",
    description: "Understand the fundamentals of LLMs and prompt engineering concepts",
    topics: [
      "How Large Language Models work",
      "The importance of quality prompts",
      "Core prompt engineering patterns",
      "Common mistakes and pitfalls",
    ],
  },
  {
    title: "Day 2: Basic Prompt Techniques",
    description: "Learn essential techniques for creating effective prompts",
    topics: [
      "Zero-shot and few-shot prompting",
      "Role-based prompting strategies",
      "System prompts vs. user prompts",
      "Hands-on exercises with basic prompts",
    ],
  },
  {
    title: "Day 3: Advanced Prompt Engineering",
    description: "Master sophisticated prompt engineering patterns for complex tasks",
    topics: [
      "Chain-of-thought reasoning",
      "Task decomposition for complex problems",
      "Retrieval augmented generation (RAG)",
      "Prompt templates and frameworks",
    ],
  },
  {
    title: "Day 4: Domain-Specific Applications",
    description: "Apply prompt engineering to specific domains and use cases",
    topics: [
      "Prompting for data analysis",
      "Creative content generation",
      "Code generation and debugging",
      "Customer service and support automation",
    ],
  },
  {
    title: "Day 5: Evaluation and Optimization",
    description: "Learn methods to evaluate and improve your prompts",
    topics: [
      "Prompt evaluation frameworks",
      "A/B testing prompts",
      "Cost and token optimization techniques",
      "Building a prompt library",
    ],
  },
];

export default RegisterPromptEngineering;
