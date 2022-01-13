function perload(){

}
function setup(){
    canvas = createCanvas(640,480)
    canvas.position(110,250)
    img =loadImage("google.jpg")
}

function draw(){
    image(img,0,0,640,480)
}

function take_snapshot(){
    save("student_name.png")
}