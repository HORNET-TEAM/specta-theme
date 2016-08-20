/*SIDE SIDEBAR*/
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    if ($( "#wrapper" ).hasClass( "toggled" )){
        $("#wrapper").removeClass("toggled");
    }
    else{
        $("#wrapper").addClass("toggled");
    }
});
/* FIN SIDENAV*/