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
    // alert('Colour should be '+colour);
    $('body').css("background-color", colour);
    $('nav').css("background-color", colour);
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

  if (localStorage.clickcount)
  {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  }
  else
  {
    localStorage.clickcount = 1;
  }

  function clickCounter()
  {
    console.log('click counted');
    if ()
    if (typeof(Storage) !== "undefined")
    {
      if (localStorage.clickcount)
      {
      localStorage.clickcount = Number(localStorage.clickcount)+1
      }
      else
      {
        localStorage.clickcount = 1;
      }
        document.getElementById("result").innerHTML = "You have clicked the CD " + localStorage.clickcount + " time(s).";
    }
      else
      {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage";
      }
    }

  function changeCursor()
  {
    if (localStorage.clickcount == 10)
    {
      $('html').css('cursor', 'url(assets/bad-vibs-cd.png),auto');
      alert("Message");
      console.log('clickcount limit reached');
      localStorage.clear('clickcount');
    }
  }

  console.log(localStorage.clickcount);

  init();

  // playAudio();
  // stopAudio();
  //
  // playAudio2();
  // stopAudio2();
  //
  // playAudio3();
  // stopAudio3();
  //
  // playAudio4();
  // stopAudio4();

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
}
