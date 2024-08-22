"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

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
    <main className="md:p-8 p-2  bg-primary min-h-screen ">
     <section className="max-w-6xl bg-secondary m-auto m-auto rounded-xl py-1 border-rose-600 flex-col sm:flex sm:border-rose-600 md:border-blue-400 gap-2 lg:w-[70%] lg:flex-1 lg:border-yellow-500">
       
       
         <div className="basis-1/2 border-2 border-four md:w-[40%] p-2 aspect-square bg-six rounded-xl m-2">
            <h1 className="text-3xl text-four font-bold mb-6">
            Facilis blanditiis impedit atque.</h1>
            <p className=" text-primary">let&#39;s talk about something amazing!</p>
          </div>

          <div className="basis-2/2 border-2 border-four md:w-[60%] aspect-square bg-gradient-to-r from-seven rounded-xl m-2  bg-secondary p-2 font-semibold  sm:w-[60%]">
            <h6 className="mb-2 p-2 text-center text-3xl font-bold text-four">Reach at me</h6>
             <p className="m-2 text-base text-four bg-gradient-to-r bg-clip-text text-transparent from-four to-primary">Numquam ab temporibus aut nulla doloremque suscipit, ex facere.</p>
            <form
              action="https://formspree.io/f/mnqebqjq"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4  bg-custom-radial m-auto max-w-4xl"
            >
              <div className="p-2">
                <label htmlFor="name" className="block text-sm font-semibold  text-four">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="mt-1 border-input bg-[#ffffff0a]  ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-2 flex h-10 w-full rounded border-none  px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium focus:bg-seven disabled:cursor-not-allowed disabled:opacity-50 focus:ring-four  focus:border-four"
                />
              </div>

              <div className="p-2">
                <label htmlFor="email"  className="block text-sm font-semibold  text-four">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="mt-1 border-input bg-[#ffffff0a] ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-2 flex h-10 w-full rounded border-none  px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium focus:bg-seven disabled:cursor-not-allowed disabled:opacity-50 focus:ring-four  focus:border-four"
                />
              </div>

              <div className="p-2">
                <label htmlFor="subject"  className="block text-sm font-semibold  text-four">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter your subject"
                  required
                  className="mt-1 border-input bg-[#ffffff0a] ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-2 flex h-10 w-full rounded border-none  px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium focus:bg-seven disabled:cursor-not-allowed disabled:opacity-50 focus:ring-four  focus:border-four"
                />
              </div>

              <div className="p-2">
                <label htmlFor="message"  className="block text-sm font-semibold  text-four">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  rows={4}
                  className="mt-1 border-input bg-[#ffffff0a] ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring-2 focus-visible:ring-2 flex h-22 w-full rounded border-none  px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium focus:bg-seven disabled:cursor-not-allowed disabled:opacity-50 focus:ring-four focus:border-four"
                />
              </div>

              <div className="p-2">
                <Button
                  type="submit"
                  className="w-fit inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-four  hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
       
     </section>
    </main>
  );
};

export default ContactPage;
