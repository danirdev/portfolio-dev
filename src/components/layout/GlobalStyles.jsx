export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
      
      .font-mono {
        font-family: 'Space Mono', monospace;
      }

      /* BACKGROUND GRID PATTERN */
      .bg-grid-pattern {
        background-color: #ffffff;
        background-image: 
          linear-gradient(#e5e7eb 1px, transparent 1px),
          linear-gradient(90deg, #e5e7eb 1px, transparent 1px);
        background-size: 20px 20px;
      }
      
      .animate-spin-slow {
        animation: spin 3s linear infinite;
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(180deg); }
      }
    `}</style>
  );
}
