import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Button, 
  Menu, 
  MenuItem, 
  Paper, 
  InputBase, 
  IconButton 
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./Pages1.css";
export default function Navbar() {
    const navigate = useNavigate();
    
    // Logic بتاع منيو Categories
    const [anchorEl, setAnchorEl] = useState(null);
    const handleOpen = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <header>
            <div className="nav-container">
                {/* اللوجو يرجعك للرئيسية عند الضغط عليه */}
                <ul className="nav">
                    <li className="li1" onClick={() => navigate('/pages1')} style={{cursor:'pointer'}}>
                        Zumra
                    </li>
                </ul>

                {/* زرار التصنيفات */}
                <Button variant="outlined" onClick={handleOpen}>Categories</Button>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Python Course</MenuItem>
                    <MenuItem onClick={handleClose}>Frontend Course</MenuItem>
                </Menu>
                
                {/* بار البحث */}
                <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400, borderRadius: 5 }}>
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
                    <IconButton type="button"><SearchIcon /></IconButton>
                </Paper>

                {/* الأيقونات */}
                <div className="icon">
                    <FavoriteIcon 
                        onClick={() => navigate('/Favoritepage')} 
                        style={{ cursor: "pointer" }} 
                    />
                    <ShoppingCartIcon style={{ cursor: "pointer" }} />
                    <AccountCircleRoundedIcon style={{ cursor: "pointer" }} />
                </div>
            </div>
        </header>
    );
}