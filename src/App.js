import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
