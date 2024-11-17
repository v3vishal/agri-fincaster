// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from './AuthContext';
import Login from "./components/Login";
import Home from "./components/Home";
import Weather from "./components/Weather";
import Layout from "./Layout";
import Crops from "./components/Crops";
import Reports from "./components/Reports";
import Finance from "./components/Finance";
import Register from "./components/Register";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    // Optionally, return a loading spinner or placeholder
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router basename="/agri-fincaster">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes with Layout */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/weather"
            element={
              <ProtectedRoute>
                <Layout>
                  <Weather />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/crops"
            element={
              <ProtectedRoute>
                <Layout>
                  <Crops />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <Layout>
                  <Reports />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/finance"
            element={
              <ProtectedRoute>
                <Layout>
                  <Finance />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Redirect any unknown routes to Home or a 404 page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
