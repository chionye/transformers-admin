/** @format */

import { Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { InnerPageContainer } from "@/components/innerpage-container";
import { Button } from "@/components/ui/button";
import Icons from "@/constants/icons";
import FileUpload from "@/components/upload/file-upload";
import { useNewBlog } from "@/hooks/useNewBlog";

// Main Component
const NewBlogPosts = () => {
  const {
    register,
    handleSubmit,
    uploadedImageUrl,
    errors,
    loading,
    onSubmit,
    handleRemoveUploadedImage,
    handleImageUploadComplete,
  } = useNewBlog();

  return (
    <InnerPageContainer title='Back to Blog' hideTitle>
      <div className='min-h-screen bg-gray-50'>
        <Card className='max-w-4xl mx-auto px-4 py-8'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold text-gray-900'>Create New Blog</h1>
          </div>

          {/* Form */}
          <div className='space-y-6'>
            <div className=' space-y-6'>
              {/* Blog Title */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Title
                </label>
                <input
                  {...register("title")}
                  type='text'
                  placeholder='Enter blog title'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
                />
                {errors.title && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Blog Content */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Blog
                </label>
                <textarea
                  {...register("content")}
                  placeholder='Enter Content...'
                  rows={4}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all resize-none'
                />
                {errors.content && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.content.message}
                  </p>
                )}
              </div>
            </div>

            {/* File Upload Section */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Blog Image
              </label>
              {!uploadedImageUrl ? (
                <FileUpload
                  onUploadComplete={handleImageUploadComplete}
                  uploadEndpoint='/image/upload'
                />
              ) : (
                <div className='space-y-4'>
                  <div className='relative rounded-lg overflow-hidden border border-gray-200'>
                    <img
                      src={uploadedImageUrl}
                      alt='Uploaded blog image'
                      className='w-full h-64 object-cover'
                    />
                  </div>
                  <div className='flex gap-3'>
                    <Button
                      type='button'
                      onClick={handleRemoveUploadedImage}
                      variant='outline'
                      className='flex items-center gap-2'>
                      <Icons.trash width='16' height='16' />
                      Remove & Upload New
                    </Button>
                    <a
                      href={uploadedImageUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm text-blue-600 hover:underline flex items-center'>
                      View full size
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className='flex gap-4 lg:w-1/3 w-full'>
              <Button
                variant={"outline"}
                onClick={handleSubmit(onSubmit)}
                disabled={loading}
                className='flex items-center gap-2 border border-[#E9E9E9]'>
                <Icons.save />
                <span className='text-[#686868]'>Save as draft</span>
              </Button>
              <Button
                type='button'
                onClick={handleSubmit(onSubmit)}
                disabled={loading}
                className='flex-1 bg-[#198841] text-white hover:bg-[#198841]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center'>
                {loading ? (
                  <>
                    <Loader2 className='w-5 h-5 mr-2 animate-spin' />
                    Submitting...
                  </>
                ) : (
                  "Submit Post"
                )}
                <Icons.paperPlane />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </InnerPageContainer>
  );
};

export default NewBlogPosts;
