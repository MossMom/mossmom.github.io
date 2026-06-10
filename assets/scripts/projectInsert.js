// Fetch external content
fetch('assets/html/projects/terraria npc tracker.html')
    .then(response => response.text())
    .then(data => {
        // Inject content into the placeholder
        document.getElementById('project1').innerHTML = data;
    })
    .catch(error => console.error('Error loading content:', error));
    
// Fetch external content
fetch('assets/html/projects/witches duel.html')
    .then(response => response.text())
    .then(data => {
        // Inject content into the placeholder
        document.getElementById('project2').innerHTML = data;
    })
    .catch(error => console.error('Error loading content:', error));