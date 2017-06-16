export default ({ children }) => {
  return (
    <p className="date">
      {children}
      <style jsx>
        {`
          p { 
            margin: 0;
            color: #bbb;
            text-align: right;
          }
        `}
      </style>
    </p>
  );
};
