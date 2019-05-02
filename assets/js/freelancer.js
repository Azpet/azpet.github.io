(function ($) {
  "use strict"; // Start of use strict

  /* ==================== MODALS ==================== */
  $('.portfolio-item').magnificPopup({
    modal: true
  });

  $('.portfolio-item').on('mfpOpen', openModal);
  $('.portfolio-item').on('mfpClose', dismissModal);

  // Open Modal
  function openModal(e) {
    e.preventDefault();
    window.location.href = "#modal";
  }

  // Dismiss and close Modal
  function dismissModal(e) {
    if (window.location.toString().indexOf('#modal') >= 0)
      window.history.back(); // Trigger the back button
    e.preventDefault();
  }

  // Close Modal
  function closeModal(e) {
    e.preventDefault();
    $.magnificPopup.close();
  }

  // Modal dismiss click event
  $(document).on('click', '.portfolio-modal-dismiss', closeModal);

  // Front/back button event
  $(window).on('popstate', function (e) {
    // Only if the window location doesn't contain #modal
    if (window.location.toString().indexOf('#modal') == -1)
      closeModal(e);
  });

})(jQuery); // End of use strict
