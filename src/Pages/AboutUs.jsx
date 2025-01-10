import React, { useContext } from "react";
import { ThemeContext } from "../AuthProvider/ThemeProvider";

export default function AboutUs() {
  const { theme } = useContext(ThemeContext);

  const isDarkMode = theme === "dark";

  return (
    <section
    
    >
      <div className="container mx-auto py-24 px-6 lg:px-16">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl lg:text-5xl text-black font-extrabold text-center mb-8">
        <span className={`${isDarkMode?'text-white/75':''}`}>  About{" "}</span>
          <span className={`${isDarkMode ? "text-purple-600" : "text-purple-900"}`}>
            Lost and Found
          </span>
        </h2>
        <p
          className={`text-lg max-w-2xl mx-auto mb-8 ${
            isDarkMode ? "text-gray-300" : "text-black/90"
          }`}
        >
          Your trusted partner in reuniting people with their precious belongings. 
          Since 2014, we’ve been creating a secure and innovative platform to make 
          recovering lost items effortless and reliable.
        </p>

        {/* Mission and Values */}
        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`rounded-lg shadow-lg p-8 ${
              isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-900"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Our Mission</h3>
            <p className="leading-relaxed">
              Our mission is to create a safe and efficient system for connecting people 
              with their lost items. Through cutting-edge technology and a strong community network, 
              we aim to restore not just items, but peace of mind.
            </p>
          </div>
          <div
            className={`rounded-lg shadow-lg p-8 ${
              isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-900"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Our Values</h3>
            <ul className="list-disc list-inside space-y-3">
              <li><span className="font-semibold">Compassion:</span> Helping others with empathy and care.</li>
              <li><span className="font-semibold">Innovation:</span> Using technology to solve real-world problems.</li>
              <li><span className="font-semibold">Trust:</span> Ensuring privacy and reliability for all users.</li>
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h3  className={`text-3xl  font-semibold mb-6 ${isDarkMode?"text-gray-300" : "text-black/90"}`}>What We Offer</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Matching",
                description:
                  "Advanced algorithms to link lost items with potential matches in seconds.",
              },
              {
                title: "Community Support",
                description:
                  "Collaborative efforts to spread awareness and ensure timely recovery.",
              },
              {
                title: "Secure Platform",
                description:
                  "Safe and trustworthy systems to protect user data and enable easy communication.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg p-8 ${
                  isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-900"
                }`}
              >
                <h4 className="text-xl font-bold text-purple-700 mb-2">{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-16 text-center">
          <h3 className={`text-3xl  font-semibold mb-6 ${isDarkMode?"text-gray-300" : "text-black/90"}`}>Why Choose Us?</h3>
          <p
            className={`text-lg max-w-2xl mx-auto mb-8 ${
              isDarkMode ? "text-gray-300" : "text-black/90"
            }`}
          >
            Lost and Found is built on trust, efficiency, and a genuine passion for making a difference. 
            Join thousands of satisfied users and rediscover the joy of recovery today!
          </p>
          {/* <button
            className={`px-6 py-3 font-semibold rounded-lg shadow-lg transition ${
              isDarkMode
                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                : "bg-yellow-300 text-purple-800 hover:bg-yellow-400"
            }`}
          >
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  );
}
