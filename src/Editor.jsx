import React, { useEffect, useRef } from "react";
import { basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";

export default function Editor() {
  const editor = useRef();

  useEffect(() => {
    const log = (event) => console.log(event);
    // editor.current.addEventListener("input", log);

    const state = EditorState.create({
      doc: "a ",
      extensions: [basicSetup, javascript()]
    });
    const view = new EditorView({ state, parent: editor.current });
    return () => {
      view.destroy();
      // editor.current.removeEventListener("input", log);
    };
  }, []);

  return (
    <div className="App">
      <p>
        Type option-i i (î) into the editor below. After you type it cmd-/
        (toggle comments) will stop working.
      </p>
      <div ref={editor}></div>
    </div>
  );
}
