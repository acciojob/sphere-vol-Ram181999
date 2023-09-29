function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	const radi = document.getElementsByTagName("input")[0];
  const cal = document.getElementsByTagName("input")[1];

  const radius =radi.value;

  const res =(4/3*(Math.PI)*radius*radius*radius).toFixed(4);

  cal.value=res;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
