function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	const radi = document.getElementsByTagName("input")[0];
  const cal = document.getElementsByTagName("input")[1];

  const radius =radi.value;

  const res =4/3*3.14*radius*radius*radius;

  cal.value=res;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
