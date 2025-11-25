// components/ui/Button.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  target,
  rel,
}: ButtonProps) {
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-gray-300 text-gray-800 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg',
    success: 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
  };

  // Base classes
  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-200 transform hover:-translate-y-0.5
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'pointer-events-none' : ''}
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  // If href is provided, render as Link
  if (href && !disabled) {
    return (
      <Link href={href} className={baseClasses} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
}

// Icon Components for easy use
export const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
  </svg>
);

export const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

export const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

/* 
==============================================
USAGE INSTRUCTIONS
==============================================

1. BASIC USAGE - Simple button:
   
   import Button from '@/components/ui/Button';
   
   <Button>Click Me</Button>


2. BUTTON VARIANTS:

   <Button variant="primary">Primary Button</Button>
   <Button variant="secondary">Secondary Button</Button>
   <Button variant="outline">Outline Button</Button>
   <Button variant="ghost">Ghost Button</Button>
   <Button variant="danger">Danger Button</Button>
   <Button variant="success">Success Button</Button>
   <Button variant="gradient">Gradient Button</Button>


3. BUTTON SIZES:

   <Button size="sm">Small</Button>
   <Button size="md">Medium</Button>
   <Button size="lg">Large</Button>
   <Button size="xl">Extra Large</Button>


4. WITH ICONS:

   import Button, { ArrowRightIcon, MailIcon } from '@/components/ui/Button';
   
   <Button icon={<ArrowRightIcon />}>Learn More</Button>
   <Button icon={<MailIcon />} iconPosition="left">Contact Us</Button>


5. AS LINK (Next.js Link):

   <Button href="/about">Go to About</Button>
   <Button href="/contact" variant="outline">Contact Page</Button>


6. WITH CLICK HANDLER:

   <Button onClick={() => alert('Clicked!')}>Click Handler</Button>
   <Button onClick={handleSubmit} variant="success">Submit</Button>


7. FULL WIDTH BUTTON:

   <Button fullWidth>Full Width Button</Button>


8. DISABLED STATE:

   <Button disabled>Disabled Button</Button>


9. FORM SUBMIT BUTTON:

   <Button type="submit" variant="primary">Submit Form</Button>


10. CUSTOM STYLING:

    <Button className="mt-4 shadow-2xl">Custom Classes</Button>


11. COMPLETE EXAMPLES:

    // Primary CTA button with icon
    <Button 
      href="/register" 
      variant="primary" 
      size="lg" 
      icon={<ArrowRightIcon />}
    >
      Get Started
    </Button>

    // Outline button with left icon
    <Button 
      href="/contact" 
      variant="outline" 
      icon={<MailIcon />} 
      iconPosition="left"
    >
      Send Message
    </Button>

    // Full width submit button
    <Button 
      type="submit" 
      variant="success" 
      fullWidth 
      icon={<CheckIcon />}
    >
      Complete Registration
    </Button>

    // Danger button with click handler
    <Button 
      onClick={handleDelete} 
      variant="danger" 
      size="sm"
    >
      Delete Account
    </Button>

    // Gradient button
    <Button 
      href="/premium" 
      variant="gradient" 
      size="xl" 
      icon={<ArrowRightIcon />}
    >
      Upgrade to Premium
    </Button>


12. AVAILABLE ICONS:
    - ArrowRightIcon
    - ArrowLeftIcon
    - DownloadIcon
    - MailIcon
    - PhoneIcon
    - CheckIcon
    - PlusIcon
    - ExternalLinkIcon



14. RESPONSIVE USAGE:

    <div className="flex flex-col sm:flex-row gap-4">
      <Button href="/action1" variant="primary" size="lg" fullWidth className="sm:w-auto">
        Action 1
      </Button>
      <Button href="/action2" variant="outline" size="lg" fullWidth className="sm:w-auto">
        Action 2
      </Button>
    </div>

==============================================
*/