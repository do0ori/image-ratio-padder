import { ChangeEvent } from "react";
import { LuUpload } from "react-icons/lu";

interface FileUploaderProps {
    handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ handleImageUpload }) => {
    return (
        <div className="mb-4">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <LuUpload className="w-8 h-8 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">클릭하여 업로드</span>
                    </p>
                </div>
                <input
                    type="file"
                    className="hidden"
                    onChange={handleImageUpload}
                    accept="image/*"
                />
            </label>
        </div>
    );
};

export default FileUploader;
