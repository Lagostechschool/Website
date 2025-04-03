
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const animateElements = () => {
      if (headingRef.current) {
        headingRef.current.classList.add('animate-slide-up');
        headingRef.current.style.animationDelay = '0.2s';
        headingRef.current.style.opacity = '1';
      }
      
      if (subHeadingRef.current) {
        subHeadingRef.current.classList.add('animate-slide-up');
        subHeadingRef.current.style.animationDelay = '0.4s';
        subHeadingRef.current.style.opacity = '1';
      }
      
      if (buttonRef.current) {
        buttonRef.current.classList.add('animate-slide-up');
        buttonRef.current.style.animationDelay = '0.6s';
        buttonRef.current.style.opacity = '1';
      }
    };

    // Start animations after a short delay
    const timer = setTimeout(animateElements, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDcyZjUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 -z-10" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Data Science & Analytics Education
              </span>
              
              <h1 
                ref={headingRef}
                className="heading text-4xl sm:text-5xl md:text-6xl opacity-0"
              >
                Discover Data Analysis From Beginner to Advanced
              </h1>
              
              <p 
                ref={subHeadingRef}
                className="text-lg md:text-xl text-muted-foreground opacity-0"
              >
                Transform your career with professional data skills. Learn Python, R, SQL, Excel, Power BI and more with hands-on training from industry experts.
              </p>
              
              <a 
                ref={buttonRef}
                href="#courses" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 opacity-0 group"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:flex justify-end">
            <div className="relative w-full max-w-xl aspect-square rounded-3xl bg-gradient-to-br from-blue-500 to-teal-400 p-1">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-teal-400/80" />
              </div>
              
              <div className="relative h-full rounded-[calc(1.5rem-4px)] bg-white p-6 overflow-hidden">
                <div className="absolute top-6 left-6 right-6 h-12 glass rounded-lg flex items-center px-4 border border-white/30">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                
                <div className="mt-16 h-[calc(100%-4rem)] overflow-hidden flex flex-col">
                  <pre className="text-left text-xs text-gray-700 font-mono overflow-hidden">
                    <code>
{`# Data Analysis Example
import pandas as pd
import matplotlib.pyplot as plt

# Load the dataset
data = pd.read_csv('data.csv')

# Data exploration
print(data.head())
print(data.describe())

# Data visualization
plt.figure(figsize=(10, 6))
plt.scatter(data['feature_1'], data['target'])
plt.title('Feature 1 vs Target')
plt.xlabel('Feature 1')
plt.ylabel('Target')
plt.show()

# Train a simple model
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

X = data[['feature_1', 'feature_2']]
y = data['target']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)

# Model performance
score = model.score(X_test, y_test)
print(f'Model R² score: {score:.4f}')
`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
