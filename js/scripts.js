//effectively links super-evos with their base forms
var base = [
  {base: 261, evo: 1413},
  {base: 416, evo: 1445},
  {base: 669, evo: 1492},
  {base: 1532, evo: 1543},
  {base: 1404, evo: 1593},
  {base: 367, evo: 1619},
  {base: 748, evo: 1663},
  {base: 530, evo: 1707},
  {base: 1192, evo: 1764},
  {base: 562, evo: 1816},
  {base: 459, evo: 1847},
  {base: 1434, evo: 1880},
  {base: 718, evo: 1881},
  {base: 1362, evo: 1921},
  {base: 1751, evo: 1922},
  {base: 720, evo: 1927},
  {base: 1035, evo: 1928},
  {base: 1045, evo: 2001},
  {base: 1240, evo: 2034},
  {base: 1391, evo: 2035},
  {base: 935, evo: 2066},
  {base: 1832, evo: 2138},
  {base: 1698, evo: 2159},
  {base: 1001, evo: 2195},
  {base: 1610, evo: 2232},
  {base: 1588, evo: 2245},
  {base: 1935, evo: 2300},
  {base: 1123, evo: 2357},
  {base: 2074, evo: 2363},
  {base: 1571, evo: 2372},
  {base: 1652, evo: 2373},
  {base: 1747, evo: 2434},
  {base: 870, evo: 2444},
  {base: 2234, evo: 2500},
  {base: 1869, evo: 2505},
  {base: 1314, evo: 2578},
  {base: 2076, evo: 2588},
  {base: 1473, evo: 2631},
  {base: 2651, evo: 2681},
  {base: 2113, evo: 2739},
  {base: 1794, evo: 2814},
  {base: 649, evo: 2868},
  {base: 1085, evo: 2954},
  {base: 2251, evo: 2991},
  {base: 1883, evo: 3018},
  {base: 2265, evo: 3048},
  {base: 2302, evo: 3079},
  {base: 1268, evo: 3154},
  {base: 2477, evo: 3202},
  {base: 2148, evo: 3211},
  {base: 2475, evo: 3240},
  {base: 2774, evo: 3275},
  {base: 2465, evo: 3298},
  {base: 2776, evo: 3350},
  {base: 3071, evo: 3369},
  {base: 2338, evo: 3417},
  {base: 3429, evo: 3430},
  {base: 2433, evo: 3448},
  {base: 2837, evo: 3469},
  {base: 2236, evo: 3510},
  {base: 3175, evo: 3519},
  {base: 1910, evo: 3550},
  {base: 2025, evo: 3592},
  {base: 2023, evo: 3625},
  {base: 2365, evo: 3666},
  {base: 2201, evo: 3693},
  {base: 2960, evo: 3718},
  {base: 3680, evo: 3721},
  {base: 2964, evo: 3739},
  {base: 2741, evo: 3742},
  {base: 2980, evo: 3762},
  {base: 2797, evo: 3784},
  {base: 3177, evo: 3786},
  {base: 3009, evo: 3805},
  {base: 3334, evo: 3814},
  {base: 3721, evo: 3816},
  {base: 2577, evo: 3828},
  {base: 2862, evo: 3845},
  {base: 2418, evo: 3868},
  {base: 3878, evo: 3877},
  {base: 2536, evo: 3902},
  {base: 1985, evo: 3920},
  {base: 2835, evo: 3940},
  {base: 3956, evo: 3957},
  {base: 2446, evo: 3969},
  {base: 2181, evo: 3989},
  {base: 2099, evo: 4000},
  {base: 2330, evo: 4010},
  {base: 2672, evo: 4037},
  {base: 2007, evo: 4056},
  {base: 3336, evo: 4063},
  {base: 4067, evo: 4068},
  {base: 3227, evo: 4080},
  {base: 2897, evo: 4098},
  {base: 2860, evo: 4118},
  {base: 3307, evo: 4139},
  {base: 4152, evo: 4153},
  {base: 3607, evo: 4162},
  {base: 3422, evo: 4170},
  {base: 3027, evo: 4185},
  {base: 3038, evo: 4199},
  {base: 2982, evo: 4237},
  {base: 3278, evo: 4256},
  {base: 3454, evo: 4263},
  {base: 3483, evo: 4274},
  {base: 3204, evo: 4287},
  {base: 3164, evo: 4289},
  {base: 4291, evo: 4292},
  {base: 3613, evo: 4294},
  {base: 3427, evo: 4306},
  {base: 2804, evo: 4335},
  {base: 3472, evo: 4344},
  {base: 2601, evo: 4350},
  {base: 3755, evo: 4371},
  {base: 3225, evo: 4378},
  {base: 2561, evo: 4393},
  {base: 2895, evo: 4408},
  {base: 3411, evo: 4424},
  {base: 3493, evo: 4439},
  {base: 3280, evo: 4458},
  {base: 3118, evo: 4465},
  {base: 2534, evo: 4475},
  {base: 3166, evo: 4489},
  {base: 2700, evo: 4505},
  {base: 3433, evo: 4520},
  {base: 3007, evo: 4535},
  {base: 3338, evo: 4549},
  {base: 4557, evo: 4558},
  {base: 4559, evo: 4560},
  {base: 4561, evo: 4562},
  {base: 4563, evo: 4564},
  {base: 3245, evo: 4579},
  {base: 3650, evo: 4596},
  {base: 4583, evo: 4603},
  {base: 3405, evo: 4613}
];

