/** @format */
import { useState, useRef } from "react";
import Icons from "@/constants/icons";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { BaseURL } from "@/services/api/api-clients";
import { Loader2 } from "lucide-react";

interface FileUploadProps {
  onUploadComplete: (imageUrl: string) => void;
  uploadEndpoint?: string;
}

const FileUpload = ({
  onUploadComplete,
  uploadEndpoint = "/image/upload",
}: FileUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError("Please select an image file");
        return;
      }

      // Validate file size (e.g., max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("File size should be less than 5MB");
        return;
      }

      setSelectedFile(file);
      setError(null);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        `${BaseURL}${uploadEndpoint}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            withCredentials: true,
          },
        }
      );

      if (response.data.status && response.data.imageUrl) {
        onUploadComplete(response.data.imageUrl);
        // Reset the component
        setSelectedFile(null);
        setPreview(null);
      } else {
        setError("Upload failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred during upload. Please try again.");
      console.error("Upload error:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setPreview(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files?.[0];
    if (file) {
      // Create a synthetic event to reuse handleFileSelect
      const syntheticEvent = {
        target: { files: [file] },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      handleFileSelect(syntheticEvent);
    }
  };

  return (
    <div className='w-full'>
      <div
        className='w-full border-2 border-dashed border-gray-300 rounded-lg p-6 transition-colors hover:border-gray-400 cursor-pointer'
        onClick={() => !selectedFile && fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <input
          ref={fileInputRef}
          type='file'
          accept='image/*'
          onChange={handleFileSelect}
          className='hidden'
        />

        {!selectedFile ? (
          <div className='flex items-center gap-3'>
            <Icons.image />
            <span className='text-gray-600 font-dm-sans text-[14px]'>
              Upload an image
            </span>
          </div>
        ) : (
          <div className='space-y-4'>
            {preview && (
              <div className='flex items-start gap-4'>
                <img
                  src={preview}
                  alt='Preview'
                  className='w-32 h-32 object-cover rounded-lg'
                />
                <div className='flex-1'>
                  <p className='text-sm font-medium text-gray-700 mb-1'>
                    {selectedFile.name}
                  </p>
                  <p className='text-xs text-gray-500'>
                    {(selectedFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
            )}

            <div className='flex items-center gap-2'>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleUpload();
                }}
                disabled={isUploading}
                className='bg-[#198841] hover:bg-[#156935] text-white'>
                {isUploading ? (
                  <>
                    <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Icons.uploadCloud width='16' height='16' />
                    Upload Image
                  </>
                )}
              </Button>

              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove();
                }}
                variant='outline'
                disabled={isUploading}>
                Remove
              </Button>
            </div>
          </div>
        )}
      </div>

      {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
    </div>
  );
};

export default FileUpload;
