/* Når siden er ferdig loada */
window.onload = function() {
    /* Hent modal vinduet inn i en variabel */
    var modal = document.getElementById('myModal');

    /* Hent knappene for hvert album inn i varabler */
    var btn1 = document.getElementById("myBtn1");
    var btn2 = document.getElementById("myBtn2");
    var btn3 = document.getElementById("myBtn3");
    var btn4 = document.getElementById("myBtn4");
    var btn5 = document.getElementById("myBtn5");
    var btn6 = document.getElementById("myBtn6");
    var btn7 = document.getElementById("myBtn7");
    var btn8 = document.getElementById("myBtn8");
    var btn9 = document.getElementById("myBtn9");
    var btn10 = document.getElementById("myBtn10");
    var btn11 = document.getElementById("myBtn11");
    var btn12 = document.getElementById("myBtn12");

    /* Hent lukk knappen inn i en variabel */
    var lukk = document.getElementsByClassName("close")[0];

    /* Når knappene trykkes skal modal vinduet komme opp */
    /* Knapp 1 */
    btn1.onclick = function() {
            modal.style.display = "block";
            document.getElementById("modalHead").innerHTML = "Blank Banshee - MEGA";
            document.getElementById("modalT1").innerHTML = "<div><p>Sporliste:</p><ol class=\"modalList\"><li>Spor 1</li><li>Spor 2</li><li>Spor 3</li><li>Spor 4</li><li>Spor 5</li><li>Spor 6</li><li>Spor 7</li><li>Spor 8</li><li>Spor 9</li><li>Spor 10</li></ol></div";
            document.getElementById("modalT2").innerHTML = "<p>Informasjon om artisten og albumet</p>";
            document.getElementById("modalPic").innerHTML = "<img src=\"img/album/blankbanshee-mega.jpg\" alt=\"Blank Banshee - MEGA\">";
        }
        /* Knapp 2 */
    btn2.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modalHead").innerHTML = "Bon Jovi - Have a Nice Day";
        document.getElementById("modalT1").innerHTML = "<div><p>Sporliste:</p><ol class=\"modalList\"><li>Spor 1</li><li>Spor 2</li><li>Spor 3</li><li>Spor 4</li><li>Spor 5</li><li>Spor 6</li><li>Spor 7</li><li>Spor 8</li><li>Spor 9</li><li>Spor 10</li></ol></div";
        document.getElementById("modalT2").innerHTML = "<p>Informasjon om artisten og albumet</p>";
        document.getElementById("modalPic").innerHTML = "<img src=\"img/album/bonjovi-haveaniceday.jpg\" alt=\"Bon Jovi - Have a Nice Day\">";
    }

    btn3.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modalHead").innerHTML = "David-Bowie - Space Oddity";
        document.getElementById("modalT1").innerHTML = "<div><p>Sporliste:</p><ol class=\"modalList\"><li>Spor 1</li><li>Spor 2</li><li>Spor 3</li><li>Spor 4</li><li>Spor 5</li><li>Spor 6</li><li>Spor 7</li><li>Spor 8</li><li>Spor 9</li><li>Spor 10</li></ol></div";
        document.getElementById("modalT2").innerHTML = "<p>Informasjon om artisten og albumet</p>";
        document.getElementById("modalPic").innerHTML = "<img src=\"img/album/davidbowie-spaceoddity.jpg\" alt=\"David Bowie - Space Oddity\">";
    }
    btn4.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modalHead").innerHTML = "Don Broco - Automatic";
        document.getElementById("modalT1").innerHTML = "<div><p>Sporliste:</p><ol class=\"modalList\"><li>Spor 1</li><li>Spor 2</li><li>Spor 3</li><li>Spor 4</li><li>Spor 5</li><li>Spor 6</li><li>Spor 7</li><li>Spor 8</li><li>Spor 9</li><li>Spor 10</li></ol></div";
        document.getElementById("modalT2").innerHTML = "<p>Informasjon om artisten og albumet</p>";
        document.getElementById("modalPic").innerHTML = "<img src=\"img/album/donbroco-automatic.jpg\" alt=\"Don Broco - Automatic\">";
    }
    btn5.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modalHead").innerHTML = "Architects - All Our Gods Have Abandoned Us";
        document.getElementById("modalT1").innerHTML = "<div><p>Sporliste:</p><ol class=\"modalList\"><li>Spor 1</li><li>Spor 2</li><li>Spor 3</li><li>Spor 4</li><li>Spor 5</li><li>Spor 6</li><li>Spor 7</li><li>Spor 8</li><li>Spor 9</li><li>Spor 10</li></ol></div";
        document.getElementById("modalT2").innerHTML = "<p>Informasjon om artisten og albumet</p>";
        document.getElementById("modalPic").innerHTML = "<img src=\"img/album/architects-aoghau.jpg\" alt=\"Architects - All Our Gods Have Abandoned Us\">";
    }
    btn6.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modalHead").innerHTML = "Foo Fighters - Echoes, Silence, Patience & Grace";
        document.getElementById("modalT1").innerHTML = "<div><p>Sporliste:</p><ol class=\"modalList\"><li>Spor 1</li><li>Spor 2</li><li>Spor 3</li><li>Spor 4</li><li>Spor 5</li><li>Spor 6</li><li>Spor 7</li><li>Spor 8</li><li>Spor 9</li><li>Spor 10</li></ol></div";
        document.getElementById("modalT2").innerHTML = "<p>Informasjon om artisten og albumet</p>";
        document.getElementById("modalPic").innerHTML = "<img src=\"img/album/foofighters-espg.jpg\" alt=\"Foo Fighters - Echoes, Silence, Patience & Grace\">";
    }
    btn7.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modalHead").innerHTML = "Metallica - Ride the Lightning";
        document.getElementById("modalT1").innerHTML = "<div><p>Sporliste:</p><ol class=\"modalList\"><li>Spor 1</li><li>Spor 2</li><li>Spor 3</li><li>Spor 4</li><li>Spor 5</li><li>Spor 6</li><li>Spor 7</li><li>Spor 8</li><li>Spor 9</li><li>Spor 10</li></ol></div";
        document.getElementById("modalT2").innerHTML = "<p>Informasjon om artisten og albumet</p>";
        document.getElementById("modalPic").innerHTML = "<img src=\"img/album/metallica-ridethelightning.jpg\" alt=\"Metallica - Ride the Lightning\">";
    }
    btn8.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modalHead").innerHTML = "Miles Davis - Kind of Blue";
        document.getElementById("modalT1").innerHTML = "<div><p>Sporliste:</p><ol class=\"modalList\"><li>Spor 1</li><li>Spor 2</li><li>Spor 3</li><li>Spor 4</li><li>Spor 5</li><li>Spor 6</li><li>Spor 7</li><li>Spor 8</li><li>Spor 9</li><li>Spor 10</li></ol></div";
        document.getElementById("modalT2").innerHTML = "<p>Informasjon om artisten og albumet</p>";
        document.getElementById("modalPic").innerHTML = "<img src=\"img/album/milesdavis-kindofblue.jpg\" alt=\"Miles Davis - Kind of Blue\">";
    }
    btn9.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modalHead").innerHTML = "Nirvana - Nevermind";
        document.getElementById("modalT1").innerHTML = "<div><p>Sporliste:</p><ol class=\"modalList\"><li>Spor 1</li><li>Spor 2</li><li>Spor 3</li><li>Spor 4</li><li>Spor 5</li><li>Spor 6</li><li>Spor 7</li><li>Spor 8</li><li>Spor 9</li><li>Spor 10</li></ol></div";
        document.getElementById("modalT2").innerHTML = "<p>Informasjon om artisten og albumet</p>";
        document.getElementById("modalPic").innerHTML = "<img src=\"img/album/nirvana-nevermind.jpg\" alt=\"Nirvana - Nevermind\">";
    }
    btn10.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modalHead").innerHTML = "Pink Floyd - The Wall";
        document.getElementById("modalT1").innerHTML = "<div><p>Sporliste:</p><ol class=\"modalList\"><li>Spor 1</li><li>Spor 2</li><li>Spor 3</li><li>Spor 4</li><li>Spor 5</li><li>Spor 6</li><li>Spor 7</li><li>Spor 8</li><li>Spor 9</li><li>Spor 10</li></ol></div";
        document.getElementById("modalT2").innerHTML = "<p>Informasjon om artisten og albumet</p>";
        document.getElementById("modalPic").innerHTML = "<img src=\"img/album/pinkfloyd-thewall.jpg\" alt=\"Pink Floyd - The Wall\">";
    }
    btn11.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modalHead").innerHTML = "Daft Punk - Random Access Memories";
        document.getElementById("modalT1").innerHTML = "<div><p>Sporliste:</p><ol class=\"modalList\"><li>Spor 1</li><li>Spor 2</li><li>Spor 3</li><li>Spor 4</li><li>Spor 5</li><li>Spor 6</li><li>Spor 7</li><li>Spor 8</li><li>Spor 9</li><li>Spor 10</li></ol></div";
        document.getElementById("modalT2").innerHTML = "<p>Informasjon om artisten og albumet</p>";
        document.getElementById("modalPic").innerHTML = "<img src=\"img/album/daftpunk-ram.jpg\" alt=\"Daft Punk - Random Access Memories\">";
    }
    btn12.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modalHead").innerHTML = "The Jimi Jendrix Experience - Are You Experienced";
        document.getElementById("modalT1").innerHTML = "<div><p>Sporliste:</p><ol class=\"modalList\"><li>Spor 1</li><li>Spor 2</li><li>Spor 3</li><li>Spor 4</li><li>Spor 5</li><li>Spor 6</li><li>Spor 7</li><li>Spor 8</li><li>Spor 9</li><li>Spor 10</li></ol></div";
        document.getElementById("modalT2").innerHTML = "<p>Informasjon om artisten og albumet</p>";
        document.getElementById("modalPic").innerHTML = "<img src=\"img/album/thejimihendrixexperience-areyouexperienced.jpg\" alt=\"The Jimi Jendrix Experience - Are You Experienced\">";
    }

    /* Når lukk knappen trykkes inn skal modal sin display stil endres */
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
