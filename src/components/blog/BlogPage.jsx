import BlogGrid from "./BlogGrid";
import FeaturedBlog from "./FeaturedBlog";
import UploadCard from "./UploadCard";

const BlogPage = () => {
  return (
    <div className="px-6 lg:px-16">
      <BlogGrid />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
        <FeaturedBlog />
        <UploadCard />
      </div>
    </div>
  );
};

export default BlogPage;
