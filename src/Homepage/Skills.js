import React from 'react';

const Skills = () => {
    return (
        <section className="bg-transparent">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold text-center mb-8">Skills</h2>

                <div className=" grid lg:grid-cols-2  md:grid-cols-1 gap-5 mx-auto">
                    {/* First Box */}
                    <div className="lg:col-span-2 mx-auto justify-center items-center w-1/2 border rounded-xl border-rose-900 bg-white shadow-md p-6 mb-4 ">
                        <h3 className="text-xl font-bold mb-4 text-rose-900">Frontend</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-blue-500 h-8 rounded">react js</div>
                            <div className="bg-green-500 h-8 rounded"></div>
                            <div className="bg-yellow-500 h-8 rounded"></div>
                            <div className="bg-red-500 h-8 rounded"></div>
                        </div>
                    </div>

                    {/* Second Box */}
                    <div className="border rounded-xl  border-rose-900 bg-white shadow-md p-6 mb-4 md:mx-2">
                        <h3 className="text-xl font-bold mb-4 text-rose-900 mb-4">Backend</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-pink-500 h-8 rounded"></div>
                            <div className="bg-purple-500 h-8 rounded"></div>
                            <div className="bg-indigo-500 h-8 rounded"></div>
                            <div className="bg-cyan-500 h-8 rounded"></div>
                        </div>
                    </div>

                    {/* Third Box */}
                    <div className="border rounded-xl border-rose-900 bg-white shadow-md p-6 mb-4 md:ml-4">
                        <h3 className="text-xl font-bold mb-4 text-rose-900 mb-4">Others</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-orange-500 h-8 rounded"></div>
                            <div className="bg-teal-500 h-8 rounded"></div>
                            <div className="bg-lime-500 h-8 rounded"></div>
                            <div className="bg-blue-500 h-8 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;