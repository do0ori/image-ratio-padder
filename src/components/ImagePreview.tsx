import { LuAlertCircle } from "react-icons/lu";

interface ImagePreviewProps {
    image: string | null;
    ratio: string;
    backgroundColor: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
    image,
    ratio,
    backgroundColor,
}) => {
    return (
        <div>
            {image && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold mb-2">미리보기</h2>
                    <div
                        style={{
                            backgroundColor,
                            aspectRatio: ratio.replace(":", "/"),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                        }}
                        className="border"
                    >
                        <img
                            src={image}
                            alt="Uploaded"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>
            )}

            {!image && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <LuAlertCircle className="h-5 w-5 text-yellow-400" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-yellow-700">
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
