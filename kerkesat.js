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

// Duke perdorur filter gjejm studentin me id te caktuar, nese vonon me shum se 5 sekonda ky funksion permes timeOut perjashtohet

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



