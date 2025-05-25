document.addEventListener('DOMContentLoaded', () => {
    const phases = document.querySelectorAll('.phase');

    phases.forEach(phase => {
        const checkboxes = phase.querySelectorAll('input[type="checkbox"]');
        const progressBar = phase.querySelector('.progress-bar');
        const percentageText = phase.querySelector('.progress-percentage, span[id$="-percentage"]'); // Handles both conventions
        const phaseId = phase.id;

        // Load saved state from localStorage
        checkboxes.forEach(checkbox => {
            const savedState = localStorage.getItem(checkbox.id);
            if (savedState === 'true') {
                checkbox.checked = true;
                updateLabelStyle(checkbox);
            }
            checkbox.addEventListener('change', () => {
                localStorage.setItem(checkbox.id, checkbox.checked);
                updateProgress();
                updateLabelStyle(checkbox);
            });
        });

        function updateLabelStyle(checkbox) {
            const label = checkbox.nextElementSibling; // Assumes label is the next sibling
            if (label) {
                if (checkbox.checked) {
                    label.style.textDecoration = 'line-through';
                    label.style.color = '#aaa';
                } else {
                    label.style.textDecoration = 'none';
                    label.style.color = '#333'; // Or your default label color
                }
            }
        }


        function updateProgress() {
            const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
            const totalCheckboxes = checkboxes.length;
            const progress = totalCheckboxes > 0 ? (checkedCount / totalCheckboxes) * 100 : 0;

            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
            if (percentageText) {
                percentageText.textContent = `${Math.round(progress)}`;
            }
            // Save overall phase progress if needed (optional)
            // localStorage.setItem(`${phaseId}-progress`, progress);
        }

        updateProgress(); // Initial calculation on load
    });

    // Notes functionality
    const notesArea = document.getElementById('notes-area');
    if (notesArea) {
        notesArea.value = localStorage.getItem('learningNotes') || '';
        notesArea.addEventListener('input', () => {
            localStorage.setItem('learningNotes', notesArea.value);
        });
    }
});