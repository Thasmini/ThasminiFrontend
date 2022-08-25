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
    navigate("/pets/"+ id);
  }


  return (
    <Grid container>
      <Grid item xs={12}>
      <div className="topnav">
  <a className="active" href="">=</a>
  <a href="/">Home</a>
  <a href="/news">News</a>
  <a href="/pets">Pets</a>
  <a href="/contact">Contact</a>
  <a href="/about">About</a>
  <a href="/login">Login</a>
</div>

<div style={{padding:"16px"}}>
</div>

        <ul>
          <Container maxWidth="xl" sx={{ bgcolor: "#fff0f5" }}>
            <h1 style={{fontSize: "100px", textAlign: "center"}}>Adopt Pets</h1>
        <p style={{textAlign: "center"}}>
Did you know that over 1,000 people per hour run a search right here looking to adopt a pet? <br /> 
Pet adoption is quickly becoming the preferred way to find a new dog or cat, and rightly so, there are many benefits to adopting a pet. <br />
 Pet adoption fees are usually much lower than buying from a breeder. You’re also likely to find a pet who’s already learned a few things. <br />
  Adoptable pets are often already housetrained, good with kids, and do well with other pets.
  <br /> And don’t forget the wonderful feeling you get from saving a life!</p>
            {pets.map((item, index) => (
              <p key={index}>
                <Box sx={{ bgcolor: "##876ebc", height: "10vh" }} /> <h3 style = {{color:"red", backgroundColor: "white"}}>{item.id}</h3>
                <br />
                <img
                  src="https://www.playfulpaws.com.au/wp-content/uploads/2017/12/PAWS-ICON.png"
                  alt=""
                />
                <br /> ----------------------------------------- <br />
               <h2>{item.name} </h2> 
              Breed:  {item.breed} <br />
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
