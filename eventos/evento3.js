let formulario = document.getElementById('formulario');
let tituloFormulario = document.getElementById('tituloFormulario');
let contenido = document.getElementById('contenido');
let contenedorNotas = document.getElementById('contenedorNotas');
let searchBar = document.getElementById('searchBar');
let filterChecked = document.getElementById('filterChecked');

let notes = [];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    addNote();
});

searchBar.addEventListener('input', () => {
    renderNotes();
});

filterChecked.addEventListener('change', () => {
    renderNotes();
});

function addNote() {
    let newNote = {
        id: Date.now(),
        title: tituloFormulario.value,
        content: contenido.value,
        checked: false
    };
    notes.push(newNote);
    tituloFormulario.value = '';
    contenido.value = '';
    renderNotes();
}

function toggleNoteCheck(noteId) {
    notes = notes.map(note => {
        if (note.id === noteId) {
            note.checked = !note.checked;
        }
        return note;
    });
    renderNotes();
}

function renderNotes() {
    contenedorNotas.innerHTML = '';
    let filteredNotes = notes.filter(note => {
        let matchesSearch = note.title.toLowerCase().includes(searchBar.value.toLowerCase());
        let matchesFilter = filterChecked.checked ? note.checked : true;
        return matchesSearch && matchesFilter;
    });

    filteredNotes.forEach(note => {
        let noteElement = document.createElement('div');
        noteElement.classList.add('card', 'mb-2');
        if (note.checked) noteElement.classList.add('note-checked');

        noteElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">
                        <input type="checkbox" ${note.checked ? 'checked' : ''} onclick="toggleNoteCheck(${note.id})">
                        ${note.title}
                    </h5>
                    <p class="card-text">${note.content}</p>
                    <button class="btn btn-danger" onclick="deleteNote(${note.id})">Eliminar</button>
                </div>
            `;
        contenedorNotas.appendChild(noteElement);
    });
}

window.toggleNoteCheck = toggleNoteCheck;

window.deleteNote = (noteId) => {
    notes = notes.filter(note => note.id !== noteId);
    renderNotes();
};