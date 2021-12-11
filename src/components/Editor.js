import React, { useMemo } from "react";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import useEditorConfig from "../hooks/useEditorConfig";

const Editor = (props) => {
  let { document, onChange } = props;
  const editor = useMemo(() => withReact(createEditor()), []);
  const { renderElement } = useEditorConfig(editor);
  return (
    <Slate editor={editor} value={document} onChange={onChange}>
      <Editable renderElement={renderElement} />
    </Slate>
  );
};

export default Editor;
