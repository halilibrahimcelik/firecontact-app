import Wrapper from "./components/UI/Wrapper";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Wrapper />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
