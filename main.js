$(function () {

    let Vypocet = {
        vyska: 180,
        vaha: 80,
        stari: 30,
        pohlavi: "zena",

        bazZena: function () {
            return 655.0955+(9.5634*this.vaha)+(1.8496*this.vyska)-(4.6756*this.stari);
        },

        bazMuz: function () {
            return  66.473 + (13.7516 * this.vaha) + (5.0033 * this.vyska) - (6.755 * this.stari);
        }
    }

    var vysledek;

    $("#vypocitej").on("click", function () {
        Vypocet.vyska = $("#vyska").val();
        Vypocet.vaha = $("#vaha").val();
        Vypocet.stari = $("#stari").val();
        Vypocet.pohlavi = $("#pohlavi").val();

        if ($("#muz").prop('checked')){
            vysledek = "Váš bazální metabolismus je: " + Math.round(Vypocet.bazMuz()) + "Kcal.";
            console.log(vysledek ,"MUZ");
            console.log(Vypocet.pohlavi);
            $("#vysledek").html(vysledek);
        }
        else {
            vysledek = "Váš bazální metabolismus je: " + Math.round(Vypocet.bazZena()) + "Kcal.";
            console.log(vysledek ,"Zena");
            $("#vysledek").html(vysledek);
        }
    })
});


