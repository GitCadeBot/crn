document.addEventListener('DOMContentLoaded', () => {
    // Get references to the mobile menu button and the mobile menu itself
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Add click event listener to the mobile menu button
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'hidden' class on the mobile menu to show/hide it
            mobileMenu.classList.toggle('hidden');
            // Toggle the 'open' class on the button for the hamburger animation
            mobileMenuButton.classList.toggle('open');
        });

        // Close mobile menu when a navigation link is clicked
        // This makes sure the menu collapses after selection on mobile
        const mobileNavLinks = mobileMenu.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.classList.remove('open');
            });
        });
    }

    // Handle smooth scrolling for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            // Get the target element using the href attribute
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent default form submission

            // Display a loading message
            formMessage.classList.remove('hidden', 'text-green-500', 'text-red-500');
            formMessage.classList.add('text-yellow-400');
            formMessage.textContent = 'Sending your message...';

            // Simulate API call (replace with actual backend submission in a real application)
            try {
                // In a real application, you would send data to a server here.
                // Example: const response = await fetch('/api/contact', { method: 'POST', body: new FormData(contactForm) });
                // For this example, we'll just simulate a delay.
                await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2-second delay

                // Simulate success
                formMessage.classList.remove('text-yellow-400');
                formMessage.classList.add('text-green-500');
                formMessage.textContent = 'Message sent successfully! We will get back to you soon.';
                contactForm.reset(); // Clear the form
            } catch (error) {
                // Simulate error
                formMessage.classList.remove('text-yellow-400');
                formMessage.classList.add('text-red-500');
                formMessage.textContent = 'Failed to send message. Please try again later.';
                console.error('Form submission error:', error);
            }
            formMessage.classList.remove('hidden'); // Ensure message is visible
        });
    }
});
