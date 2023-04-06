const TitleBadge = ({ color, children }) => {
  return (
    <span
      className={`bg-${color}-100 text-${color}-800 text-5xl font-medium mr-2 px-2.5 py-0.5 rounded-xl dark:bg-${color}-900 dark:text-${color}-300`}
    >
      {children}
    </span>
  );
};

export default TitleBadge;
