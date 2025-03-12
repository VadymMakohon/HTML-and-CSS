function addBookmark() {
    let nameInput = document.getElementById("bookmarkName");
    let urlInput = document.getElementById("bookmarkURL");
    let bookmarkName = nameInput.value.trim();
    let bookmarkURL = urlInput.value.trim();

    if (bookmarkName === "" || bookmarkURL === "") return;

    let bookmarkList = document.getElementById("bookmarkList");

    let listItem = document.createElement("li");
    listItem.innerHTML = `
        <a href="${bookmarkURL}" target="_blank">${bookmarkName}</a>
        <button class="delete" onclick="removeBookmark(this)">Delete</button>
    `;

    bookmarkList.appendChild(listItem);
    nameInput.value = "";
    urlInput.value = "";
}

function removeBookmark(button) {
    button.parentElement.remove();
}
