var canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
 c=canvas.getContext('2d');
// c.fillStyle='red';
// c.fillRect(50,50,200,200);
// c.fillStyle="blue";
// c.fillRect(200,200,400,400);
// c.fillStyle="yellow";
// c.fillRect(500,500,700,700);


// c.beginPath();
// c.strokeStyle='green';
// c.moveTo(100,100);
// c.lineTo(300,300);
// // c.strokeStyle='black';
// c.lineTo(400,100);
// c.stroke();
// for(let i=0;i<100;i++){
//     x=Math.random()*canvas.width
//     y=Math.random()*canvas.height
//     c.beginPath();
// c.arc(x,y,x%50,0,6.282,false);
// c.stroke();
// }
    mouse={
        x:undefined,
        y:undefined
    }
    window.addEventListener('mousemove',function (event){
         mouse.x=event.x;
        mouse.y=event.y;
    })

    addEventListener('resize',function (){
        arr=[]
        for(let i=0;i<400;i++){
            x=Math.random()*(window.innerWidth-50*2)+50;
            y=Math.random()*(window.innerHeight-50*2)+50;
            dx=(Math.random()-0.5)*2;
            dy=(Math.random()-0.5)*2;
            arr.push(new circle(x,y,dx,dy,(Math.random()*20)+2))
        }
    })
       
    colorarr=['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    function circle(x,y,dx,dy,radius){
        this.x=x;
        this.y=y;
        this.dy=dy;
        this.dx=dx;
        this.originalradius=radius;
        this.radius=radius;
        this.color=colorarr[Math.floor(Math.random()*colorarr.length)]
        this.make=function (){
         c.beginPath();
         c.arc(this.x,this.y,this.radius,0,6.282);
         c.strokeStyle = "black";
         c.fillStyle=this.color;
         c.stroke();
         c.fill();
         this.update();
        }
        this.update=function (){
            if(this.x+this.radius>window.innerWidth || this.x-this.radius<0)this.dx=-this.dx;
            if(this.y+this.radius>window.innerHeight || this.y-this.radius<0)this.dy=-this.dy;
            this.x+=this.dx;
            this.y+=this.dy;


            if(mouse.x-this.x<60 && this.x-mouse.x<60 && mouse.y-this.y<60 && this.y-mouse.y<60){
                if(this.radius<50){
                    this.radius+=3;
                }
            }else if (this.radius>this.originalradius){
                this.radius-=0.4;
            }


        }
    }

    var arr=[];
    for(let i=0;i<600;i++){
        x=Math.random()*(window.innerWidth-50*2)+50;
        y=Math.random()*(window.innerHeight-50*2)+50;
        dx=(Math.random()-0.5)*2;
        dy=(Math.random()-0.5)*2;
        arr.push(new circle(x,y,dx,dy,(Math.random()*20)+2))
    }
function animation(){
    requestAnimationFrame(animation);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);

    for(let i=0;i<arr.length;i++){
        arr[i].make();
    }

    // c.beginPath();
    // c.arc(x,y,radius,0,6.282);
    // c.strokeStyle = 'blue';
    // c.stroke();
    // if(dr<0 && radius<2) dr=-dr;
    // if(x+radius>window.innerWidth || x-radius<0){
    //     dx=-dx;
    //     dr=-dr;
    // }
    // if(y+radius>window.innerHeight || y-radius<0){
    //     dy=-dy;
    //     dr=-dr;
    // }
    // x+=dx;
    // y+=dy;
    // radius+=dr;

}
animation();