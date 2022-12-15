import { Header } from "./Components/header/Header";
import { Statistics } from "./Components/Statistics/Statistics";
import TaskBar from "./Components/taskbar/TaskBar";

function App() {
  return (
    <div className="app">
      <TaskBar />
      <Header />
      <Statistics />
    </div>
  );
}

export default App;
