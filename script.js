//your JS code here. If required.
let draggedItem = null;

// Drag start — remember which item is being dragged
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
    });

    item.addEventListener('dragend', () => {
        draggedItem = null;
    });

    // Double-click — move back to unranked drop zone
    item.addEventListener('dblclick', (e) => {
        const unranked = document.getElementById('unranked-drop-zone');
        if (e.target.parentElement === unranked) return; // already there
        unranked.appendChild(e.target);
    });
});

// Allow dropping by preventing default dragover behavior
document.querySelectorAll('.drop-zone').forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        if (!draggedItem) return;
        const targetZone = e.currentTarget;

        // Do nothing if already in this drop zone
        if (draggedItem.parentElement === targetZone) return;

        targetZone.appendChild(draggedItem);
    });
});