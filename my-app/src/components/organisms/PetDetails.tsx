import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import PetService, { Pet } from "../../service/PetService";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PersonsDetails() {
  const [onePet, setOnePet] = useState<Pet>();
  const navigate = useNavigate();
  const { id } = useParams();

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

  function navigateOnePet() {
    navigate("/pets/edit/"+id);
  }
  
  function handleClick() {
    PetService().deletePet(id).then(() =>
     {navigate("/pets")
    });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <ul>
          <Container maxWidth="sm" sx={{ bgcolor: "#876ebc" }}>
            <h1>Details Page</h1>

            <img
                  src="https://i.pinimg.com/236x/1d/f4/f0/1df4f0d121b142dbeaf4c236b46216d1.jpg"
                  alt=""
                />
                <br /> <button onClick={navigateOnePet}>Edit</button>
               <button onClick={handleClick}>delete</button>

          <p>Id: {onePet?.id} <br />
          Name: {onePet?.name} <br />
          Age: {onePet?.age} <br />
          Breed: {onePet?.breed} <br />
          Image:  {onePet?.url} <br />
          Gender: {onePet?.gender} <br />

          
          </p>  

          </Container>
          <Container maxWidth="sm"></Container>
        </ul>
      </Grid>
    </Grid>
  );
}

export default PersonsDetails;
