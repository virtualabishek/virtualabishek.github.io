import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OptimizedImage = ({
    src,
    alt,
    className = "",
    containerClassName = "",
    priority = false
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        setError(false);

        if (src) {
            const img = new Image();
            img.src = src;
            img.onload = () => setIsLoaded(true);
            img.onerror = () => setError(true);
        }
    }, [src]);

    return (
        <div className={`relative overflow-hidden ${containerClassName}`}>
            <AnimatePresence>
                {!isLoaded && !error && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center"
                    >
                        <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
                    </motion.div>
                )}
            </AnimatePresence>

            {error && (
                <div className="absolute inset-0 bg-gray-900 flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-white/30 text-xs mb-2">Failed to load image</span>
                    <div className="bg-white/5 px-3 py-1 rounded text-[10px] text-white/50 truncate max-w-full">
                        {src?.split('/').pop()}
                    </div>
                </div>
            )}

            <motion.img
                src={src}
                alt={alt}
                loading={priority ? "eager" : "lazy"}
                onLoad={() => setIsLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className={`${className} ${!isLoaded ? "invisible" : "visible"}`}
            />
        </div>
    );
};

export default OptimizedImage;
