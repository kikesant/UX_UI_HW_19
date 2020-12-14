console.log("Yor index.js is loaded correctly!");
 
$(function(){
    $( "#button" ).on('mouseover', function(){  //using "on" for optimization
        this.style.backgroundColor = '#187366';       //native JS application
    }).on('mouseout', function(){           //chain to avoid second selector call
        this.style.backgroundColor = '#7C69A5';     //native JS application
    })

});
$(function(){
    $( "#buttontwo" ).on('mouseover', function(){  //using "on" for optimization
        this.style.backgroundColor = '#187366';       //native JS application
    }).on('mouseout', function(){           //chain to avoid second selector call
        this.style.backgroundColor = '#7C69A5';     //native JS application
    })

});
$(function(){
    $( "#button3" ).on('mouseover', function(){  //using "on" for optimization
        this.style.backgroundColor = '#187366';       //native JS application
    }).on('mouseout', function(){           //chain to avoid second selector call
        this.style.backgroundColor = '#7C69A5';     //native JS application
    })

});
$(function(){
    $( "#button4" ).on('mouseover', function(){  //using "on" for optimization
        this.style.backgroundColor = '#187366';       //native JS application
    }).on('mouseout', function(){           //chain to avoid second selector call
        this.style.backgroundColor = '#7C69A5';     //native JS application
    })

});
$(function(){
    $( "li" ).on('mouseover', function(){  //using "on" for optimization
        this.style.color = '#7C69A5';       //native JS application
    }).on('mouseout', function(){           //chain to avoid second selector call
        this.style.color = '#212429';     //native JS application
    })

});