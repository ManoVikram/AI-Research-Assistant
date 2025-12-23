import "./globals.css";

export const metadata = {
  title: "AI Research Assistant",
  description: "An AI-powered research assistant to help you with your research tasks.",
};

// Design inspiration - https://dribbble.com/shots/26403687-AI-Landing-Page-AI-Assistant-Wellness-AI-Chatbot-UIUX

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
