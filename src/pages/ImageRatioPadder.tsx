import React, { useState } from "react";
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
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [ratio, setRatio] = useState<string>("1:1");
    const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");

    const ratioOptions = [
        {
            value: "1:1",
            label: "1:1 (정사각형, SNS 프로필)",
            icon: <LuSquare />,
        },
        {
            value: "1.91:1",
            label: "1.91:1 (velog 썸네일)",
            icon: <LuRectangleHorizontal />,
        },
        {
            value: "3:4",
            label: "3:4 (세로, 인쇄 사진 비율)",
            icon: <LuRectangleVertical />,
        },
        {
            value: "4:3",
            label: "4:3 (가로, 일반 사진)",
            icon: <LuRectangleHorizontal />,
        },
        {
            value: "4:5",
            label: "4:5 (세로, 인스타그램 포스트)",
            icon: <LuRectangleVertical />,
        },
        {
            value: "9:16",
            label: "9:16 (스토리, 인스타그램/틱톡)",
            icon: <LuRectangleVertical />,
        },
        {
            value: "16:9",
            label: "16:9 (와이드스크린, 유튜브 썸네일)",
            icon: <LuRectangleHorizontal />,
        },
    ];

    const handleImageUpload = (file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.src = reader.result as string;

            img.onload = () => {
                setImage(img);
            };

            img.onerror = () => {
                console.error("Failed to load the image.");
            };
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
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
