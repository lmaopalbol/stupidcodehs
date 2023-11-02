document.addEventListener("DOMContentLoaded", () => {
var requiredClicks = 100 + 14
var movement = getWidth()/requiredClicks
var rect = new Rectangle(50,50)
var clicks = 0;
var printed = false;
var time = 0;
var startTime;

function start(){
    makeBlock();
    setTimer(winCheck, 100)
}

function makeBlock(){
    var road = new Rectangle(getWidth(), getHeight()/3)
    road.setColor(Color.gray)
    road.setPosition(0,getHeight()/3)
    add(road)
    
    let yellow = new Rectangle(road.getWidth()/8, road.getHeight()/8)
    yellow.setColor(Color.yellow)
    yellow.setPosition(getWidth()/2, getHeight()/2 - yellow.getHeight()/2)
    add(yellow)
    
    rect.setColor(Color.black)
    rect.setPosition(0, (getHeight()/2)+25)
    add(rect)
}

window.addEventListener('click', function(q){
    if(clicks==0){
        const start = Date.now();
        startTime = start
    }

    if(clicks!=100){
        clicks++
        rect.move(movement, 0)
    }
});

function winCheck(){
    if(clicks == 100 && printed!=true){
        total();
        var text = new Text("You win! CPS: " + (Number.parseFloat(100/time).toFixed(1)))
        text.setPosition(getWidth()/2 - (text.getWidth()/2), getHeight()/2 + (text.getHeight()/2))
        add(text)
        printed = true
    }
}

function total(){
    var millis = Date.now() - startTime;

    var tot = millis/1000

    time = tot    
}
});