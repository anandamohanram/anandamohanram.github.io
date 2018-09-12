window.onscroll = () => {
    
    console.log(this.scrollY);
    if(this.scrollY > $(window).height()) {
        $('nav').css("background-color","#000");    
    }
    else{
        $('nav').css("background-color","#00000021");
    }
  };