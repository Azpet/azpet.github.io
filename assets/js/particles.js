$(function () {
    // Do not use particles if user is on mobile
    if(isMobile)
        return;

    // Change css
    $("header").css("background-image", "none");
    $("header").css("background-color", "white");

    spawnParticle();
});

function spawnParticle() {
    var particle = $("<div>", { 
        class: "particle", 
        style: "left:" + (Math.random() * 20 + 50) + "70%;"});
    particle.css('transform', 'scale(' + Math.max(0.2, Math.random()) + ')');
    var particle_bg = $("<div>", { 
        class: "particle-background", 
        style: "left:" + (Math.random() * 20 + 50) + "70%;"});
    particle_bg.css('transform', 'scale(' + Math.max(0.2, Math.random()) + ')');


    particle.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", destroy);
    particle_bg.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", destroy);
    $(".header-particles").append(particle);
    $(".header-particles").append(particle_bg);

    setTimeout(spawnParticle, 400);
}

function destroy() {
    $(this).remove();
}