window.onload = function()
{

  $('#cd').click(function(){
    console.log('clicked');
    clickCounter();
  });

  if (localStorage && localStorage.getItem('background'))
  {
    var colour = localStorage.getItem('background');
    console.log(colour);
    $('html').css("background-color", colour);
    $('body').css("background-color", colour);

  }

  $('#playAudio1').click(playAudio);
  $('#stopAudio1').click(stopAudio);

  $('#playAudio2').click(playAudio2);
  $('#stopAudio2').click(stopAudio2);

  $('#playAudio3').click(playAudio3);
  $('#stopAudio3').click(stopAudio3);

  $('#playAudio4').click(playAudio4);
  $('#stopAudio4').click(stopAudio4);

  $('#setColour').change(function()
  {
    var colour = $('#setColour').val();
    console.log($('#setColour').val());

    $('body').css("background-color", colour);
    $('nav').css("background-color", colour);

    localStorage.setItem('background', colour);
  });

  var countClicks = localStorage.clickcount;
  function clickCounter()
  {
    console.log('click counted');
    if (typeof(Storage) !== "undefined")
    {
      if (countClicks)
      {
      countClicks = Number(countClicks)+1
      }
      else
      {
        countClicks = 1;
      }
        document.getElementById("result").innerHTML = "You have clicked the CD " + countClicks + " time(s).";
    }
      else
      {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage";
      }
      if (countClicks == 390)
      {
        $("body").css('cursor', 'url(assets/bad-vibs-cd-mouse.png) ,auto');
        console.log('clickcount limit reached');
        alert("Easter Egg Activated!");
      }
    }

  console.log(countClicks);

  init();

  function init()
  {
    console.log("Ready");
  }

  function playAudio()
  {
    document.getElementById('myAudio').play();
  }

  function stopAudio()
  {
    document.getElementById('myAudio').pause();
  }

  function playAudio2()
  {
    document.getElementById('myAudio2').play();
  }

  function stopAudio2()
  {
    document.getElementById('myAudio2').pause();
  }

  function playAudio3()
  {
    document.getElementById('myAudio3').play();
  }

  function stopAudio3()
  {
    document.getElementById('myAudio3').pause();
  }

  function playAudio4()
  {
    document.getElementById('myAudio4').play();
  }

  function stopAudio4()
  {
    document.getElementById('myAudio4').pause();
  }

  // TOGGLE BETWEEN SHOWING AND HIDING MOBILE NAV
  // function mobileNav()
  // {
  //   document.getElementById("myDropdown-mob").classList.toggle("show");
  // }

  // CLOSES NAV WHEN CLICKS OUTSIDE BOX
  window.onclick = function(event)
  {
    if (!event.target.matches('.dropbtn-mob'))
    {
      var dropdowns =   document.getElementsByClassName("dropdown-content-mob");
      var i;
      for (i = 0; i < dropdowns.length; i++)
      {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show'))
        {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}
