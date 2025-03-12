import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LinkWrapperProps {
  href: string; // The URL the link points to
  previewImage: string; // The image to show on hover
  children: React.ReactNode; // The link text or content
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({ href, previewImage, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Next.js Link */}
      <Link href={href} passHref legacyBehavior>
        {children}
      </Link>

      {/* Hover Image Preview */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '8px',
            zIndex: 100,
            padding: '8px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '200px',
          }}
        >
          <Image
            src={previewImage}
            alt="Preview"
            width={250}
            height={250}
            style={{
              width: '250px', // Adjust the size as needed
              height: 'auto',
              display: 'block',
              borderRadius: '8px',
              border: '1px solid #ddd',
              objectFit: 'cover',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LinkWrapper;
