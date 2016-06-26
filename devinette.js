// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// Initialiser le nombre d'essais
var n = 0;
	
// Récupérer la valeur entrée par le joueur quand il clique sur Entrée
document.getElementById("digit").onkeypress = function(event) {
	
	if(event.keyCode === 13) {
		var userTry = Number(document.getElementById("digit").value);
		console.log(userTry);
		n++;
		
		// Définir le nombre de degrés pour faire tourner la roue en fonction du nombre de tours restant
		var rotation = n*60;

		if(userTry == solution && n <= 6){
			document.getElementById("message").innerHTML = 'Bravo ! La solution était ' + userTry + '. Vous avez trouvé en ' + n + ' essai(s)';		
			document.getElementById("replay").style.display = "block";
			document.getElementById("replay").onclick = function myFunction() {
    			location.reload();
			}
		}

		if(userTry !== solution && n > 5) {
			// C'est perdu lorsque le joueur a atteint les 6 essais sans trouver la bonne réponse 
			document.getElementById("message").innerHTML = 'Perdu... La solution était ' + solution;
			document.getElementById("replay").style.display = "block";
			document.getElementById("replay").onclick = function myFunction() {
    			location.reload();
			}
		}

		if (userTry > solution && n < 6) {
			document.getElementById("message").innerHTML = userTry + ' est trop grand';	
		} else if(userTry < solution && n < 6) {
			document.getElementById("message").innerHTML = userTry + ' est trop petit';
		}

		// Faire tourner la roue pour connaitre le nombre d'essais restant
		document.getElementById("remain").style.transform = "rotate(-" + rotation + "deg)";

		// Réinitialiser la valeur de l'input après chaque essai
		document.getElementById("digit").value = "";
	}	
}


		



	



	





