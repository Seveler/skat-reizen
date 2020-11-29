function Bubenanzahl() {
     var Farbe = 0;
     /*document.getElementById("Bubentext").innerHTML = document.getElementById("Kreuz").checked;*/
     
     if (document.getElementById("Kreuz").checked)
          Farbe = 12;
     if (document.getElementById("Pik").checked)
          Farbe = 11;
     if (document.getElementById("Herz").checked)
          Farbe = 10;
     if (document.getElementById("Karo").checked)
          Farbe = 9;
     if (document.getElementById("Grand").checked)
          Farbe = 24;

     if (Farbe != 0) {
          var zustand = document.getElementById("Kreuzbube").checked;

          if (document.getElementById("Pikbube").checked == zustand)
               if (document.getElementById("Herzbube").checked == zustand)
                    if (document.getElementById("Karobube").checked == zustand)
                         document.getElementById("Bubentext").innerHTML = 5 * Farbe;
                    else
                         document.getElementById("Bubentext").innerHTML = 4 * Farbe;
               else
                    document.getElementById("Bubentext").innerHTML = 3 * Farbe;
          else
               document.getElementById("Bubentext").innerHTML = 2 * Farbe;
     }
     else
          document.getElementById("Bubentext").innerHTML = "Gib deine gew\u00fcnschte Spielfarbe an!";
     }
          
