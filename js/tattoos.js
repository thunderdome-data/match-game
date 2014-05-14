var allNames = ['barrea', 'brewer', 'cunningham', 'johnson', 'martin', 'muhammad', 'pekovic', 'rubio', 'turiaf', 'williams'];

var origXPos = [];
var origYPos = [];
var attempts = 0;
var correct = 0;

var captions = [];
captions[0] = "A tattoo on the chest of Minnesota Timberwolves J.J. Barea. \"S.J.\" are the initials for his son Sebastian Jose. \"I love my son, he's the most important thing in my life,\" said Barea.";
captions[1] = "Tattoo on the arm of Minnesota Timberwolves Corey Brewer. \"Trust is very important,\" said Brewer.";
captions[2] = "A tattoo on the shoulder of Minnesota Timberwolves Dante Cunningham. It's a mixture of his astrological sign Taurus with tribal symbols in honor of his great grandmother who was Native American.";
captions[3] = "Tattoo on the arm of Minnesota Timberwolves Chris Johnson. \"My mom passed away when I was ten\" he said. \"It's a symbol of how much she meant to me, I'm living through her name.\"";
captions[4] = "The untattooed arm of Minnesota Timberwolves Kevin Martin. Asked why he doesn't have any tattoos, \"I'm just a simple boring Midwest guy,\" he said.";
captions[5] = "Tattoo of an image of his mother playing basketball on the arm of Minnesota Timberwolves Shabazz Muhammad. \"It's two angels symbolizing my mom playing basketball in college and high school.\"";
captions[6] = "Tattoo of a Serbian warrior standing a pile of skulls on the arm of Minnesota Timberwolves Nikola Pekovic.";
captions[7] = "Tattoo of a symbol for \"friendship\" on the wrist of Minnesota Timberwolves Ricky Rubio.";
captions[8] = "A tattoo of a phoenix rising on the arm of Ronny Turiaf. \"It symbolizes dying and reliving and getting better as a human being all the time,\" he said.";
captions[9] = "Tattoo of a lion on the arm of Minnesota Timberwolves  Derrick Williams. \"All my tattoos are of Greco-Roman statues,\" said Williams. \"I love lions, they have that look, they're always on tack, you always have to have that mentality.\"";

function tattoosInit() {
	//console.log("ready");
	
	$("#detail").hide();
	$("#shareCon").hide();

	$( ".draggable" ).draggable({ revert: "valid" });
	$( ".droppable" ).droppable({
      hoverClass: "boxHover",
      drop: function( event, ui ) {
        $( this )
         var dragid = ui.draggable.attr("id").substring(1, ui.draggable.attr("id").length);
         var dropid = $(this).attr("id").substring(1, $(this).attr("id").length);
         var dataid = $(this).attr("data-id")
         if (dragid == dropid) {
	   			$("#" + dragid + "inside").css("display", "block");
				$("#t" + dropid + " .messageright").css("display", "inline").delay(1500).fadeOut( "slow" );
				ui.draggable.css("visibility", "hidden");
				attempts ++;
				correct ++;
				$("#numAttempts").text(attempts);
				$("#numCorrect").text(correct);
				showInfo(dataid);

				$(this).click(function() {
					showInfo(dataid);
				});

				if (correct == 10) {
					$("#share").text("It took you " + attempts + " attempts to match them all. Share your score!")
					$("shareBtns").html("hello world");
					$("#shareCon").show();
				}

	         } else {
	         	//console.log("wrong");
	         	$("#t" + dropid + " .messagewrong").css("display", "inline").delay(1500).fadeOut( "slow" );
	         	attempts ++;
	         	$("#numAttempts").text(attempts);
	         }
      	}
    });

    $( ".droppable2" ).droppable();

    $("#detail").click(function() {
		$("#detail").hide();
		$("#detail").animate({ opacity: '0' }, 500);
	});

} 

function showInfo(which) {
	$("#detail").show();
	$("#detail").animate({ opacity: '1' }, 500);
	$("#detail #desc").text(captions[which]);

	var img = new Image();
	img.src = "imgs/big-" + allNames[which] + ".jpg";
	$("#detail #photoCon").empty();
	$("#detail #photoCon").append(img);


}


$(document).ready(function() {
	tattoosInit();

});