import React from "react";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";
import BlogPostItem from "@docusaurus/theme-classic/lib/theme/BlogPostItem";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <BlogPostProvider>
          <BlogPostItem />
        </BlogPostProvider>
      </div>
    </div>
  );
};

export default Blog;
