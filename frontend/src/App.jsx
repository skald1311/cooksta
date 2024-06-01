import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import { AuthProvider } from "./features/authentication/AuthContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import Post from "./pages/Post";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="feed" />} />
              <Route path="feed" element={<Feed />} />
              <Route path="profile/:username" element={<Profile />} />
              <Route path="post" element={<CreatePost />} />
              <Route path="post/:postID" element={<Post />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </DarkModeProvider>
  );
}

export default App;
