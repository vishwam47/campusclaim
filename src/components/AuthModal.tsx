
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { User, Shield, Mail, Lock, UserPlus, LogIn } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'register';
  onSuccess: (role: 'student' | 'keeper') => void;
}

export const AuthModal = ({ isOpen, onClose, type, onSuccess }: AuthModalProps) => {
  const [userRole, setUserRole] = useState<'student' | 'keeper'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication success
    onSuccess(userRole);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            {type === 'login' ? (
              <div className="flex items-center justify-center space-x-2">
                <LogIn className="w-6 h-6 text-blue-600" />
                <span>Welcome Back</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <UserPlus className="w-6 h-6 text-purple-600" />
                <span>Join Campus Claim</span>
              </div>
            )}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">I am a:</Label>
            <RadioGroup value={userRole} onValueChange={(value: 'student' | 'keeper') => setUserRole(value)}>
              <div className="grid grid-cols-2 gap-3">
                <Card className={`cursor-pointer transition-all ${userRole === 'student' ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                  <CardContent className="p-4 text-center">
                    <RadioGroupItem value="student" id="student" className="sr-only" />
                    <label htmlFor="student" className="cursor-pointer">
                      <User className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <div className="font-semibold">Student</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Report & find items</div>
                    </label>
                  </CardContent>
                </Card>

                <Card className={`cursor-pointer transition-all ${userRole === 'keeper' ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                  <CardContent className="p-4 text-center">
                    <RadioGroupItem value="keeper" id="keeper" className="sr-only" />
                    <label htmlFor="keeper" className="cursor-pointer">
                      <Shield className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <div className="font-semibold">Keeper</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Campus staff</div>
                    </label>
                  </CardContent>
                </Card>
              </div>
            </RadioGroup>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {type === 'register' && (
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {type === 'register' && userRole === 'student' && (
              <div>
                <Label htmlFor="studentId">Student ID</Label>
                <Input
                  id="studentId"
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="Enter your student ID"
                  required
                />
              </div>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg"
          >
            {type === 'login' ? 'Sign In' : 'Create Account'}
          </Button>
        </form>

        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          {type === 'login' ? (
            <span>Don't have an account? <button className="text-blue-600 hover:underline">Sign up</button></span>
          ) : (
            <span>Already have an account? <button className="text-blue-600 hover:underline">Sign in</button></span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
