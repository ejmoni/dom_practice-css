// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUsername = document.querySelector('#username')
let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')

let misPassword = document.querySelector('.mismatch-message')
let elFirstPassword = document.querySelector('#password')
let elSecondPassword =  document.querySelector('#password-retype')


elInputUsername.onkeyup = function(){
  console.log(elInputUsername.value)

  if(isMoreThan4Length(elInputUsername.value)){
    //성공매세지가 보여야함
    elSuccessMessage.classList.remove('hide')
    //실패메세지가 가려져야함
    elFailureMessage.classList.add('hide')
  }
  else{
    //성공메세지가 가려져야함
    elSuccessMessage.classList.add('hide')
    //실패메세지가 보여야함
    elFailureMessage.classList.remove('hide')
  }
}

elSecondPassword.onkeyup = function(){
  console.log(elSecondPassword.value)

  if(isMatch(elFirstPassword.value,elSecondPassword.value)){
    misPassword.classList.add('hide')
  }
  else{
    misPassword.classList.remove('hide')
  }
}


function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length>=4
}

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2
}
