document.addEventListener("DOMContentLoaded", function () {
  const categoryList = document.getElementById("categoryList");


  categories.forEach(cat => {
    const catLi = document.createElement("li");
    const catSpan = document.createElement("span");
    catSpan.className = "category";
    catSpan.textContent = "▶ " + cat.title;

    const ul = document.createElement("ul");
    ul.style.display = "none";

    catSpan.addEventListener("click", () => {
      ul.style.display = ul.style.display === "none" ? "block" : "none";
    });

    cat.children.forEach(child => {
      const childLi = document.createElement("li");
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = child.name;
      link.onclick = () => {
        alert(child.name + " clicked!");
      };
      childLi.appendChild(link);
      ul.appendChild(childLi);
    });

    catLi.appendChild(catSpan);
    catLi.appendChild(ul);
    categoryList.appendChild(catLi);
  });
});
