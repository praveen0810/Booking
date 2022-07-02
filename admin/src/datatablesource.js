import { Typography, Tooltip } from "@mui/material";

export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 160,
    renderCell: (params) => {
      return (
        <Tooltip title={params.row.name}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, cursor: "pointer" }}
          >
            {params.row.name}
          </Typography>
        </Tooltip>
      );
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 160,
    renderCell: (params) => {
      return (
        <Tooltip title={params.row.title}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, cursor: "pointer" }}
          >
            {params.row.title}
          </Typography>
        </Tooltip>
      );
    },
  },

  {
    field: "city",
    headerName: "City",
    width: 100,

    renderCell: (params) => {
      return (
        <Tooltip title={params.row.city}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, cursor: "pointer" }}
          >
            {params.row.city}
          </Typography>
        </Tooltip>
      );
    },
  },
  {
    field: "distance",
    headerName: "Distance",
    width: 100,
    renderCell: (params) => {
      return (
        <Tooltip title={params.row.distance}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, cursor: "pointer" }}
          >
            {params.row.distance}
          </Typography>
        </Tooltip>
      );
    },
  },

  {
    field: "cheapestPrice",
    headerName: "Price",
    width: 100,
    renderCell: (params) => {
      return (
        <Tooltip title={params.row.cheapestPrice}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, cursor: "pointer" }}
          >
            ${params.row.cheapestPrice}
          </Typography>
        </Tooltip>
      );
    },
  },
  {
    field: "address",
    headerName: "Address",
    flex: 0.25,
    minWidth: 160,
    renderCell: (params) => {
      return (
        <Tooltip title={params.row.address}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, cursor: "pointer" }}
          >
            {params.row.address}
          </Typography>
        </Tooltip>
      );
    },
  },
  {
    field: "desc",
    headerName: "Desc",
    width: 100,
    renderCell: (params) => {
      return (
        <Tooltip title={params.row.desc}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, cursor: "pointer" }}
          >
            {params.row.desc}
          </Typography>
        </Tooltip>
      );
    },
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
    renderCell: (params) => {
      return (
        <Tooltip title={params.row.type}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, cursor: "pointer" }}
          >
            {params.row.type}
          </Typography>
        </Tooltip>
      );
    },
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];
