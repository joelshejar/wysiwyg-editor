import areEqual from "deep-equal";
import React, { useCallback, useState } from "react";

const useSelection = (editor) => {
  const [selection, setSelection] = useState(editor.selection);
  const setSelectionOptimized = useCallback(
    (newSelection) => {
      // don't update the component statement if selection hasn't changed
      if (areEqual(selection, newSelection)) {
        return;
      }
      setSelection(newSelection);
    },
    [setSelection, selection]
  );

  return [selection, setSelectionOptimized];
};

export default useSelection;
