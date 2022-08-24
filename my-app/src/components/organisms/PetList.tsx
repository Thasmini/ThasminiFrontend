import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import PersonsService, { Pet } from "../../service/PetService";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { useNavigate, useParams } from "react-router-dom";

function PersonsList() {
  const [pets, setPets] = useState<Pet[]>([]);
  const navigate = useNavigate();

  const fetchPersons = async () => {
    PersonsService()
      .getPets()
      .then((data) => {
        setPets(data);
        console.log(pets);
      });
    console.log(pets);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  function clickHandler(id : string) {
    navigate("/petss/"+ id);
  }
  function navigateCreate() {
    navigate("/pets/add");
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <ul>
          <Container maxWidth="sm" sx={{ bgcolor: "#cfe8fc" }}>
            <h1>Listing all pets</h1>
            <br /> <button onClick={navigateCreate}>Add Pets</button>
            {pets.map((item, index) => (
              <p key={index}>
                <Box sx={{ bgcolor: "##876ebc", height: "10vh" }} /> {item.id}
                <br />
                <img
                  src="https://i.pinimg.com/236x/1d/f4/f0/1df4f0d121b142dbeaf4c236b46216d1.jpg"
                  alt=""
                />
                <br /> ------------------------------------- <br />
                {item.name} <br /> 
                {item.age} <br />
                <button onClick={() => clickHandler(JSON.stringify(item.id))}>Details</button>{" "}
              </p>
            ))}
          </Container>
          <Container maxWidth="sm"></Container>
        </ul>
      </Grid>
    </Grid>
  );
}

export default PersonsList;
