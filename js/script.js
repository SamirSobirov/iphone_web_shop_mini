let plus_block1 = document.querySelector("#plusb1");
let plus_block2 = document.querySelector("#plusb2");
let plus1 = document.querySelector("#plus1");
let plus2 = document.querySelector("#plus2");
plus_block1.onmouseenter = () => {
  plus1.setAttribute("src", "./img/main_top (2).png");
};
plus_block1.onmouseleave = () => {
  plus1.setAttribute("src", "./img/main_top (1).png");
};
plus_block2.onmouseenter = () => {
  plus2.setAttribute("src", "./img/main_top (2).png");
};
plus_block2.onmouseleave = () => {
  plus2.setAttribute("src", "./img/main_top (1).png");
};

let collection = document.querySelector("#iphone_collec");

let mmrbox1 = document.querySelector("#mmrbox1");
let mmrbox2 = document.querySelector("#mmrbox2");

mmrbox1.onclick = () => {
  mmrbox1.style.border = "2px solid blue";
  mmrbox2.style.border = "";
  collection.setAttribute("src", "./img/iphone (2).jpg");
};
mmrbox2.onclick = () => {
  mmrbox2.style.border = "2px solid blue";
  mmrbox1.style.border = "";
  collection.setAttribute("src", "./img/iphone (6).jpg");
};

let plus_block3 = document.querySelector("#plus_block3");
let plus3 = document.querySelector("#plus3");
plus_block3.onmouseenter = () => {
  plus3.setAttribute("src", "./img/main_top (2).png");
};
plus_block3.onmouseleave = () => {
  plus3.setAttribute("src", "./img/main_top (1).png");
};

let m_m2_circle_box = document.querySelector("#mm2cb");
let m_m2_circle = document.querySelector(".m_m2_circle1");

let m_m2_circle_box1 = document.querySelector("#mm2cb1");
let m_m2_circle1 = document.querySelector(".m_m2_circle2");

let m_m2_circle_box2 = document.querySelector("#mm2cb2");
let m_m2_circle2 = document.querySelector(".m_m2_circle3");

let m_m2_circle_box3 = document.querySelector("#mm2cb3");
let m_m2_circle3 = document.querySelector(".m_m2_circle4");

let m_m2_circle_box4 = document.querySelector("#mm2cb4");
let m_m2_circle4 = document.querySelector(".m_m2_circle5");

let m_m2_circle_box5 = document.querySelector("#mm2cb5");
let m_m2_circle5 = document.querySelector(".m_m2_circle22");

let color_write = document.querySelector("#color_write");

m_m2_circle.onclick = () => {
  m_m2_circle_box.style.border = "2px solid blue";
  collection.setAttribute("src", "./img/iphone (1).jpg");
  color_write.innerHTML = "Color - Blue";
  m_m2_circle_box1.style.border = "";
  m_m2_circle_box2.style.border = "";
  m_m2_circle_box3.style.border = "";
  m_m2_circle_box4.style.border = "";
  m_m2_circle_box5.style.border = "";
};
m_m2_circle.onmouseenter = () => {
  color_write.innerHTML = "Color - Blue";
};
m_m2_circle.onmouseleave = () => {
  color_write.innerHTML = "Color -";
};

