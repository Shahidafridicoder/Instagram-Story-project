 var arr = [
  {
    dp: "https://im.indiatimes.in/media/content/2017/Sep/3600_1505022609.jpg",
    story:
      "https://fsb.zobj.net/crop.php?r=1R5AelWdgWPpGyiOlDvy-vbivhRMhDZgOyi3iqU34_rhxe0mtvTI5Pui0-pUbK1CiZYE0BX4FlO-WzcV47lp8X-rO5X3z50NvzDa3vaFVcrXZBkNQkUpTaw-k_pJke0ocBaTdqv0WRHGCRqPGx8blpFZ650fiJEgJ7lrjvGZB3dwIlIFIddeAW8gC3o",
    name: "Virat Kohli",
  },
  {
    dp: "https://th.bing.com/th/id/OIP.rRHmJ1VTZv2XnFCNuiJCOAHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7",
    story:
      "https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMzc5NTM0fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    name: "Alexandra",
  },
  {
    dp: "https://th.bing.com/th/id/OIP.sQ0og-OS9a7pWLufZMFp_AHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7",
    story:
      "https://madltalent.com/wp-content/uploads/2020/05/foto-2-11-19-11-42-16-am.jpeg",
    name: "Emma Stone",
  },
  {
    dp: "https://th.bing.com/th/id/OIP.6mawYP1l_AvlT-aqNLjkwgHaLG?w=185&h=278&c=7&r=0&o=5&pid=1.7",
    story:
      "https://th.bing.com/th/id/OIP.Ea45rItCfW8nJntORSy5SwHaLH?pid=ImgDet&w=183&h=274&c=7",
    name: "Jennifer Lawrence",
  },
  {
    dp: "https://th.bing.com/th/id/OIP.6mawYP1l_AvlT-aqNLjkwgHaLG?w=185&h=278&c=7&r=0&o=5&pid=1.7",
    story:
      "https://th.bing.com/th/id/OIP.Ea45rItCfW8nJntORSy5SwHaLH?pid=ImgDet&w=183&h=274&c=7",
    name: "Jennifer Lawrence",
  },
];

function storiyan() {
  var clutter = "";
  arr.forEach(function (val, index) {
    clutter += `<div class="story">
    <img id="${index}" src="${val.dp}" alt="">
</div>
`;
  });
  document.querySelector("#stories").innerHTML = clutter;
}
storiyan();

var stories = document.querySelector("#stories");

stories.addEventListener("click", function (details) {
  document.querySelector("#fs").style.display = "initial";
  document.querySelector("#storyimg").style.backgroundImage = `url(${
    arr[details.target.id].story
  })`;
  progress.style.width = 0;
  clearInterval(cleartimer);
  runtimer();
});

function runtimer() {
  var forward = 0;
  cleartimer = setInterval(() => {
    forward++;
    progress.style.width = `${forward}%`;
  }, 30);
  setTimeout(() => {
    fs.style.display = "none";
  }, 3000);
}
runtimer();

var image = document.querySelector("#image");
var wheart = document.querySelector("#image i");
var like = document.querySelector("#like");

image.addEventListener("dblclick", function () {
  wheart.style.opacity = 1;
  wheart.style.color = "red";
  like.style.color = "#image i";
  setTimeout(() => {
    wheart.style.opacity = 0;
  }, 2000);
});                                