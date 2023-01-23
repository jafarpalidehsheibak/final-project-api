const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const myForm = document.querySelector("#myForm");

if (myForm) {
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email == null || email == "") {
      alert("ERROR!!!! \n email is Empty");
      return false;
    } else if (password.length < 6) {
      alert("password length is less than 6 character");
    } else {
      window.location.href = "index.html";
    }
  });
}

const el = document.querySelector(".pro-container");

const load = async () => {
  try {
    const res = await fetch("https://inshorts.deta.dev/news?category=science");
    final = await res.json();
    showResult(final.data);
    // showSelect(final);
    console.log(final.data);
  } catch (err) {
    console.log(err);
  }
};
load();

let final = [];
const showResult = (chars) => {
  const res = chars
    .map((char) => {
      return `
               
            <div class="pro">
          <img src="${char.imageUrl}" alt="" />
          <div class="desc">
            <span>${char.author}</span>
            <h5>${char.date}</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
              <a href="#"><i class="fa fa-shopping-cart cart"></i></a>
        </div>

    `;
    })
    .join("");
  el.innerHTML = res;
};