function updateStorage(key, value, save) {
  if (save) {
    localStorage.setItem(key, value);
  }
  else {
    localStorage.removeItem(key);
  }
}

function readStorageValue(key) {
  return localStorage.getItem(key);
}

function readAllStorage() {
  const nbItem = localStorage.length;
  const store = [];
  let i;
  let storeKey;
  for (i = 0; i < nbItem; i += 1) {
    storeKey = localStorage.key(i);
    store.push({
      "key" : storeKey,
      "value" : readStorageValue(storeKey)
    });
  }
  return store;
}

function updatePage() {
  //check local storage
  const store = readAllStorage();
  //restore the selected class
  $.each(store, function(index, elem) {
    if(elem.key.indexOf('pirate-limit-') === 0) {
      var pirateLimitId = elem.key.replace('pirate-limit-', '');
      $("#" + pirateLimitId).parent().addClass("pirate-limit");
    }
    else if(elem['value'] == 'rainbow')
      $("#" + elem.key).addClass("rainbow selected");
    else if(elem['value'] == 'srainbow')
      $("#" + elem.key).addClass("srainbow selected");
    else if(elem['value'] == 'hidden')
      $("#" + elem.key).parent().addClass("disabled");
    else if (elem['value'] == 'true'){
      $('.base').parent().addClass('hidden');
      $('#hide-base').css('display', 'none');
      $('#show-base').css('display', 'inline-block');
    }
    else
      $("#" + elem.key).addClass("selected");
  });
}

function selectPage() {
  var isChecked = document.getElementById('switch').checked;
  var isChecked2 = document.getElementById('switch2').checked;
  var isPirateLimitChecked = document.getElementById('pirate-limit-switch').checked;
  var selectable = getVisibleLegends('.flair-grid');

  if (isChecked) {
    selectable.addClass("rainbow selected");
    selectable.removeClass("srainbow");
  }
  else if (isChecked2) {
    selectable.addClass("srainbow selected");
    selectable.removeClass("rainbow");
  }
  else if (isPirateLimitChecked) {
    selectable.addClass("selected");
    selectable.parent().addClass("pirate-limit");
    selectable.each(function() {
      updateStorage('pirate-limit-' + this.id, 'true', true);
    });
  }
  else {
    //adds selected class to every icon
    selectable.addClass("selected");
    selectable.removeClass("rainbow");
    selectable.removeClass("srainbow");
  }


  var className = document.getElementsByClassName('selected');
  var idStore = new Array();


  //loops every ID and stores key into array
  for(var i = 0; i < className.length; i++) {
    idStore.push({"key" : className[i].id, "value" : className[i].className});
  }

  //add IDs from array to local storage
  for(var j=0; j<idStore.length; j++) {
    if(idStore[j]['value'].includes('srainbow')) {
      updateStorage(idStore[j]['key'], "srainbow", true);
    }
    else if(idStore[j]['value'].includes('rainbow')) {
      updateStorage(idStore[j]['key'], "rainbow", true);
    }
    else {
      updateStorage(idStore[j]['key'], null, true);
    }
  }
}

