// window.addEventListener('scroll', function() {
//     const header = document.querySelector('header');
//     if (window.scrollY > 0) {
//       header.classList.add('bg-blur');
//     } else {
//       header.classList.remove('bg-blur');
//     }
//   });


      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 0) {
          header.classList.add("bg-blur");
        } else {
          header.classList.remove("bg-blur");
        }
      });

      // Button color change functionality
      const btnDonation = document.getElementById('btn-donation');
      const btnHistory = document.getElementById('btn-history');

      function toggleActiveButton(activeBtn, inactiveBtn) {
        activeBtn.classList.add('btn-active');
        activeBtn.classList.remove('btn-inactive');
        inactiveBtn.classList.add('btn-inactive');
        inactiveBtn.classList.remove('btn-active');
      }

      btnDonation.addEventListener('click', function () {
        toggleActiveButton(btnDonation, btnHistory);
      });

      btnHistory.addEventListener('click', function () {
        toggleActiveButton(btnHistory, btnDonation);
      });

   
    