import { ReactComponent as Main } from "./main.svg";
import { ReactComponent as Notice } from "./notice.svg";
import { ReactComponent as Settings } from "./settings.svg";
import { ReactComponent as StudentInfo } from "./student-info.svg";

const NavIcon = ({ icon }) => {
  let IconComponent = null;
  switch (icon) {
    case "main":
      IconComponent = Main;
      break;
    case "notice":
      IconComponent = Notice;
      break;
    case "settings":
      IconComponent = Settings;
      break;
    case "student-info":
      IconComponent = StudentInfo;
      break;
    default:
  }
  return <IconComponent />;
};

export default NavIcon;
