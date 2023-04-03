const FillGraph = ({ color, data }) => {
  return (
    <div className="flex h-32 w-32 p-1 justify-center items-center rounded-full bg-slate-800">
      <div
        className={`flex rounded-full ${color} justify-center items-center text-zinc-100 text-xl font-bold`}
        style={{
          width: `${data}%`,
          height: `${data}%`,
          minWidth: `${data === 0 ? "0%" : "15%"}`,
          minHeight: `${data === 0 ? "0%" : "15%"}`,
        }}
      >
        {data}%
      </div>
    </div>
  );
};

export default FillGraph;
