
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Plus, 
  MapPin, 
  Calendar, 
  Bell, 
  MessageSquare, 
  Camera, 
  LogOut,
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  Shield
} from "lucide-react";

interface DashboardPreviewProps {
  userRole: 'student' | 'keeper';
  onLogout: () => void;
}

export const DashboardPreview = ({ userRole, onLogout }: DashboardPreviewProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const studentItems = [
    {
      id: 1,
      title: "Blue iPhone Case",
      status: "lost",
      location: "Library - 2nd Floor",
      date: "2 days ago",
      image: "/api/placeholder/80/80",
      matches: 2
    },
    {
      id: 2,
      title: "Red Backpack",
      status: "found",
      location: "Student Center",
      date: "1 day ago",
      image: "/api/placeholder/80/80",
      matches: 0
    }
  ];

  const keeperItems = [
    {
      id: 1,
      title: "Laptop Charger",
      status: "urgent",
      location: "Classroom B-101",
      reporter: "Sarah Johnson",
      date: "3 hours ago",
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,  
      title: "Gold Watch",
      status: "normal",
      location: "Gym Locker Room",
      reporter: "Mike Chen",
      date: "1 day ago",
      image: "/api/placeholder/80/80"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'lost':
        return <Badge variant="destructive" className="text-xs">Lost</Badge>;
      case 'found':
        return <Badge variant="default" className="text-xs bg-green-500">Found</Badge>;
      case 'urgent':
        return <Badge variant="destructive" className="text-xs">Urgent</Badge>;
      case 'normal':
        return <Badge variant="secondary" className="text-xs">Normal</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  {userRole === 'student' ? 'Student Dashboard' : 'Keeper Dashboard'}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Welcome back, {userRole === 'student' ? 'Alex' : 'John'}!
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                onClick={onLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="items">My Items</TabsTrigger>
            <TabsTrigger value="report">Report Item</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {userRole === 'student' ? 'Items Reported' : 'Items Handled'}
                  </CardTitle>
                  <Search className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {userRole === 'student' ? '5' : '23'}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +2 from last week
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {userRole === 'student' ? 'Items Found' : 'Success Rate'}
                  </CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {userRole === 'student' ? '3' : '89%'}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {userRole === 'student' ? '60% success rate' : '+5% from last month'}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {userRole === 'student' ? 'Active Matches' : 'Urgent Items'}
                  </CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {userRole === 'student' ? '2' : '4'}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {userRole === 'student' ? 'Potential matches found' : 'Require immediate attention'}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {(userRole === 'student' ? studentItems : keeperItems).map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                        <Camera className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{item.title}</h3>
                          {getStatusBadge(item.status)}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{item.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{item.date}</span>
                          </span>
                        </div>
                      </div>
                      {userRole === 'student' && 'matches' in item && item.matches > 0 && (
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          {item.matches} matches
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="report" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Report {userRole === 'student' ? 'Lost/Found' : 'Found'} Item</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="item-type">Item Type</Label>
                    <Input id="item-type" placeholder="e.g., Phone, Wallet, Keys" />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Where was it lost/found?" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Provide detailed description including color, brand, distinctive features..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="time">Time (approximate)</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>

                <div>
                  <Label>Upload Photos</Label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                    <Camera className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Drag and drop photos here, or click to browse
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Submit Report
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="items">
            <Card>
              <CardHeader>
                <CardTitle>
                  {userRole === 'student' ? 'My Reported Items' : 'Items to Handle'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {(userRole === 'student' ? studentItems : keeperItems).map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                          <Camera className="w-8 h-8 text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            {getStatusBadge(item.status)}
                          </div>
                          <div className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{item.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{item.date}</span>
                            </div>
                            {userRole === 'keeper' && 'reporter' in item && (
                              <div className="flex items-center space-x-1">
                                <User className="w-4 h-4" />
                                <span>Reported by: {item.reporter}</span>
                              </div>
                            )}
                          </div>
                          <div className="mt-3 flex space-x-2">
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                            <Button size="sm" variant="outline">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              Message
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold">Sarah Johnson</span>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-sm">Hi! I think I found your blue phone case. Can we meet at the library?</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold">Campus Security</span>
                      <span className="text-sm text-gray-500">1 day ago</span>
                    </div>
                    <p className="text-sm">We have your reported laptop charger at the security office. Please bring your ID.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
