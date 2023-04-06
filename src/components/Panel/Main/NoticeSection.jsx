import TitleBadge from "../../TitleBadge";

const NoticeItem = ({ title, date }) => {
  return (
    <li className="h-12 bg-red-300">
      <a className="flex w-full h-full items-center" href="#">
        <div className="w-9/12">{title}</div>
        <div className="">{date}</div>
      </a>
    </li>
  );
};

const NoticeSection = () => {
  return (
    <div className="notice-section">
      <div className="header-sm">
        <TitleBadge color="blue">공지사항</TitleBadge>
      </div>
      <div className="w-96">
        <ul className="flex flex-col gap-2">
          <NoticeItem title="1234" date="2023.04.06" />
          <NoticeItem title="테스트2" date="2023.05.02" />
          <NoticeItem title="테스트3" date="2023.05.23" />
        </ul>
      </div>
    </div>
  );
};

export default NoticeSection;
