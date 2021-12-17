import { Editor } from "slate";

export function getActiveStyles(editor) {
  console.log(Editor?.marks(editor));
  return new Set(Object.keys(Editor.marks(editor) ?? {}));
}

export function toggleStyle(editor, style) {
  const activeStyles = getActiveStyles(editor);
  if (activeStyles.has(style)) {
    console.log(Editor.removeMark(editor, style));
    Editor.removeMark(editor, style);
  } else {
    Editor.addMark(editor, style, true);
  }
}
