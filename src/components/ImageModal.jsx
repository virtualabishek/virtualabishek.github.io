import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ImageModal = ({
    isOpen,
    onClose,
    images,
    currentIndex,
    onNavigate,
    title,
    verifyLink,
}) => {
    const handleKeyDown = useCallback(
        (e) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft" && currentIndex > 0)
                onNavigate(currentIndex - 1);
            if (e.key === "ArrowRight" && currentIndex < images.length - 1)
                onNavigate(currentIndex + 1);
        },
        [isOpen, currentIndex, images.length, onClose, onNavigate]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    onClick={onClose}
                >
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex-1">
                                <h3 className="text-white font-semibold text-lg truncate pr-4">
                                    {title}
                                </h3>
                                {images.length > 1 && (
                                    <p className="text-white/50 text-sm">
                                        {currentIndex + 1} of {images.length}
                                    </p>
                                )}
                            </div>
                            <div className="flex items-center gap-3">
                                {verifyLink && (
                                    <a
                                        href={verifyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg hover:bg-emerald-500/30 transition-colors text-sm"
                                    >
                                        <span>Verify</span>
                                        <ExternalLink className="size-4" />
                                    </a>
                                )}
                                <button
                                    onClick={onClose}
                                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X className="size-6 text-white" />
                                </button>
                            </div>
                        </div>

                        <div className="relative flex-1 flex items-center justify-center bg-gray-900/50 rounded-2xl overflow-hidden">
                            <img
                                src={images[currentIndex]}
                                alt={title}
                                className="max-w-full max-h-[70vh] object-contain"
                            />

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => onNavigate(currentIndex - 1)}
                                        disabled={currentIndex === 0}
                                        className={`absolute left-4 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors ${currentIndex === 0
                                            ? "opacity-30 cursor-not-allowed"
                                            : "opacity-100"
                                            }`}
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="size-6 text-white" />
                                    </button>
                                    <button
                                        onClick={() => onNavigate(currentIndex + 1)}
                                        disabled={currentIndex === images.length - 1}
                                        className={`absolute right-4 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors ${currentIndex === images.length - 1
                                            ? "opacity-30 cursor-not-allowed"
                                            : "opacity-100"
                                            }`}
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="size-6 text-white" />
                                    </button>
                                </>
                            )}
                        </div>

                        {images.length > 1 && (
                            <div className="flex gap-2 mt-4 justify-center overflow-x-auto py-2">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => onNavigate(idx)}
                                        className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all ${idx === currentIndex
                                            ? "ring-2 ring-emerald-400 scale-110"
                                            : "opacity-60 hover:opacity-100"
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageModal;
