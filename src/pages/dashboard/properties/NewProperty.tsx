/** @format */

import FileUpload from "@/components/upload/file-upload";
import { Card } from "@/components/ui/card";

const NewProperty = () => {
  const handleUploadComplete = (imageUrl: string) => {
    console.log("Uploaded image URL:", imageUrl);
  };

  return (
    <Card className='bg-white border-0 px-5 py-5 flex flex-col gap-0'>
      <p className='text-[#2F2F30] text-2xl font-bold font-maven'>
        Führichgasse
      </p>
      <p className='text-[#2F2F30] text-[16px] font-normal font-maven'>
        Garmin Austria GmbH
      </p>
      <div className="mt-3">
        <FileUpload onUploadComplete={handleUploadComplete} />
      </div>
    </Card>
  );
};

export default NewProperty;
