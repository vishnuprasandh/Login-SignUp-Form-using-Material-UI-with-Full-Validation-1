import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";




// const formvalidation = yup.object({
//   name: yup.string().required(),

//   poster: yup.string().required().min(4),

//   rating: yup.number().required().min(1).max(10),

//   summary: yup.string().required().min(20),

//   trailer: yup.string().required().min(5).url(),
// });

 function Form() {

  return (
    <div>
      <form className="add-movie-form">
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          type="text"
        />

        <TextField
          name="poster"
          label="Poster"
          variant="outlined"
          type="text"
        />

        <TextField
          name="rating"
          label="Rating"
          variant="outlined"
          type="text"
        />

        <TextField
          name="summary"
          label="Summary"
          variant="outlined"
          type="text"
        />

        <TextField
          name="trailer"
          label="trailer"
          variant="outlined"
          type="text"
        />

        <Button variant="contained" type="submit">
          Add Movie
        </Button>
      </form>
    </div>
  );
}
export default Form;