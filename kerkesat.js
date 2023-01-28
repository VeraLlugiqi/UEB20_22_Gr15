// darg and drop me perdorim te objekteve

const dragElement = document.getElementById("drag-element");
const dropElement = document.getElementById("drop-element");

const dragObject = {
    id: dragElement.id,
    data: "SUKSES!"
};

function drag(event) {
    event.dataTransfer.setData("SUKSES!", JSON.stringify(dragObject));
}

function dragEnd(event) {
    dragObject.id = "";
    dragObject.data = "";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = JSON.parse(event.dataTransfer.getData("SUKSES!"));
    dropElement.innerHTML = "Validimi u krye:  " + dragObject.data;
}

let studentet = [
    {id : 12345678, Konvikti : 3 , Ankesa : true },
    {id : 12345679, Konvikti : 2 , Ankesa : false },
    {id : 12345689, Konvikti : 1 , Ankesa : true },
    {id : 12345688, Konvikti : 7 , Ankesa : true },
    {id : 12345687, Konvikti : 5 , Ankesa : false },
    {id : 12345699, Konvikti : 4 , Ankesa : true },
    {id : 12345776, Konvikti : 8 , Ankesa : true },
    {id : 12345778, Konvikti : 6 , Ankesa : false },
    {id : 12345658, Konvikti : 2 , Ankesa : true }
];
console.log(studentet);

// Duke perdorur filter gjejm studentin me id te caktuar, ky funksion fillon ekzekutimin pas 5 sekondave 

function GjejStudentin() {

    console.log("Filloj kerkimi studentit");
    
    let student = studentet.filter(function(s) {
        return s.id === 12345678;
    });
    console.log(student);

    console.log(" Studenti u gjet");

  }

  setTimeout(GjejStudentin, 5000);

  // njehi studentet qe kane plotesuar ankesen 

  let JaneAnkuar = studentet.filter(s => s.Ankesa === true).reduce((acc) => acc + 1, 0);
  console.log("Jane ankuar gjithsej : " + JaneAnkuar + " studente");

  //Gjeni konviktet nga te cilet ka ankesa
  let AnkesaNgaKonvikti = studentet.filter(s => s.Ankesa === true).map(s => s.Konvikti);
console.log("Ankesat jane nga konviktet : " + AnkesaNgaKonvikti.sort(function(a, b) {return a - b}));

// forEach si shembull i call back funcion, me shume preferohet map per shkak te kohes se ekzekutimit me te shkurter
console.log("Studentet e regjistruar :") 
studentet.forEach(student => console.log(student.id));



class Personeli{
    constructor(emri,mbiemri,pozita){
        this.emri = emri;
        this.mbiemri = mbiemri;
        this.pozita = pozita;
    }
    printo(){
        console.log(this.emri + " " + this.mbiemri + "  " + this.pozita);
    }
}

var personeli1 = new Personeli("Fatmir","Sfishta" , "Drejtor i pergjithshem");
personeli1.printo();

var personeli2  = new Personeli("Drita","Rama" , "Zevendes-drejtoreshe");
personeli2.printo();

var personeli3  = new Personeli("Granit","Shala" , "Recepsionist");
personeli3.printo();


let Pagesat = [
    {id : 12345678, ShumaPaguar : 20 },
    {id : 12345679, ShumaPaguar : 35 },
    {id : 12345689, ShumaPaguar : 35 },
    {id : 12345688, ShumaPaguar : 35 },
    {id : 12345687, ShumaPaguar : 20 },
    {id : 12345699, ShumaPaguar : 35 },
    {id : 12345776, ShumaPaguar : 35 },
    {id : 12345778, ShumaPaguar : 20 },
    {id : 12345778 },
    {id : 12345658, ShumaPaguar : 35 }
];
console.log(Pagesat);

var x, y, test, obj;
x = Pagesat;
y = JSON.stringify(x);
localStorage.setItem("StudentetQeKanePaguar : ", y); // ne file StudentetQeKanePaguar e ruajm Pagesat por si string
// eshte perdor stringify ne vend te toSTRING() pasi qe e kemi perdor ne ushtrime perodret edhe set qe eshte kerkese(rreshti 126 - setItem) 
console.log(y);



// match and replace edhe pse not recomended

let matches = y.match(/20/g);
console.log(matches);


let replaced = y.replace(/20/g, "30");
Pagesat = JSON.parse(replaced);

console.log(Pagesat);


// Gjeje studentet qe pagesen e kane NaN dmth nuk kane perfunduar pagesen 

let NaNValue = Pagesat.filter(function(p) { return isNaN(p.ShumaPaguar); });
console.log("Studentet qe nuk kane kryer pagesen :", NaNValue);





