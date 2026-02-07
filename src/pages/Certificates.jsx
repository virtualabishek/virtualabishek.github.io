import React, { useState, useMemo, useEffect } from "react";
import SectionHeader from "../components/extra/SectionHeader";
import ImageModal from "../components/ImageModal";
import certificatesData from "../assets/certificates/certificates.json";
import Card from "../components/extra/Card";
import { ChevronLeft, ChevronRight, Award, Code, Database, Trophy, ExternalLink, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import OptimizedImage from "../components/extra/OptimizedImage";

const certificateImages = import.meta.glob(
    "../assets/certificates/**/*.png",
    { eager: true }
);

const getImageUrl = (imagePath) => {
    const fullPath = `../assets/certificates/${imagePath}`;
    return certificateImages[fullPath]?.default || "";
};


const categoryIcons = {
    "google-ux": Award,
    "meta-frontend": Code,
    programiz: Code,
    datacamp: Database,
    hackathon: Trophy,
};

const Certificates = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeCertIndex, setActiveCertIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [modalState, setModalState] = useState({
        isOpen: false,
        images: [],
        currentIndex: 0,
        title: "",
        verifyLink: null,
    });

    const categories = certificatesData.categories;
    const currentCategory = categories[activeCategory];
    const currentCert = currentCategory.certificates[activeCertIndex];

    const totalCertificates = useMemo(() => {
        return categories.reduce(
            (sum, cat) => sum + cat.certificates.length,
            0
        );
    }, [categories]);

    const getCurrentCertImages = () => {
        if (currentCert.gallery) {
            return currentCert.gallery.map((img) => getImageUrl(img));
        }
        return [getImageUrl(currentCert.image)];
    };

    const handleCategoryChange = (index) => {
        setActiveCategory(index);
        setActiveCertIndex(0);
    };

    const handlePrevCert = () => {
        setDirection(-1);
        setActiveCertIndex((prev) =>
            prev === 0 ? currentCategory.certificates.length - 1 : prev - 1
        );
    };

    const handleNextCert = () => {
        setDirection(1);
        setActiveCertIndex((prev) =>
            prev === currentCategory.certificates.length - 1 ? 0 : prev + 1
        );
    };

    const handleImageClick = () => {
        const images = getCurrentCertImages();
        setModalState({
            isOpen: true,
            images: images,
            currentIndex: 0,
            title: currentCert.fullTitle || currentCert.title,
            verifyLink: currentCert.verifyLink,
        });
    };

    const handleModalClose = () => {
        setModalState((prev) => ({ ...prev, isOpen: false }));
    };

    const handleModalNavigate = (index) => {
        setModalState((prev) => ({ ...prev, currentIndex: index }));
    };

    const CategoryIcon = categoryIcons[currentCategory.id] || Award;

    // Preload adjacent images
    useEffect(() => {
        const preloadIndices = [
            (activeCertIndex + 1) % currentCategory.certificates.length,
            activeCertIndex - 1 < 0 ? currentCategory.certificates.length - 1 : activeCertIndex - 1
        ];

        preloadIndices.forEach(idx => {
            const img = new Image();
            img.src = getImageUrl(currentCategory.certificates[idx].image);
        });
    }, [activeCertIndex, currentCategory]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.9,
        }),
    };

    return (
        <section className="pb-16 pt-8 lg:py-24" id="certificates-page">
            <div className="container">
                <SectionHeader
                    info="Continuous Learning Journey"
                    title="All Certificates"
                    description={`${totalCertificates} certificates across ${categories.length} categories. Click any certificate to view in full size.`}
                />

                <div className="mt-8 flex justify-center">
                    <Card className="max-w-3xl p-5 md:p-6">
                        <div className="flex items-start gap-4">
                            <Award className="size-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <p className="text-white/70 text-sm md:text-base italic leading-relaxed">
                                "{certificatesData.quote.text}"
                            </p>
                        </div>
                    </Card>
                </div>

                <div className="mt-10 lg:mt-14">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap">
                        {categories.map((category, index) => {
                            const Icon = categoryIcons[category.id] || Award;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryChange(index)}
                                    className={`px-4 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all flex items-center gap-2 ${activeCategory === index
                                        ? "bg-gradient-to-r from-emerald-400 to-sky-400 text-gray-900"
                                        : "bg-gray-800 text-white/70 hover:bg-gray-700 hover:text-white"
                                        }`}
                                >
                                    <Icon className="size-4" />
                                    <span>{category.name}</span>
                                    <span
                                        className={`px-1.5 py-0.5 rounded-full text-xs ${activeCategory === index
                                            ? "bg-gray-900/20"
                                            : "bg-white/10"
                                            }`}
                                    >
                                        {category.certificates.length}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-10 relative max-w-3xl mx-auto">
                    <button
                        onClick={handlePrevCert}
                        className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors backdrop-blur-sm"
                        aria-label="Previous certificate"
                    >
                        <ChevronLeft className="size-6 text-white" />
                    </button>
                    <button
                        onClick={handleNextCert}
                        className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors backdrop-blur-sm"
                        aria-label="Next certificate"
                    >
                        <ChevronRight className="size-6 text-white" />
                    </button>

                    <div className="overflow-hidden px-4 md:px-0">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={`${activeCategory}-${activeCertIndex}`}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                    scale: { duration: 0.2 },
                                }}
                            >
                                <Card className="group overflow-hidden">
                                    {/* Large Certificate Image */}
                                    <div
                                        className="relative cursor-pointer overflow-hidden"
                                        onClick={handleImageClick}
                                    >
                                        <OptimizedImage
                                            src={getImageUrl(currentCert.image)}
                                            alt={currentCert.title}
                                            priority={true}
                                            containerClassName="w-full h-auto max-h-[500px]"
                                            className="w-full h-full object-contain bg-gray-700/30 transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="p-4 bg-black/60 rounded-full">
                                                <ZoomIn className="size-8 text-white" />
                                            </div>
                                        </div>

                                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-500/20 backdrop-blur-sm rounded-full">
                                            <span className="text-sm font-semibold text-emerald-400">
                                                {currentCategory.provider}
                                            </span>
                                        </div>

                                        {currentCert.gallery && currentCert.gallery.length > 1 && (
                                            <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 rounded-full text-sm text-white">
                                                +{currentCert.gallery.length - 1} more photos
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <h3 className="font-serif text-xl md:text-2xl text-white">
                                            {currentCert.title}
                                        </h3>
                                        <p className="text-white/50 mt-1">
                                            {currentCategory.name} • {currentCategory.platform}
                                        </p>

                                        {currentCert.description && (
                                            <p className="text-white/70 text-sm mt-3">
                                                {currentCert.description}
                                            </p>
                                        )}

                                        {currentCert.verifyLink && (
                                            <a
                                                href={currentCert.verifyLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg hover:bg-emerald-500/30 transition-colors text-sm font-medium"
                                            >
                                                <span>Verify Certificate</span>
                                                <ExternalLink className="size-4" />
                                            </a>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-1.5 mt-6">
                        {currentCategory.certificates.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > activeCertIndex ? 1 : -1);
                                    setActiveCertIndex(idx);
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${activeCertIndex === idx
                                    ? "bg-emerald-400 w-6"
                                    : "bg-gray-600 hover:bg-gray-500"
                                    }`}
                                aria-label={`Go to certificate ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-4 text-white/50 text-sm">
                        {activeCertIndex + 1} of {currentCategory.certificates.length} in {currentCategory.name}
                    </div>
                </div>

                <div className="mt-12 flex items-center justify-center gap-4">
                    <button
                        onClick={() => handleCategoryChange(activeCategory === 0 ? categories.length - 1 : activeCategory - 1)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-white/80 hover:text-white"
                    >
                        <ChevronLeft className="size-4" />
                        <span className="text-sm">
                            {categories[activeCategory === 0 ? categories.length - 1 : activeCategory - 1].name}
                        </span>
                    </button>
                    <div className="flex gap-1.5">
                        {categories.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryChange(index)}
                                className={`w-2 h-2 rounded-full transition-all ${activeCategory === index
                                    ? "bg-emerald-400 w-6"
                                    : "bg-gray-600 hover:bg-gray-500"
                                    }`}
                                aria-label={`Go to category ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => handleCategoryChange(activeCategory === categories.length - 1 ? 0 : activeCategory + 1)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-white/80 hover:text-white"
                    >
                        <span className="text-sm">
                            {categories[activeCategory === categories.length - 1 ? 0 : activeCategory + 1].name}
                        </span>
                        <ChevronRight className="size-4" />
                    </button>
                </div>
            </div>

            <ImageModal
                isOpen={modalState.isOpen}
                onClose={handleModalClose}
                images={modalState.images}
                currentIndex={modalState.currentIndex}
                onNavigate={handleModalNavigate}
                title={modalState.title}
                verifyLink={modalState.verifyLink}
            />
        </section>
    );
};

export default Certificates;
