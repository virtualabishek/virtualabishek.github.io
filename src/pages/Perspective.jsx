import { useState } from "react";
import perspectiveData from "../assets/json/Perspective.json";
import Card from "../components/extra/Card";
import SectionHeader from "../components/extra/SectionHeader";

const ITEMS_PER_PAGE = 6;

const Perspective = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sort perspectives by date in descending order
  const sortedPerspectives = [...perspectiveData].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedPerspectives.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPerspectives = sortedPerspectives.slice(startIndex, endIndex);

  const formatDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          info="My Thoughts"
          title="Personal Perspectives"
          description="A collection of my thoughts and reflections on life, technology, and everything in between."
        />

        <div className="flex flex-col gap-8 mt-10 md:mt-20">
          {currentPerspectives.map((perspective, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex flex-col">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-4">
                  &quot;{perspective.text}&quot;
                </p>
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex self-end font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text mt-2">
                  {formatDate(perspective.date)}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
            >
              Previous
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    currentPage === i + 1
                      ? "bg-white text-gray-900"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Perspective;
