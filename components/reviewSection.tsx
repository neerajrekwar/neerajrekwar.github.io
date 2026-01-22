'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        quote: "Pulsefy's our daily tool to bypass averages and reveal true insights, for the whole team!",
        name: "Hikmet Atçeken",
        handle: "@hiatceken",
        image: "/testimonials/hikmet.png",
    },
    {
        quote: "Pulsefy levels the analytics field for our team, enabling both beginners and pros to easily bypass average data and uncover the actionable insights that truly shape our marketing strategies.",
        name: "Arda Guler",
        handle: "@ardaguler_",
        image: "/testimonials/arda.png",
    },
    {
        quote: "From novice to pro, Pulsefy helps our team uncover the extraordinary in our marketing data!",
        name: "Maria Ancelotti",
        handle: "@maria_ancelotti",
        image: "/testimonials/maria.png",
    },
    {
        quote: "Pulsefy empowers our whole team, techies or not, to dive into marketing analytics and spot the insights that really matter—no more average data!",
        name: "Ragip Diler",
        handle: "@rgdiler",
        image: "/testimonials/ragip.png",
    },
    {
        quote: "Pulsefy's user-friendly analytics let our whole team, regardless of skill, bypass averages to unearth and act on true, game-changing marketing insights every day.",
        name: "Jenny Wilson",
        handle: "@wilson_jenny_19",
        image: "/testimonials/jenny.png",
    },
    {
        quote: "Pulsefy is a game-changer for our team—easy for beginners and powerful for digging beyond average data. It's our daily ally in unearthing those pivotal marketing insights that really drive strategy!",
        name: "Guy Hawkins",
        handle: "@ghawkins",
        image: "/testimonials/guy.png",
    },
];

export function ReviewSection() {

    return (
        <section className="py-20 bg-primary">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="bg-seven text-secondary text-xs font-medium me-2 px-2.5 py-1 rounded-full">Testimonials</span>
                    <h2 className="text-4xl font-bold mt-4 text-secondary">Public Cheers for Us!</h2>
                    <p className="text-lg mt-2 text-four">Find out how our users are spreading the word!</p>
                </div>
                <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="mb-6 break-inside-avoid rounded-xl bg-six p-6 shadow-lg"
                            whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 10 } }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <Image src={testimonial.image} alt={testimonial.name} width={40} height={40} className="rounded-full object-cover" />
                                    <div className="ml-3">
                                        <p className="font-semibold text-secondary">{testimonial.name}</p>
                                        <p className="text-sm text-four">{testimonial.handle}</p>
                                    </div>
                                </div>
                                <p className="text-third text-2xl font-sans">×</p>
                            </div>
                            <p className="text-four">{testimonial.quote}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
