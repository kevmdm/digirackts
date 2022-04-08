import { alpha, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { ChangeEventHandler } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { FC } from "react";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid #A2A2A2",
  borderRadius: "100px", //theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  flexGrow: 1,
  height: "55px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
type SearchBoxParams = {
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const SearchNFT: FC<SearchBoxParams> = ({
  placeholder = "Search...",
  onChange,
}) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        onChange={onChange}
      />
    </Search>
  );
};

export default SearchNFT;
