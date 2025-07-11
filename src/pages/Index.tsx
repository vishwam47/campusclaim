
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Bell, Shield, Users, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { AuthModal } from "@/components/AuthModal";
import { DashboardPreview } from "@/components/DashboardPreview";

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'register'>('login');
  const [userRole, setUserRole] = useState<'student' | 'keeper' | null>(null);

  const features = [
    {
      icon: Search,
      title: "Smart Matching",
      description: "AI-powered system matches lost items with found reports automatically",
    },
    {
      icon: MapPin,
      title: "Location Tracking",
      description: "Track where items were lost and found with interactive campus maps",
    },
    {
      icon: Bell,
      title: "Instant Notifications",
      description: "Get notified immediately when someone finds your lost item",
    },
    {
      icon: Shield,
      title: "Secure Messaging",
      description: "Built-in chat system to connect without sharing personal info",
    },
    {
      icon: Users,
      title: "Campus Community",
      description: "Connect students with campus keepers and cleaning staff",
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Live status updates on all lost and found items",
    },
  ];

  const stats = [
    { number: "2,847", label: "Items Recovered" },
    { number: "95%", label: "Success Rate" },
    { number: "< 24h", label: "Avg Recovery Time" },
    { number: "5,000+", label: "Active Users" },
  ];

  if (userRole) {
    return <DashboardPreview userRole={userRole} onLogout={() => setUserRole(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation 
        onLogin={() => {
          setAuthType('login');
          setShowAuth(true);
        }}
        onRegister={() => {
          setAuthType('register');
          setShowAuth(true);
        }}
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            🎓 Campus Lost & Found Platform
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
            Campus Claim
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Never lose hope of finding your lost items again. Our smart platform connects 
            students and campus staff to reunite you with your belongings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                setAuthType('register');
                setShowAuth(true);
              }}
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-200 dark:border-purple-400 px-8 py-3 text-lg font-semibold rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
              onClick={() => {
                setAuthType('login');
                setShowAuth(true);
              }}
            >
              Sign In
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Campus Claim?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our platform is designed specifically for campus environments, making it easier 
            than ever to recover lost items and help others.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience the Platform
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Try our demo dashboards to see how Campus Claim works for both students and campus staff.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              size="lg"
              className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-400 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 px-8 py-3 rounded-full font-semibold"
              onClick={() => setUserRole('student')}
            >
              View Student Dashboard
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-400 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 px-8 py-3 rounded-full font-semibold"
              onClick={() => setUserRole('keeper')}
            >
              View Keeper Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have successfully recovered their lost items.
          </p>
          <Button 
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              setAuthType('register');
              setShowAuth(true);
            }}
          >
            Create Your Account
          </Button>
        </div>
      </section>

      <AuthModal 
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        type={authType}
        onSuccess={(role) => {
          setUserRole(role);
          setShowAuth(false);
        }}
      />
    </div>
  );
};

export default Index;
