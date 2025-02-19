import React, { useState } from "react";
import {
    LuRectangleHorizontal,
    LuRectangleVertical,
    LuSquare,
} from "react-icons/lu";
import BgColorSelector from "../components/BgColorSelector";
import FileUploader from "../components/FileUploader";
import Header from "../components/Header";
import ImagePreview from "../components/ImagePreview";
import RatioSelector from "../components/RatioSelector";
import KakaoAdFit from "../components/ads/KakaoAdFit";

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
        <>
            {/* Side Ads */}
            <div className="hidden lg:block">
                {/* Left-side Ad */}
                <div
                    className="fixed top-1/2 transform -translate-y-1/2"
                    style={{
                        left: "calc(((100% - 672px) / 2 - 160px) / 2)",
                    }}
                >
                    <KakaoAdFit
                        adUnit="DAN-XfCoJYZFc8TPkOXS"
                        adWidth={160}
                        adHeight={600}
                    />
                </div>
                {/* Right-side Ad */}
                <div
                    className="fixed top-1/2 transform -translate-y-1/2"
                    style={{
                        right: "calc(((100% - 672px) / 2 - 160px) / 2)",
                    }}
                >
                    <KakaoAdFit
                        adUnit="DAN-8SlqtJ12kVoZH3EY"
                        adWidth={160}
                        adHeight={600}
                    />
                </div>
            </div>

            {/* Content */}
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

                {/* Bottom Ads */}
                <KakaoAdFit
                    adUnit="DAN-dDmAnaViV9Li7RPZ"
                    adWidth={320}
                    adHeight={100}
                />
            </div>
        </>
    );
};

export default ImageRatioPadder;
