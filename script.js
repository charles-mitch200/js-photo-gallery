const btnElem = document.getElementById("btn");
const errorMessageElem = document.getElementById("error-msg");

const apiKey = "Ipp7QqdDb52hhTFuJvwpuoUDf10Gdfvc_HY6ugv9dp4";

const fetchImage = async () => {
  const inputValue = document.getElementById("input").value;
  if (inputValue > 10 || inputValue < 1) {
    errorMessageElem.style.display = "block";
    errorMessageElem.innerText = "Number should be between 0 and 11!";
    return;
  }

  await fetch(
    `https://api.unsplash.com/photos?per_page=${inputValue}&page=1&client_id=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));

  errorMessageElem.style.display = "none";
};

btnElem.addEventListener("click", fetchImage);
