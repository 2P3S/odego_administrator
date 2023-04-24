import TitleBadge from "@Components/common/TitleBadge";
import FillGraph from "@Components/common/FillGraph";

const AttendanceSection = () => {
  return (
    <div className="attendance-section">
      <div className="header-sm my-3">
        <TitleBadge color="red">참석율</TitleBadge>
      </div>
      <div>
        참석 인원
        <div>
          {"29" + " / " + "33"}
          <FillGraph color="bg-indigo-500" data={97} />
        </div>
      </div>
      <div>
        미참석 인원
        <div>
          {"4" + " / " + "33"}
          <FillGraph color="bg-amber-400" data={3} />
        </div>
      </div>
    </div>
  );
};

export default AttendanceSection;
