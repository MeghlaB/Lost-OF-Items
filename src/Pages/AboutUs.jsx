import React, { useContext } from "react";
import { ThemeContext } from "../AuthProvider/ThemeProvider";
import { motion } from "framer-motion";

export default function AboutUs() {
  const { theme } = useContext(ThemeContext);

  const isDarkMode = theme === "dark";

  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto py-28 px-6 lg:px-16">
        {/* Heading */}
        <motion.h2
          className={`text-xl md:text-2xl lg:text-5xl font-extrabold text-center mb-8 ${
            isDarkMode ? "text-white/75" : "text-black"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <span> About{" "}</span>
          <span
            className={`${
              isDarkMode ? "text-purple-600" : "text-purple-900"
            }`}
          >
            Lost and Found
          </span>
        </motion.h2>
        <motion.p
          className={`text-lg max-w-2xl mx-auto mb-8 ${
            isDarkMode ? "text-gray-300" : "text-black/90"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Your trusted partner in reuniting people with their precious belongings. 
          Since 2014, we’ve been creating a secure and innovative platform to make 
          recovering lost items effortless and reliable.
        </motion.p>

        {/* Mission and Values */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className={`rounded-lg shadow-lg p-8 ${
              isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-900"
            }`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">
              Our Mission
            </h3>
            <p className="leading-relaxed">
              Our mission is to create a safe and efficient system for connecting people 
              with their lost items. Through cutting-edge technology and a strong community network, 
              we aim to restore not just items, but peace of mind.
            </p>
          </motion.div>
          <motion.div
            className={`rounded-lg shadow-lg p-8 ${
              isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-900"
            }`}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">
              Our Values
            </h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Compassion:</span> Helping others with empathy and care.
              </li>
              <li>
                <span className="font-semibold">Innovation:</span> Using technology to solve real-world problems.
              </li>
              <li>
                <span className="font-semibold">Trust:</span> Ensuring privacy and reliability for all users.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3
            className={`text-3xl font-semibold mb-6 ${
              isDarkMode ? "text-gray-300" : "text-black/90"
            }`}
          >
            What We Offer
          </h3>
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
              <motion.div
                key={index}
                className={`rounded-lg shadow-lg p-8 ${
                  isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-900"
                }`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
              >
                <h4 className="text-xl font-bold text-purple-700 mb-2">
                  {feature.title}
                </h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
