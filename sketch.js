var Resp,Resp2, Y, X,X2, A,A2, B,B2, Func,Func2, Calc,Calc2,ZDF=[], a=0,n=0
var modo = []
var Button = 0
modo.push("Crescente")
modo.push("Decrescente")
modo.push("Constante")
modo.push("Linear")
modo.push("Identidade")
var Pergs = [],Perg
var EnterButton,RealButton,InteiroButton
function preload(){ 
    
    if(a==0){X=Math.round(random(-100,100));X2=Math.round(random(-100,100));Y=Math.round(random(-100,100))}
    if(n==1&&a==0){LDF(random(-100,100),random(-1000,1000),random(-100,100),random(-1000,1000),Math.round(random(0,5)),Math.round(random(0,5)))}
    if(n==0&&a==0){LDF(Math.round(random(-100,100)),Math.round(random(-1000,1000)),Math.round(random(-100,100)),Math.round(random(-1000,1000)),Math.round(random(0,5)),Math.round(random(0,5)))}
    S=Math.round(random(1,4));if(S==1){S="+"};if(S==2){S="-"};if(S==3){S="*"};if(S==4){S="/"};
    Pergs.push("Qual o zero da função? (Obs: Utiliza ponto ( . ) se decimal)")
    Pergs.push("Essa função é?(Linear,Identidade,Crescente,Descrescente ou Constante)")
    Pergs.push("Se a lei de formação for igual a "+Func+", qual sera o valor de X quando Y for "+Y+"?")
    Pergs.push("Se a lei de formação for igual a "+Func+", qual sera o valor de Y quando X for "+X+"?")
    Pergs.push("Se f1 = "+Func+", e f2(x) = "+Func2+". Quanto é f1("+X+") "+S+" f2("+X2+")?") 
    //Pergs.push("Se um valor"+Math.round(random(0,1000)))+" perde "+VALOR+" em"
if(a==0){Pergunta(Math.round(random(2,4)))}
else if(a==1||a==0.5||a==0.75){Pergunta(0)}
else{Pergunta(1)}
}

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    if(Button == 0){EnterButton = createButton("Enter");
    RealButton = createButton("Real");
    InteiroButton = createButton("Inteiro");
    EnterButton.position(windowWidth/2 + windowWidth/3/2, windowHeight/2 );
    EnterButton.size(200,100)
    RealButton.position(windowWidth/2+windowWidth/3, windowHeight/2-windowHeight/2 );
    InteiroButton.position(windowWidth/2-windowWidth/2, windowHeight/2-windowHeight/2 );
    EnterButton.class("customButton");
    RealButton.class("customButton");
    InteiroButton.class("customButton");
   Button = 1}
    handleMousePressed()
    }

function draw() {
background(200)


drawSprites()
}

function LDF(a,b,a2,b2,F,F2){
    a=a.toFixed(2);b=b.toFixed(2);a=Number(a);b=Number(b);a2=a2.toFixed(2);b2=b2.toFixed(2);a2=Number(a2);b2=Number(b2)
    A=a;B=b;A2=a2;B2=b2
    switch(F){case(0):Func=a+"x + "+b;Calc= (a * X) + b;break;
    case(1):Func=a+"x - "+b;Calc= (a * X) - b;break;
    case(2):Func=b+" - +"+a+"x";Calc= b - (a * X);break
case(3):Func=b+" + "+a+"x²";Calc= b + (a * (X*X));break;
case(4):Func=b+" - "+a+"x²";Calc= b - (a * (X*X));break;
case(5):Func=a+"x² + "+b;Calc= (a * (X*X)) + b;break}

switch(F2){case(0):Func2=a2+"x + "+b2;Calc2= (a2 * X2) + b2;break;
case(1):Func2=a2+"x - "+b2;Calc2= (a2 * X2) - b2;break;
case(2):Func2=b2+" - +"+a2+"x";Calc2= b2 - (a2 * X2);break
case(3):Func2=b2+" + "+a2+"x²";Calc2= b2 + (a2 * (X2*X2));break;
case(4):Func2=b2+" - "+a2+"x²";Calc2=b2 -  (a2 * (X2*X2)) + b;break;
case(5):Func2=a2+"x² + "+b2;Calc2= (a2 * (X2*X2)) + b2;break}

ZDF[0]=-b/a
ZDF[1]=-b+"/"+a
ZDF[2]=-b2/a2
ZDF[3]=-b2+"/"+a2
}
function Pergunta(p){
    console.log(a)
switch(p){
        case(0):
        if(a==0.5){Perg = new Form(Pergs[0]); a+=0.25
            Resp=ZDF[2];Resp2=ZDF[3]}

        else if(a==0.75){Perg = new Form(Pergs[1]);a+=0.25
            if(A2>0&&!(A2==1&&B2==0)){Resp=modo[0];Resp2=Resp}
            if(A2<0){Resp=modo[1];Resp2=Resp}
            if(A2==0){Resp=modo[2];Resp2=Resp}
            if(B2==0&&A2!=1){Resp=modo[3];Resp2=Resp}
            if(A2==1&&B2==0){Resp=modo[4];Resp2=Resp}}

        else if(a==1){
        Perg = new Form(Pergs[0]); a+=1
        Resp=ZDF[0];Resp2=ZDF[1]}
        break;

        case(1):
        Perg = new Form(Pergs[1]);a=0
        if(A>0&&!(A==1&&B==0)){Resp=modo[0];Resp2=Resp}
        if(A<0){Resp=modo[1];Resp2=Resp}
        if(A==0){Resp=modo[2];Resp2=Resp}
        if(B==0&&A!=1){Resp=modo[3];Resp2=Resp}
        if(A==1&&B==0){Resp=modo[4];Resp2=Resp}
        break;


        case(2): Perg = new Form(Pergs[2]); a+=1; Calc= (Y - B) / A
        Resp=Calc;Resp2=(Y-B)+"/"+A
        break;

        case(3): Perg = new Form(Pergs[3]); a+=1
        Resp=Calc;Resp2=Resp
        break;

        case(4): Perg = new Form(Pergs[4]); a+=0.5
        if(S=="+"){Resp=Calc+Calc2};if(S=="-"){Resp=Calc-Calc2};if(S=="*"){Resp=Calc*Calc2};if(S=="/"){Resp=Calc/Calc2};
        ;Resp2=Calc+S+Calc2
        break;
    }
    console.log(Resp+" "+Resp2)
}
function handleMousePressed() {
    RealButton.mousePressed(() => {if(n==0){;background(200);n=1;a=0;Perg.input.remove();Perg.greeting.remove();Pergs=[];preload()}})
    InteiroButton.mousePressed(() => {if(n==1){;background(200);n=0;a=0;Perg.input.remove();Perg.greeting.remove();Pergs=[];preload()}})
    EnterButton.mousePressed(() => {Perg.read()})
    }