'use client'


import { Header } from "@/components/Header";
import { PhilosopherSlider } from "@/components/PhilosopherSlider";
import { Hero } from "@/components/Hero";
import { PhilosophyConcepts } from "@/components/PhilosophyConcepts";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Quiz } from "@/components/quiz";

export default function Home() {
  return (
    <div className="app">
      <Header />

      <PhilosopherSlider />

      <main className="main-content">
        <Hero />
        <PhilosophyConcepts />
        <Quiz />
      </main>
      <Footer />

      <Chatbot />
    </div>
  );
}
