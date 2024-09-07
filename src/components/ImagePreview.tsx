import React, { useRef } from "react";
import { LuAlertCircle, LuDownload } from "react-icons/lu";

interface ImagePreviewProps {
    image: HTMLImageElement | null;
    ratio: string;
    backgroundColor: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
    image,
    ratio,
    backgroundColor,
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const drawImageOnCanvas = () => {
        if (!image || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Parse the ratio (e.g., "16:9")
        const [widthRatio, heightRatio] = ratio.split(":").map(Number);
        const aspectRatio = widthRatio / heightRatio;

        const imgWidth = image.width;
        const imgHeight = image.height;

        let newWidth = imgHeight * aspectRatio;
        let newHeight = imgHeight;
        let marginLeft = 0;
        let marginTop = 0;

        if (newWidth < imgWidth) {
            newHeight = imgWidth / aspectRatio;
            newWidth = imgWidth;
            marginTop = (newHeight - imgHeight) / 2;
        } else {
            marginLeft = (newWidth - imgWidth) / 2;
        }

        // Set canvas dimensions based on the calculated width and height
        canvas.width = newWidth;
        canvas.height = newHeight;

        // Fill the canvas with the background color
        ctx!.fillStyle = backgroundColor;
        ctx!.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the uploaded image onto the canvas with padding
        ctx!.drawImage(image, marginLeft, marginTop);
    };

    const handleDownload = () => {
        drawImageOnCanvas();

        if (canvasRef.current) {
            const link = document.createElement("a");
            link.href = canvasRef.current.toDataURL("image/jpeg");
            link.download = `processed_image_${Date.now()}.jpg`;
            link.click();
        }
    };

    return (
        <div>
            {image ? (
                <div className="mt-4">
                    <h2 className="text-2xl font-semibold mb-2">미리보기</h2>
                    {/* Fast Preview */}
                    <div
                        style={{
                            backgroundColor,
                            aspectRatio: ratio.replace(":", "/"),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                        }}
                        className="border w-full h-auto"
                    >
                        <img
                            src={image.src}
                            alt="Preview"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>

                    {/* Canvas for image processing (hidden) */}
                    <canvas ref={canvasRef} style={{ display: "none" }} />

                    <button
                        onClick={handleDownload}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full flex items-center justify-center"
                    >
                        <LuDownload className="w-7 h-7 mr-2" />
                        <p className="text-lg">이미지 다운로드</p>
                    </button>
                </div>
            ) : (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <LuAlertCircle className="h-7 w-7 text-yellow-400" />
                        </div>
                        <div className="ml-3">
                            <p className="text-lg text-yellow-700">
                                이미지를 업로드하면 여기에 미리보기가
                                표시됩니다.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImagePreview;
