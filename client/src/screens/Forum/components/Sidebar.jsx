import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggle } from "../context/sidebarSlice";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = window.location.pathname;
  const open = useSelector((state) => state.sidebar.open);
  const dispatch = useDispatch();
  
}