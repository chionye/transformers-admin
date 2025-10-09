import React from 'react';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Icons from '@/constants/icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  showHeader?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
  overlayClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  footer?: React.ReactNode;
}

const sizeClasses = {
  sm: 'max-w-md w-full',
  md: 'max-w-2xl w-full',
  lg: 'max-w-4xl w-full',
  xl: 'max-w-6xl w-full',
  full: 'w-full h-full max-w-full',
};

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
  showHeader = true,
  closeOnOverlayClick = true,
  className = '',
  overlayClassName = '',
  size = 'md',
  footer,
}) => {
  return (
    <ResponsiveModal
      open={isOpen}
      onClose={onClose}
      center
      closeOnOverlayClick={closeOnOverlayClick}
      classNames={{
        modal: `bg-white rounded-lg p-0 overflow-hidden ${sizeClasses[size]} ${className}`,
        overlay: `bg-black/50 ${overlayClassName}`,
        closeButton: 'hidden',
      }}
    >
      {showHeader && (
        <div className='flex items-center justify-between p-4 border-b border-gray-200'>
          <h3 className='lg:text-2xl text-lg font-semibold text-gray-900'>{title}</h3>
          {showCloseButton && (
            <button
              onClick={onClose}
              className='text-gray-400 hover:text-gray-500 focus:outline-none'
              aria-label='Close modal'
            >
              <Icons.close />
            </button>
          )}
        </div>
      )}
      
      <div className='p-6 overflow-y-auto max-h-[70vh]'>
        {children}
      </div>
      
      {footer && (
        <div className='px-6 py-4 flex lg:justify-end justify-center space-x-3'>
          {footer}
        </div>
      )}
    </ResponsiveModal>
  );
};

export default CustomModal;