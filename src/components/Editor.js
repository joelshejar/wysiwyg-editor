import React, { useMemo } from "react";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";

const Editor = (props) => {
  let { document, onChange } = props;
  const editor = useMemo(() => withReact(createEditor()), []);
  return (
    <Slate editor={editor} value={document} onChange={onChange}>
      <Editable />
    </Slate>
  );
};

export default Editor;
