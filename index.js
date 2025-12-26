// Cursor glow effect
        const cursorGlow = document.getElementById('cursorGlow');
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Skill cards animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-card, .project-card').forEach(card => {
            observer.observe(card);
        });

        // Click interactions for skill cards
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('click', function() {
                // Remove active class from all cards
                document.querySelectorAll('.skill-card').forEach(c => {
                    c.classList.remove('active', 'clicked');
                });
                
                // Add active and clicked class to this card
                this.classList.add('active', 'clicked');
                
                // Remove clicked class after animation
                setTimeout(() => {
                    this.classList.remove('clicked');
                }, 600);
            });
        });

        // Click interactions for project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function() {
                // Toggle active class
                const wasActive = this.classList.contains('active');
                
                // Remove active from all
                document.querySelectorAll('.project-card').forEach(c => {
                    c.classList.remove('active');
                });
                
                // Add active to clicked card if it wasn't active
                if (!wasActive) {
                    this.classList.add('active');
                    
                    // Scroll the card into view
                    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        });

        // Form submission - Send to WhatsApp
        function handleSubmit() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Format the message for WhatsApp
                const whatsappMessage = `*New Client Inquiry*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Message:* ${encodeURIComponent(message)}`;
                
                // Your WhatsApp number (with country code, no + or spaces)
                const whatsappNumber = '2347045613601';
                
                // Open WhatsApp with pre-filled message
                window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
                
                // Clear form
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            } else {
                alert('Please fill in all fields.');
            }
        }

        // Parallax effect on floating shapes
        document.addEventListener('mousemove', (e) => {
            const shapes = document.querySelectorAll('.shape');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 50;
                shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });