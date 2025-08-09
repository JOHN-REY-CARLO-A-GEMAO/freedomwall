import React from "react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center justify-center px-4">
      <header className="w-full max-w-2xl text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">Welcome to FreedomWall</h1>
        <p className="text-lg md:text-2xl text-blue-700 mb-6">A safe space to share your thoughts, connect, and be heard.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="/signup" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition text-lg">Sign Up</a>
          <a href="/signin" className="px-8 py-3 bg-white text-blue-700 border border-blue-600 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition text-lg">Sign In</a>
        </div>
      </header>
      <section className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">📝</span>
          <h2 className="font-bold text-xl mb-2 text-blue-800">Post Anonymously</h2>
          <p className="text-gray-600 text-center">Share your thoughts without revealing your identity. Your voice matters.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">💬</span>
          <h2 className="font-bold text-xl mb-2 text-blue-800">Engage Freely</h2>
          <p className="text-gray-600 text-center">Comment, react, and connect with others in a supportive community.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">🔒</span>
          <h2 className="font-bold text-xl mb-2 text-blue-800">Safe & Secure</h2>
          <p className="text-gray-600 text-center">Your privacy is our priority. We protect your data and your voice.</p>
        </div>
      </section>
      <footer className="text-blue-700 text-sm opacity-80">&copy; {new Date().getFullYear()} FreedomWall. All rights reserved.</footer>
    </div>
  );
};

export default Landing;
