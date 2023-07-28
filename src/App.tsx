import { ProtectedLayout } from "./components/ProtectedLayout";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedLayout>
                <h2>Esse é o componente profile!</h2>
              </ProtectedLayout>
            }
            path="/profile"
          />
          <Route path="/login" />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
