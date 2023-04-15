import "./SideNavButton.scss";
import { Link } from "react-router-dom";

interface SideNavButtonProps {
  iconPath: string;
  text: string;
  to: string;
}

function SideNavButton(props: SideNavButtonProps) {
  const { iconPath, text, to } = props;

  return (
    <Link to={to} className="SideNavButton">
      <img src={iconPath} alt={text} />
      <span>{text}</span>
    </Link>
  );
}

export default SideNavButton;
