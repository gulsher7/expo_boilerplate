// "use client";

import React, { useState } from "react";
import { Upload, X, Image } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
// import { motion } from "framer-motion";

interface FileUploadProps {
  label: string;
  description: string;
  accept: string;
  onChange: (file: File | null) => void;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  description,
  accept,
  onChange,
  className,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    
    if (selectedFile) {
      setFile(selectedFile);
      onChange(selectedFile);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
      
      toast.success(`${label} uploaded successfully`);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
    onChange(null);
  };

  return (
    <div className={cn("w-full", className)}>
      <p className="text-sm font-medium mb-2 flex items-center gap-1">
        {label}
        <span className="text-primary">
          <Image className="h-4 w-4" />
        </span>
      </p>
      
      {!file ? (
        <label 
          className="relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary/20 rounded-xl cursor-pointer bg-primary/5 hover:bg-primary/10 transition-colors duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-70"></div>
          <div className="flex flex-col items-center justify-center pt-5 pb-6 relative z-10">
            <div 
       
            >
              <Upload className="w-6 h-6 mb-2 text-primary" />
            </div>
            <p className="text-sm text-center text-primary/80 mb-1">
              <span className="font-medium">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-primary/60">{description}</p>
          </div>
          <input 
            type="file" 
            className="hidden" 
            onChange={handleFileChange} 
            accept={accept}
          />
        </label>
      ) : (
        <div className="relative w-full h-32 rounded-xl overflow-hidden border-2 border-primary/20 group transition-all duration-300">
          {preview && (
            <img 
              src={preview} 
              alt="Preview" 
              className="w-full h-full object-contain bg-white/90 p-2"
            />
          )}
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 rounded-full bg-black/30 hover:bg-black/50 p-1 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          <div 
            className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
           
          >
            <p className="text-white text-sm font-medium">{file.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
