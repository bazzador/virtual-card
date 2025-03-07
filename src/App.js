import About__me from "./components/About__me/About__me";
import Contact__me__flip__card from "./components/Contact__me__flip__card/Contact__me__flip__card";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <About__me />
      <Contact__me__flip__card />
    </div>
  );
}

export default App;
