document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. HEADER SCROLL EFFECT
  // ==========================================================================
  const header = document.querySelector('.header-main');
  
  function checkScroll() {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }
  
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Run once on load to handle pre-scrolled refreshes

  // ==========================================================================
  // 2. MOBILE MENU INTERACTION
  // ==========================================================================
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // ==========================================================================
  // 3. TOAST NOTIFICATION SYSTEM
  // ==========================================================================
  const toast = document.getElementById('booking-toast');
  const toastTitle = document.getElementById('toast-title');
  const toastMessage = document.getElementById('toast-message-text');

  function showToast(title, message) {
    if (!toast) return;
    
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }

  // ==========================================================================
  // 4. BOOKING WIDGET VALIDATION
  // ==========================================================================
  const bookingForm = document.getElementById('main-booking-form');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const checkin = document.getElementById('checkin').value;
      const checkout = document.getElementById('checkout').value;
      const guests = document.getElementById('guests').value;

      if (!checkin || !checkout) {
        showToast('Incomplete Booking', 'Please select both check-in and check-out dates.');
        return;
      }

      const dateIn = new Date(checkin);
      const dateOut = new Date(checkout);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (dateIn < today) {
        showToast('Invalid Date', 'Check-in date cannot be in the past.');
        return;
      }

      if (dateOut <= dateIn) {
        showToast('Invalid Date', 'Check-out date must be after the check-in date.');
        return;
      }

      // Format success message
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      const formattedIn = dateIn.toLocaleDateString('en-US', options);
      const formattedOut = dateOut.toLocaleDateString('en-US', options);

      showToast(
        'Availability Checked', 
        `Rooms available for ${guests} guest(s) from ${formattedIn} to ${formattedOut}!`
      );
    });
  }

  // ==========================================================================
  // 5. ROOM DETAILS DYNAMIC MODAL
  // ==========================================================================
  const modal = document.getElementById('room-modal');
  const modalClose = document.getElementById('modal-close');
  const viewDetailBtns = document.querySelectorAll('.view-detail-btn');
  
  // Modal Elements to update
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalAmenities = document.getElementById('modal-amenities');
  const modalRoomTypeInput = document.getElementById('modal-room-type');
  const modalBookingForm = document.getElementById('modal-booking-form');

  // Room definitions with description & specific amenities
  const roomData = {
    'deluxe': {
      title: 'Deluxe Room',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
      price: '$120 / Night',
      desc: 'Our Deluxe Room offers a contemporary design infused with classic elegance. Featuring a plush king-size bed, a modern workspace, and stunning panoramic views of the Addis Ababa skyline. Relax in luxury with premium linen, high-speed fiber-optic Wi-Fi, and a spa-inspired rain shower.',
      amenities: ['City View Skyline', 'King Bed (Ultra Comfort)', 'High-speed Fiber Wi-Fi', 'Flat-screen Smart TV', 'In-room Minibar', '24-hour Room Service']
    },
    'executive': {
      title: 'Executive Suite',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop',
      price: '$220 / Night',
      desc: 'Designed for discerning travelers, the Executive Suite features a separate living area perfect for hosting guests or conducting business. Enjoy exclusive VIP access, high-end finishing, custom espresso machines, and high-touch concierge services. Experience the gold standard of Ethiopian comfort.',
      amenities: ['Separate Living Room Area', 'VIP Executive Lounge Access', 'Espresso Machine', 'Luxury Robe & Slippers', 'Deep Soaking Bath Tub', 'Complimentary Airport Transfer']
    },
    'family': {
      title: 'Family Room',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
      price: '$180 / Night',
      desc: 'Spacious and welcoming, our Family Room is designed to provide maximum comfort for families or groups. Features two queen beds, custom child-friendly configurations, and layout options that keep everyone together while maintaining privacy. Your perfect home-away-from-home.',
      amenities: ['Two Queen Beds', 'Connecting Room Options', 'Kids Welcome Package', 'Spacious Work/Dining Area', 'In-room Safety Deposit Box', 'Buffet Breakfast Included']
    }
  };

  function openRoomModal(roomId) {
    const data = roomData[roomId];
    if (!data || !modal) return;

    modalTitle.textContent = data.title;
    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalPrice.textContent = data.price;
    modalDesc.textContent = data.desc;
    
    // Set hidden room type input in modal form
    if (modalRoomTypeInput) {
      modalRoomTypeInput.value = data.title;
    }

    // Render amenities
    if (modalAmenities) {
      modalAmenities.innerHTML = '';
      data.amenities.forEach(amenity => {
        const li = document.createElement('li');
        li.innerHTML = `<span>✓</span> ${amenity}`;
        modalAmenities.appendChild(li);
      });
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  }

  function closeRoomModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Unlock scrolling
  }

  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const roomId = btn.getAttribute('data-room-id');
      openRoomModal(roomId);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeRoomModal);
  }

  // Close modal when clicking outside content area
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeRoomModal();
      }
    });
  }

  // Modal Inquiry Form Submit
  if (modalBookingForm) {
    modalBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const roomType = document.getElementById('modal-room-type').value;
      const guestName = document.getElementById('modal-booking-name').value;
      const guestEmail = document.getElementById('modal-booking-email').value;
      const guestPhone = document.getElementById('modal-booking-phone').value;

      if (!guestName || !guestEmail || !guestPhone) {
        showToast('Required Fields', 'Please fill out all contact information fields.');
        return;
      }

      // Success
      closeRoomModal();
      showToast(
        'Inquiry Submitted',
        `Thank you ${guestName}! Our concierge will contact you regarding the ${roomType} shortly.`
      );
      modalBookingForm.reset();
    });
  }

  // ==========================================================================
  // 6. INTERACTIVE GALLERY SLIDER
  // ==========================================================================
  const sliderTrack = document.querySelector('.gallery-track');
  const slides = document.querySelectorAll('.gallery-slide');
  const prevBtn = document.querySelector('.gallery-btn-prev');
  const nextBtn = document.querySelector('.gallery-btn-next');
  const dotsContainer = document.querySelector('.gallery-dots');

  if (sliderTrack && slides.length > 0) {
    let currentIndex = 0;
    const slideCount = slides.length;
    let autoSlideInterval;

    // Create Navigation Dots
    slides.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.classList.add('gallery-dot');
      if (idx === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.gallery-dot');

    function updateSlider() {
      sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dots
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateSlider();
    }

    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
      resetAutoSlide();
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
      });
    }

    // Auto sliding
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 6000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    startAutoSlide();
  }

  // ==========================================================================
  // 7. CONTACT FORM SUBMISSION
  // ==========================================================================
  const contactForm = document.getElementById('hotel-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = contactForm.querySelector('input[type="text"]').value;
      const email = contactForm.querySelector('input[type="email"]').value;
      const message = contactForm.querySelector('textarea').value;

      if (!name || !email || !message) {
        showToast('Required Fields', 'Please fill in all the contact form fields.');
        return;
      }

      showToast(
        'Message Received',
        `Thank you, ${name}! Your inquiry has been sent to our guest support team.`
      );
      contactForm.reset();
    });
  }
  // ==========================================================================
  // 8. SERVICES INTERACTIVE ACTIONS
  // ==========================================================================
  const serviceInquireBtns = document.querySelectorAll('.service-inquire-btn');
  const contactMessageInput = document.getElementById('contact-message');
  const contactNameInput = document.getElementById('contact-name');
  
  if (serviceInquireBtns.length > 0) {
    serviceInquireBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const serviceName = btn.getAttribute('data-service-name');
        if (contactMessageInput) {
          contactMessageInput.value = `Hi, I would like to inquire about booking "${serviceName}" at Tewodros Belay International Hotel. Please share details regarding availability, pricing options, and guest package capacities.`;
        }
        
        // Scroll smoothly to contact form
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Focus name input field after scroll finishes
        setTimeout(() => {
          if (contactNameInput) {
            contactNameInput.focus();
          }
        }, 800);
      });
    });
  }
});
