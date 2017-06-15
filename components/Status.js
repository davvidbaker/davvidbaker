export default ({ status, focused }) => (
  <p style={{ opacity: focused ? 1 : 0.3 }}>
    <span className="status-key">status</span>
    <span
      className="status-value"
      style={{ background: status[1] ? status[1] : 'black' }}
    >
      {status[0].replace(/\s/g, '\u00A0')}
    </span>

    <style jsx>{`
      p {
        font-family: monospace;
        color: white;
        cursor: default;
        font-size: 10px;
        transition: opacity 0.2s;
      }

      .status-key, .status-value {
        padding: 3px 5px;
      }

      .status-key {
        background: #555;
        border-radius: 2px 0 0 2px;
      }

      .status-value {
        border-radius: 0 2px 2px 0;
      }
    `}</style>
  </p>
);
