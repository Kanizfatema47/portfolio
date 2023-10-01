import { useState } from "react";
import Modal from "./Modal";

function Project() {
    const [activeTab, setActiveTab] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const tabs = [
        {
            title: 'Tab 1',
            content: 'Content for Tab 1',
            imageUrl: 'URL_FOR_IMAGE_1',
        },
        {
            title: 'Tab 2',
            content: 'Content for Tab 2',
            imageUrl: 'URL_FOR_IMAGE_2',
        },
        {
            title: 'Tab 3',
            content: 'Content for Tab 3',
            imageUrl: 'URL_FOR_IMAGE_3',
        },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    const openModal = () => {
        setIsModalOpen(true);
    };
    console.log(isModalOpen)

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>

            <div className="flex flex-col justify-center items-center">
                {/* Tab Buttons */}
                <div className="w-full sm:w-1/2 md:w-1/3">
                    <div className="flex justify-center">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => handleTabClick(index)}
                                className={`px-4 py-2 rounded-md ${index === activeTab
                                        ? 'bg-rose-900 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    } mr-2 mb-2`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="w-full cursor-pointer sm:w-1/2 md:w-2/3 mt-4 sm:mt-0" onClick={openModal}>
                    <div className="border p-4">
                        <h3 className="text-xl font-semibold">{tabs[activeTab].title}</h3>
                        <p className="mt-2">{tabs[activeTab].content}</p>
                    </div>
                    <div className="mt-4">
                        <img
                            src={tabs[activeTab].imageUrl}
                            alt={tabs[activeTab].title}
                            className="w-full rounded-md"
                        />
                    </div>
                </div>
                <Modal isModalOpen={isModalOpen}/>
            </div>
        </div>
    );
}

export default Project;
