//code
const addTeamButtons = () => {
    //grabs the info from api
    fetch("http://localhost:3000/nflTeams")
    //converts info into readable format 
    .then (response => response.json())
    //takes the info runs a for each on it 
    .then (footballTeams=>
    footballTeams.forEach(team => {
        //create a p in html 
        const teamPlaced = document.createElement("p");
        //makes teamPlaced text content team.name
        teamPlaced.textContent = team.name;
        //appends team name into sidenav
        document.querySelector(".sidenav").appendChild(teamPlaced)
        //decalres onClick
        const onClick = () => {
            // grabs logo
            const logoContainer = document.querySelector(".logo");
            //creates element "img" in hmtl 
            const logoPlaced = document.createElement("img");
            //if statment if logo container has child nodes remove it specifically the first 1
            if (logoContainer.hasChildNodes()) {
                logoContainer.removeChild(logoContainer.children[0]);
              }
            //connects source of picture to logoPlaced
            logoPlaced.src = team.Logo
            createOnHoverElement(logoPlaced, team.name, team.conference, team.lastWon,)
            // appends logoPlaced to img in html
            logoContainer.append(logoPlaced);        
        }
         //add event listener to onclick
        teamPlaced.addEventListener("click", onClick)
        
    }))

} 

//created a variable that takes in 4 arguements anything name conference and lastWon
const createOnHoverElement = (anything, name, conference, lastWon) => {
// add event listener mouse over to anything which is our team logo generated in the middle of the page
    anything.addEventListener("mouseover", (event) => {
        //creates a p element declared as placedinfo
        const placedInfo = document.createElement("p")
        //creates a variable  called team info which selects div id  #teaminfo in html
        const teamInfo = document.querySelector("#teaminfo")
        // used if statement if teaminfo has a childnode it will remove it specifically teaminfo.children[0]<-which is the first one 
        if (teamInfo.hasChildNodes()) {
            teamInfo.removeChild(teamInfo.children[0]);
          }
        //we need to place info into the p element
        placedInfo.append(name, conference, lastWon)
        //append it to the placedinfo 
      document.querySelector("#teaminfo").append(placedInfo)
     // give example arguement to what the ode is doing and what you want it to be doing 
    })
}

//envokes our funtion 
addTeamButtons()
// if key down is pressed show toasty in div id toasty
// make it appear after a certain time wait ?

//add key down event listener to the whole document html 
document.addEventListener("keydown",function(e){
//grabbed element id which is bottom left image in html
    const image = document.getElementById('bottomLeftImage');

    //set timout for the when image.style.display executes
    setTimeout(() => {
    // made it display when key is press 
        image.style.display = "block"
    }, 3000);
  
    // }
    // console.log(e.keyCode);
})