import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "atropos/css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
	</Router>
);
