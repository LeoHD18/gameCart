var num_fifa = 0; const price_fifa =20; var total_fifa = 0;
var num_sims = 0; const price_sims = 15; var total_sims = 0;
var num_war = 0; const price_war = 50; var total_war = 0;
var num_fm = 0; const price_fm = 50; var total_fm = 0;
var num_red = 0; const price_red = 60; var total_red = 0;
var num_witcher = 0; const price_witcher= 40; var total_witcher = 0;
var total_before_tax = 0;
var total_after_tax =0;
var order ={Total:0, Name:"", Email:"", Card:"", Address:""}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const form = document.getElementById('checkout-form')
const inputCard = document.querySelector('#inputCard')
const alertTrigger = document.getElementById('submit-btn')
const summaryCard = document.querySelector('.card')
const summaryList = document.querySelector('.card > ul')

const fifa_display = document.getElementById("fifa_display");
const fm_display = document.getElementById("fm_display");
const sims_display = document.getElementById("sims_display");
const war_display = document.getElementById("war_display");
const witcher_display = document.getElementById("witcher_display");
const red_display = document.getElementById("red_display");
const cart = document.getElementById("cart");
const main_content = document.getElementById("main_content")
const button_return = document.getElementById("buttonReturn")
const input_search = document.getElementById('Search')
const game_list = document.getElementById("game_list")
const games = game_list.getElementsByClassName('card')


function increase(n){
    switch (n){
        case 1:
            num_fifa += 1;
            fifa_display.value = num_fifa;
            break;
        case 2:
            num_fm += 1;
            fm_display.value =  num_fm;
            break;
        case 3:
            num_sims += 1;
            sims_display.value = num_sims;
            break;
        case 4:
            num_war += 1;
            war_display.value = num_war;
            break;
        case 5:
            num_witcher +=1;
            witcher_display.value = num_witcher;
            break;
        case 6:
            num_red +=1;
            red_display.value = num_red;
            break;
    }
}
function decrease(n){
    switch(n){
        case 1:
            num_fifa -= 1;
            if(num_fifa < 0){
                num_fifa = 0;
            }
            fifa_display.value = num_fifa;
            break;
        case 2:
            num_fm -= 1;
            if(num_fm < 0){
                num_fm = 0;
            }
            fm_display.value = num_fm;
            break;
        case 3:
            num_sims -= 1;
            if(num_sims < 0){
                num_sims = 0;
            }
            sims_display.value = num_sims;
            break;
        case 4:
            num_war -= 1;
            if(num_war < 0){
                num_war = 0;
            }
            war_display.value = num_war;
            break;
        case 5:
            num_witcher -= 1;
            if(num_witcher < 0){
                num_witcher = 0;
            }
            witcher_display.value = num_witcher;
            break;
        case 6:
            num_red -= 1;
            if(num_red < 0){
                num_red = 0;
            }
            red_display.value = num_red;
            break;

    }
    
}


function checkout(){
    cart.classList.remove("collapse");
    main_content.classList.add("collapse");
    cartupdate();
    cartcollapse();
}

function cartreturn(){
    cart.classList.add("collapse");
    main_content.classList.remove("collapse");
    resetFilter();
}

function cartupdate(){
    total_fifa = num_fifa * price_fifa;
    total_fm = num_fm * price_fm;
    total_sims = num_sims * price_sims;
    total_war = num_war * price_war;
    total_red = num_red * price_red;
    total_witcher = num_witcher *price_witcher;
    total_before_tax = total_fifa + total_fm + total_red + total_sims + total_war + total_witcher;
    var tax = total_before_tax*0.06;
    total_after_tax = total_before_tax + tax;
    document.getElementById('quan_fifa').innerHTML = num_fifa;
    document.getElementById('total_fifa').innerHTML = num_fifa + " * " + price_fifa.toFixed(2) + "$ = " + total_fifa.toFixed(2) +"$";
    document.getElementById('quan_fm').innerHTML = num_fm;
    document.getElementById('total_fm').innerHTML = num_fm + " * " + price_fm.toFixed(2) + "$ = " + total_fm.toFixed(2) +"$";
    document.getElementById('quan_sims').innerHTML = num_sims;
    document.getElementById('total_sims').innerHTML = num_sims + " * " + price_sims.toFixed(2) + "$ = " + total_sims.toFixed(2) +"$";
    document.getElementById('quan_war').innerHTML = num_war;
    document.getElementById('total_war').innerHTML = num_war + " * " + price_war.toFixed(2) + "$ = " + total_war.toFixed(2) +"$";
    document.getElementById('quan_witcher').innerHTML = num_witcher;
    document.getElementById('total_witcher').innerHTML = num_witcher + " * " + price_witcher.toFixed(2) + "$ = " + total_witcher.toFixed(2) +"$";
    document.getElementById('quan_red').innerHTML = num_red;
    document.getElementById('total_red').innerHTML = num_red + " * " + price_red.toFixed(2) + "$ = " + total_red.toFixed(2) +"$";
    document.getElementById('total').innerHTML = total_before_tax.toFixed(2) + "$ + " + tax.toFixed(2) + "$ Tax = " + total_after_tax.toFixed(2) + "$";
    order.Total = total_after_tax.toFixed(2)+"$";
}
function cartcollapse(){
if(num_fifa == 0){
    document.getElementById('cart_fifa').classList.add("collapse");
}
else{
    document.getElementById('cart_fifa').classList.remove("collapse");
}
if(num_fm == 0){
    document.getElementById('cart_fm').classList.add("collapse");
}
else{
    document.getElementById('cart_fm').classList.remove("collapse");
}
if(num_sims == 0){
    document.getElementById('cart_sims').classList.add("collapse");
}
else{
    document.getElementById('cart_sims').classList.remove("collapse");
}
if(num_war == 0){
    document.getElementById('cart_war').classList.add("collapse");
}
else{
    document.getElementById('cart_war').classList.remove("collapse");
}
if(num_witcher == 0){
    document.getElementById('cart_witcher').classList.add("collapse");
}
else{
    document.getElementById('cart_witcher').classList.remove("collapse");
}
if(num_red == 0){
    document.getElementById('cart_red').classList.add("collapse");
}
else{
    document.getElementById('cart_red').classList.remove("collapse");
}
}


