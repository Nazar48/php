window.onload = function() {
            window.setInterval(function() {
                next_image(document.getElementById("slider"));
            }, 2000);
                //document.getElementById("href_enter").onClick = function() {
                //document.getElementById("enter").style.display = "block";
}
        

        function next_image(slider) {
            if (slider.scrollLeft < 1400) {
                slider.scrollLeft += 700;
            } else {
                slider.scrollLeft = 0;
            }
        }


