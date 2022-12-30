import { useEffect } from "react";

function App() {
  const sendMessageToElectron = () => {
    if (window.Main) {
      window.Main.sendMessage("Hello I'm from React World");
    }
  };

  useEffect(() => {
    window.Main.on("message", (data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <div className="w-full h-screen flex items-center justify-center">
        <button
          className="bg-red-300 px-2 py-1 text-sm rounded-md text-red-800"
          onClick={sendMessageToElectron}
        >
          heelo
        </button>
      </div>
    </div>
  );
}

export default App;
