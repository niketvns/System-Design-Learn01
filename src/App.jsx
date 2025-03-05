import { Route, Routes } from "react-router";
import {
  ComponentsPage,
  ExplorerPage,
  GamePage,
  HomePage,
  LoginPage,
  RedditPage,
} from "./pages";
import Header from "./components/Header";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Header />

      <main className="my-2 px-6 min-h-[90vh]">
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="components" element={<ComponentsPage />} />
            <Route path="reddit" element={<RedditPage />} />
          </Route>
          <Route path="explorer" element={<ExplorerPage />} />
          <Route path="games" element={<GamePage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </main>
      <footer className="bg-black/70 text-white text-center p-4">
        Made with 💖 from Niket
      </footer>
    </div>
  );
}

export default App;
