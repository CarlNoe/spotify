import { Link } from "react-router-dom";
import "./SideActionButton.scss";

interface SideActionButtonProps {
  iconPath: string;
  text: string;
  onClick?: () => void;
  to?: string;
}

function SideActionButton(props: SideActionButtonProps) {
  const { iconPath, text, onClick, to } = props;

  const content = (
    <>
      <img src={iconPath} alt={text} />
      <span>{text}</span>
    </>
  );

  const renderButton = () => (
    <button type="button" onClick={onClick} className="SideActionButton">
      {content}
    </button>
  );

  const renderLink = () => (
    <Link to={to!} className="SideActionButton">
      {content}
    </Link>
  );

  return to ? renderLink() : renderButton();
}

export default SideActionButton;
