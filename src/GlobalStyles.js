import { createGlobalStyle } from "styled-components";
import NewFont from "./Fonts/bpg_nino_mtavruli_normal.ttf";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Geo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #ffffff;
    overflow-x: hidden;
  }

  @font-face {
    font-family: 'Geo';
    src: url(${NewFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  /* Modern scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #e76621;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #d55a1a;
  }

  /* Selection styling */
  ::selection {
    background-color: #e76621;
    color: white;
  }

  /* Focus styles for accessibility */
  *:focus {
    outline: 2px solid #e76621;
    outline-offset: 2px;
  }

  /* Smooth transitions for interactive elements */
  button, a, input, textarea {
    transition: all 0.3s ease;
  }

  /* Image optimization */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Container max-width for better readability */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Utility classes */
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }
  
  .mb-1 { margin-bottom: 0.5rem; }
  .mb-2 { margin-bottom: 1rem; }
  .mb-3 { margin-bottom: 1.5rem; }
  .mb-4 { margin-bottom: 2rem; }
  .mb-5 { margin-bottom: 3rem; }

  .mt-1 { margin-top: 0.5rem; }
  .mt-2 { margin-top: 1rem; }
  .mt-3 { margin-top: 1.5rem; }
  .mt-4 { margin-top: 2rem; }
  .mt-5 { margin-top: 3rem; }

  /* Animation keyframes */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out;
  }

  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-slideInLeft {
    animation: slideInLeft 0.6s ease-out;
  }

  .animate-slideInRight {
    animation: slideInRight 0.6s ease-out;
  }
`;

export default GlobalStyles;
