var slideImg = document.getElementById("slideImg");

    var images = new Array(
      "images/image1.jpg",
      "images/image2.jpg",
      "images/image11.jpg",
      "images/image33.jpg"
    );

    var len = images.length;
    var i = 0;

    function slider(){
      if(i > len-1){
          i = 0;
      }
      slideImg.src = images[i];

      i++;
      setTimeout('slider()', 6000);
    }
