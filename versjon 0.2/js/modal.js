/* Når siden er ferdig loada */
window.onload = function() {
    /* Hent modal vinduet inn i en variabel */
    var modal = document.getElementById('myModal');

    /* Hent knappene for hvert album inn i varabler */
    var btn1 = document.getElementById("myBtn1");
    var btn2 = document.getElementById("myBtn2");

    /* Hent lukk knappen inn i en variabel */
    var lukk = document.getElementsByClassName("close")[0];

    /* Når knappene trykkes skal modal vinduet komme opp */
    /* Knapp 1 */
    btn1.onclick = function() {
            modal.style.display = "block";
            document.getElementById("modalHead").innerHTML = "Blank Banshee - MEGA"
            document.getElementById("modalT1").innerHTML = "<p>Sporliste:</p><ol><li>BIOS</li><li>My Machine</li><li>Frozen Flame</li><li>Gunshot</li><li>Megaflora</li><li>Ecco Chamber</li><li>Holograffiti</li><li>XENOS</li><li>Sandclock</li><li>Hungry Ghost</li><li>Web Ring</li><li>Meteor Blade</li><li>JUNO</li><li>Cerulean</li><li>EXOS</li></ol>"
            document.getElementById("modalT2").innerHTML = "Sporliste: [1. Give Life Back To Music] [2. The Game Of Love] [3. Giorgio By Moroder] [4. Within] [5. Instant Crush (featuring Julian Casablancas) ] [6.Lose Yourself To Dance (featuring Pharrell Wliliams)] [7.Touch (featuring Paul Wliliams)] [8. Get Lucky (featuring Pharrell Wliliams)] [9. Beyond] [10. Motherboard] [11. Fragments Of Time (featuring Todd Edwards)] [12. Doin´ It Right (featuring Panda Bear)] [13. Contact]"
        }
        /* Knapp 2 */
        /*  btn2.onclick = function() {
              modal.style.display = "block";
              document.getElementById("modalHead").innerHTML = "TEST2"
              document.getElementById("modalT1").innerHTML = "Dette er en test2 tekst"
              document.getElementById("modalT2").innerHTML = "teksten min er fin og ren"
          } */

    /* Når lukk knappen trykkes inn skal modal sin display stli endres */
    lukk.onclick = function() {
        modal.style.display = "none";
    }

    /* Lukker modal vinduet om det trykkes noe annet sted enn modal vinduet(og lukk knappen av den grunn) */
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
