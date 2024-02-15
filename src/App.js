import './index.css';
import {DarkThemeToggle, Flowbite} from 'flowbite-react';
import React from "react";

function App(props) {
  return (
      <Flowbite>
          <DarkThemeToggle/>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
      </Flowbite>
  );
}

export default App;
