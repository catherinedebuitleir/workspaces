$(document).ready(function () {

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus');
        $('.dropdown-toggle').dropdown();
    });


    $("#comment").click(function () {
        $("#chatboxes").toggle();
        return false;
    });

    $(function () {
        // Enables popover
        $("[data-toggle=popover]").popover();
    });




    let picker;
let color = '#ffffff';
const defaults = {
  color: color,
  container: document.getElementById('color_picker'),
  onChange: function(color) {
    updateColor(color);
  },
  swatchColors: ['#D1BF91', '#60371E', '#A6341B', '#F9C743', '#C7C8C4'],
};

function initPicker(options) {
  options = Object.assign(defaults, options);
  picker = new EasyLogicColorPicker(options);
}

function updateColor(value) {
  color = value;
  const $color = document.querySelector('.sample__color');
  const $code = document.querySelector('.sample__code');
  $code.innerText = color;
  $color.style.setProperty('--color', color);
}

function onChangeType(e) {
  picker.setType(e.value);
}

window.onload = function() {
  initPicker();
  updateColor(color);
};

    function editmode_customer() {
        $(".profile-edit").toggle();
        $(".profile-readonly").toggle();
    }

    $("#subscription-qty-input").change(function () {
        var change = $("#subscription-qty-input").val();
        $('#new-quantity').text(change);
        if (change < 5) {
            $('#subscription-quatity-indicator').show();
            $('#subscription-quatity-indicator .increase-update .material-icons').text("arrow_downward");
            var difference = change - 5;
            $('#subscription-quatity-indicator #change-quantity').text(difference);

            $('#subscription-buy-button').hide();
            $('#subscription-update-button').show();
        } else if (change > 5) {
            $('#subscription-quatity-indicator').show();
            $('#subscription-quatity-indicator .increase-update .material-icons').text("arrow_upward");
            var difference = change - 5;
            $('#subscription-quatity-indicator #change-quantity').text("+" + difference);

            $('#subscription-buy-button').show();
            $('#subscription-update-button').hide();
        } else {
            $('#subscription-quatity-indicator').hide();
            $('#subscription-buy-button').hide();
            $('#subscription-update-button').hide();
        }
    });

    $("#menu-button").click(function () {
        $(".shell-menu").toggle();
    });

    $("#closemenu").click(function () {
        $(".shell-menu").toggle();
    });

    $("#dropdown-menu-one").click(function () {
        $("#sub-menu-one").toggle();
    });

    $(".more").hover(function () {
        $(".more-tasks").toggle();
    });




    $('#workspace-switcher').click(function () {
        window.location.href = "workspace.html";
    })

    $('.home-click').click(function () {
        window.location.href = "home.html";
    })

    $('#org_settings').click(function () {
        window.location.href = "org_settings.html";
    })

    $('#workspace-settings').click(function () {
        window.location.href = "workspace_settings.html";
    })


    $('#menu-button-cloud').click(function () {
        $(".cloud-menu").toggle();
        $(".icon-menu").toggle();
        // alert("Hello world");

    })

    // show the side menu
    // $("#menu-button").hover(function () {
    //     $("#menu-button").css({"color" : "#1A73E8"})
    //     $(".shell-menu").show(250);
    // });

    /*  $("#side-menu").mouseleave(function(){
        $("#side-menu").hide();
        $("#menu-button").removeAttr('style');
      });
 */
});



//catherine's code for workspaces 




// allocate > alloaction rule > create
$('.share-modal').click(function () {
    //share-email
    //alert("Hi");
    $("#share-email").css({
        "border": "3px solid #0271e0"
    });
})
$('#viewcostcenter').click(function () {
    window.location.href = 'marketing.html';
})

$('.viewcostcenter').click(function () {
    window.location.href = 'marketing.html';
})



$('#createallocationrule').click(function () {
    window.location.href = 'create_allocation_rule.html';
})

$('#adduser').click(function () {
    window.location.href = 'add_user.html';
})


//create allocation rule


// step 1: click continue
$("#finish_step1").click(function () {
    $("#allocaterule_step2").show();
    $("#allocaterule_step1").hide();
    // swap the classes changing inactive to active in circle 
    $("#card_step1").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#card_step2").removeClass('gscard__standard_stepper_inactive').addClass('gscard__standard_stepper');
    $("#card_step3").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    // Change icon
    $('.material-icons-step1').text("check_circle").css('color', 'green');
 


});

