import React from "react";
import { EditorModel } from "@/modules/trainer/models/editor.model";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const RichTextEditor = ({ editorValue, onChange }: EditorModel) => {
  return <ReactQuill value={editorValue} onChange={onChange} />;
};

export default RichTextEditor;
