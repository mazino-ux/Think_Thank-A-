// TYPING EFFECT==========================================================
const typingTextElement = document.getElementById('typing');
const words = ['Game Lovers!', 'Games'];
let currentIndex = 0;
let currentWord = '';
let charIndex = 0;
let isBackspacing = false;

function updateTypingText() {
  if (!isBackspacing) {
    if (charIndex < currentWord.length) {
      typingTextElement.textContent = currentWord.slice(0, charIndex + 1);
      charIndex++;
    } else {
      isBackspacing = true;
    }
  } else {
    if (charIndex > 0) {
      typingTextElement.textContent = currentWord.slice(0, charIndex - 1);
      charIndex--;
    } else {
      isBackspacing = false;
      currentIndex = (currentIndex + 1) % words.length;
      currentWord = words[currentIndex];
    }
  }
}
function startTypingEffect() {
  currentWord = words[currentIndex];
  setInterval(updateTypingText, 100);
}

startTypingEffect();
// ----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {

  document.addEventListener('mousemove', function(e) {
    const focusBoxes = document.querySelectorAll('.focus-box');
    focusBoxes.forEach(box => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const boxRect = box.getBoundingClientRect();
        const boxX = boxRect.left + boxRect.width / 2;
        const boxY = boxRect.top + boxRect.height / 2;
        
        const x = (mouseX - boxX) / boxRect.width * 50;
        const y = (mouseY - boxY) / boxRect.height * 50;
        
        box.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
    });
});

  
    const lime = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      });
      
      const hiddenElements = document.querySelectorAll('.hidden');
      const hidden1Elements = document.querySelectorAll('.hidden1');
      const hidden2Elements = document.querySelectorAll('.hidden2');
      hiddenElements.forEach((el) => lime.observe(el));
      hidden1Elements.forEach((el) => lime.observe(el));
      hidden2Elements.forEach((el) => lime.observe(el));
    
    
      window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY + 20;
    
        sections.forEach(section => {
          if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                link.classList.add('active'); 
              }
            });
          }
        });
    
      }); 
    const elements = document.querySelectorAll('.scroll-element[data-unset="true"]');
            
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.removeAttribute('data-unset'); // Remove the attribute to prevent reanimation
                observer.unobserve(element); // Stop observing this element
            }
        });
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
    
    // -----------------------------------------------------------------------
    const pic = document.querySelectorAll('.right-scrolling[data-unset="true"]');
            
    const observe = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
                element.removeAttribute('data-unset'); // Remove the attribute to prevent reanimation
                observer.unobserve(element); // Stop observing this element
            }
        });
    });
    
    pic.forEach(element => {
        observe.observe(element);
    });
    // ---------------------------------------------------------------------------
    const variable = document.querySelectorAll('.left-scrolling[data-unset="true"]');
            
    const observation = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.removeAttribute('data-unset'); // Remove the attribute to prevent reanimation
                observer.unobserve(element); // Stop observing this element
            }
        });
    });
    
    variable.forEach(element => {
        observation.observe(element);
    });
    // ---------------------------------------------------------------------------
    const scrolla = document.querySelectorAll('.scrolling[data-unset="true"]');
            
    const another = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.removeAttribute('data-unset'); // Remove the attribute to prevent reanimation
                observer.unobserve(element); // Stop observing this element
            }
        });
    });
    
    scrolla.forEach(element => {
        another.observe(element);
    });
    
});
// ----------------------------------------------------------------------




document.addEventListener("DOMContentLoaded", function(){
  // Function to show the popup when scrolling to the end of the webpage
window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;
  let documentHeight = document.body.clientHeight;
  let scrollEnd = documentHeight - windowHeight;

  // Adjust this value if you want the popup to appear earlier or later
  let scrollThreshold = scrollEnd + 4000;
 
  if (scrollPosition >= scrollThreshold) {
      showPopup();
  }
});


// --------------------------------------------------------SCROLL UP*****************

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if(pos > 190){
      scrollProgress.style.display = "grid";
  } else {
      scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(var(--themeColor) ${scrollValue}%, #00000071 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// --------------------------------------------------------LOADER ...*****************

  setTimeout(function () {
      // Hide loader and show content
      document.getElementById("loader-container").style.display = "none";
      document.getElementById("contents").style.display = "block";
      // document.getElementById("nav").style.display = "block";
  }, 2000); 





})
