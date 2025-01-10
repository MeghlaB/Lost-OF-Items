import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ThemeContext } from '../AuthProvider/ThemeProvider';

// Image imports
import frist from '../../src/assets/fristicon.png';
import second from '../../src/assets/second.png';
import third from '../../src/assets/third.png';
import fourth from '../../src/assets/frouth.jpeg';
import fivth from '../../src/assets/fivth.png';
import sixth from '../../src/assets/sixth.jpeg';
import sevent from '../../src/assets/alert.jpeg';
import egith from '../../src/assets/eight.png';
import nine from '../../src/assets/seven.png';

export default function Featured() {
    const { theme } = useContext(ThemeContext);

    const getTextClass = () => (theme === "dark" ? "text-gray-100" : "text-gray-900");
    const getSubTextClass = () => (theme === "dark" ? "text-white/75" : "text-gray-800");
    const getBgClass = () => (theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900");

    return (
        <div className={`p-8`}>
            <h1 className={`text-center text-2xl pb-8 font-bold ${getTextClass()}`}>
                <Typewriter
                    words={['Featured ']}
                    loop={Infinity}
                    cursor
                    cursorStyle={<span style={{ color: 'purple', fontSize: '30px' }}>_</span>}
                    typeSpeed={100}
                    delaySpeed={1000}
                />
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                {/* Card 1 */}
                <motion.div 
                    className={`p-6 rounded-lg shadow hover:shadow-lg transition-transform transform ${getBgClass()}`} 
                    whileHover={{ scale: 1.05, y: -10 }} 
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img src={frist} alt="Smart Matching" className="w-12 h-12 mx-auto mb-4" />
                    <h3 className={`text-lg font-semibold ${getTextClass()} mb-2`}>Smart Matching</h3>
                    <p className={`text-sm ${getSubTextClass()}`}>Powered by AI algorithms, found items and lost item inquiries are automatically matched. Manual checking is no longer required!</p>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                    className={`p-6 rounded-lg shadow hover:shadow-lg transition-transform transform ${getBgClass()}`} 
                    whileHover={{ scale: 1.05, y: -10 }} 
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img src={second} alt="Customer Self-Service" className="w-12 h-12 mx-auto mb-4" />
                    <h3 className={`text-lg font-semibold ${getTextClass()} mb-2`}>Customer Self-Service</h3>
                    <p className={`text-sm ${getSubTextClass()}`}>Ability for customer to view/cancel/edit the submission with further details after the lost item is logged.</p>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                    className={`p-6 rounded-lg shadow hover:shadow-lg transition-transform transform ${getBgClass()}`} 
                    whileHover={{ scale: 1.05, y: -10 }} 
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img src={third} alt="Customer Feedback" className="w-12 h-12 mx-auto mb-4" />
                    <h3 className={`text-lg font-semibold ${getTextClass()} mb-2`}>Customer Feedback</h3>
                    <p className={`text-sm ${getSubTextClass()}`}>Your customers’ feedback is important because it helps you consistently keep your edge. We make the feedback process easy and fast.</p>
                </motion.div>

                {/* Card 4 */}
                <motion.div 
                    className={`p-6 rounded-lg shadow hover:shadow-lg transition-transform transform ${getBgClass()}`} 
                    whileHover={{ scale: 1.05, y: -10 }} 
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img src={fourth} alt="SMS Notification" className="w-12 h-12 mx-auto mb-4" />
                    <h3 className={`text-lg font-semibold text-center ${getTextClass()} mb-2`}>SMS Notification</h3>
                    <p className={`text-sm ${getSubTextClass()}`}>Aside from email and the chat, users can also communicate with customers by sending them SMS from within the Software.</p>
                </motion.div>

                {/* Card 5 */}
                <motion.div 
                    className={`p-6 rounded-lg shadow hover:shadow-lg transition-transform transform ${getBgClass()}`} 
                    whileHover={{ scale: 1.05, y: -10 }} 
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img src={fivth} alt="Task List" className="w-12 h-12 mx-auto mb-4" />
                    <h3 className={`text-lg font-semibold text-center ${getTextClass()} mb-2`}>Task List</h3>
                    <p className={`text-sm ${getSubTextClass()}`}>You can determine specific rules and procedures for certain found items and assign them to task lists.</p>
                </motion.div>

                {/* Card 6 */}
                <motion.div 
                    className={`p-6 rounded-lg shadow hover:shadow-lg transition-transform transform ${getBgClass()}`} 
                    whileHover={{ scale: 1.05, y: -10 }} 
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img src={sixth} alt="Currency Conversion" className="w-12 h-12 mx-auto mb-4" />
                    <h3 className={`text-lg font-semibold text-center ${getTextClass()} mb-2`}>Currency Conversion</h3>
                    <p className={`text-sm ${getSubTextClass()}`}>With the currency conversion module, you’ll be able to keep the perfect overview as well as swiftly transfer (export and import) values.</p>
                </motion.div>

                {/* Card 7 */}
                <motion.div 
                    className={`p-6 rounded-lg shadow hover:shadow-lg transition-transform transform ${getBgClass()}`} 
                    whileHover={{ scale: 1.05, y: -10 }} 
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img src={sevent} alt="Fraud Detection" className="w-12 h-12 mx-auto mb-4" />
                    <h3 className={`text-lg font-semibold text-center ${getTextClass()} mb-2`}>Fraud Detection</h3>
                    <p className={`text-sm ${getSubTextClass()}`}>The Lost and Found Software algorithms detect fraud and log these changes for authorized users to review or to alert them.</p>
                </motion.div>

                {/* Card 8 */}
                <motion.div 
                    className={`p-6 rounded-lg shadow hover:shadow-lg transition-transform transform ${getBgClass()}`} 
                    whileHover={{ scale: 1.05, y: -10 }} 
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img src={nine} alt="Category Management" className="w-12 h-12 mx-auto mb-4" />
                    <h3 className={`text-lg font-semibold text-center ${getTextClass()} mb-2`}>Category Management</h3>
                    <p className={`text-sm ${getSubTextClass()}`}>Over 260 categories are already available in the standard version of the Lost and Found Software.</p>
                </motion.div>

                {/* Card 9 */}
                <motion.div 
                    className={`p-6 rounded-lg shadow hover:shadow-lg transition-transform transform ${getBgClass()}`} 
                    whileHover={{ scale: 1.05, y: -10 }} 
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img src={egith} alt="Detailed History" className="w-12 h-12 mx-auto mb-4" />
                    <h3 className={`text-lg font-semibold text-center ${getTextClass()} mb-2`}>Detailed History</h3>
                    <p className={`text-sm ${getSubTextClass()}`}>Keep track of all activities throughout the entire Lost and Found Software. Perfect for audits, detailed reporting and investigating.</p>
                </motion.div>
            </div>
        </div>
    );
}
