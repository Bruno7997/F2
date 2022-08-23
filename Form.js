class Form {
  constructor(P) {
this.input = createInput("").attribute("placeholder", "Digite a sua resposta");
this.input.size(windowWidth/3, windowHeight/16)
this.input.style('font-size', (windowWidth/11-windowHeight/8)+'px')
this.input.position(windowWidth/2 - this.input.width/2, windowHeight/2 );
this.input.class("customInput");
//if(P.length>=70){P.replace(71, 1, "\n" )}
this.greeting = createElement("h2");
this.greeting.html(P);
this.greeting.position(20, windowHeight/4 );
this.greeting.class("greeting");


  }
 createButton(){
  
  }
read(){
  if(this.input.value()==Resp||this.input.value()==Resp2){
this.input.remove()
this.greeting.remove()
    Pergs=[]
    preload()
  }
  else{this.input.value("")}
}
 


}
