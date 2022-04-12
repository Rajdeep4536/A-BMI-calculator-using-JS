function BMI(){
    var w=document.getElementById('w').value;
    var h=document.getElementById('h').value;
    var bmi=w/(h/100*h/100);
    document.getElementById("result").innerHTML="Your BMI is" + bmi;
    }
const h = document.getElementById('h')
const w = document.getElementById('w')
result.addEventListener('calculate', (e) => {
 let messages = []
  if (h.value === '' || h.value == null) {
    messages.push('Height is required')
  }
      
  if (w.value===''|| w.value==null) {
    messages.push('Weight is required')
  }
      
})