function resetPage() {
  //check local storage
  const store = readAllStorage();
  //delete the selected class
  $.each(store, function(index, elem) {
    $("#" + elem.key).removeClass("selected");
    $("#" + elem.key).removeClass("rainbow");
    $("#" + elem.key).removeClass("srainbow");
    $("#" + elem.key).parent().removeClass("disabled hidden");
  });
  $(".flair-wrapper").removeClass("disabled hidden pirate-limit");
  //clears local storage
  localStorage.clear();
  $('#show-hidden').html('지운 캐릭터 복구 (' + $('.disabled').length + ')');
}

//unique legend tracker
function countLegends() {
  countChecklist('.flair-grid', '#counter2', '#rainbow', '#srainbow');
  updateCategoryTotal('#super-sugo', '#super-sugo-total');
  updateCategoryTotal('#anniversary-sugo', '#anniversary-sugo-total');
  updateCategoryTotal('#pirate-festival-sugo', '#pirate-festival-sugo-total');
  updateCategoryTotal('#treasure-map-sugo', '#treasure-map-sugo-total');
  updateCategoryTotal('#special', '#regular-sugo-total');
}

function updateCategoryTotal(containerSelector, totalLabel) {
  var total = $(containerSelector + ' .flair').length;
  $(totalLabel).text('총 ' + total + '종');
}

function getVisibleLegends(containerSelector) {
  return $(containerSelector + " .flair").filter(function() {
    var wrapper = $(this).parent();
    return !wrapper.hasClass("hidden") && !wrapper.hasClass("disabled");
  });
}

function countChecklist(containerSelector, totalCounter, rainbowCounter, superRainbowCounter) {
  var visible = getVisibleLegends(containerSelector);
  var selected = visible.filter(".selected").length;
  var rainbowed = visible.filter(".rainbow").length;
  var superRainbowed = visible.filter(".srainbow").length;
  var total = visible.length;

  $(totalCounter).html("<span class='cl'>전체 캐릭터 - </span>" + selected + "/" + total);
  $(rainbowCounter).html("<span class='cl'>무지개 - </span>" + (rainbowed + superRainbowed) + "/" + total);
  $(superRainbowCounter).html("<span class='cl'>초무지개 - </span>" + superRainbowed + "/" + total);
}

//un-hides all hidden legends
function showHidden() {
  var disabled = $(".disabled");

  for(var i = 0; i < disabled.length; i++) {
    var hiddenFlair = disabled[i].querySelector('.flair');
    if(hiddenFlair) {
      localStorage.removeItem(hiddenFlair.id);
    }
  }
  $(".disabled").removeClass("disabled");
  $('#show-hidden').html('지운 캐릭터 복구 (' + $('.disabled').length + ')');
}

//unhides specific Legends
function listHidden() {
  toggleModal2();
  $(".modal-content2").empty();
  $("#switch").prop("checked", false);
  $("#switch2").prop("checked", false);
  $("#check4").prop("checked", false);
  $("#pirate-limit-switch").prop("checked", false);
  $("#hide-legends").prop("checked", false);

  var disabled = $(".disabled")
  var box = $('.modal-content2');

  //creates new images for hidden legends
  for(var i = 0; i < disabled.length; i++) {
    var flair = document.createElement('img');
    flair.setAttribute('class', 'flair');
    flair.setAttribute('name', disabled[i].firstChild.id);
    flair.setAttribute('src', 'images/icons/'+disabled[i].firstChild.id+'.png');

    box.append(flair);
  }

  //unhide legends in checklist when clicked
  $(".modal-content2 img").on("click", function(e) {
    e.preventDefault();
    const $obj = $(this);
    var id = $obj[0].name;
    $("#"+id).parent().removeClass('disabled');
    //removes from modal display
    $obj.hide();
    //removes from local storage
    localStorage.removeItem(id);
    //updates counters
    $('#show-hidden').html('지운 캐릭터 복구 (' + $('.disabled').length + ')');
    countLegends();
  });
}

//toggles popup window
function toggleModal() {

  let modal = document.querySelector(".modal")
  let closeBtn = document.querySelector(".close-btn")

  modal.style.display = "block"

  closeBtn.onclick = function(){
    modal.style.display = "none"
  }
  window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }
  }
}

