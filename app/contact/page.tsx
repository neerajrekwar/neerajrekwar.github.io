"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";


const ContactPage: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
          title: "Message sent!",
          description: "Your message has been successfully sent.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
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
    }
  };

  return (
    <BackgroundGradientAnimation>
     <div className="max-w-6xl min-h-screen mx-auto items-center justify-center lg:flex">
       <div className="basis-1/2 border aspect-square">
         <h1 className="text-3xl text-four font-bold mb-6">
         Facilis blanditiis impedit atque.</h1>
       </div>

       <div className="basis-1/2 aspect-square border ">
         <form
           action="https://formspree.io/f/mnqebqjq"
           method="POST"
           onSubmit={handleSubmit}
           className="space-y-4 w- m-auto max-w-4xl"
         >
           <div>
             <label htmlFor="name" className="block text-sm font-medium text-secondary">
               Name
             </label>
             <input
               type="text"
               id="name"
               name="name"
               value={formData.name}
               onChange={handleChange}
               required
               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-five focus:border-four sm:text-sm"
             />
           </div>

           <div>
             <label htmlFor="email"  className="block text-sm font-medium text-secondary">
               Email
             </label>
             <input
               type="email"
               id="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               required
               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-five focus:border-four sm:text-sm"
             />
           </div>

           <div>
             <label htmlFor="subject"  className="block text-sm font-medium text-secondary">
               Subject
             </label>
             <input
               type="text"
               id="subject"
               name="subject"
               value={formData.subject}
               onChange={handleChange}
               required
               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-five focus:border-four sm:text-sm"
             />
           </div>

           <div>
             <label htmlFor="message"  className="block text-sm font-medium text-secondary">
               Message
             </label>
             <textarea
               id="message"
               name="message"
               value={formData.message}
               onChange={handleChange}
               required
               rows={4}
               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-five focus:border-four sm:text-sm"
             />
           </div>

           <div>
             <Button
               type="submit"
               className="w-fit inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-four  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             >
               Send Message
             </Button>
           </div>
         </form>
       </div>
     </div>
    </BackgroundGradientAnimation>
  );
};

export default ContactPage;
