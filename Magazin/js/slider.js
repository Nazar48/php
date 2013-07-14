window.onload = function() {
            window.setInterval(function() {
                next_image(document.getElementById("slider"));
            }, 2000);
        }

        function next_image(slider) {
            if (slider.scrollLeft < 1400) {
                slider.scrollLeft += 700;
            } else {
                slider.scrollLeft = 0;
            }
        }


