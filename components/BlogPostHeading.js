/**
*
* BlogPostHeading
*
*/


function BlogPostHeading(props) {
  return (
    <div>
      {props.children}
      <style jsx>
        {`
          div {
          display: flex;
          flex-direction: column;
          align-items:center;
        }

        h1 {
          margin: 0;
        }
      `}
      </style>
    </div>
  );
}

export default BlogPostHeading;
