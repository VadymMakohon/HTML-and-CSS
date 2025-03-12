function addBookmark() {
    let nameInput = document.getElementById("bookmarkName");
    let urlInput = document.getElementById("bookmarkURL");
    let bookmarkName = nameInput.value.trim();
    let bookmarkURL = urlInput.value.trim();

    if (bookmarkName === "" || bookmarkURL === "") return;

}