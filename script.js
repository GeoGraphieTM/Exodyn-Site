// === Starfield Generator ===
(() => {
    const stars = document.getElementById('stars');
    const createStar = () => {
      const s = document.createElement('div');
      s.className = 'star';
  
      const rand = Math.random();
      s.classList.add(rand < 0.6 ? 'small' : rand < 0.9 ? 'medium' : 'large');
  
      s.style.top = `${Math.random() * 100}%`;
      s.style.left = `${Math.random() * 100}%`;
      s.style.animationDuration = `${2 + Math.random() * 3}s`;
  
      return s;
    };
  
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 120; i++) fragment.appendChild(createStar());
    stars.appendChild(fragment);
  })();
  
  // === Navbar Scroll Shrink ===
  (() => {
    const navbar = document.getElementById('navbar');
    const hero = document.querySelector('.hero');
  
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroBottom = hero.offsetTop + hero.offsetHeight;
  
      navbar.classList.toggle('compact', scrollY > heroBottom - 80);
    });
  })();
  
  // === Hero Image Tilt ===
  (() => {
    const container = document.querySelector('.hero-image');
    const image = container.querySelector('img');
  
    container.addEventListener('mousemove', e => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
  
      const centerX = width / 2;
      const centerY = height / 2;
  
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
  
      image.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });
  
    container.addEventListener('mouseenter', () => {
      image.style.transition = 'transform 0.1s ease-out';
    });
  
    container.addEventListener('mouseleave', () => {
      image.style.transition = 'transform 0.6s ease';
      image.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  })();
  
  // === Custom Cursor ===
  (() => {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
  
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
  
    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });
  
    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.25;
      outlineY += (mouseY - outlineY) * 0.25;
      outline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };
    animate();
  })();
  