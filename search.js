document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchBox");

  searchBox.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const categories = document.querySelectorAll("#categoryList > li");

    categories.forEach((categoryItem) => {
      const categoryTitle = categoryItem.querySelector(".category"); // .category-toggle OR .category
      const mechanismList = categoryItem.querySelector("ul");
      const mechanismItems = mechanismList ? mechanismList.querySelectorAll("li") : [];

      let hasMatch = false;

      mechanismItems.forEach((item) => {
        const text = item.textContent.toLowerCase();
        const isMatch = text.includes(query);
        item.style.display = isMatch ? "list-item" : "none";
        if (isMatch) hasMatch = true;
      });

      const categoryMatches = categoryTitle.textContent.toLowerCase().includes(query);

      if (categoryMatches || hasMatch) {
        categoryItem.style.display = "block";
        if (mechanismList) mechanismList.style.display = "block";
      } else {
        categoryItem.style.display = "none";
        if (mechanismList) mechanismList.style.display = "none";
      }

      // Reset view if query is empty
      if (query === "") {
        categoryItem.style.display = "block";
        if (mechanismList) mechanismList.style.display = "none";
      }
    });
  });
});
