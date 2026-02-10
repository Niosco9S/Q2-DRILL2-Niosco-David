
function calculate() {
   let rad = document.getElementById("rad").value;
    let area = (Number(rad) * Number(rad))  * Math.PI
    document.getElementById("SurfaceArea").innerHTML = "The answer is " + area;
}