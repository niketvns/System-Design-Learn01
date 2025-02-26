import { Route, Routes } from "react-router";
import {
  AboutPage,
  AccordionPage,
  HomePage,
  LoginPage,
  ProfilePage,
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
            <Route path="profile" element={<ProfilePage />} />
            <Route path="reddit" element={<RedditPage />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="accordion" element={<AccordionPage />} />
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
