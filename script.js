document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name === 'Enter') {
        calcul();
      }
  }, false);

function calcul(){


    var x = document.getElementById("bloc");
 
    if (x.dataset.screen === "1") {

        var km, conso, prix, litre, result;
        km = Number(document.getElementById("km").value);
        conso = Number(document.getElementById("conso").value);
        prix = Number(document.getElementById("prix").value);
        litre = km * (conso / 100);
        result = litre * prix;

        document.getElementById("result-km").innerText = km;
        document.getElementById("result-prix").innerText = result.toFixed(2) + "€";
        document.getElementById("result-litreconso").innerText = litre.toFixed(2);
        document.getElementById("result-conso").innerText = conso;
        document.getElementById("result-prixl").innerText = prix;

        document.getElementById('slider').classList.add('slidin');
        
        
        document.getElementById("but").innerText = "Revenir";
        x.dataset.screen = "2"
 
    }
    else{
        
        document.getElementById('slider').classList.remove('slidin')

        document.getElementById("but").innerText = "Calculer";
        x.dataset.screen = "1"
    }  
}