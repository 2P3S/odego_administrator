import TitleBadge from "../../TitleBadge";

const ReasonItem = ({ title, studentName, date }) => {
  return (
    <li className="h-12 bg-blue-300">
      <a className="flex w-full h-full items-center" href="#">
        <div className="w-8/12">{title}</div>
        <div className="w-2/12">{studentName}</div>
        <div className="">{date}</div>
      </a>
    </li>
  );
};

const ReasonSection = () => {
  return (
    <div className="reason-section">
      <div className="header-sm">
        <TitleBadge color="blue">사유서</TitleBadge>
      </div>
      <div className="w-96">
        <ul className="flex flex-col gap-2">
          <ReasonItem title="1234" studentName="이주현" date="2023.04.06" />
          <ReasonItem title="테스트2" studentName="김주현" date="2023.05.02" />
          <ReasonItem title="테스트3" studentName="박주현" date="2023.05.23" />
        </ul>
      </div>
    </div>
  );
};

export default ReasonSection;
