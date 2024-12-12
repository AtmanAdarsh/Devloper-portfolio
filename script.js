// Event listener for skill form submission
document.getElementById("skillsForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var cpp = document.getElementById("cpp").value;
    var html = document.getElementById("html").value;
    var css = document.getElementById("css").value;

    fetch('/path/to/your/cpp/skills', {
        method: 'POST',
        body: JSON.stringify({ cpp: cpp, html: html, css: css }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("skillResult").innerText = `Your overall skill rating is: ${data.skillRating}`;
        renderSkillsChart(data);
    })
    .catch(error => console.error('Error:', error));
});

// Render Skill Level Chart
function renderSkillsChart(data) {
    var ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['C++', 'HTML', 'CSS'],
            datasets: [{
                label: 'Skill Level',
                data: [data.cpp, data.html, data.css],
                backgroundColor: ['#f39c12', '#3498db', '#e74c3c'],
                borderColor: ['#f1c40f', '#2980b9', '#c0392b'],
                borderWidth: 1
            }]
        }
    });
}

// Event listener for career simulation form submission
document.getElementById("careerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var role = document.getElementById("role").value;
    var years = document.getElementById("years").value;

    fetch('/path/to/your/cpp/career', {
        method: 'POST',
        body: JSON.stringify({ role: role, years: years }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("careerResult").innerText = `Projected role after ${data.years} years: ${data.projectedRole}`;
        renderCareerGrowthChart(data);
    })
    .catch(error => console.error('Error:', error));
});

// Render Career Growth Chart
function renderCareerGrowthChart(data) {
    var ctx = document.getElementById('careerGrowthChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Current', '5 Years', '10 Years'],
            datasets: [{
                label: 'Career Growth',
                data: [1, data.projectedRole === "Mid-Level Developer" ? 2 : 3, 3],
                backgroundColor: ['#e74c3c', '#3498db', '#2ecc71'],
                borderColor: ['#c0392b', '#2980b9', '#27ae60'],
                borderWidth: 2
            }]
        }
    });
}

// Event listener for project estimation form submission
document.getElementById("projectForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var experience = document.getElementById("experience").value;
    var projects = document.getElementById("projects").value;
    var skill = document.getElementById("skill").value;

    fetch('/path/to/your/cpp/project', {
        method: 'POST',
        body: JSON.stringify({ experience: experience, projects: projects, skill: skill }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("projectResult").innerText = `Estimated project growth score: ${data.projectGrowth}`;
    })
    .catch(error => console.error('Error:', error));
});
