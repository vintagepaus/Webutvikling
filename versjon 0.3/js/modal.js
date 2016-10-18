window.onload = function() {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn1 = document.getElementById("myBtn1");
    var btn2 = document.getElementById("myBtn2");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn1.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modalHead").innerHTML = "Albumtittel 1"
        document.getElementById("modalT1").innerHTML = "Rundt millenniumskiftet ble Thomas Bangalter og Guy-Manuel de Homem-Christo kongene av klubbmusikk med albumene Homework (1997) og Discovery (2001). Deretter fulgte nok en fullengder før oppmerksomheten ble rettet mot andre prosjekter, som filmmusikken til Tron: Legacy. Det skulle gå hele åtte år etter Human After All (2005), men her er Daft Punk endelig tilbake med sitt fjerde studioalbum: Random Access Memories er en varm, oppfinnsom og oppriktig hyllest til dansemusikken. Første single fra albumet var Get Lucky, en tidløs discodiamant med lekker Pharrell-falsett og genialt funky gitarspill av Nile Rodgers. Blant de øvrige gjestene på albumet finner vi Paul Williams, legenden Giorgio Moroder, Todd Edwards, Panda Bear og The Strokes-frontmann Julian Casablancas."
        document.getElementById("modalT2").innerHTML = "Sporliste: [1. Give Life Back To Music] [2. The Game Of Love] [3. Giorgio By Moroder] [4. Within] [5. Instant Crush (featuring Julian Casablancas) ] [6.Lose Yourself To Dance (featuring Pharrell Williams)] [7.Touch (featuring Paul Williams)] [8. Get Lucky (featuring Pharrell Williams)] [9. Beyond] [10. Motherboard] [11. Fragments Of Time (featuring Todd Edwards)] [12. Doin´ It Right (featuring Panda Bear)] [13. Contact]"
    }

    btn2.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modalHead").innerHTML = "TEST2"
        document.getElementById("modalT1").innerHTML = "Dette er en test2 tekst"
        document.getElementById("modalT2").innerHTML = "teksten min er fin og ren"
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
