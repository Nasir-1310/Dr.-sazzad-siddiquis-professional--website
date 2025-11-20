// import React from 'react';

// // Button Component
// function Button({
//   children,
//   onClick,
//   variant = 'primary',
//   size = 'md',
//   fullWidth = false,
//   disabled = false,
//   icon,
//   iconPosition = 'right',
//   className = '',
// }) {
//   const sizeClasses = {
//     sm: 'px-3 py-1.5 text-xs',
//     md: 'px-6 py-3 text-sm',
//     lg: 'px-8 py-4 text-base',
//     xl: 'px-10 py-5 text-lg',
//   };

//   const variantClasses = {
//     primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
//     secondary: 'bg-gray-600 text-white hover:bg-gray-700 shadow-md hover:shadow-lg',
//     outline: 'bg-transparent border-2 border-gray-300 text-gray-800 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50',
//     ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
//     danger: 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg',
//     success: 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg',
//     gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
//   };

//   const baseClasses = `
//     inline-flex items-center justify-center font-semibold rounded-lg
//     transition-all duration-200 transform hover:-translate-y-0.5
//     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
//     disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
//     ${sizeClasses[size]}
//     ${variantClasses[variant]}
//     ${fullWidth ? 'w-full' : ''}
//     ${disabled ? 'pointer-events-none' : ''}
//     ${className}
//   `;

//   return (
//     <button onClick={onClick} disabled={disabled} className={baseClasses}>
//       {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
//       {children}
//       {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
//     </button>
//   );
// }

// // Icon Components
// const ArrowRightIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//   </svg>
// );

// const ArrowLeftIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
//   </svg>
// );

// const DownloadIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//   </svg>
// );

// const MailIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//   </svg>
// );

// const PhoneIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//   </svg>
// );

// const CheckIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//   </svg>
// );

// const PlusIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//   </svg>
// );

// const ExternalLinkIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//   </svg>
// );

// // Showcase Component
// export default function ButtonShowcase() {
//   const handleClick = () => {
//     alert('Button clicked!');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
//       <div className="max-w-6xl mx-auto space-y-12">
        
//         {/* Header */}
//         <div className="text-center space-y-4">
//           <h1 className="text-4xl font-bold text-gray-900">Button Component Showcase</h1>
//           <p className="text-lg text-gray-600">All button variants, sizes, and styles in one place</p>
//         </div>

//         {/* Button Variants */}
//         <section className="bg-white rounded-xl shadow-lg p-8 space-y-6">
//           <h2 className="text-2xl font-bold text-gray-900 border-b pb-3">Button Variants</h2>
//           <div className="flex flex-wrap gap-4">
//             <Button variant="primary" onClick={handleClick}>Primary Button</Button>
//             <Button variant="secondary" onClick={handleClick}>Secondary Button</Button>
//             <Button variant="outline" onClick={handleClick}>Outline Button</Button>
//             <Button variant="ghost" onClick={handleClick}>Ghost Button</Button>
//             <Button variant="danger" onClick={handleClick}>Danger Button</Button>
//             <Button variant="success" onClick={handleClick}>Success Button</Button>
//             <Button variant="gradient" onClick={handleClick}>Gradient Button</Button>
//           </div>
//         </section>

//         {/* Button Sizes */}
//         <section className="bg-white rounded-xl shadow-lg p-8 space-y-6">
//           <h2 className="text-2xl font-bold text-gray-900 border-b pb-3">Button Sizes</h2>
//           <div className="flex flex-wrap items-center gap-4">
//             <Button variant="primary" size="sm" onClick={handleClick}>Small</Button>
//             <Button variant="primary" size="md" onClick={handleClick}>Medium</Button>
//             <Button variant="primary" size="lg" onClick={handleClick}>Large</Button>
//             <Button variant="primary" size="xl" onClick={handleClick}>Extra Large</Button>
//           </div>
//         </section>

//         {/* Buttons with Icons (Right) */}
//         <section className="bg-white rounded-xl shadow-lg p-8 space-y-6">
//           <h2 className="text-2xl font-bold text-gray-900 border-b pb-3">Buttons with Icons (Right)</h2>
//           <div className="flex flex-wrap gap-4">
//             <Button variant="primary" icon={<ArrowRightIcon />} onClick={handleClick}>
//               Learn More
//             </Button>
//             <Button variant="success" icon={<CheckIcon />} onClick={handleClick}>
//               Complete
//             </Button>
//             <Button variant="outline" icon={<DownloadIcon />} onClick={handleClick}>
//               Download
//             </Button>
//             <Button variant="danger" icon={<ExternalLinkIcon />} onClick={handleClick}>
//               External Link
//             </Button>
//           </div>
//         </section>

//         {/* Buttons with Icons (Left) */}
//         <section className="bg-white rounded-xl shadow-lg p-8 space-y-6">
//           <h2 className="text-2xl font-bold text-gray-900 border-b pb-3">Buttons with Icons (Left)</h2>
//           <div className="flex flex-wrap gap-4">
//             <Button variant="primary" icon={<MailIcon />} iconPosition="left" onClick={handleClick}>
//               Send Email
//             </Button>
//             <Button variant="secondary" icon={<PhoneIcon />} iconPosition="left" onClick={handleClick}>
//               Call Now
//             </Button>
//             <Button variant="outline" icon={<ArrowLeftIcon />} iconPosition="left" onClick={handleClick}>
//               Go Back
//             </Button>
//             <Button variant="success" icon={<PlusIcon />} iconPosition="left" onClick={handleClick}>
//               Add New
//             </Button>
//           </div>
//         </section>

