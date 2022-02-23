let dragon_health = 10
let dmg_done = 0

//reset game
function reset_game(){
    dragon_health = 10
    dmg_done = 0
    win_msg.innerHTML = ''
}

//damage function
function attack_dragon(attack_type,attack_amt){
    
    if (attack_type === 'fire') {
        dmg_done = attack_amt - 1;

    } else if (attack_type === 'ice'){
        dmg_done = attack_amt +1

    } else if (attack_type === 'poison'){
        dmg_done = attack_amt

    } else{
        console.log('Error incorrect attack type passed to attack_dragon')
    }
    return dmg_done
}

//checking function
function check_health(dmg_done){
    
    dragon_health = dragon_health - dmg_done
    health_h1.innerHTML = 'Dragon Health ' + dragon_health
    if (dragon_health > 0){
        
    }else{
        win_msg.innerHTML = 'You Win!!'
    }
}

//setting up buttons
let fire_button = document.createElement('button')
fire_button.innerHTML = 'Fire Attack'
let ice_button = document.createElement('button')
ice_button.innerHTML = 'Ice Attack'
let poison_button = document.createElement('button')
poison_button.innerHTML = 'Poison Attack'
document.body.appendChild(fire_button)
document.body.appendChild(ice_button)
document.body.appendChild(poison_button)

//setting up display out
let health_h1 = document.createElement('h1')
health_h1.innerHTML = 'Dragon Health ' + dragon_health
document.body.appendChild(health_h1)

let win_msg = document.createElement('h1')
document.body.appendChild(win_msg)


//event listeners

fire_button.addEventListener('click', function(){
    if (dragon_health < 1){reset_game()}
    dmg_done = attack_dragon('fire',3)
    check_health(dmg_done)

})


ice_button.addEventListener('click', function(){
    if (dragon_health < 1){reset_game()}
    dmg_done = attack_dragon('ice',1)
    check_health(dmg_done)

})


poison_button.addEventListener('click', function(){
    if (dragon_health < 1){reset_game()}
    dmg_done = attack_dragon('poison',4)
    check_health(dmg_done)

})