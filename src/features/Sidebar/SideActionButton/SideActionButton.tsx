import "./SideActionButton.scss";

interface SideActionButtonProps {
  iconPath: string;
  text: string;
  onClick: () => void;
}

function SideActionButton(props: SideActionButtonProps) {
  const { iconPath, text, onClick } = props;

  return (
    <button type="button" onClick={onClick} className={`SideActionButton`}>
      <img src={iconPath} alt={text} />
      <span>{text}</span>
    </button>
  );
}

export default SideActionButton;