//toggles 2nd popup window
function toggleModal2() {

  let modal = document.querySelector(".modal2")
  let closeBtn = document.querySelector(".close-btn2")

  modal.style.display = "block"

  closeBtn.onclick = function(){
    modal.style.display = "none"
  }
  window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }
  }
}

//toggles 3rd popup window
function toggleModal3() {

  let modal = document.querySelector(".modal3")
  let closeBtn = document.querySelector(".close-btn3")

  modal.style.display = "block"

  closeBtn.onclick = function(){
    modal.style.display = "none"
  }
  window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }
  }
}

function windowOnClick(event) {
  var modal = document.querySelector(".modal");
   if (event.target === modal) {
       toggleModal();
   }
}

//export image function
function generateImage() {
  toggleModal();

  $(".modal-content").empty();

  domtoimage.toSvg($('.icon-container')[0]).then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          $(".modal-content").append(img);
  });
}


//download feature
function download() {
  domtoimage.toBlob($('.icon-container')[0]).then(function (blob) {
        window.saveAs(blob, 'OPTC-체크리스트.jpg');
    });
}

//export localStorage
function exportSelection() {
  $('#import-text').attr("style", "opacity: 0; z-index: -1;");
  $('#apply-import').attr("style", "opacity: 0; z-index: -1;");
  $('#copy-export').attr("style", "opacity: 1; z-index: 1;");
  var raw = JSON.stringify(localStorage);
  container = document.getElementById("export-text");
  container.setAttribute("style", "transform: translateY(0); opacity: 1; z-index: 1;");
  container.value = LZString.compressToEncodedURIComponent(raw);
}

//copy exported data
function copySelection() {
  container = document.getElementById("export-text");
  container.select();
  document.execCommand("copy");
  $('#display-copied').fadeIn().delay(1000).fadeOut();
}

//import button
function toggleImport() {
  $('#export-text').attr("style", "opacity: 0; z-index: -1;");
  $('#copy-export').attr("style", "opacity: 0; z-index: -1;");
  $('#apply-import').attr("style", "opacity: 1; z-index: 1;");
  $("#import-text").attr("style", "transform: translateY(0); opacity: 1; z-index: 1;");
}

//apply imported data
function importSelection() {
  var text = document.getElementById("import-text").value;

  plaintext = LZString.decompressFromEncodedURIComponent(text);

  //clears local storage
  localStorage.clear();

  try {
    // Convert to a JSON object
    data = JSON.parse(plaintext);

    console.log(data);

    // Iterate over the JSON object and save to localstorage
    Object.keys(data).map(function(key, index) {
        var value = data[key];
        localStorage.setItem(key, value);
    });

    $('#imported').fadeIn().delay(1000).fadeOut();
  }
  //if error
  catch {
    $('#undefined').fadeIn().delay(1000).fadeOut();
  }

  //restore previous state
  updatePage();

  //legend counter
  countLegends();
}