// step 1: adds the name you've entered into 
$("#txt_name").keyup(function () {
    //alert($(this).val());
   // console.log($(this).val());
    var value = $(this).val();
    $("#step1value").text(value);
});


// step 2: click continue
$("#finish_step2").click(function () {
    $("#allocaterule_step3").show();
    $("#allocaterule_step2").hide();
    // swap the classes
    $("#card_step1").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#card_step2").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#card_step3").removeClass('gscard__standard_stepper_inactive').addClass('gscard__standard_stepper');
    // Change icon
    $('.material-icons-step2').text("check_circle").css('color', 'green');
});

// step 3: finish


// step 3: selects the value in the dropdown and puts it in the side bar

$("#step3_costcenter").on('change', function () {
    var value = $(this).val();
    $("#step3value").text(value);
    $('.material-icons-step3').text("check_circle").css('color', 'green');
});

// click card 1
$("#card_step1").click(function () {
    $("#allocaterule_step1").show();
    $("#allocaterule_step2").hide();
    $("#allocaterule_step3").hide();
    // swap the classes
    $("#card_step1").toggleClass('gscard__standard_stepper_inactive gscard__standard_stepper ');
    $("#card_step2").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#card_step3").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');


});


// click card 2
$("#card_step2").click(function () {
    $("#allocaterule_step1").hide();
    $("#allocaterule_step2").show();
    $("#allocaterule_step3").hide();
    // swap the classes
    $("#card_step2").toggleClass('gscard__standard_stepper_inactive gscard__standard_stepper ');
    $("#card_step1").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#card_step3").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');

});

// click card 3
$("#card_step3").click(function () {
    $("#allocaterule_step1").hide();
    $("#allocaterule_step2").hide();
    $("#allocaterule_step3").show();
    // swap classes
    $("#card_step2").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#card_step1").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#card_step3").toggleClass('gscard__standard_stepper_inactive gscard__standard_stepper ');

});

// step 2: add filter

$("#add_filter").click(function () {
    $("#show_filter").show();
    $("#showtoggle").show();
   
});

// step 3: finsih button

$("#finish_allocation").click(function () {
    window.location.href = 'allocate.html';
   
});


// step 1: click continue
$("#gs_finish_step1").click(function () {
    $("#gs_rule_step2").show();
    $("#gs_rule_step1").hide();
    // swap the classes
    $("#gs_card_step1").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#gs_card_step2").removeClass('gscard__standard_stepper_inactive').addClass('gscard__standard_stepper');
    $("#gs_card_step3").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    // Change icon
    $('.material-icons-step1').text("check_circle").css('color', 'green');


});

// step 1: adds the name you've entered into
$("#gs_txt_name").keyup(function () {
    //alert($(this).val());
   // console.log($(this).val());
    var value = $(this).val();
    $("#gs_step1value").text(value).addClass('gs_card_title');
});


 // step 2: adds the option you've chosen from input
 $("#targetaction").on('change', function () {

    var value = $(this).val();

    $("#gs_main-text2").text(value).addClass('gs_card_title');


    });

// step 2: click continue
$("#gs_finish_step2").click(function () {
    $("#gs_rule_step3").show();
    $("#gs_rule_step2").hide();
    // swap the classes
    $("#gs_card_step1").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#gs_card_step2").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#gs_card_step3").removeClass('gscard__standard_stepper_inactive').addClass('gscard__standard_stepper');
    // Change icon
    $('.material-icons-step2').text("check_circle").css('color', 'green');
});

$("#gs_finish_step3").click(function () {
    $("#gs_rule_step3").hide();
    $("#gs_rule_step4").show();
    $("#gs_rule_step2").hide();

    // swap the classes
    $("#gs_card_step1").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#gs_card_step2").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#gs_card_step3").removeClass('gscard__standard_stepper_inactive').addClass('gscard__standard_stepper');
    // Change icon
    $('.material-icons-step2').text("check_circle").css('color', 'green');
});






// step 3: finish


// step 3: selects the value in the dropdown and puts it in the side bar

$("#gs_step3").on('change', function () {
    var value = $(this).val();
    $("#gs_step3value").text(value);
    $('.material-icons-step3').text("check_circle").css('color', 'green');
});

