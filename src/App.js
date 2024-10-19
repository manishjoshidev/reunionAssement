import { useEffect, useMemo, useState } from "react";
import { Container } from "@mui/material";
import "./App.css";
import { MaterialReactTable } from "material-react-table";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the public folder
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id", // Matches "id" in your data
        header: "ID",
      },
      {
        accessorKey: "name", // Matches "name" in your data
        header: "Name",
      },
      {
        accessorKey: "category", // Matches "category" in your data
        header: "Category",
      },
      {
        accessorKey: "subcategory", // Matches "subcategory" in your data
        header: "SubCategory",
      },
      {
        accessorKey: "createdAt", // Matches "createdAt" in your data
        header: "Created At",
        Cell: ({ cell }) => new Date(cell.getValue()).toLocaleString("en-GB"), // Format date
      },
      {
        accessorKey: "updatedAt", // Matches "updatedAt" in your data
        header: "Updated At",
        Cell: ({ cell }) => new Date(cell.getValue()).toLocaleString("en-GB"), // Format date
      },
      {
        accessorKey: "price", // Matches "price" in your data
        header: "Price",
      },
      {
        accessorKey: "sale_price", // Matches "sale_price" in your data
        header: "Sale Price",
      },
    ],
    []
  );

  return (
    <Container sx={{ py: 5 }}>
      <MaterialReactTable
        columns={columns}
        data={data} // Use the fetched data
        initialState={{ pagination: { pageSize: 10, pageIndex: 0 } }}
      />
    </Container>
  );
}

export default App;
