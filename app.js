 function changePhoto() {
    let pics = ["/images/4.jpg", "/images/2.jpg", "/images/3.jpg", "/images/1.jpg"];
    let image = document.getElementById("flip-image");
    let i = 0;
    setInterval(function () {
        if (i > 3) {
            i = 0;
        }
        image.src = pics[i++];
    }, 5000);
}