import { ChangeEvent, DragEvent, useState } from "react";
import { LuUpload } from "react-icons/lu";

interface FileUploaderProps {
    handleImageUpload: (file: File) => void; // Now handle a file directly
}

const FileUploader: React.FC<FileUploaderProps> = ({ handleImageUpload }) => {
    const [isDragging, setIsDragging] = useState(false);

    // Handle file drop
    const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith("image/")) {
            handleImageUpload(file); // Use the same logic for file upload
        }
    };

    // Prevent default to allow drop
    const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    // Handle file upload via input click
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleImageUpload(file);
        }
    };

    return (
        <div className="mb-4">
            <label
                className={`flex flex-col items-center justify-center w-full h-32 border-2 ${
                    isDragging ? "border-blue-500" : "border-gray-300"
                } border-dashed rounded-lg cursor-pointer ${
                    isDragging ? "bg-blue-50" : "bg-gray-50"
                }  hover:bg-gray-100`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                <div className="flex flex-col items-center justify-center pt-6 pb-6">
                    <LuUpload className="w-8 h-8 mb-4 text-gray-500" />
                    <p className="mb-2 text-lg text-gray-500">
                        <span className="font-semibold">
                            {isDragging
                                ? "이미지를 여기에 드롭하세요."
                                : "클릭하거나 드래그하여 업로드"}
                        </span>
                    </p>
                </div>
                <input
                    type="file"
                    className="hidden"
                    onChange={handleInputChange}
                    accept="image/*"
                />
            </label>
        </div>
    );
};

export default FileUploader;
