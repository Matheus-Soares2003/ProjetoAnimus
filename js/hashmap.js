document.getElementById('hashmap-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const key = document.getElementById('key').value;
    const value = document.getElementById('value').value;

    if (key && value) {
        const entry = document.createElement('div');
        entry.className = 'hashmap-entry';

        const keySpan = document.createElement('span');
        keySpan.className = 'hashmap-key';
        keySpan.textContent = key;

        const valueSpan = document.createElement('span');
        valueSpan.className = 'hashmap-value';
        valueSpan.textContent = value;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = function() {
            entry.remove();
        };

        entry.appendChild(keySpan);
        entry.appendChild(valueSpan);
        entry.appendChild(deleteButton);

        document.getElementById('hashmap-display').appendChild(entry);

        document.getElementById('hashmap-form').reset();
    }
});