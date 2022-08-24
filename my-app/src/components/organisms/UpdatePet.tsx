import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PetService, { Pet } from "../../service/PetService";
import { useEffect, useState } from "react";
import React from "react";

function UpdatePet() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [onePet, setOnePet] = useState<Pet>();

  const fetchOnePet = async () => {
    PetService()
      .getOnePet(id)
      .then((data) => {
        setOnePet(data);
      });
  };

  useEffect(() => {
    fetchOnePet();
  }, []);

  const formik = useFormik({
    initialValues: {
      id: id,
      name: onePet?.name,
      age: onePet?.age,
      breed: onePet?.breed,
      url: onePet?.url,
      gender: onePet?.gender,
    },

    onSubmit: (values) => {
      if (
        !(
          values &&
          values.age &&
          values.breed &&
          values.url &&
          values.gender &&
          values.name
        )
      ) {
        return;
      }

      const updatedPet = PetService()
        .updatePet(
          String(id),
          values.age,
          values.breed,
          values.url,
          values.gender,
          values.name
        )
        .then((data) => {
          navigate("/pets/" + data.id);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  function navigateCreate() {
    navigate("/pets/" + id);
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <ul>
          <Container maxWidth="sm" sx={{ bgcolor: "#876ebf" }}>
            <h1>Edit Pet</h1>

            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Candy"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? <div>{formik.errors.name}</div> : null}
              <br />
              <label htmlFor="age">Age: </label>
              <input
                id="age"
                name="age"
                type="text"
                placeholder="18 Months"
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
                placeholder="German Shepherd"
                onChange={formik.handleChange}
                value={formik.values.breed}
              />
              {formik.errors.breed ? <div>{formik.errors.breed}</div> : null}
              <br />
              <label htmlFor="url">Image: </label>
              <input
                id="url"
                name="url"
                type="text"
                placeholder="..."
                onChange={formik.handleChange}
                value={formik.values.url}
              />
              {formik.errors.url ? <div>{formik.errors.url}</div> : null}
              <br />
              <label htmlFor="gender">Gender: </label>
              <input
                id="gender"
                name="gender"
                type="text"
                placeholder="Male"
                onChange={formik.handleChange}
                value={formik.values.gender}
              />
              {formik.errors.gender ? <div>{formik.errors.gender}</div> : null}

              <br />

              <button type="submit">Save</button>
            </form>
          </Container>
        </ul>
      </Grid>
    </Grid>
  );
}

export default UpdatePet;
