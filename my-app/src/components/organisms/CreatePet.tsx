import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PetService from "../../service/PetService";

function CreatePet() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      breed: "",
      url: "",
      gender: "",
      status: "",
    },

    onSubmit: (values) => {
      const newPet = PetService()
        .createPet({
          id: 0,
          name: values.name,
          age: values.age,
          breed: values.breed,
          url: values.url,
          gender: values.gender,
        })
        .then((data) => {
          console.log(data);
          navigate("/pets/" + data.id);
        }).catch((error) => {
          console.error(error);
        });
    },
  });

  function navigateCreate() {
    navigate("/pets/add");
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <ul>
          <Container maxWidth="sm" sx={{ bgcolor: "#876ebc" }}>
            <h1>Add Pets</h1>

            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? <div>{formik.errors.name}</div> : null}
              <br />
              <label htmlFor="email">age: </label>
              <input
                id="age"
                name="age"
                type="text"
                placeholder="jane@acme.com"
                onChange={formik.handleChange}
                value={formik.values.age}
              />
              {formik.errors.age ? <div>{formik.errors.age}</div> : null}
              <br />
              <label htmlFor="breed"> Breed: </label>
              <input
                id="breed"
                name="breed"
                type="text"
                placeholder="Bulldog"
                onChange={formik.handleChange}
                value={formik.values.breed}
              />
              {formik.errors.breed ? (
                <div>{formik.errors.breed}</div>
              ) : null}
              <br />
              <label htmlFor="url">Image: </label>
              <input
                id="url"
                name="url"
                type="text"
                placeholder="64384"
                onChange={formik.handleChange}
                value={formik.values.url}
              />
              {formik.errors.url ? (
                <div>{formik.errors.url}</div>
              ) : null}
              <br />
              <label htmlFor="gender">Gender: </label>
              <input
                id="gender"
                name="gender"
                type="text"
                placeholder="China"
                onChange={formik.handleChange}
                value={formik.values.gender}
              />
              {formik.errors.gender ? (
                <div>{formik.errors.gender}</div>
              ) : null}

            

              <br />
              <button type="submit">Save</button>
            </form>
          </Container>
          <Container maxWidth="sm"></Container>
        </ul>
      </Grid>
    </Grid>
  );
}

export default CreatePet;
