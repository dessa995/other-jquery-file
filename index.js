const heading = document.querySelector(".heading");
const addButton = document.querySelector(".button");
const list = document.querySelector(".lista");


$(addButton).click(function(){
  $(heading).animate({
    fontSize: 100,
  },1000).css('color','red').animate({
      fontSize: 40,
    },500);

  });

  $(addButton).click(function(){
    let x = document.querySelector(".text-area").value;
    $(list).text(x);
  });