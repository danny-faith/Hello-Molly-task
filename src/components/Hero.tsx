"use client";
import { useHierarchyContext } from "@/app/context/HierarchyContext";
import SearchRounded from "@mui/icons-material/SearchRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { searchEmployees } from "../../utils/utils";

const Hero = ({ data }: { data: IHierarchyData }) => {
  const [searchValue, setSearchValue] = useState("");
  const { setHighlighted, setExpandAll } = useHierarchyContext();

  function handleSearchOnClick() {
    const foundEmployees = searchEmployees(data, searchValue);
    if (foundEmployees && foundEmployees.length > 0) {
      setHighlighted(foundEmployees);
      setExpandAll(true);
      return;
    }
    setExpandAll(false);
    setHighlighted([]);
  }

  const SearchButton = (
    <Button onClick={handleSearchOnClick} sx={{ px: 4 }}>
      Search
    </Button>
  );

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchValue(value);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    const { code } = e.nativeEvent;

    if (code === "Enter") {
      handleSearchOnClick();
    }
  };

  return (
    <Box
      className="flex flex-col items-center justify-between py-14 md:py-52 lg:py-60"
      sx={{
        backgroundImage: "url(/hero_background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper sx={{ padding: 2 }}>
        <Input
          size="medium"
          startAdornment={<SearchRounded />}
          endAdornment={SearchButton}
          onChange={handleSearchOnChange}
          onKeyDown={handleOnKeyDown}
          name="search"
        />
      </Paper>
    </Box>
  );
};

export { Hero };
