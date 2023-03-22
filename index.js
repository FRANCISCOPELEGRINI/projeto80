var nomes=[]
function submit(){
    var nome1=
document.getElementById("name1").value;
nomes.push(nome1)

}
function show(){
    var i=nomes.join("<br>")
    document.getElementById("p1").innerHTML=i
    
}
function searching() { var s= document.getElementById("s1").value;
 var found=0; var j;
  for(j=0; j<nomes.length; j++) { if(s==nomes[j]){ found=found+1; } }
   document.getElementById("p2").innerHTML="Nome encontrado "+found+" vez(es)";
    console.log("Nome encontrado "+found+" vez(es)"); }
