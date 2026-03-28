"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, ShieldCheck, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
  };

  return (
    <div className="min-h-screen pb-20 pt-16 px-4 md:px-8 container mx-auto">
      {/* Hero Section */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Questions about the website? Suggestions for improvement? Tell us how we can help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form Section */}
        <Card className="border-2 shadow-2xl overflow-hidden">
          <CardHeader className="bg-primary/5 border-b">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                <Send className="h-5 w-5" />
              </div>
              <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
            </div>
            <CardDescription className="text-base">
              Send your inquiries below and we'll get back to you.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required className="bg-muted/30 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="bg-muted/30" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-semibold">Subject</Label>
                <Input id="subject" placeholder="General Inquiry" required className="bg-muted/30" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold">Your Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your inquiry..." 
                  className="min-h-[150px] bg-muted/30 resize-none" 
                  required 
                />
              </div>

              <Button type="submit" className="w-full h-12 text-lg font-bold group">
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </CardContent>
          <CardFooter className="bg-muted/20 border-t py-4 justify-center">
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Your privacy is important to us.
            </p>
          </CardFooter>
        </Card>

        {/* Contact info / Side Section */}
        <div className="space-y-8">
          <Card className="hover:border-primary/50 transition-colors group">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg">General Support</CardTitle>
                <CardDescription>Support for website inquiries</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-mono text-primary font-bold">support@ubma-cshub.com</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-colors group">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Feature Requests</CardTitle>
                <CardDescription>Suggestions and feedback</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                We're always looking to improve Ubma Cshub. If you have an idea for a feature, let us know!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
