import LoginPage from "./pages/LoginPage";
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/Home";
import NoPage from "./pages/NoPage";

function App() {

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
