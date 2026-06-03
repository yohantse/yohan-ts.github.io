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
  
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalAmenities = document.getElementById('modal-amenities');
  const modalRoomTypeInput = document.getElementById('modal-room-type');
  const modalBookingForm = document.getElementById('modal-booking-form');

  // Room definitions for Top Ten Hotel
  const roomData = {
    'single': {
      title: 'Cozy Single Room',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop',
      price: '$70 / Night',
      desc: 'Perfect for the independent traveler or busy executive. Our Cozy Single Room offers a space optimized for rest and productivity. Features a premium single bed, a writing desk, fast fiber Wi-Fi, satellite TV, and a private modern bathroom with complimentary slippers.',
      amenities: ['Work Desk & Chair', 'Comfort Single Bed', 'Gigabit Wi-Fi Connection', 'Satellite Smart TV', 'In-room Safety Deposit Box', 'Complimentary Slippers']
    },
    'twin': {
      title: 'Superior Twin Room',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
      price: '$95 / Night',
      desc: 'Generously designed with double single beds, the Superior Twin Room is perfect for colleagues, travel partners, or small families. Enveloped in warm tones, the room features large windows showing garden views, coffee making tools, and daily housekeeping.',
      amenities: ['Two Comfort Twin Beds', 'Garden Window View', 'In-room Coffee & Tea facilities', 'High-speed Wi-Fi', 'Personal Safety Safe', 'Individual Bath Amenities']
    },
    'double': {
      title: 'Executive Double Room',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop',
      price: '$110 / Night',
      desc: 'Experience upgraded boutique comfort. The Executive Double Room offers a spacious king bed, deep textures, and an integrated relaxation chair. Ideal for business travelers seeking extra room to unwind after a productive day in Addis Ababa.',
      amenities: ['Comfort King Bed', 'Lounge Sitting Area', 'Writing Desk / Workspace', 'Flat-screen Cable TV', 'In-room Minibar setup', 'Premium Toiletries']
    },
    'suite': {
      title: 'Top Ten Ambassador Suite',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      price: '$160 / Night',
      desc: 'Our flagship accommodation. The Top Ten Ambassador Suite is a masterclass in modern comfort. It features a private master bedroom with a king bed, a separate visual lounge for meetings or leisure, a VIP dining counter, and a scenic balcony overlooking Asmara Road.',
      amenities: ['Separate Master Bedroom', 'Prestige Living Room Lounge', 'Private Balcony Area', 'Complimentary Airport Transfer', 'Espresso Maker', '24-hour Executive Concierge']
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
    
    if (modalRoomTypeInput) {
      modalRoomTypeInput.value = data.title;
    }

    if (modalAmenities) {
      modalAmenities.innerHTML = '';
      data.amenities.forEach(amenity => {
        const li = document.createElement('li');
        li.innerHTML = `<span>✓</span> ${amenity}`;
        modalAmenities.appendChild(li);
      });
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeRoomModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const roomId = btn.getAttribute('data-room-id');
      openRoomModal(roomId);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeRoomModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeRoomModal();
      }
    });
  }

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

      closeRoomModal();
      showToast(
        'Inquiry Submitted',
        `Thank you ${guestName}! Our booking agent will contact you regarding the ${roomType} shortly.`
      );
      modalBookingForm.reset();
    });
  }

  // ==========================================================================
  // 6. SERVICES INTERACTIVE ACTIONS
  // ==========================================================================
  const serviceInquireBtns = document.querySelectorAll('.service-inquire-btn');
  const contactMessageInput = document.getElementById('contact-message');
  const contactNameInput = document.getElementById('contact-name');
  
  if (serviceInquireBtns.length > 0) {
    serviceInquireBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const serviceName = btn.getAttribute('data-service-name');
        if (contactMessageInput) {
          contactMessageInput.value = `Hi, I would like to inquire about booking the "${serviceName}" facility at Top Ten Hotel Addis Ababa. Please share availability, layouts, and packages.`;
        }
        
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        setTimeout(() => {
          if (contactNameInput) {
            contactNameInput.focus();
          }
        }, 800);
      });
    });
  }

  // ==========================================================================
  // 7. INTERACTIVE GALLERY SLIDER
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
  // 8. CONTACT FORM SUBMISSION
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
});