//         {/* Size Combinations */}
//         <section className="bg-white rounded-xl shadow-lg p-8 space-y-6">
//           <h2 className="text-2xl font-bold text-gray-900 border-b pb-3">Different Sizes with Icons</h2>
//           <div className="flex flex-wrap items-center gap-4">
//             <Button variant="gradient" size="sm" icon={<ArrowRightIcon />} onClick={handleClick}>
//               Small with Icon
//             </Button>
//             <Button variant="gradient" size="md" icon={<ArrowRightIcon />} onClick={handleClick}>
//               Medium with Icon
//             </Button>
//             <Button variant="gradient" size="lg" icon={<ArrowRightIcon />} onClick={handleClick}>
//               Large with Icon
//             </Button>
//             <Button variant="gradient" size="xl" icon={<ArrowRightIcon />} onClick={handleClick}>
//               XL with Icon
//             </Button>
//           </div>
//         </section>

//         {/* Disabled State */}
//         <section className="bg-white rounded-xl shadow-lg p-8 space-y-6">
//           <h2 className="text-2xl font-bold text-gray-900 border-b pb-3">Disabled State</h2>
//           <div className="flex flex-wrap gap-4">
//             <Button variant="primary" disabled>Disabled Primary</Button>
//             <Button variant="secondary" disabled>Disabled Secondary</Button>
//             <Button variant="outline" disabled>Disabled Outline</Button>
//             <Button variant="success" disabled icon={<CheckIcon />}>
//               Disabled with Icon
//             </Button>
//           </div>
//         </section>

//         {/* Full Width */}
//         <section className="bg-white rounded-xl shadow-lg p-8 space-y-6">
//           <h2 className="text-2xl font-bold text-gray-900 border-b pb-3">Full Width Buttons</h2>
//           <div className="space-y-4 max-w-2xl">
//             <Button variant="primary" fullWidth icon={<ArrowRightIcon />} onClick={handleClick}>
//               Full Width Primary Button
//             </Button>
//             <Button variant="outline" fullWidth icon={<MailIcon />} iconPosition="left" onClick={handleClick}>
//               Full Width Outline Button
//             </Button>
//             <Button variant="gradient" fullWidth icon={<CheckIcon />} onClick={handleClick}>
//               Full Width Gradient Button
//             </Button>
//           </div>
//         </section>

//         {/* Real-World Examples */}
//         <section className="bg-white rounded-xl shadow-lg p-8 space-y-6">
//           <h2 className="text-2xl font-bold text-gray-900 border-b pb-3">Real-World Examples</h2>
          
//           {/* CTA Section */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-gray-700">Hero Section CTAs</h3>
//             <div className="flex flex-wrap gap-4">
//               <Button variant="primary" size="lg" icon={<ArrowRightIcon />} onClick={handleClick}>
//                 Get Started
//               </Button>
//               <Button variant="outline" size="lg" icon={<MailIcon />} onClick={handleClick}>
//                 Contact Us
//               </Button>
//             </div>
//           </div>

//           {/* Form Actions */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-gray-700">Form Actions</h3>
//             <div className="flex flex-wrap gap-4">
//               <Button variant="success" icon={<CheckIcon />} onClick={handleClick}>
//                 Submit
//               </Button>
//               <Button variant="outline" onClick={handleClick}>
//                 Cancel
//               </Button>
//               <Button variant="danger" onClick={handleClick}>
//                 Delete
//               </Button>
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-gray-700">Navigation</h3>
//             <div className="flex flex-wrap gap-4">
//               <Button variant="ghost" icon={<ArrowLeftIcon />} iconPosition="left" onClick={handleClick}>
//                 Previous
//               </Button>
//               <Button variant="primary" icon={<ArrowRightIcon />} onClick={handleClick}>
//                 Next
//               </Button>
//             </div>
//           </div>

//           {/* Download Section */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-gray-700">Download Actions</h3>
//             <div className="flex flex-wrap gap-4">
//               <Button variant="secondary" icon={<DownloadIcon />} onClick={handleClick}>
//                 Download PDF
//               </Button>
//               <Button variant="outline" icon={<DownloadIcon />} onClick={handleClick}>
//                 Download Resume
//               </Button>
//             </div>
//           </div>
//         </section>

//         {/* Mobile Responsive Example */}
//         <section className="bg-white rounded-xl shadow-lg p-8 space-y-6">
//           <h2 className="text-2xl font-bold text-gray-900 border-b pb-3">Mobile Responsive (Stack on Small Screens)</h2>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button variant="primary" size="lg" icon={<ArrowRightIcon />} fullWidth className="sm:w-auto" onClick={handleClick}>
//               Primary Action
//             </Button>
//             <Button variant="outline" size="lg" icon={<MailIcon />} fullWidth className="sm:w-auto" onClick={handleClick}>
//               Secondary Action
//             </Button>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }