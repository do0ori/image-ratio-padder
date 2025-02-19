import React, { useEffect } from "react";

export interface KakaoAdFitProps {
    adUnit: string;
    adWidth: number;
    adHeight: number;
    className?: string;
    style?: React.CSSProperties;
}

const KakaoAdFit: React.FC<KakaoAdFitProps> = ({
    adUnit,
    adWidth,
    adHeight,
    className = "",
    style = {},
}) => {
    useEffect(() => {
        const scriptId = "kakao-adfit-script";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.type = "text/javascript";
            script.src = "//t1.daumcdn.net/kas/static/ba.min.js";
            script.async = true;
            script.onload = () => {
                console.debug("Kakao AdFit script loaded");
            };
            script.onerror = () => {
                console.error("Failed to load Kakao AdFit script");
            };
            document.body.appendChild(script);
        }
    }, []);

    return (
        <ins
            className={`kakao_ad_area ${className}`}
            style={{ display: "none", ...style }}
            data-ad-unit={adUnit}
            data-ad-width={adWidth.toString()}
            data-ad-height={adHeight.toString()}
        ></ins>
    );
};

export default KakaoAdFit;
