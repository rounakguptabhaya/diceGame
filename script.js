var count = 0
var target = 30
function roll()
{
    count++;
    var randDice = Math.floor(Math.random()*6)+1
    console.log(randDice);
    if(count%2==0){
        document.getElementById('p2').value =parseInt(document.getElementById('p2').value)+randDice
        if(document.getElementById('p2').value>=target){
            document.getElementById('output').innerHTML = '<i>Player 2 wins!</p>'
        }  
    }
    else{
        document.getElementById('p1').value = parseInt(document.getElementById('p1').value)+randDice
        if(document.getElementById('p1').value>=target){
            document.getElementById('output').innerHTML = '<i>Player 1 wins!</p>'
        }
        
    }
}