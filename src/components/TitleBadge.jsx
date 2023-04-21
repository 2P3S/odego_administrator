function getClassName(color) {
  switch (color) {
    case "blue":
      return "bg-blue-200 text-blue-800 text-5xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300";
    case "gray":
      return "bg-gray-200 text-gray-800 text-5xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300";
    case "red":
      return "bg-red-200 text-red-800 text-5xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300";
    case "green":
      return "bg-green-200 text-green-800 text-5xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300";
    case "yellow":
      return "bg-yellow-200 text-yellow-800 text-5xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300";
    case "indigo":
      return "bg-indigo-200 text-indigo-800 text-5xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300";
    case "purple":
      return "bg-purple-200 text-purple-800 text-5xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300";
    case "pink":
      return "bg-pink-200 text-pink-800 text-5xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300";
  }
}

const TitleBadge = ({ color, children }) => {
  return <span className={getClassName(color)}>{children}</span>;
};

export default TitleBadge;
