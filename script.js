// Function to drop down contact form options
function showFormFields() {
    var type = document.getElementById("type").value;
    if (type === "recommend") {
        document.getElementById("recommend-form").style.display = "block";
        document.getElementById("enquiry-form").style.display = "none";
    } else if (type === "enquiry") {
        document.getElementById("enquiry-form").style.display = "block";
        document.getElementById("recommend-form").style.display = "none";
    } else {
        document.getElementById("recommend-form").style.display = "none";
        document.getElementById("enquiry-form").style.display = "none";
            }
}

   // Function to update date and prayer times
   function updateDateAndPrayerTimes() {
    const dateElement = document.getElementById('date');
    const prayerTimesElement = document.getElementById('prayer-times');

    // Get today's date
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const todayString = today.toLocaleDateString(undefined, options);
    dateElement.textContent = `Today's Date: ${todayString}`;

    // Dummy prayer times (replace with actual API call if needed)
    const prayerTimes = {
        Fajr: '05:00 AM',
        Dhuhr: '12:30 PM',
        Asr: '03:45 PM',
        Maghrib: '07:00 PM',
        Isha: '08:30 PM'
    };

    let prayerTimesString = 'Prayer Times: ';
    for (const [prayer, time] of Object.entries(prayerTimes)) {
        prayerTimesString += `${prayer}: ${time} `;
    }
    prayerTimesElement.textContent = prayerTimesString.trim();
}

// Function to show list content based on button clicked
function showList(category, region) {
    const listContent = document.getElementById('list-content');
    let content = '';

    const lists = {
        public: {
            north: ['Public Space 1', 'Public Space 2', 'Public Space 3'],
            central: ['Public Space 4', 'Public Space 5', 'Public Space 6'],
            south: ['Public Space 7', 'Public Space 8', 'Public Space 9'],
            east: ['Public Space 10', 'Public Space 11', 'Public Space 12'],
            west: ['Public Space 13', 'Public Space 14', 'Public Space 15']
        },
        hospitals: {
            north: ['Hospital 1', 'Hospital 2', 'Hospital 3'],
            central: ['Hospital 4', 'Hospital 5', 'Hospital 6'],
            south: ['Hospital 7', 'Hospital 8', 'Hospital 9'],
            east: ['Hospital 10', 'Hospital 11', 'Hospital 12'],
            west: ['Hospital 13', 'Hospital 14', 'Hospital 15']
        },
        campus: {
            north: ['Campus 1', 'Campus 2', 'Campus 3'],
            central: ['Campus 4', 'Campus 5', 'Campus 6'],
            south: ['Campus 7', 'Campus 8', 'Campus 9'],
            east: ['Campus 10', 'Campus 11', 'Campus 12'],
            west: ['Campus 13', 'Campus 14', 'Campus 15']
        },
        mosques: {
            north: ['Mosque 1', 'Mosque 2', 'Mosque 3'],
            central: ['Mosque 4', 'Mosque 5', 'Mosque 6'],
            south: ['Mosque 7', 'Mosque 8', 'Mosque 9'],
            east: ['Mosque 10', 'Mosque 11', 'Mosque 12'],
            west: ['Mosque 13', 'Mosque 14', 'Mosque 15']
        }
    };

    if (lists[category] && lists[category][region]) {
        content = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)} - ${region.charAt(0).toUpperCase() + region.slice(1)}</h2><ul>`;
        lists[category][region].forEach(item => {
            content += `<li>${item}</li>`;
        });
        content += '</ul>';
    } else {
        content = '<p>No content available for this category and region.</p>';
    }

    listContent.innerHTML = content;
}

// Function to show the appropriate section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Update date and prayer times on page load
window.onload = updateDateAndPrayerTimes;