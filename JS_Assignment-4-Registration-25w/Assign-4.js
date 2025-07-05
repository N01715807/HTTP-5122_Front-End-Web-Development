window.onload = function () {

const form = document.getElementById("form")
const result = document.getElementById("result")
const welcome = document.getElementById("welcome")

form.addEventListener("submit",function(event){
  event.preventDefault()

  let valid = true

  const in_fName = document.getElementById("in_fName")
  if(in_fName.value == "")
    {
      in_fName.style.border = "2px solid red"
      in_fName.focus()
      valid  = false
    }

  const in_lName = document.getElementById("in_lName")
  if(in_lName.value == "")
    {
      in_lName.style.border = "2px solid red"
      if(valid==true){in_lName.focus()}
      valid = false
    }

  const in_id = document.getElementById("in_id")
  const num = /^[Nn]\d{8}$/;
  if(!num.test(in_id.value))
    {
      in_id.style.border = "2px solid red"
      if(valid==true){in_id.focus()}
      valid = false
    }

    const in_program = document.getElementById("in_program")
    if(in_program.value == "")
    {
      in_program.style.border = "2px solid red"
      if(valid==true){in_program.focus()}
      valid = false
    }

  const selectedProject = document.querySelector('input[name="f__project"]:checked')
  
  let in_project = "";
  if(!selectedProject){
    document.getElementById("caption_project").style.backgroundColor = "red"
    valid = false
    }else{
      in_project = selectedProject.value
    }
    
    if (!valid) return;

  welcome.style.display = "none"
  form.style.display = "none"
  result.style.display = "block"
  
  document.getElementById("result__Fname").innerText = in_fName.value
  document.getElementById("result__Lname").innerText = in_lName.value
  document.getElementById("result__id").innerText = in_id.value
  document.getElementById("result__program").innerText = in_program.value
  document.getElementById("result__project").innerText = in_project
});

}