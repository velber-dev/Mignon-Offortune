import ReactDOM from "react-dom/client";
import App from "./components/app/App";

const rootElement = document.getElementById("app-root") as HTMLElement,
    root = ReactDOM.createRoot(rootElement);

root.render(<App />);
