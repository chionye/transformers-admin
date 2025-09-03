/** @format */

import FolderDropzone from "@/components/upload/folder-dropzone";
import { Card } from "@/components/ui/card";

const NewProperty = () => {
  return (
    <Card className='bg-white border-0 px-5 py-5 flex flex-col gap-0'>
      <p className='text-[#2F2F30] text-2xl font-bold font-maven'>
        Führichgasse
      </p>
      <p className='text-[#2F2F30] text-[16px] font-normal font-maven'>
        Garmin Austria GmbH
      </p>
      <div className="mt-3">
        <FolderDropzone />
      </div>
    </Card>
  );
};

export default NewProperty;
