import React from "react";
import { ExternalLink, ZoomIn } from "lucide-react";
import Card from "./extra/Card";

const CertificateCard = ({ certificate, onImageClick, categoryImages }) => {
    const handleClick = () => {
        if (certificate.gallery) {
            onImageClick(certificate.gallery, 0, certificate.fullTitle, certificate.verifyLink);
        } else {
            onImageClick([categoryImages[certificate.image]], 0, certificate.fullTitle, certificate.verifyLink);
        }
    };

    return (
        <Card className="group overflow-hidden hover:scale-[1.02] transition-all duration-300">
            <div
                className="relative cursor-pointer overflow-hidden"
                onClick={handleClick}
            >
                <img
                    src={categoryImages[certificate.image]}
                    alt={certificate.title}
                    className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-3 bg-black/60 rounded-full">
                        <ZoomIn className="size-6 text-white" />
                    </div>
                </div>

                {certificate.gallery && certificate.gallery.length > 1 && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 rounded-md text-xs text-white">
                        +{certificate.gallery.length - 1} more
                    </div>
                )}
            </div>

            <div className="p-4">
                <h4 className="font-semibold text-white text-sm md:text-base line-clamp-2">
                    {certificate.title}
                </h4>

                {certificate.description && (
                    <p className="text-white/50 text-xs mt-2 line-clamp-2">
                        {certificate.description}
                    </p>
                )}

                {certificate.verifyLink && (
                    <a
                        href={certificate.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span>Verify Certificate</span>
                        <ExternalLink className="size-3" />
                    </a>
                )}
            </div>
        </Card>
    );
};

export default CertificateCard;
