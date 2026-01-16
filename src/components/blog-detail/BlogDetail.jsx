import BlogHero from "./BlogHero";
import BlogContent from "./BlogContent";
import BlogAlternating from "./BlogAlternating";
import RelatedContent from "./RelatedContent";

const BlogDetail = () => {
  return (
    <div className="px-6 lg:px-16">
      <BlogHero />
      <BlogContent />
      <BlogAlternating />
      <RelatedContent />
    </div>
  );
};

export default BlogDetail;
