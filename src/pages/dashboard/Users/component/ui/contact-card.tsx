/** @format */

const ContactCard = ({
  name,
  email,
  since,
}: {
  name: string;
  email: string;
  since?: string;
}) => {
  return (
    <div className='flex items-center gap-2 rounded-[8px] lg:px-3 py-2'>
      <div className='w-[64px] h-[64px] rounded-full border border-white'>
        <img
          src={`https://api.dicebear.com/9.x/initials/svg?seed=${name}&radius=50&size=64`}
          alt='avatar'
        />
      </div>
      <div>
        <p className='font-semibold font-dm-sans text-[#1E1E1E] text-2xl leading-tight'>
          {name}
        </p>
        <p className='font-dm-sans text-[#4B4B4B] text-[16px] font-medium'>
          {email}
        </p>
        {since && (
          <p className='font-dm-sans text-[#686868] text-[14px] font-normal'>
            Member since {since}
          </p>
        )}
      </div>
    </div>
  );
};

const SmallContactCard = ({ name, email }: { name: string; email: string }) => {
  return (
    <div className='flex items-center gap-2 rounded-[8px] lg:px-3 py-2'>
      <div className='w-[40px] h-[40px] rounded-full border border-white'>
        <img
          src={`https://api.dicebear.com/9.x/initials/svg?seed=${name}&radius=50&size=40`}
          alt='avatar'
        />
      </div>
      <div>
        <p className='font-medium font-dm-sans text-[#1E1E1E] text-[16px] leading-tight'>
          {name}
        </p>
        <p className='font-dm-sans text-[#686868] text-[14px] font-regular'>
          {email}
        </p>
      </div>
    </div>
  );
};

export { ContactCard, SmallContactCard };