const alert =(message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `<div>${message}</div>`,
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
    
inputCard.addEventListener('input', event => {
    if(!inputCard.value) {
        return event.preventDefault()
    }
    else{
        inputCard.value = inputCard.value.replace(/-/g, "")
        let newVal = ""
        for (var i = 0, nums = 0; i < inputCard.value.length; i++){
            if(nums != 0 && nums % 4 == 0){
                newVal += "-"
            }

            newVal += inputCard.value[i]
            if(isNumeric(inputCard.value[i])){
                nums++
            }
        }
        inputCard.value = newVal
    }
})

form.addEventListener('submit', event => {
    if(!validate()){
        alertPlaceholder.innerHTML =""
            alert('<i class ="bi-exclamation-circle"></i> Something went wrong!', 'danger')
    }
    event.preventDefault()
    event.stopPropagation()
}, false)

let validate = function(){
  val = true;
  let email = document.getElementById('inputEmail4')
  let name = document.getElementById('inputName')
  let card = document.getElementById('inputCard')
  let address = document.getElementById('inputAddress')
  let city = document.getElementById('inputCity')
  let zipcode = document.getElementById('inputZip')
  let state = document.getElementById('inputState')
  let address2 = document.getElementById('inputAddress2')
 
  
  if (!email.value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )){
    email.setAttribute("class", "form-control is-invalid");
    val = false;
  }
  else{
      email.setAttribute("class", "form-control is-valid");
      order.Email = email.value
  }

  if (name.value.length == 0)
  {
    name.setAttribute("class","form-control is-invalid")
    val = false
  }
  else{
    name.setAttribute("class", "form-control is-valid");
    order.Name = name.value
  }

  if (!card.value.match(/^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/))
  {
    card.setAttribute("class","form-control is-invalid")
    val = false
  }
  else{
    card.setAttribute("class", "form-control is-valid");
    order.Card = card.value
    order.Card = "****-****-****-" + order.Card.substring(15) 
  }

  if (!address.value.match(/(\d{1,}) [a-zA-Z0-9\s]/))
  {
    address.setAttribute("class","form-control is-invalid")
    val = false
  }
  else{
    address.setAttribute("class", "form-control is-valid");
    order.Address = address.value
  }

  var address22 = address2.value
  if (address22.length != 0 )
  {
    order.Address += " " + address22 + " "
  }

  if (!city.value.match(/[a-zA-Z0-7\s]/))
  {
    city.setAttribute("class","form-control is-invalid")
    val = false
  }
  else{
    city.setAttribute("class", "form-control is-valid");
    order.Address += " " + city.value
  }

  if (state.value.match("Choose..."))
  {
    state.setAttribute("class","form-control is-invalid")
    val = false
  }
  else{
    state.setAttribute("class", "form-control is-valid");
    order.Address += " " + state.value
  }

  if (!zipcode.value.match(/(^\d{5}$)/))
  {
    zipcode.setAttribute("class","form-control is-invalid")
    val = false
  }
  else{
    zipcode.setAttribute("class", "form-control is-valid");
    order.Address += " " + zipcode.value
  }
  



 

  if (val){
    form.classList.add("collapse")
    button_return.classList.add("collapse")
    for (const [key, value] of Object.entries(order)) {
        summaryList.innerHTML += '<li class="list-group-item"> <b>' + `${key}` + ': </b>' + `${value}` +'</li>'
    }
    summaryCard.classList.remove("collapse")
    alertPlaceholder.innerHTML = ""
    alert('<i class="bi-cart-check-fill"></i> You have made an order!', 'success')
  }
  return val;
}

function gameSearch(){
    input = input_search.value.toUpperCase();
    for(let i = 0; i< games.length; i ++) {
        var title = games[i].querySelector(".card-body .game_title");
    
    if(title.innerHTML.toUpperCase().indexOf(input) > -1 ) {
        games[i].style.display = "";
    }
    else {
        games[i].style.display = "none";
    }
}
}

function resetFilter(){
    input_search.value = "";
    for(let i = 0; i< games.length; i ++) {
        games[i].style.display = "";
    }
}