m_m2_circle1.onclick = () => {
  m_m2_circle_box1.style.border = "2px solid blue";
  collection.setAttribute("src", "./img/iphone (4).jpg");
  color_write.innerHTML = "Color - Purple";
  m_m2_circle_box.style.border = "";
  m_m2_circle_box2.style.border = "";
  m_m2_circle_box3.style.border = "";
  m_m2_circle_box4.style.border = "";
  m_m2_circle_box5.style.border = "";
};
m_m2_circle1.onmouseenter = () => {
  color_write.innerHTML = "Color - Purple";
};
m_m2_circle1.onmouseleave = () => {
  color_write.innerHTML = "Color -";
};
m_m2_circle2.onclick = () => {
  m_m2_circle_box2.style.border = "2px solid blue";
  collection.setAttribute("src", "./img/iphone (6).jpg");
  color_write.innerHTML = "Color - Yellow";
  m_m2_circle_box1.style.border = "";
  m_m2_circle_box.style.border = "";
  m_m2_circle_box3.style.border = "";
  m_m2_circle_box4.style.border = "";
  m_m2_circle_box5.style.border = "";
};
m_m2_circle2.onmouseenter = () => {
  color_write.innerHTML = "Color - Yellow";
};
m_m2_circle2.onmouseleave = () => {
  color_write.innerHTML = "Color -";
};
m_m2_circle3.onclick = () => {
  m_m2_circle_box3.style.border = "2px solid blue";
  collection.setAttribute("src", "./img/iphone (2).jpg");
  color_write.innerHTML = "Color - Midnight";
  m_m2_circle_box1.style.border = "";
  m_m2_circle_box2.style.border = "";
  m_m2_circle_box.style.border = "";
  m_m2_circle_box4.style.border = "";
  m_m2_circle_box5.style.border = "";
};
m_m2_circle3.onmouseenter = () => {
  color_write.innerHTML = "Color - Midnight";
};
m_m2_circle3.onmouseleave = () => {
  color_write.innerHTML = "Color -";
};
m_m2_circle4.onclick = () => {
  m_m2_circle_box4.style.border = "2px solid blue";
  collection.setAttribute("src", "./img/iphone (5).jpg");
  color_write.innerHTML = "Color - Starlight";
  m_m2_circle_box1.style.border = "";
  m_m2_circle_box2.style.border = "";
  m_m2_circle_box3.style.border = "";
  m_m2_circle_box.style.border = "";
  m_m2_circle_box5.style.border = "";
};
m_m2_circle4.onmouseenter = () => {
  color_write.innerHTML = "Color - Starlight";
};
m_m2_circle4.onmouseleave = () => {
  color_write.innerHTML = "Color -";
};
m_m2_circle5.onclick = () => {
  m_m2_circle_box5.style.border = "2px solid blue";
  collection.setAttribute("src", "./img/iphone (3).jpg");
  color_write.innerHTML = "Color - (PRODUCT)RED";
  m_m2_circle_box1.style.border = "";
  m_m2_circle_box2.style.border = "";
  m_m2_circle_box3.style.border = "";
  m_m2_circle_box4.style.border = "";
  m_m2_circle_box.style.border = "";
};
m_m2_circle5.onmouseenter = () => {
  color_write.innerHTML = "Color - (PRODUCT)RED";
};
m_m2_circle5.onmouseleave = () => {
  color_write.innerHTML = "Color -";
};
let m_m3_box1 = document.querySelector("#m_m3_box1");
let m_m3_box2 = document.querySelector("#m_m3_box2");
let m_m3_box3 = document.querySelector("#m_m3_box3");

m_m3_box1.onclick = () => {
  m_m3_box1.style.border = "2px solid blue";
  m_m3_box2.style.border = "";
  m_m3_box3.style.border = "";
};
m_m3_box2.onclick = () => {
  m_m3_box2.style.border = "2px solid blue";
  m_m3_box1.style.border = "";
  m_m3_box3.style.border = "";
};
m_m3_box3.onclick = () => {
  m_m3_box3.style.border = "2px solid blue";
  m_m3_box2.style.border = "";
  m_m3_box1.style.border = "";
};

let l_m_box = document.querySelector("#l_m_box");
let last_plus = document.querySelector(".last_plus");
l_m_box.onmouseenter = () => {
  last_plus.setAttribute("src", "./img/main_top (2).png");
};
l_m_box.onmouseleave = () => {
  last_plus.setAttribute("src", "./img/main_top (1).png");
};

let main_last_block = document.querySelector(".main_last_block");
document.addEventListener("scroll", () => {
  if (window.scrollY >= collection.offsetTop + 350) {
    collection.classList.add("fixed");
  }
  if (collection.offsetTop + 350 >= window.scrollY) {
    collection.classList.remove("fixed");
  }
});

let accar1 = document.querySelector("#accar1");
let accar2 = document.querySelector("#accar2");
let inf1 = document.querySelector("#inf1");
let inf2 = document.querySelector("#inf2");
let accar_img1 = document.querySelector("#accar_img1");
let accar_img2 = document.querySelector("#accar_img2");
accar1.onclick = () => {
  accar_img1.classList.toggle("img_active");
  inf1.classList.toggle("active");
};
accar2.onclick = () => {
  accar_img2.classList.toggle("img_active");
  inf2.classList.toggle("active");
};

let mw = document.querySelector("#mw");
let accardion = document.querySelector(".accardion");
mw.onclick = () => {
  document.body.classList.toggle("hidden");
  accardion.classList.toggle("active");
};
let exit = document.querySelector("#exit");
exit.onclick = () => {
  document.body.classList.toggle("hidden");
  accardion.classList.toggle("active");
};
