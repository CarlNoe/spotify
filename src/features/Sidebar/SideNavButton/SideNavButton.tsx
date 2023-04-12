import "./SideNavButton.scss";

interface SideNavButtonProps {
  iconPath: string;
  text: string;
  onClick: () => void;
}

function SideNavButton(props: SideNavButtonProps) {
  const { iconPath, text, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`SideNavButton`}
    >
      <img src={iconPath} alt={text} />
      <span>{text}</span>
    </button>
  );
}

export default SideNavButton;
