'use client'

interface CallTodayButtonProps {
  fullWidth?: boolean;
  className?: string;
}

export function CallTodayButton({ fullWidth = false, className = '' }: CallTodayButtonProps) {
  const phoneNumber = '+19512515467';
  const telLink = `tel:${phoneNumber}`;

  const handleCallClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Try multiple methods for maximum compatibility
    try {
      window.location.href = telLink;
    } catch (error) {
      // Fallback: open in new window/tab
      window.open(telLink, '_self');
    }
  };

  const baseClasses = 'cta-button text-lg transition-transform duration-200 hover:scale-105';
  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseClasses} ${widthClass} ${className}`.trim();

  return (
    <button 
      type="button"
      className={combinedClasses} 
      onClick={handleCallClick}
      aria-label={`Call ${phoneNumber}`}
    >
      Call Today
    </button>
  );
}

