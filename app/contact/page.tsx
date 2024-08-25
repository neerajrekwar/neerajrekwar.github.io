"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import CurrentTime from "../components/CurrentTime";
import AdminWeather from "../components/AdminWeather";
import QuotesSlider from "../components/QuotesSlider";

const ContactPage: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
    <main className="md:p-8 p-2  bg-custom-radial-md bg-primary min-h-screen">
      <div className="flex justify-between px-2 rounded-full bg-seven items-center text-four text-xs h-[3vh] mb-8">
        <ul className="flex font-semibold text-five sm:text-xl">
          <li> nee </li>
        </ul>
        <ul className="flex gap-1  text-five">
          <li className="">
            {" "}
            {/* <CurrentTime />{" "} */}
          </li>
          Reach at me  &#9679; <CurrentTime/>
      
        </ul>
      </div>
      <section className="">
        <div className="max-w-6xl justify-center lg:h-[87vh]  m-auto rounded-xl  border-rose-600  sm:flex sm:border-rose-600 md:border-blue-400 gap-2 lg:w-[70%] lg:flex-1 lg:border-yellow-500">
          <div className="basis-1/2 backdrop-blur-sm flex flex-col justify-between  border-four md:w-[40%] p-2 aspect-square bg-seven rounded-xl m-2">
            <h1 className="md:text-3xl text-2xl font-medium tracking-tight lg:text-5xl text-five font-bold mb-6">
              Connecting You with Us – Reach Out Anytime, Anywhere.
              {/* Facilis blanditiis impedit atque. */}
            </h1>
            <div className="rounded-xl backdrop-brightness-150 overflow-hidden bg-[url('https://images.unsplash.com/photo-1724373506008-ab646f67067c?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  relative h-44 w-full bg-cover bg-no-repeat bg-bottom   ">
              <p className="z-10 relative rounded-t-xl h-14 text-sm text-four p-2 bg-[#ffffff69] backdrop-blur-sm">
               <QuotesSlider />
              </p>
            </div>
            <div className="text-four p-1 mt-2  justify-between flex-col flex ">
              <h4 className="font-semibold text-xl">admin Info</h4>
             <div className="flex text-five  text-xs my-1 font-bold justify-between">
               <p className="  border-five">Delhi, Dwarka.</p>
                <p>Hin &#9679; Eng &#9679; Sans</p>
                 <AdminWeather />
             </div>
            </div>
            
          </div>

          <div className="basis-2/2 text-primary  bg-secondary border-four md:w-[60%] aspect-square bg-gradient-to-r from-seven rounded-xl m-2   p-2   sm:w-[60%]">
            <h6 className="mb-1 p-2 text-four  text-xl font-semibold md:text-2xl md:font-medium tracking-tight ">
             &#9679; Your Matters – Drop Me a Line.
            </h6>

            <form
              action="https://formspree.io/f/mnqebqjq"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4  bg-custom-radial m-auto max-w-4xl"
            >
              <div className="p-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold  text-four"
                >
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
                  className="mt-1 border border-input bg-[#ffffff0a]  ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-2 flex h-10 w-full rounded border-none  px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium focus:bg-seven disabled:cursor-not-allowed disabled:opacity-50 focus:ring-four  focus:border-four"
                />
              </div>
              <div className="p-2">
               <label htmlFor="moblie" className="block text-sm font-semibold  text-four">
                 Moblie
               </label>
               <input
                 type="text"
                 id="moblie"
                 name="moblie"
                 value={formData.name}
                 onChange={handleChange}
                 placeholder="Enter your moblie number"
                 required
                 className="mt-1 border-input bg-[#ffffff0a]  ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-2 flex h-10 w-full rounded border-none  px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium focus:bg-seven disabled:cursor-not-allowed disabled:opacity-50 focus:ring-four  focus:border-four"
               />
             </div>

              <div className="p-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold  text-four"
                >
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

              {/* <div className="p-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold  text-four"
                >
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
              </div> */}

              <div className="p-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold  text-four"
                >
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
                  className="mt-1 border-input bg-[#ffffff0a] ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring-2 focus-visible:ring-2 flex h-20 w-full rounded border-none  px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium focus:bg-seven disabled:cursor-not-allowed disabled:opacity-50 focus:ring-four focus:border-four"
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
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
