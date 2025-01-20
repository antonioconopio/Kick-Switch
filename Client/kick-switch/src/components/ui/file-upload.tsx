"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Upload, File, X } from "lucide-react";

export function FileUpload({
  value = [],
  onChange,
}: {
  value: File[];
  onChange: (files: File[]) => void;
}) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onChange([...value, ...acceptedFiles]);
    },
    [onChange, value]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (file: File) => {
    onChange(value.filter((f) => f !== file));
  };

  const handleUpload = () => {
    if (value.length > 0) {
      console.log(
        "Uploading files:",
        value.map((f) => f.name)
      );
      // Reset the files after upload
      onChange([]);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
          isDragActive
            ? "border-primary bg-primary/10"
            : "border-gray-300 hover:border-primary"
        }`}
      >
        <input {...getInputProps()} />
        <File className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-500">
          Drag 'n' drop some files here, or click to select files
        </p>
      </div>
      {value.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Selected Files:</h4>
          <ul className="mt-2 divide-y divide-gray-200">
            {value.map((file) => (
              <li
                key={file.name}
                className="py-3 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <File className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">{file.name}</span>
                </div>
                <button
                  onClick={() => removeFile(file)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
