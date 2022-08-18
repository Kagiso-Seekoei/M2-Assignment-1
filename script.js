//a)
console.log("My name is Kagiso Seekoei, a student from the Centeral University of Technology and my Github username is Kagiso-Seekoei.");


//b)
let randomNumber = Math.floor(Math.random() * 13);

     switch (randomNumber) {
      	  case 0: 
                console.log("Best category for 2022: Best Consumer Solution");
      	        break;
      	  case 1: 
                console.log("Best category for 2022: Best Enterprise Solution");
      	        break;      
      	  case 2: 
                console.log("Best category for 2022: Most Innovative Solution");
      	        break;
      	  case 3: 
                console.log("Best category for 2022: Best Gaming Solution");
      	        break;
      	  case 4: 
                console.log("Best category for 2022: Best Health Solution");
      	        break;
      	  case 5: 
                console.log("Best category for 2022: Best Agricultural Solution");
      	        break;
      	  case 6: 
                console.log("Best category for 2022: Best Educational Solution");
      	        break;
      	  case 7: 
                console.log("Best category for 2022: Best Financial Solution");
      	        break;
      	  case 8: 
                console.log("Best category for 2022: Best Hackathon Solution");
      	        break;
      	  case 9: 
                console.log("Best category for 2022: Best 'South African' Solution");
      	        break;
      	  case 10: 
                console.log("Best category for 2022: Best Campus Cup Solution");
      	        break;
      	  case 11: 
                console.log("Best category for 2022: Best African Solution");
      	        break;
     	  default:
     	        console.log("Couldn't roll the dice.. sorry");            	              	              	              	              	              	              	              	        
     }

//c)

        function saveStaticDataToFile() {
        	var blob = new Blob(["Best Campus Cup 2021: UniWise\n Developer: OGO Studio\n Category: Education\n Institution represented: UJ"],
        		{type: "text/plain;charset=utf-8"});
        	saveAs(blob, "static.txt");
        }

