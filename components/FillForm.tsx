'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { IconLoader2, IconSend, IconMapPin, IconLanguage, IconClock } from "@tabler/icons-react";
import { motion } from "framer-motion";

import AdminWeather from "@/components/AdminWeather";
import QuotesSlider from "@/components/QuotesSlider";
import { useToast } from "@/components/hooks/use-toast";
import CurrentTime from "@/components/CurrentTime";

const FillForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnqebqjq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          variant: "default",
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
        });
        setFormData({
          name: "",
          mobile: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem sending your message.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "An unexpected error occurred. Please try again.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center border-b border-seven/30 pb-4 mb-10"
      >
        <div className="font-bold text-five text-2xl tracking-tighter">nee.</div>
        <div className="flex items-center gap-2 text-four text-sm font-medium">
          <IconClock size={18} className="text-five" /> 
          <span className="hidden sm:inline">Local Time:</span> <CurrentTime />
        </div>
      </motion.div>

      <section className="flex flex-col lg:flex-row gap-10">
        {/* Left Column: Visuals & Quotes */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex flex-col justify-between bg-primary md:bg-seven/10 backdrop-blur-md p-8 rounded-3xl border border-seven/50 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-five leading-tight mb-6 tracking-tight">
              Let's build <br/><span className="text-third">something great</span> together.
            </h1>
            <p className="text-four text-lg mb-8 max-w-md opacity-90">
              Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.
            </p>
            <div className="mb-12">
              <QuotesSlider />
            </div>
          </div>
            
          <div className="relative h-64 w-full rounded-2xl overflow-hidden mt-auto shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1724373506008-ab646f67067c?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center transform hover:scale-105 transition-transform duration-700 ease-out"></div>
          </div>
        </motion.div>

        {/* Right Column: The Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-[1.2] bg-primary border border-seven/50 text-four p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-third/10 blur-3xl pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold text-five mb-8 flex items-center gap-3 relative z-10">
            Drop Me a Line
          </h2>
          
          <form
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-five ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-seven/20 border border-seven/30 rounded-xl px-4 py-3 text-four placeholder:text-four/40 focus:outline-none focus:ring-2 focus:ring-third/50 focus:border-third/50 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="mobile" className="text-sm font-medium text-five ml-1">Phone (Optional)</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-seven/20 border border-seven/30 rounded-xl px-4 py-3 text-four placeholder:text-four/40 focus:outline-none focus:ring-2 focus:ring-third/50 focus:border-third/50 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-five ml-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full bg-seven/20 border border-seven/30 rounded-xl px-4 py-3 text-four placeholder:text-four/40 focus:outline-none focus:ring-2 focus:ring-third/50 focus:border-third/50 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-five ml-1">Subject (Optional)</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="w-full bg-seven/20 border border-seven/30 rounded-xl px-4 py-3 text-four placeholder:text-four/40 focus:outline-none focus:ring-2 focus:ring-third/50 focus:border-third/50 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-five ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full bg-seven/20 border border-seven/30 rounded-xl px-4 py-3 text-four placeholder:text-four/40 focus:outline-none focus:ring-2 focus:ring-third/50 focus:border-third/50 transition-all duration-300 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto mt-4 px-8 py-6 rounded-xl bg-four text-primary font-bold tracking-wide hover:bg-five hover:shadow-lg hover:shadow-five/20 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? (
                <>
                  <IconLoader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <IconSend size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </section>
          
      {/* Admin Info Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 pt-10 border-t border-seven/30"
      >
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-2xl font-bold text-five">Admin Info</h3>
          <p className="text-four opacity-80 mt-2 max-w-2xl mx-auto md:mx-0">
            Feel free to reach out directly. I am currently based in New Delhi and available for remote work globally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-seven/10 p-6 rounded-2xl border border-seven/20 flex flex-col gap-3 transition-colors hover:bg-seven/20">
            <div className="w-10 h-10 rounded-full bg-seven/30 flex items-center justify-center text-five mb-2">
              <IconMapPin size={20} />
            </div>
            <h4 className="font-semibold text-five">Location</h4>
            <p className="text-four/80 text-sm">Dwarka, New Delhi<br/>Delhi, India</p>
          </div>

          <div className="bg-seven/10 p-6 rounded-2xl border border-seven/20 flex flex-col gap-3 transition-colors hover:bg-seven/20">
            <div className="w-10 h-10 rounded-full bg-seven/30 flex items-center justify-center text-five mb-2">
              <IconLanguage size={20} />
            </div>
            <h4 className="font-semibold text-five">Languages</h4>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-seven/30 rounded-full text-xs font-medium text-four">English</span>
              <span className="px-3 py-1 bg-seven/30 rounded-full text-xs font-medium text-four">Hindi</span>
              <span className="px-3 py-1 bg-seven/30 rounded-full text-xs font-medium text-four">Sanskrit</span>
            </div>
          </div>

          <div className="bg-seven/10 p-6 rounded-2xl border border-seven/20 flex flex-col gap-3 transition-colors hover:bg-seven/20">
            <div className="w-10 h-10 rounded-full bg-seven/30 flex items-center justify-center text-five mb-2">
              <IconClock size={20} />
            </div>
            <h4 className="font-semibold text-five">Local Weather & Time</h4>
            <div className="text-four/80 text-sm">
              <AdminWeather />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FillForm;
