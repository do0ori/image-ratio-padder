import React, { useState, useEffect, useRef } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { RiEditLine, RiCheckLine } from "react-icons/ri";

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
    const extendedOptions = [
        ...options,
        { value: "custom", label: "직접 설정하기", icon: <RiEditLine /> },
    ];

    const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility
    const [isCustom, setIsCustom] = useState(false); // State to manage custom ratio input
    const [customRatio, setCustomRatio] = useState(""); // State to hold custom ratio
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
        if (value === "custom") {
            setIsCustom(true); // Show custom input field
        } else {
            setRatio(value);
            setIsCustom(false); // Hide custom input if user selects predefined options
        }
        setIsOpen(false); // Close dropdown after selecting an option
    };

    // Handle custom ratio input
    const handleCustomRatioChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCustomRatio(e.target.value);
    };

    // Handle custom ratio submission
    const handleCustomRatioSubmit = () => {
        if (customRatio) {
            setRatio(customRatio); // Set custom ratio
            setIsCustom(false); // Hide custom input field
        }
    };

    return (
        <div>
            <div className="mb-4" ref={dropdownRef}>
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
                                {extendedOptions.find(
                                    (option) => option.value === ratio
                                )?.icon ?? <RiEditLine />}
                                <span className="ml-2">{ratio}</span>
                            </span>
                            <span className="ml-2 text-gray-500">
                                {isOpen ? <LuChevronUp /> : <LuChevronDown />}
                            </span>
                        </button>
                        {isOpen && (
                            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                {extendedOptions.map((option) => (
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
            <div className="mb-4">
                {isCustom && (
                    <div className="flex items-center">
                        <label className="block text-sm font-medium text-gray-700 mr-4 w-32 whitespace-nowrap">
                            비율 입력
                        </label>
                        <div className="flex w-full">
                            <input
                                type="text"
                                value={customRatio}
                                onChange={handleCustomRatioChange}
                                className="flex-grow pl-3 pr-3 py-2 text-base bg-gray-50 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-l-md"
                                placeholder="16:9"
                            />
                            <button
                                onClick={handleCustomRatioSubmit}
                                className="bg-blue-500 text-white py-2 px-4 flex items-center justify-center hover:bg-blue-600 rounded-r-md"
                                title="적용하기"
                            >
                                <RiCheckLine className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RatioSelector;
