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
        public : {
            north: ['Al-Ameen Eating Corner,<br> 35 Marsiling Industrial Estate Rd 3, S739257', 'Bishan Stadium<br> 7 Bishan Street 14, S579784', 'Singapore Mandai Zoo<br>80 Mandai Lake Road, S729826'],
            central: ['National Stadium,<br>1 Stadium Dr, S397629', 'Lucky Plaza,<br>304 Orchard Road, S238863', 'Plaza Singapura,<br>68 Orchard Road, S238839'],
            south: ['Civil Service College,<br> 31 North Buona Vista Rd, S275983', 'Keppel Bay Tower,<br>1 Harbourfront Avenue, S098632', 'Vivocity,<br>1 Harbourfront Walk, S098585'],
            east: ['Bedok Mall,<br>311 New Upper Changi Rd, S467360', 'Downtown East,<br>1 Pasir Ris Close, S519599', 'Ikea Tampines,<br>60 Tampines North Drive 2, S528764'],
            west: ['Bukit Batok Driving Centre,<br>815 Bukit Batok West Avenue 5, S659085', 'Jurong Point,<br>1 Jurong West Central 2, S648886', 'Queensway Shopping Centre,<br>1 Queensway, S149053']
        },
        hospitals: {
            north: ['Khoo Teck Puat Hospital,<br>90 Yishun Central, S768828', 'Thomson Medical Centre,<br>339 Thomson Road, S307677'],
            central: ['KK Women and Children Hospital,<br>100 Bukit Timah Road, S229899', 'Mount Elizabeth Novena Hospital,<br>38 Irrawady Rd, S329563', 'Raffles Hospital,<br>585 North Bridge Road, S188770'],
            south: ['Gleneagles Hospital,<br>6A Napier Road, S258500', 'National University Hospital,<br> 5 Lower Kent Ridge Road, S119074'],
            east: ['Parkway East Hospital - Formerly East Shore Hospital,<br>321 Joo Chiat Place, S427990', 'Sengkang General Hospital,<br>110 Sengkang E WAy, S544886'],
            west: ['Ng Teng Fong General Hospital,<br>1 Jurong East Street 21, S609606']
        },
        campus: {
            north: ['Nanyang Polytechnic,<br>180 Ang Mo Kio Ave 8, S569830'],
            central: ['Singapore Management University (SMU),<br>81 Victoria St, S188065', 'ITE College Central,<br>2 Ang Mo Kio Dr, S567720'],
            south: ['Singapore University of Social Sciences (SUSS),<br>462 Clementi Rd, S599494'],
            east: ['ITE College East,<br>10 Simei Ave, S486047', 'Temasek Polytechnic,<br>21 Tampines Ave 1, S529757'],
            west: ['Nanyang Technological University (NTU),<br>50 Nanyang Ave, S639798', 'ITE College West,<br>1 Choa Chu Kang Grove, S688236', 'National Institute Of Education (NIE),<br>1 Nanyang Walk,S637616']
        },
        mosques: {
            north: ['Masjid Muhajirin,<br>275 Braddell Road, S579704', 'Masjid Al-Muttaqin,<br>5140 Ang Mo Kio Central Avenue 6, S569844', 'Masjid Ahmad Ibrahim,<br>15 Jalan Ulu Seletar, S769227'],
            central: ['Masjid Hajjah Fatimah,<br>4001 Beach Road, S199584', 'Masjid Malabar,<br>471 Victoria Street, S198370', 'Masjid Abdul Gafoor,<br>41 Dunlop Street, S198370'],
            south: ['Masjid Haji Muhammad Salleh,<br>37 Palmer Road, S079424', 'Masjid Kampong Delta,<br>10 Delta Avenue, S169831', 'Masjid Temenggong,<br>30 Telok Blangah Road, S098827'],
            east: ['Masjid Al-Istighfar,<br>2 Pasir Ris Walk, S518239', 'Masjid Darul Ghufran,<br>503 Tampines Avenue 5, S529651', 'Masjid Al-Ansar,<br>155 Bedok North Avenue 1, S469751'],
            west: ['Masjid Pusara Aman,<br>11 Lim Chu Kang Road, S719452', 'Masjid Tentera Di Raja,<br>81 Clementi Road, S129797', 'Masjid Al-Mukminin,<br>271 Jurong East Street 21, S609603']
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


