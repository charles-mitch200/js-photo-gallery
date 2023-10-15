const btnElem = document.getElementById("btn");
const errorMessageElem = document.getElementById("error-msg");
const galleryElem = document.getElementById("gallery");

const apiKey = "Ipp7QqdDb52hhTFuJvwpuoUDf10Gdfvc_HY6ugv9dp4";

// function to fetch images from unsplash API
const fetchImage = async () => {
  const inputValue = document.getElementById("input").value;
  // The number of images requested should be between 0 and 11
  if (inputValue > 10 || inputValue < 1) {
    errorMessageElem.style.display = "block";
    errorMessageElem.innerText = "Number should be between 0 and 11!";
    return;
  }

  let imgs = "";

  try {
    btnElem.style.display = "none";

    //  Add a spinner when the images are loading
    const loading = `<img src="spinner.svg" />`;
    galleryElem.innerHTML = loading;
    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.floor(
        Math.random() * 1000
      )}&client_id=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // update the gallery element with the fetched images
          data.forEach((pic) => {
            imgs += `
            <img src=${pic.urls.small} alt="image"/>
            `;
            galleryElem.style.display = "block";
            galleryElem.innerHTML = imgs;
            btnElem.style.display = "block";
            errorMessageElem.style.display = "none";
          });
        }
      });

    errorMessageElem.style.display = "none";
  } catch (error) {
    errorMessageElem.style.display = "block";
    errorMessageElem.innerText = "An error occurred. Please try again later!";
    btnElem.style.display = "block";
    btnElem.style.display = "none";
  }
};

btnElem.addEventListener("click", fetchImage);
