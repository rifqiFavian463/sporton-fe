"use client";
import { useRef, useState } from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

function FileUpload({ onFileSelect }: { onFileSelect?: (file: File | null) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (selectedFile?: File) => {
    if (!selectedFile) return;

    setFile(selectedFile);
    onFileSelect?.(selectedFile);
  };

  const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect?.(null);
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-full py-6 border border-dashed border-primary bg-primary-l"
      onClick={() => fileInputRef.current?.click()}
      onDragOver={(e) => e.preventDefault}
      onDrop={(e) => {
        e.preventDefault();
        handleFileChange(e.dataTransfer.files[0]);
      }}
    >
      <input type="file" className="hidden" ref={fileInputRef} accept="image/*" onChange={(e) => handleFileChange(e.target.files?.[0])} />
      {!file ? (
        <div className="text-center my-5">
          <FiUploadCloud className="text-primary mx-auto" />
          <p className="text-xs">Upload Your Payment Receipt Here</p>
        </div>
      ) : (
        <div className="text-center">
          <FiImage className="text-primary mx-auto mb-4 " size={28} />
          <p className="text-sm text-primary">{file.name}</p>
          <p className="text-sm text-gray-400">{(file.size / 1024).toFixed(1)} KB</p>
          <button onClick={removeFile} className="flex gap-2 bg-primary/90 px-2 py-1 text-white mx-auto rounded mt-4">
            <FiTrash2 className="self-center" /> Remove
          </button>
        </div>
      )}
    </div>
  );
}

export { FileUpload };
