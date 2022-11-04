


function var1(){
    let g;
    let a = prompt('You want a double dose?');
    let b = prompt('you want a chips?');
    let c = prompt('you want a cheese?');
    let d = prompt('you want a salad?');
    let e = prompt('You want hot sauce?');
    let f = prompt('you want a soft drink?');

    if(a=='yes'){
         g = 'double dose\n';
    }
    if(b=='yes'){
         g = g+'chips\n';
    }
    if(c=='yes'){
         g = g+'cheese\n';
    }
    if(d=='yes'){
         g = g+'salad\n';
    }
    if(e=='yes'){
         g = g+'hot sauce\n';
    }

    if(f=='yes'){
         g = g+'soft drink';
    }
    let t = 'Your order is: hamburger\n' + g;
    if(g==undefined){
        alert('Your order is: hamburger\nYou have not selected any additions to your order');
    }else{

    alert(t);
    }
    

}


function var2(){
    let g;
    let a = prompt('You want a extra cheese?');
    let b = prompt('you want a mushrooms?');
    let c = prompt('you want a onion?');
    let d = prompt('you want a olives?');
    let p = prompt('you want a tomatoes?');
    let e = prompt('You want hot sauce?');
    let f = prompt('you want a soft drink?');

    if(a=='yes'){
         g = 'extra cheese\n';
    }
    if(b=='yes'){
         g = g+'mushrooms\n';
    }
    if(c=='yes'){
         g = g+'onion\n';
    }
    if(d=='yes'){
         g = g+'olives\n';
    }
    if(p=='yes'){
        g = g+'tomatoes\n';
   }
    if(e=='yes'){
         g = g+'hot sauce\n';
    }

    if(f=='yes'){
         g = g+'soft drink';
    }
    let t = 'Your order is: pizza\n' + g;
    if(g==undefined){
        alert('Your order is: pizza\nYou have not selected any additions to your order');
    }else{

    alert(t);
    }
    

}





