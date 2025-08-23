import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Replaced lucide-react with inline SVG icons to avoid antivirus false positives

// Inline SVG Icons
const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Code = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const programmingLanguages = [
  { name: "Python", color: "bg-yellow-500" },
  { name: "Java", color: "bg-orange-500" },
  { name: "C++", color: "bg-blue-500" },
  { name: "SQL", color: "bg-green-500" },
  { name: "JavaScript", color: "bg-yellow-600" },
  { name: "C#", color: "bg-purple-500" }
];

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Object-Oriented Programming",
    description: "Master OOP concepts, design patterns, inheritance, polymorphism, and encapsulation",
    skills: ["Classes & Objects", "Inheritance", "Polymorphism", "Design Patterns"]
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Data Structures & Algorithms",
    description: "Learn arrays, linked lists, trees, graphs, sorting, and optimization techniques",
    skills: ["Arrays & Lists", "Trees & Graphs", "Sorting Algorithms", "Big O Notation"]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Database Management",
    description: "SQL queries, database design, normalization, and performance optimization",
    skills: ["SQL Queries", "Database Design", "Joins & Indexes", "Performance Tuning"]
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    content: "Finally understood OOP concepts after struggling for weeks. The explanations were clear and practical!",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Bootcamp Graduate",
    content: "Helped me ace my data structures final. The step-by-step approach made complex algorithms easy.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "CS Major",
    content: "SQL assignments went from nightmare to manageable. Highly recommend for database courses!",
    rating: 5
  }
];

const features = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "24/7 Support",
    description: "Get help when you need it most"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "100% Original Work",
    description: "Plagiarism-free solutions guaranteed"
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Expert Tutors",
    description: "Industry professionals with proven track records"
  }
];

export default function Index() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Applianzy</span>
          </div>
          <Button
            onClick={() => window.open('https://wa.me/1234567890?text=Hi,%20I%20need%20help%20with%20my%20programming%20assignment', '_blank')}
            className="bg-green-600 hover:bg-green-700"
          >
            <MessageCircle className="mr-2 w-4 h-4" />
            WhatsApp Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              🎓 Trusted by 10,000+ Students
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Struggling with{" "}
              <span className="text-blue-600 relative">
                Programming
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                  <path d="M2 9c40-6 80-6 120 0 40 6 80 6 76-3" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              Assignments?
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Get expert help with OOP, Data Structures, Python, C++, Java, and SQL. 
              Our experienced tutors provide step-by-step guidance to help you understand 
              concepts and excel in your programming courses.
            </p>
            
            {/* Language Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {programmingLanguages.map((lang, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className={`${lang.color} text-white text-sm py-2 px-4 hover:scale-105 transition-transform`}
                >
                  {lang.name}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/1234567890?text=Hi,%20I%20need%20help%20with%20my%20programming%20assignment', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 h-auto"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 h-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.location.href = 'mailto:info@tooldeluxe.com?subject=Programming%20Assignment%20Help&body=Hi,%20I%20need%20help%20with%20my%20programming%20assignment.%20Please%20contact%20me.'}
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programming Subjects We Cover
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From basic concepts to advanced algorithms, we provide comprehensive help 
              across all major programming domains.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Students Say</h2>
            <p className="text-xl opacity-90">Join thousands of successful students</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm opacity-80">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Excel in Programming?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Don't let programming assignments stress you out. Get expert help today 
              and boost your grades with confidence.
            </p>
            
            <Card className="border-0 shadow-xl bg-white p-8">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Started Now</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Instant response within 30 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Step-by-step explanations</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Affordable pricing for students</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>100% satisfaction guarantee</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-lg py-4 h-auto"
                    onClick={() => window.open('https://wa.me/1234567890?text=Hi,%20I%20need%20help%20with%20my%20programming%20assignment', '_blank')}
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp Us Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-lg py-4 h-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => window.location.href = 'mailto:info@tooldeluxe.com?subject=Programming%20Assignment%20Help&body=Hi,%20I%20need%20help%20with%20my%20programming%20assignment.%20Please%20contact%20me.'}
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Email Us
                  </Button>
                  <p className="text-center text-sm text-gray-500">
                    Available 24/7 • Instant response on WhatsApp
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Code className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">Applianzy</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering students to succeed in programming, one assignment at a time.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => window.open('https://wa.me/3431074543?text=Hi,%20I%20need%20help%20with%20my%20programming%20assignment', '_blank')}
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => window.location.href = 'mailto:info@tooldeluxe.com?subject=Programming%20Assignment%20Help'}
            >
              <Mail className="mr-2 w-4 h-4" />
              Email
            </Button>
          </div>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-gray-500 text-sm">
            © 2025 Applianzy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
