const GroupTitle = ({ children, position = '' }) => {
  return (
    <p
      className={`${position} text-content font-Gong-Gothic-l text-content-color`.trim()}
    >
      {children}
    </p>
  );
};

export default GroupTitle;
