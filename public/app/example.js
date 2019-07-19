$.post(
  "/api/data",
  data,
  function(response) {
    console.log("ERFOLG!");
    console.log(response);
  },
  "json"
);
