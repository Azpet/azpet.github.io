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
    var particle = $("<div>", { class: "particle", style: "left:" + (Math.random() * 20 + 50) + "70%;" });
    particle.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", destroy);
    $(".header-particles").append(particle);


    setTimeout(spawnParticle, Math.random() * 1500 + 50);
}

function destroy() {
    $(this).remove();
}