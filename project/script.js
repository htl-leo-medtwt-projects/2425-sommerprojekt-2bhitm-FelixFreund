let index = 0;
        const slides = document.querySelectorAll(".slide");
        
        function showSlide(i, direction) {
            slides.forEach(slide => {
                slide.style.opacity = "0";
                slide.style.transform = `translateX(${direction * 100}%)`;
            });
            slides[i].style.opacity = "1";
            slides[i].style.transform = "translateX(0)";
        }
        
        function changeSlide(step) {
            let direction = step > 0 ? 1 : -1;
            index = (index + step + slides.length) % slides.length;
            showSlide(index, direction);
        }
        
        function autoSlide() {
            changeSlide(1);
            setTimeout(autoSlide, 5000);
        }
        
        setTimeout(autoSlide, 5000);