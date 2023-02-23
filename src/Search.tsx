import { Box, TextField } from "@mui/material";

function Search({ value, handler }: any) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handler(event.target.value);
        }}
        fullWidth
        label="Search"
        id="search"
      />
    </Box>
  );
}

export default Search;
