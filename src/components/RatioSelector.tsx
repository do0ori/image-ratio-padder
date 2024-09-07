import React, { useState, useEffect, useRef } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

interface Option {
    value: string;
    label: string;
    icon: JSX.Element;
}

interface RatioSelectorProps {
    ratio: string;
    setRatio: (ratio: string) => void;
    options: Option[];
}

const RatioSelector: React.FC<RatioSelectorProps> = ({
    ratio,
    setRatio,
    options,
}) => {
    const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility
    const dropdownRef = useRef<HTMLDivElement>(null); // To detect outside clicks

    // Toggle dropdown visibility
    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handle option click and close dropdown
    const handleOptionClick = (value: string) => {
        setRatio(value);
        setIsOpen(false); // Close dropdown after selecting an option
    };

    return (
        <div className="mb-4 relative" ref={dropdownRef}>
            <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 mr-4 w-32 whitespace-nowrap">
                    원하는 비율
                </label>
                <div className="relative w-full">
                    <button
                        onClick={handleToggle} // Toggle dropdown on button click
                        className="block w-full pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-between"
                    >
                        <span className="flex items-center">
                            {
                                options.find((option) => option.value === ratio)
                                    ?.icon
                            }
                            <span className="ml-2">{ratio}</span>
                        </span>
                        <span className="ml-2 text-gray-500">
                            {isOpen ? <LuChevronUp /> : <LuChevronDown />}
                        </span>
                    </button>
                    {isOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                            {options.map((option) => (
                                <div
                                    key={option.value}
                                    className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() =>
                                        handleOptionClick(option.value)
                                    }
                                >
                                    <span className="flex items-center">
                                        {option.icon}
                                        <span className="ml-2">
                                            {option.label}
                                        </span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RatioSelector;
