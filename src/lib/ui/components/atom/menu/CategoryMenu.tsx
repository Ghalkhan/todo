import {
  FormControl,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export function CategoryMenu() {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <FormControl id="form-control" sx={{ width: "17.375rem", heigh: "2rem" }}>
      <Select
        id="select"
        displayEmpty
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <Grid container gap={1}>
                <Image
                  width={20}
                  height={20}
                  alt="category-svg"
                  src="svgs/category.svg"
                />
                <Typography>Category</Typography>
              </Grid>
            );
          }

          return selected.join(", ");
        }}
      >
        <MenuItem disabled value="">
          <em>Categories</em>
        </MenuItem>
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
