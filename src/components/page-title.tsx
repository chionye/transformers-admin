/** @format */

const PageTitle = ({
  title,
  subtitle,
  child,
}: {
  title?: string;
  subtitle?: string;
  child?: React.ReactNode;
}) => {
  return (
    <div className="w-full">
      <div className='w-full flex flex-row items-center justify-between'>
        <div>
          <p className='font-dm-sans text-3xl font-semibold text-[#1E1E1E] mt-3'>
            {title}
          </p>
        </div>
        <div>{child}</div>
      </div>
      <p className='font-dm-sans text-[16px] font-normal text-[#686868]'>
        {subtitle}
      </p>
    </div>
  );
};

export default PageTitle;
