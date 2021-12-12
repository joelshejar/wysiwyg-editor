import React, { useCallback, useMemo } from "react";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import useEditorConfig from "../hooks/useEditorConfig";
import Toolbar from "./Toolbar";
import useSelection from "../hooks/useSelection";

const Editor = (props) => {
  let { document, onChange } = props;
  const editor = useMemo(() => withReact(createEditor()), []);
  const { renderElement, renderLeaf } = useEditorConfig(editor);
  const [selection, setSelection] = useSelection(editor);

  const onChangeHandler = useCallback(
    (document) => {
      onChange(document);
      setSelection(editor.selection);
    },
    [editor.selection, onChange, setSelection]
  );
  return (
    <Slate editor={editor} value={document} onChange={onChangeHandler}>
      <Toolbar selection={selection} />
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
    </Slate>
  );
};

export default Editor;
