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
  const { setHighlighted } = useHierarchyContext();

  function handleSearchOnClick() {
    const foundEmployees = searchEmployees(data, searchValue);
    if (foundEmployees) {
      setHighlighted(foundEmployees);
      return;
    }
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

  return (
    <Box
      className="flex flex-col items-center justify-between py-14 md:py-52 lg:py-60"
      sx={{
        backgroundImage:
          "url(https://upload.wikimedia.org/wikipedia/commons/b/b7/Download_Thousands_Of_Free_Stunning_Stock_Photos._%2824031439750%29.jpg)",
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
        />
      </Paper>
    </Box>
  );
};

export { Hero };