// step 3: adds the option you've chosen from input
$("#targettrigger").on('change', function () {

    var value = $(this).val();

    $("#gs_main-text3").text(value).addClass('gs_card_title');

    });

// click card 1
$("#gs_card_step1").click(function () {
    $("#gs_rule_step1").show();
    $("#gs_rule_step2").hide();
    $("#gs_rule_step3").hide();
    // swap the classes
    $("#gs_card_step1").toggleClass('gscard__standard_stepper_inactive gscard__standard_stepper ');
    $("#gs_card_step2").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#gs_card_step3").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');


});


// click card 2
$("#gs_card_step2").click(function () {
    $("#gs_rule_step1").hide();
    $("#gs_rule_step2").show();
    $("#gs_rule_step3").hide();
    // swap the classes
    $("#gs_card_step2").toggleClass('gscard__standard_stepper_inactive gscard__standard_stepper ');
    $("#gs_card_step1").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#gs_card_step3").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');

});

// click card 3
$("#gs_card_step3").click(function () {
    $("#gs_rule_step1").hide();
    $("#gs_rule_step2").hide();
    $("#gs_rule_step3").show();
    // swap classes
    $("#gs_card_step2").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#gs_card_step1").removeClass('gscard__standard_stepper').addClass('gscard__standard_stepper_inactive');
    $("#gs_card_step3").toggleClass('gscard__standard_stepper_inactive gscard__standard_stepper ');

});





// step 2: add filter

$("#add_filter").click(function () {
    $("#show_filter").show();
    $("#showtoggle").show();

});

// step 3: finsih button

$("#gs_finish").click(function () {
    window.location.href = 'rules.html';

});
// drag and drop for the cost centers

$(function () {
    // this will get the full URL at the address bar
    var url = window.location.href;
    // passes on every "a" tag
    $(".main-menu__item .main-menu-action").each(function () {
      // checks if its the same on the address bar
      if (url == (this.href)) {
        $(this).closest("li").addClass("active");
        //for making parent of submenu active
        $(this).closest("li").parent().parent().addClass("active");
      }
    });
  });
  

$(function () {

    $('.draggable, .droppable').sortable({
        connectWith: '.playlists'
    });
    $(".sortable").sortable({
        cancel: ".disable-sort-item"
    });


    // slider tabs
    $(document).on('click', '.slider-tabs .nav-link', function () {
        handleTabChange($(this));
    });

    handleTabChange($('.slider-tabs .active'));

    function handleTabChange(tab) {
        var nav = tab.closest('.nav');
        $('.indicator', nav).css({
            width: tab.outerWidth(),
            left: tab.position().left,
        });
        tab.siblings().removeClass('active');
        tab.addClass('active');
    }

});

// menu item 


///CATHERINE WORKSPACE RULES

// step 1: adds the name you've entered into
$("#wk_txt_name").keyup(function () {
    //alert($(this).val());
   // console.log($(this).val());
    var value = $(this).val();
    $("#wk_step1value").text(value).addClass('wk_card_title');
});


 // step 2: adds the option you've chosen from input
 $("#targetaction").on('change', function () {

    var value = $(this).val();

    $("#wk_main-text2").text(value).addClass('wk_card_title');


    });

// step 2: click continue
$("#wk_finish_step2").click(function () {
    $("#wk_rule_step3").show();
    $("#wk_rule_step2").hide();
    // swap the classes
    $("#wk_card_step1").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step2").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step3").removeClass('wkcard__standard_stepper_inactive').addClass('wkcard__standard_stepper');
    // Change icon
    $('.material-icons-step2').text("check_circle").css('color', 'green');
});

$("#wk_finish_step3").click(function () {
    $("#wk_rule_step3").hide();
    $("#wk_rule_step4").show();
    $("#wk_rule_step2").hide();

    // swap the classes
    $("#wk_card_step1").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step2").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step3").removeClass('wkcard__standard_stepper_inactive').addClass('wkcard__standard_stepper');
    // Change icon
    $('.material-icons-step2').text("check_circle").css('color', 'green');
});






// step 3: finish


// step 3: selects the value in the dropdown and puts it in the side bar

$("#wk_step3").on('change', function () {
    var value = $(this).val();
    $("#wk_step3value").text(value);
    $('.material-icons-step3').text("check_circle").css('color', 'green');
});

