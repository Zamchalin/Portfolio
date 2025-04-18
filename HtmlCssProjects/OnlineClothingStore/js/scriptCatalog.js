const filterButtonEl = document.querySelector(".filter");
const filterMenuEl = document.querySelector(".filter_menu");
console.log(filterButtonEl);
console.log(filterMenuEl);

filterButtonEl.addEventListener("click", () => {
  filterMenuEl.style.display =
    filterMenuEl.style.display === "none"
      ? (filterMenuEl.style.display = "flex")
      : (filterMenuEl.style.display = "none");

  filterButtonEl.style.color =
    filterButtonEl.style.color === "rgb(0, 0, 0)"
      ? (filterButtonEl.style.color = "rgb(241, 109, 127")
      : (filterButtonEl.style.color = "rgb(0, 0, 0)");
});

const buttonSizeEl = document.querySelector(".button_setting_size");
const sizeCheckBoxEl = document.querySelector(".checkbox_sizes");

buttonSizeEl.addEventListener("click", () => {
  sizeCheckBoxEl.style.display =
    sizeCheckBoxEl.style.display === "none"
      ? (sizeCheckBoxEl.style.display = "flex")
      : (sizeCheckBoxEl.style.display = "none");
});
