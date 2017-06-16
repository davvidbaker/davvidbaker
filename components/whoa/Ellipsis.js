/**
*
* Ellipsis
*
*/
function Ellipsis({ children }) {
  return (
    <span>
      ...
      {/*//THIS IS LAZY DOUBLY SO
      {Array.isArray(children)
        ? <Chunk type={children[0].props.type}>
            {children[0].props.children}
          </Chunk>
        : <Chunk type={children.props.type}>{children.props.children}</Chunk>}*/}

      <style jsx>
        {`
          span {
            background: orange;
          }
        `}
      </style>
    </span>
  );
}

Ellipsis.propTypes = {};

export default Ellipsis;