// step 3: adds the option you've chosen from input
$("#targettrigger").on('change', function () {

    var value = $(this).val();

    $("#wk_main-text3").text(value).addClass('wk_card_title');

    });

// click card 1
$("#wk_card_step1").click(function () {
    $("#wk_rule_step1").show();
    $("#wk_rule_step2").hide();
    $("#wk_rule_step3").hide();
    $("#wk_rule_step4").hide();
    // swap the classes
    $("#wk_card_step1").toggleClass('wkcard__standard_stepper_inactive wkcard__standard_stepper ');
    $("#wk_card_step2").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step3").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');


});


// click card 2
$("#wk_card_step2").click(function () {
    $("#wk_rule_step1").hide();
    $("#wk_rule_step2").show();
    $("#wk_rule_step3").hide();
    $("#wk_rule_step4").hide();
    // swap the classes
    $("#wk_card_step4").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step2").toggleClass('wkcard__standard_stepper_inactive wkcard__standard_stepper ');
    $("#wk_card_step1").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step3").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');

});

// click card 3
$("#wk_card_step3").click(function () {
    $("#wk_rule_step1").hide();
    $("#wk_rule_step2").hide();
    $("#wk_rule_step3").show();
    $("#wk_rule_step4").hide();
    // swap classes
    $("#wk_card_step4").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step2").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step1").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step3").toggleClass('wkcard__standard_stepper_inactive wkcard__standard_stepper ');

});

// click card 4
$("#wk_card_step4").click(function () {
    $("#wk_rule_step1").hide();
    $("#wk_rule_step2").hide();
    $("#wk_rule_step3").hide();
    $("#wk_rule_step4").show();
    // swap the classes
    $("#wk_card_step4").toggleClass('wkcard__standard_stepper_inactive wkcard__standard_stepper ');
    $("#wk_card_step1").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step2").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step3").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');

});




// step 2: add filter

$("#add_filter").click(function () {
    $("#show_filter").show();
    $("#showtoggle").show();

});

// step 3: finsih button

$("#wk_finish").click(function () {
    window.location.href = 'rules.html';

});

//first workspace next button
$("#wk_finish_step1").click(function () {
    $("#wk_rule_step2").show();
    $("#wk_rule_step1").hide();
    // swap the classes
    $("#wk_card_step1").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step2").removeClass('wkcard__standard_stepper_inactive').addClass('wkcard__standard_stepper');
    $("#wk_card_step3").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    // Change icon
    $('.material-icons-step1').text("check_circle").css('color', 'green');


});

// step 1: adds the name you've entered into
$("#gs_txt_name").keyup(function () {
    //alert($(this).val());
   // console.log($(this).val());
    var value = $(this).val();
    $("#wk_step1value").text(value).addClass('wk_card_title');
});


 // step 2: adds the option you've chosen from input
 $("#targetaction").on('change', function () {

    var value = $(this).val();

    $("#gs_main-text2").text(value).addClass('gs_card_title');


    });

// step 2: click continue
$("#wk_finish_step2").click(function () {
    $("#wk_rule_step3").show();
    $("#wk_rule_step2").hide();
    // swap the classes
    $("#wk_card_step1").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step2").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step3").removeClass('wkcard__standard_stepper_inactive').addClass('wkcard__standard_stepper');
    // Change icon
    $('.material-icons-step2').text("check_circle").css('color', 'green');
});

$("#wk_finish_step3").click(function () {
    $("#wk_rule_step3").hide();
    $("#wk_rule_step4").show();
    $("#wk_rule_step2").hide();

    // swap the classes
    $("#wk_card_step1").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step2").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step3").removeClass('wkcard__standard_stepper').addClass('wkcard__standard_stepper_inactive');
    $("#wk_card_step4").removeClass('wkcard__standard_stepper_inactive').addClass('wkcard__standard_stepper');
    // Change icon
    $('.material-icons-step2').text("check_circle").css('color', 'green');
});




//!!END OF WORKSPACE RULES

// scroll-to animated scroll comments

$('.scroll-button').on("click", function (e) {
    e.preventDefault();
    var dest = $(this).attr("href");
    $("html, body").animate({
        'scrollTop': $(dest).offset().top
    }, 2000);
    

});