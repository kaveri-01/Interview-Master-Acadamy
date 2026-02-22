export default function WhatsAppButton() {
    const phoneNumber = "918888704897"; // with country code
  
    const handleClick = () => {
      const message = "Hi, I am interested in the Interview Mastery Program 🚀";
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    };
  
    return (
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
  
          {/* Pulse Ring */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
  
          {/* Main Button */}
          <div className="relative bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="white"
              className="w-7 h-7"
            >
              <path d="M19.11 17.62c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.47-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.12-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44 0 1.44 1.04 2.83 1.18 3.02.15.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.55-.34z" />
            </svg>
          </div>
  
        </div>
      </button>
    );
  }
  