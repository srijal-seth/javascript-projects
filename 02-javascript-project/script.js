const form = document.querySelector("form");

document.addEventListener("submit", function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  
  const result = document.querySelector("#results")
  if(height == "" || height < 0 || isNaN(height)){
    result.textContent = `Please give a valid height`
  } else if(weight == "" || weight < 0 || isNaN(weight)){
    result.textContent = `Please give a valid weight`
  } else{
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    result.innerHTML += `<span>${bmi}</span>`

    if(bmi <= 18.6){
      result.innerHTML += `<p>UnderWeight</p>`
    } else if(bmi > 18.6 && bmi <= 24.9){
      result.innerHTML += `<p>NormalWeight</p>`
    } else {
      result.innerHTML += `<p>OverWeight</p>`
    }
  }
})