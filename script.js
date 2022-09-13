/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById('sidemainbar').style.width = "30%";
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById('sidemainbar').style.width = "0px";
}

// Esconder os paragrafos
function hidepara(){
    var weekisregular = document.getElementById('weekisregular')
    var regularweekcb = document.getElementById('regularweek')
    if (!regularweekcb.checked == true){
        weekisregular.style.display = "none";
    } else {
        weekisregular.style.display = "block"; 
    }
}


// calculos de dias e semanas para saída

function criarcalendario(){
    document.getElementById('daysperyear').innerText *= 5+6;
}

