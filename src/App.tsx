import { Toaster } from "react-hot-toast";
import "./App.css";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="bg-[#131414] text-white   ">
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{
          top: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 3000,

          style: {
            background: "#FF000080",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid #27272a",
            padding: "16px",
          },

          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },

          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <AppRouter />
    </div>
  );
}

export default App;
