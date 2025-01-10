import React, { useContext } from 'react';
import { ThemeContext } from '../AuthProvider/ThemeProvider'; 

export default function HelpUs() {
    const { theme } = useContext(ThemeContext);

 
    const getBgClass = () => (theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900');
    const getCardBgClass = () => (theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-800');
    const getTextClass = () => (theme === 'dark' ? 'text-gray-200' : 'text-gray-700');

    return (
        <div className={`p-12  rounded-lg`}>
            {/* Testimonial Title */}
            <h1 className="text-center text-4xl font-bold mb-12">What Our Users Say</h1>

            {/* Testimonial List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className={`p-6 rounded-lg shadow-lg ${getCardBgClass()} text-center`}>
                    <div className="mb-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljIgcXIF8_GAFHrVl2-J4Tml7RHYb5AtwqA&s" alt="User 1" className="w-20 h-20 mx-auto rounded-full" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">John Doe</h3>
                    <p className={`${getTextClass()} text-sm italic`}>"This platform has been a lifesaver for me! I was able to find my lost wallet quickly and easily. Highly recommend!"</p>
                    <div className="mt-4 text-yellow-500">
                        {/* Rating */}
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className={`p-6 rounded-lg shadow-lg ${getCardBgClass()} text-center`}>
                    <div className="mb-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSGVuStFxj_Dnv9V9qlzkor22IRPIglGkVA&s" alt="User 2" className="w-20 h-20 mx-auto rounded-full" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Jane Smith</h3>
                    <p className={`${getTextClass()} text-sm italic`}>"I was able to donate my old clothes to people in need, and the whole process was so simple and user-friendly. Love this app!"</p>
                    <div className="mt-4 text-yellow-500">
                        {/* Rating */}
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className={`p-6 rounded-lg shadow-lg ${getCardBgClass()} text-center`}>
                    <div className="mb-4">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fvYGwKVq3JGj9L7LvXoF4WLresbhH4psaxLEBpqMF0bXY5EEr7fmbYwvyjJOoE9Vv2k&usqp=CAU' alt="User 3" className="w-20 h-20 mx-auto rounded-full" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Michael Brown</h3>
                    <p className={`${getTextClass()} text-sm italic`}>"Amazing service! I lost my phone, and within a few hours, I got notified that it was found. Excellent work!"</p>
                    <div className="mt-4 text-yellow-500">
                        {/* Rating */}
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
