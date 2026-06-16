
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Transmission Received",
        description: "Your inquiry has been logged in our secure system. Expect a response within 24 standard hours.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-2 border-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <div className="lg:col-span-5 p-8 lg:p-12 bg-black text-white space-y-8">
            <h2 className="text-4xl lg:text-5xl font-headline font-bold uppercase leading-none">
              Initialize <br />
              <span className="text-primary">Engagement</span>
            </h2>
            <p className="font-body text-white/60 leading-relaxed">
              Seeking architectural-grade development for your next digital venture? 
              Connect with my engineering core.
            </p>
            
            <div className="space-y-6 pt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-white/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-white/40">Direct Line</h4>
                  <p className="font-headline text-lg">comm@gridsystem.dev</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-white/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-white/40">Availability</h4>
                  <p className="font-headline text-lg">Accepting Q3 Projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-headline font-bold uppercase text-[10px] tracking-[0.2em] text-muted-foreground">User Name</label>
                  <Input 
                    required
                    placeholder="Enter Identification" 
                    className="rounded-none border-2 border-black h-12 bg-background focus-visible:ring-0 focus-visible:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-headline font-bold uppercase text-[10px] tracking-[0.2em] text-muted-foreground">User Email</label>
                  <Input 
                    required
                    type="email" 
                    placeholder="address@service.com" 
                    className="rounded-none border-2 border-black h-12 bg-background focus-visible:ring-0 focus-visible:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-headline font-bold uppercase text-[10px] tracking-[0.2em] text-muted-foreground">Inquiry Subject</label>
                <Input 
                  required
                  placeholder="Structural Development / Consulting / Audit" 
                  className="rounded-none border-2 border-black h-12 bg-background focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="font-headline font-bold uppercase text-[10px] tracking-[0.2em] text-muted-foreground">Message Body</label>
                <Textarea 
                  required
                  placeholder="Define project scope and architectural requirements..." 
                  className="rounded-none border-2 border-black min-h-[150px] bg-background focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full rounded-none border-2 border-black bg-primary text-white font-headline font-bold uppercase py-8 h-auto group"
              >
                {isSubmitting ? "Transmitting..." : (
                  <span className="flex items-center gap-2">
                    Send Engagement Request <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
