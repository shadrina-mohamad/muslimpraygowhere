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

// Function to update date, Muslim date, and prayer times
function updateDateAndPrayerTimes() {
    const dateElement = document.getElementById('date');
    const muslimDateElement = document.getElementById('muslim-date');
    const prayerTimesElement = document.getElementById('prayer-times');

     // Get today's date and day of the week
     const today = new Date();
     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     const todayString = today.toLocaleDateString(undefined, options);
     dateElement.textContent = `${todayString}`;

    // Dummy Muslim date (replace with actual calculation if possible)
    const muslimDate = '13 Zulkaedah 1445H'; // Example Muslim date
    muslimDateElement.textContent = `${muslimDate}`;

    // Dummy prayer times with icons (replace with actual data)
    const prayerTimes = {
        Fajr: { time: '05:00 AM', icon: 'fajr-icon.png' },
        Dhuhr: { time: '12:30 PM', icon: 'dhuhr-icon.png' },
        Asr: { time: '03:45 PM', icon: 'asr-icon.png' },
        Maghrib: { time: '07:00 PM', icon: 'maghrib-icon.png' },
        Isha: { time: '08:30 PM', icon: 'isha-icon.png' }
    };

    let prayerTimesString = '';
    for (const [prayer, data] of Object.entries(prayerTimes)) {
        prayerTimesString += `<img src="${data.icon}" alt="${prayer} icon"> ${prayer}: ${data.time} `;
    }
    prayerTimesElement.innerHTML = prayerTimesString.trim();
}

// Update date, Muslim date, and prayer times on page load
window.onload = updateDateAndPrayerTimes;



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
            content += `<p>${item}</p>`;
        });
        content += '</ul>';
    } else {
        content = '<p>No content available for this category and region.</p>';
    }

    //Function to close all other sections
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    listContent.innerHTML = content;
}

// Function to show the appropriate section
function showSection(sectionId) {

    // Next line is to close all other lists
    // const listContent = document.getElementById('list-content');
    // let content = '';
    // listContent.innerHTML = content;

    document.getElementById('list-content').innerHTML = '';

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}


