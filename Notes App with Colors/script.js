document.getElementById("addNote").addEventListener("click", function () {
    const noteText = document.getElementById("noteText").value.trim();
    const noteColor = document.getElementById("noteColor").value;

    if (noteText === "") {
        alert("Please enter a note.");
        return;
    }

    const notesGrid = document.getElementById("notesGrid");

    const note = document.createElement("div");
    note.classList.add("note");
    note.style.backgroundColor = noteColor;
    note.innerHTML = `${noteText} <button class="delete">❌</button>`;

    notesGrid.appendChild(note);

    note.querySelector(".delete").addEventListener("click", function () {
        note.remove();
    });

    document.getElementById("noteText").value = "";
});
