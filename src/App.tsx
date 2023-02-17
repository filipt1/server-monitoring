import "./App.css";
import CpuUsage from "./CpuUsage";
import DiskUsage from "./DiskUsage";

function App() {
  return (
    <div className="App">
      <CpuUsage />
      <DiskUsage />
    </div>
  );
}

export default App;
