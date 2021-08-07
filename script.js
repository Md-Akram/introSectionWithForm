const form = document.getElementById('form')
const fName = document.getElementById('fname')
const lName = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  check()
})

function check() {
  const fNameValue = fName.value.trim()
  const lNameValue = lName.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()

  if (fNameValue === '') {
    setErrorFor(fName, 'First name cannot be empty')
  } else {
    setNothingFor(fName)
  }

  if (lNameValue === '') {
    setErrorFor(lName, 'Last name cannot be empty')
  } else {
    setNothingFor(lName)
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be empty')
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid')
  } else {
    setNothingFor(email)
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty')
  } else {
    setNothingFor(password)
  }
}

function setErrorFor(input, message) {
  const formGrp = input.parentElement
  const small = formGrp.querySelector('small')

  formGrp.classList = 'form-grp error'
  small.innerText = message
}

function setNothingFor(input) {
  const formGrp = input.parentElement
  formGrp.classList = 'form-grp'
}

function checkEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}
