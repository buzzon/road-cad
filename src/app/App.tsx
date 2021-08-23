import './App.css';
import React, { Suspense } from "react";

function App() {
  return (
    <React.StrictMode>
      <Suspense fallback={null}>
        <div className="App">
          <header className="App-header"></header>
        </div>
      </Suspense>
    </React.StrictMode>
  );
}

export default App;