console.log("DOESA THIS EVEN FUCKING WOOOOOOOOOOOOOORK");
console.log("yes yes it does");

function main() {
  const name = document.getElementById("name").value;
  const occupation = document.getElementById("occupation").value;
  const personalityID = document.getElementById("personalityTag").value;
  const inputForm = document.getElementById("submitForm");
  console.log(`${name}, ${occupation}, ${personalityID}`);
  aThing(name, occupation, personalityID);
}

function aThing(name, occ, personalityID) {
  const villProf = {
    name: name,
    occupation: occ,
    personalityID: personalityID,
  };
  console.log(villProf);
  fetch("http://127.0.0.1:8080/submit/", {
    method: "POST",
    body: JSON.stringify(villProf),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => console.log(response));
}
