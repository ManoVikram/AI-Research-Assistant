import Navbar from "@/components/navbar";
import "./globals.css";
import { Montserrat_Alternates, Philosopher } from "next/font/google"

export const metadata = {
  title: "AI Research Assistant",
  description: "An AI-powered research assistant to help you with your research tasks.",
};

const philosopherFont = Philosopher({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-philosopher" });
const montserratAlternatesFont = Montserrat_Alternates({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-montserrat-alternates" });

// Design inspiration - https://dribbble.com/shots/26403687-AI-Landing-Page-AI-Assistant-Wellness-AI-Chatbot-UIUX

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${philosopherFont.variable} ${montserratAlternatesFont.variable}`}>
      <body className={`font-philosopher antialiased flex flex-col h-dvh w-full`}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
