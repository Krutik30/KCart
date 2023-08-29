import { Button, Card, CardContent, CardHeader, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";


export default function RegisterPage(){

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);


    function handleSubmit() {
        throw new Error("Function not implemented.");
    }

    return (
        <Card

        >
            <CardHeader title="Login Page" />
            <CardContent>
                <Stack direction='column' spacing={1}>
                    <TextField
                        id="email"
                        label="Email id"
                        variant="filled"
                    />
                    <TextField
                        required
                        id="user_name"
                        label="User Name"
                        variant="filled"
                    />
                    <TextField
                        required
                        id="password"
                        label="PassWord"
                        type={showPassword ? "text" : "password"}
                        variant="filled"
                        InputProps={{ // <-- This is where the toggle button is added.
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={()=>{
                            handleSubmit()
                        }}
                    >
                        Register
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    )
}