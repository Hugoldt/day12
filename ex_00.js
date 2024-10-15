function myFetch() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Erreur:", error));
  }
  
  myFetch();