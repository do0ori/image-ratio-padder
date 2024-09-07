import React, { useState, ChangeEvent } from "react";
import {
    LuSquare,
    LuRectangleHorizontal,
    LuRectangleVertical,
} from "react-icons/lu";
import Header from "../components/Header";
import FileUploader from "../components/FileUploader";
import RatioSelector from "../components/RatioSelector";
import BgColorSelector from "../components/BgColorSelector";
import ImagePreview from "../components/ImagePreview";

const ImageRatioPadder: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const [ratio, setRatio] = useState<string>("1:1");
    const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");

    const ratioOptions = [
        { value: "1:1", label: "1:1", icon: <LuSquare /> },
        { value: "4:3", label: "4:3", icon: <LuRectangleHorizontal /> },
        {
            value: "16:9",
            label: "16:9",
            icon: <LuRectangleHorizontal />,
        },
        { value: "3:4", label: "3:4", icon: <LuRectangleVertical /> },
        {
            value: "1.9:1",
            label: "1.9:1 (velog 썸네일)",
            icon: <LuRectangleHorizontal />,
        },
    ];

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (typeof e.target?.result === "string") {
                    setImage(e.target.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <Header
                email="fuzzydo0ori@gmail.com"
                githubRepo="https://github.com/do0ori/image-ratio-padder"
            />
            <FileUploader handleImageUpload={handleImageUpload} />
            <RatioSelector
                ratio={ratio}
                setRatio={setRatio}
                options={ratioOptions}
            />
            <BgColorSelector
                backgroundColor={backgroundColor}
                setBackgroundColor={setBackgroundColor}
            />
            <ImagePreview
                image={image}
                ratio={ratio}
                backgroundColor={backgroundColor}
            />
        </div>
    );
};

export default ImageRatioPadder;
