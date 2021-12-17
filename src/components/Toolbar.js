import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useEditor } from "slate-react";
import { getActiveStyles, toggleStyle } from "../utils/EditorUtils";

const PARAGRAPH_STYLES = ["h1", "h2", "h3", "h4", "paragraph", "multiple"];
const CHARACTER_STYLES = ["bold", "italic", "underline", "code"];

const Toolbar = (props) => {
  const editor = useEditor();
  const { selection, previousSelection } = props;

  return (
    <div className="toolbar">
      <DropdownButton
        className={"block-style-dropdown"}
        disabled={false}
        id="block-style"
        title={getLabelForBlockStyle("paragraph")}
      >
        {PARAGRAPH_STYLES.map((blockType) => (
          <Dropdown.Item eventKey={blockType} key={blockType}>
            {getLabelForBlockStyle(blockType)}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      {/* Buttons for character styles */}
      {CHARACTER_STYLES.map((style) => (
        <ToolBarButton
          key={style}
          style={style}
          icon={<i className={`bi ${getIconForButton(style)}`} />}
          isActive={getActiveStyles(editor).has(style)}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleStyle(editor, style);
          }}
        />
      ))}
    </div>
  );
};

const ToolBarStyleButton = (props) => {
  const editor = useEditor();

  const { as, style, icon } = props;

  return <ToolBarButton as={as} />;
};

const ToolBarButton = (props) => {
  const { style, icon, isActive, ...otherProps } = props;

  return (
    <Button
      variant="outline-primary"
      className="toolbar-btn"
      active={isActive}
      {...otherProps}
    >
      {style}
    </Button>
  );
};

const getIconForButton = (style) => {
  switch (style) {
    case "bold":
      return "bi-type-bold";
    case "italic":
      return "bi-type-italic";
    case "code":
      return "bi-type-slash";
    case "underline":
      return "bi-type-underline";
    case "image":
      return "bi-type-image";
    case "link":
      return "bi-link-45deg";
    default:
      throw new Error(`Unhandled style in getIconForButton: ${style}`);
  }
};

const getLabelForBlockStyle = (style) => {
  switch (style) {
    case "h1":
      return "Heading 1";
    case "h2":
      return "Heading 2";
    case "h3":
      return "Heading 3";
    case "h4":
      return "Heading 4";
    case "paragraph":
      return "Paragraph";
    case "multiple":
      return "Multiple";
    default:
      throw new Error(`Unhandled style in getLabelForBlockStyle: ${style}`);
  }
};

export default Toolbar;
