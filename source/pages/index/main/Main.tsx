// Main.tsx
import React, { useEffect } from 'react';
import defaultMain from './default-main/default-main';

interface MainProps {
  page: string;
  label: string;
}

const Main: React.FC<MainProps> = ({ page, label }) => {
  useEffect(() => {
    // Function to remove the element with specified ID and associated style tag
    const removeElements = (elementId: string, styleId: string) => {
      const element = document.getElementById(elementId);
      const style = document.getElementById(styleId);

      if (element) {
        element.remove();
        console.log(`Removed #${elementId}`);
      } else {
        console.log(`#${elementId} not found`);
      }

      if (style) {
        style.remove();
        console.log(`Removed #${styleId}`);
      } else {
        console.log(`#${styleId} not found`);
      }
    };

    // Remove the loading elements when the component mounts
    removeElements('loading-container', 'loading-style');
    console.log('//--|🠊 Main.tsx Loaded 🠈|--//');

    // Function to remove a <script> tag with specific ID after 10 seconds
    const removeScriptTag = (scriptId: string) => {
      setTimeout(() => {
        const script = document.getElementById(scriptId);
        if (script) {
          script.remove();
          console.log(`Removed #${scriptId}`);
        } else {
          console.log(`#${scriptId} not found`);
        }
      }, 10000); // 10 seconds
    };

    // Remove the <script> tag with ID 'loading-script' after 10 seconds
    removeScriptTag('loading-script');
  }, []); // Empty dependency array ensures this runs once on mount

  let block: string = 'main';
  return defaultMain(page, label, block);
};

export default Main;
