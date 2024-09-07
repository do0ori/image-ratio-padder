import React, { ChangeEvent } from "react";

interface BgColorSelectorProps {
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
}

const BgColorSelector: React.FC<BgColorSelectorProps> = ({
    backgroundColor,
    setBackgroundColor,
}) => {
    return (
        <div className="mb-4">
            <div className="flex items-center">
                <label className="block text-lg font-medium text-gray-700 mr-4 w-52 whitespace-nowrap">
                    배경색
                </label>
                <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setBackgroundColor(e.target.value)
                    }
                    className="block w-full h-10 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                />
            </div>
        </div>
    );
};

export default BgColorSelector;