jQuery(document).ready(function($) {
  //adds base class to pre-defined elements
 
 
  for(var v in base) {
    var item = document.getElementById(base[v]['base']);

    $(item).addClass('base');
  }

  //restore previous state
  updatePage();

  //legend counter
  countLegends();

  //restores hidden legend counter upon page load - must be placed under updatePage()
  $('#show-hidden').html('지운 캐릭터 복구 (' + $('.disabled').length + ')');

  //makes sure only one toggle can be flipped at a time
  var modeToggleIds = ['switch', 'switch2', 'check4', 'pirate-limit-switch', 'hide-legends'];
  $.each(modeToggleIds, function(_, activeId) {
    $('#' + activeId).on('change', function() {
      if (!this.checked) return;
      $.each(modeToggleIds, function(_, otherId) {
        if (otherId !== activeId) {
          $('#' + otherId).prop('checked', false);
        }
      });
    });
  });

  //main function for selecting icons
  $(".flair-grid img").on("click", function(e) {
    e.preventDefault();
    var isChecked = document.getElementById('switch').checked;
    var isChecked2 = document.getElementById('hide-legends').checked;
    var isChecked3 = document.getElementById('switch2').checked;
    var isChecked4 = document.getElementById('check4').checked;
    var isPirateLimitChecked = document.getElementById('pirate-limit-switch').checked;
    const $obj = $(this);


    const level_text = $obj[0].parentElement.getElementsByClassName('flair-level')[0]

    //rainbow toggle must be checked
    if(isChecked) {
      if($obj.hasClass("selected")) {
        $obj.toggleClass('rainbow');
        $obj.removeClass('srainbow');
      }
      else {
        $obj.toggleClass('rainbow selected');
      }

      //creates object if selected class is present
      const save = $obj.hasClass("selected");
      var rainbow = $obj.hasClass("rainbow");

      //updates the storage value accordingly
      if(rainbow) {
        updateStorage($obj.attr("id"), "rainbow", save);
      }
      else {
        updateStorage($obj.attr("id"), null, save);
      }
      countLegends();
    }
    //hide legends toggle
    else if(isChecked2){
      $obj.parent().toggleClass("disabled");
      $obj.parent().removeClass("pirate-limit");
      $obj.removeClass("rainbow");
      $obj.removeClass("srainbow");
      $obj.removeClass("selected");

      const save = $obj.parent().hasClass("disabled");

      updateStorage('pirate-limit-' + $obj.attr("id"), null, false);
      updateStorage($obj.attr("id"), "hidden", save);
      countLegends();

      //shows counter of hidden legends
      $('#show-hidden').html('지운 캐릭터 복구 (' + $('.disabled').length + ')');
    }
    //super rainbow toggle
    else if(isChecked3){
      if($obj.hasClass("selected")) {
        $obj.toggleClass('srainbow');
        $obj.removeClass('rainbow');
      }
      else {
        $obj.toggleClass('srainbow selected');
      }

      //creates object if selected class is present
      const save = $obj.hasClass("selected");
      var srainbow = $obj.hasClass("srainbow");

      //updates the storage value accordingly
      if(srainbow) {
        updateStorage($obj.attr("id"), "srainbow", save);
      }
      else {
        updateStorage($obj.attr("id"), null, save);
      }
      countLegends();
    }
    //pirate limit key toggle
    else if(isPirateLimitChecked){
      var wrapper = $obj.parent();
      wrapper.toggleClass('pirate-limit');
      var pirateLimitEnabled = wrapper.hasClass('pirate-limit');

      if(pirateLimitEnabled && !$obj.hasClass('selected')) {
        $obj.addClass('selected');
        updateStorage($obj.attr('id'), null, true);
      }

      updateStorage('pirate-limit-' + $obj.attr('id'), 'true', pirateLimitEnabled);
      countLegends();
    }
    else if(isChecked4){
      if(level_text.textContent == '0') {
        level_text.textContent = '1'
      }else if(level_text.textContent == '1') {
        level_text.textContent = '2'}
      else if(level_text.textContent == '2') {
        level_text.textContent = '3'}
      else if(level_text.textContent == '3') {
        level_text.textContent = '4'}
      else if(level_text.textContent == '4') {
        level_text.textContent = '5'}
      else if(level_text.textContent == '5') {
        level_text.textContent = '0'
      }

    }
    //if not checked
    else {
      //toggles selected classes
      $obj.toggleClass("selected");
      $obj.removeClass("rainbow");
      $obj.removeClass("srainbow");

      //creates object if selected class is present
      const save = $obj.hasClass("selected");

      //update the key
      updateStorage($obj.attr("id"), null, save);

      countLegends();
    }
  });

  //select all button
  $("#select-all").on("click", function() {
    selectPage();
    countLegends();
  });

  //clear button
  $("#select-none").on("click", function() {
    resetPage();
    countLegends();
  });

  //unhide all legends
  $("#show-hidden").on("click", function() {
    showHidden();
    countLegends();
  });

  //unhide specific legends
  $("#list-hidden").on("click", function() {
    listHidden();
    countLegends();
  });

  //hides base forms of legends with super-evos
  $("#show-base").on("click", function() {
    $('.base').parent().removeClass('hidden');
    $('#show-base').css('display', 'none');
    $('#hide-base').css('display', 'inline-block');
    updateStorage("evohidden", null, false);
    countLegends();
  });

  //shows base forms of legends with super-evos
  $("#hide-base").on("click", function() {
    $('.base').parent().addClass('hidden');
    $('#hide-base').css('display', 'none');
    $('#show-base').css('display', 'inline-block');
    updateStorage("evohidden", 'true', true);
    countLegends();
  });
});
