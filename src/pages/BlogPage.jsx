import Blog from "../components/Blog";

const BlogPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">My Blog</h1>
      <Blog file="/blogs/blog1.md" />
    </div>
  );
};

export default BlogPage;
