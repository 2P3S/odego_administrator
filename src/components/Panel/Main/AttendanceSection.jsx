import TitleBadge from "@Components/common/TitleBadge";
import FillGraph from "@Components/common/FillGraph";

const AttendanceSection = () => {
  return (
    <div className="attendance-section flex-col">
      <div className="header-sm my-3">
        <TitleBadge color="red">참석율</TitleBadge>
      </div>
      <div className="attendance-ratio flex">
        <div className="flex">
          <div className="attend-ratio flex flex-col justify-center">
            <div>참석 인원</div>
            <div>{"29" + " / " + "33"}</div>
          </div>
          <FillGraph color="bg-indigo-500" data={97} />
        </div>
        <div className="flex">
          <div className="noshow-ratio flex flex-col justify-center">
            <div>미참석 인원</div>
            <div>{"4" + " / " + "33"}</div>
          </div>
          <FillGraph color="bg-amber-400" data={3} />
        </div>
      </div>
    </div>
  );
};

export default AttendanceSection;
