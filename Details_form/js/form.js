InputHandler = (event) => {
  //console.log(event.target.id,event.target.value);
  sessionStorage.setItem(event.target.id, event.target.value);
};

SubmitHandler = (event) => {
  var form = document.getElementById("theForm");
  
    for (var i = 0; i < form.elements.length; i++) {
      if (
        form.elements[i].value === "" &&
        form.elements[i].hasAttribute("required")
      ) {
        form.elements[i].parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("active-accordion");
        break;
        return false;
      }
    }
};

/*nameInputHandler=(event)=>{
    
    sessionStorage.setItem('name',document.getElementById("name").value);
    console.log(event.target.value)
}

dateInputHandler=()=>{
    sessionStorage.setItem('date',document.getElementById("date").value);
}

genderInputHandler=()=>{
    sessionStorage.setItem('gender',document.getElementById("gender").value);
}

nationalityInputHandler=()=>{
    sessionStorage.setItem('nationality',document.getElementById("nationality").value);
}

communityInputHandler=()=>{
    sessionStorage.setItem('community',document.getElementById("community").value);
}

religionInputHandler=()=>{
    sessionStorage.setItem('religion',document.getElementById("religion").value);
}

casteInputHandler=()=>{
    sessionStorage.setItem('caste',document.getElementById("caste").value);
}

contactInputHandler=()=>{
    sessionStorage.setItem('contact',document.getElementById("contact").value);
}

emailInputHandler=()=>{
    sessionStorage.setItem('email',document.getElementById("email").value);
}

aadharInputHandler=()=>{
    sessionStorage.setItem('aadhar',document.getElementById("aadhar").value);
}

bloodInputHandler=()=>{
    sessionStorage.setItem('blood',document.getElementById("blood").value);
} */

populateDetail = () => {
  let inputs = Object.keys(sessionStorage);

  for (let id of inputs) {
    document.getElementById(id).value = sessionStorage.getItem(id);
  }
  /*document.getElementById('name').value=sessionStorage.getItem('name');
  document.getElementById('date').value=sessionStorage.getItem('date');
  document.getElementById('gender').value=sessionStorage.getItem('gender');
  document.getElementById('nationality').value=sessionStorage.getItem('nationality');
  document.getElementById('community').value=sessionStorage.getItem('community');
  document.getElementById('religion').value=sessionStorage.getItem('religion');
  document.getElementById('caste').value=sessionStorage.getItem('caste');
  document.getElementById('contact').value=sessionStorage.getItem('contact');
  document.getElementById('email').value=sessionStorage.getItem('email');
  document.getElementById('aadhar').value=sessionStorage.getItem('aadhar');
  document.getElementById('blood').value=sessionStorage.getItem('blood');*/
};
populateDetail();
