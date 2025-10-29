import TagButton from "../components/TagButton";
import "../style/tag-buttons.css";
export default function TagButtons() {
  let buttons = [];
  for (let counter = 0; counter < 30; counter++)
    buttons.push(<TagButton key={counter} />);

  return <div className={"tag-buttons"}>{buttons}</div>;
}
