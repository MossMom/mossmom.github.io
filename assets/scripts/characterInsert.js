// Fetch external content
fetch('assets/html/characters/indivari.html')
    .then(response => response.text())
    .then(data => {
        // Inject content into the placeholder
        document.getElementById('character1').innerHTML = data;
    })
    .catch(error => console.error('Error loading content:', error));

// Fetch external content
fetch('assets/html/characters/rithil.html')
    .then(response => response.text())
    .then(data => {
        // Inject content into the placeholder
        document.getElementById('character2').innerHTML = data;
    })
    .catch(error => console.error('Error loading content:', error));

// Fetch external content
fetch('assets/html/characters/ecstasy.html')
    .then(response => response.text())
    .then(data => {
        // Inject content into the placeholder
        document.getElementById('character3').innerHTML = data;
    })
    .catch(error => console.error('Error loading content:', error));

// Fetch external content
fetch('assets/html/characters/nokia.html')
    .then(response => response.text())
    .then(data => {
        // Inject content into the placeholder
        document.getElementById('character4').innerHTML = data;
    })
    .catch(error => console.error('Error loading content:', error));