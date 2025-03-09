import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Blog = ({ file }) => {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(file)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading blog content:", error);
        setIsLoading(false);
      });
  }, [file]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-8 md:py-16">
      <div className="prose prose-invert lg:prose-xl mx-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-4xl md:text-5xl font-bold mb-8" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="text-3xl md:text-4xl font-bold mt-12 mb-6"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="text-2xl md:text-3xl font-semibold mt-8 mb-4"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                className="text-lg leading-relaxed mb-6 text-gray-300"
                {...props}
              />
            ),
            a: ({ node, ...props }) => (
              <a
                className="text-sky-400 hover:text-sky-300 transition-colors"
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="text-gray-300" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-sky-400 pl-4 italic my-6"
                {...props}
              />
            ),
            code: ({ node, inline, ...props }) =>
              inline ? (
                <code
                  className="bg-gray-800 rounded px-1 py-0.5 text-sm"
                  {...props}
                />
              ) : (
                <code
                  className="block bg-gray-800 rounded-lg p-4 text-sm overflow-x-auto"
                  {...props}
                />
              ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default Blog;
