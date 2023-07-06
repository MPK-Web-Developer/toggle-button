"use strict";

const cycleTypeInput = document.querySelector(".cycle-type-input");
const advantagesShaftDrive = document.querySelectorAll(
	".advantages-shaft-drive"
);
const advantagesBeltDrive = document.querySelectorAll(".advantages-belt-drive");
const cycleTypeCheckBox = document.querySelector(".cycle-type-label");
const cycleTypeToggle = document.querySelector(".cycle-type-toggle");

cycleTypeCheckBox.addEventListener("click", function () {
	cycleTypeToggle.click();
});
cycleTypeToggle.addEventListener("click", function () {
	cycleTypeCheckBox.click();
});

cycleTypeInput.addEventListener("change", function () {
	if (this.checked) {
		advantagesShaftDrive.forEach((item) => {
			!item.classList.contains("cycle-type-hidden")
				? item.classList.add("cycle-type-hidden")
				: "";
		});
		advantagesBeltDrive.forEach((item) => {
			item.classList.contains("cycle-type-hidden")
				? item.classList.remove("cycle-type-hidden")
				: "";
		});
	} else {
		advantagesShaftDrive.forEach((item) => {
			item.classList.contains("cycle-type-hidden")
				? item.classList.remove("cycle-type-hidden")
				: "";
		});
		advantagesBeltDrive.forEach((item) => {
			!item.classList.contains("cycle-type-hidden")
				? item.classList.add("cycle-type-hidden")
				: "";
		});
	}
});

/*
bannerItemLink.forEach((item, index) => {
  item.addEventListener('click', () => {
    bannerPopupAll.forEach(item => {
      !item.classList.contains('popup-hidden')
        ? item.classList.add('popup-hidden')
        : '';
      popupOverlay.classList.add('popup-hidden');
    });
    bannerPopupAll[index].classList.contains('popup-hidden')
      ? bannerPopupAll[index].classList.remove('popup-hidden')
      : '';
    popupOverlay.classList.remove('popup-hidden');
  });
});
closePopupAll.forEach((item, index) => {
  item.addEventListener('click', () => {
    !bannerPopupAll[index].classList.contains('popup-hidden')
      ? bannerPopupAll[index].classList.add('popup-hidden')
      : '';
    popupOverlay.classList.add('popup-hidden');
  });
});
*/
