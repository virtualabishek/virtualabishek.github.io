import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/extra/SectionHeader";
import Card from "../components/extra/Card";
import certificatesData from "../assets/certificates/certificates.json";
import { ArrowRight, Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
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


const getAllCertificates = () => {
    const allCerts = [];
    certificatesData.categories.forEach((category) => {
        category.certificates.forEach((cert) => {
            allCerts.push({
                ...cert,
                categoryName: category.name,
                categoryId: category.id,
                provider: category.provider,
            });
        });
    });
    return allCerts;
};

const allCertificates = getAllCertificates();

const CertificatesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 2) % allCertificates.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) =>
            prev - 2 < 0 ? allCertificates.length - 2 : prev - 2
        );
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 2) % allCertificates.length);
    };

    const visibleCertificates = [
        allCertificates[currentIndex],
        allCertificates[(currentIndex + 1) % allCertificates.length],
    ];

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.8,
        }),
    };

    return (
        <section className="py-16 lg:py-24" id="certificates">
            <div className="container">
                <SectionHeader
                    info="Continuous Learning"
                    title="Certificates "
                    description="I always read and try to expand my knowledge. These are some of the certificates I have earned, and I'm still learning more."
                />

                <div className="mt-8 flex justify-center">
                    <Card className="max-w-2xl p-6 md:p-8">
                        <div className="flex items-start gap-4">
                            <Award className="size-8 text-emerald-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-white/80 italic text-sm md:text-base leading-relaxed">
                                    "{certificatesData.quote.text}"
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="mt-12 lg:mt-16 relative">
                    <button
                        onClick={handlePrev}
                        className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors backdrop-blur-sm"
                        aria-label="Previous certificates"
                    >
                        <ChevronLeft className="size-6 text-white" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors backdrop-blur-sm"
                        aria-label="Next certificates"
                    >
                        <ChevronRight className="size-6 text-white" />
                    </button>

                    <div className="overflow-hidden px-8 md:px-16">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 },
                                    scale: { duration: 0.3 },
                                }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                            >
                                {visibleCertificates.map((cert, idx) => (
                                    <Card
                                        key={`${cert.id}-${idx}`}
                                        className="group overflow-hidden hover:scale-[1.02] transition-all duration-300"
                                    >
                                        <div className="relative overflow-hidden">
                                            <OptimizedImage
                                                src={getImageUrl(cert.image)}
                                                alt={cert.title}
                                                containerClassName="w-full h-64 md:h-80"
                                                className="w-full h-full object-contain bg-gray-700/30 transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                                            <div className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-500/20 backdrop-blur-sm rounded-full">
                                                <span className="text-sm font-semibold text-emerald-400">
                                                    {cert.provider}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            <h4 className="font-semibold text-white text-lg md:text-xl">
                                                {cert.title}
                                            </h4>
                                            <p className="text-white/50 text-sm mt-1">
                                                {cert.categoryName}
                                            </p>
                                            {cert.verifyLink && (
                                                <a
                                                    href={cert.verifyLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                                                >
                                                    <span>Verify Certificate</span>
                                                    <ExternalLink className="size-4" />
                                                </a>
                                            )}
                                        </div>
                                    </Card>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: Math.ceil(allCertificates.length / 2) }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx * 2 > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx * 2);
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${Math.floor(currentIndex / 2) === idx
                                    ? "bg-emerald-400 w-6"
                                    : "bg-gray-600 hover:bg-gray-500"
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        to="/certificates"
                        className="bg-white text-gray-950 h-12 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                    >
                        <span>View All Certificates</span>
                        <ArrowRight className="size-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
