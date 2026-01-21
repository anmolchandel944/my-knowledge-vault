
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target); // Reveal once
            }
        });
    }, { 
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.15 
    });

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
