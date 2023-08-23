import LoginPage from "./pages/LoginPage"
import { Box } from '@mui/material'

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
      <LoginPage />
    </Box>
  )
}

export default App
