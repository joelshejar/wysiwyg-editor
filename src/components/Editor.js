import React, { useMemo } from "react";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import useEditorConfig from "../hooks/useEditorConfig";
import Toolbar from "./Toolbar";

const Editor = (props) => {
  let { document, onChange } = props;
  const editor = useMemo(() => withReact(createEditor()), []);
  const { renderElement, renderLeaf } = useEditorConfig(editor);
  return (
    <Slate editor={editor} value={document} onChange={onChange}>
      <Toolbar />
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
    </Slate>
  );
};

export default Editor;
