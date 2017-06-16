/*
 * WhoaPost!
 *
 */

import PropTypes from 'prop-types';

import BlogPostContainer from './BlogPostContainer';
import BlogPostHeading from './BlogPostHeading';
import BlogPostTitle from './BlogPostTitle';
import BlogPostDate from './BlogPostDate';
import Chunk from './whoa/Chunk';

const BlogPost = ({ attributes, content }) => {
  console.log('in post container', attributes);
  // debugger;

  return (
    <BlogPostContainer>

      {/*<BlogPostHeading>
        <BlogPostTitle>{attributes.title}</BlogPostTitle>
        <BlogPostDate>{attributes.date}</BlogPostDate>
      </BlogPostHeading>
*/}
      <div className="post-body">

        <Chunk type={content.type}>{content.children}</Chunk>

      </div>

    </BlogPostContainer>
  );
};

BlogPost.propTypes = {
  attributes: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
  }).isRequired,
  content: PropTypes.object.isRequired,
};

export default BlogPost;
