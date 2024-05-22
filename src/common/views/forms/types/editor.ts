import { EditorState } from "draft-js";
export interface EditorTypes {
  editorState: EditorState;
  onEditorStateChange: (state: EditorState) => void;
}
