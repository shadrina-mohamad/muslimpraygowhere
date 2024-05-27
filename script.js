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

    // Dummy Muslim date (calculation of Muslim calendar dates are complex) 
    const muslimDate = '20 Zulkaedah 1445H'; // Sample Muslim date
    muslimDateElement.textContent = `${muslimDate}`;

    // Dummy prayer times with icons (to replace with actual data)
    const prayerTimes = {
        Fajr: { time: '05:34 AM', icon: 'fajr-icon.png' },
        Dhuhr: { time: '01:04 PM', icon: 'dhuhr-icon.png' },
        Asr: { time: '04:28 PM', icon: 'asr-icon.png' },
        Maghrib: { time: '07:08 PM', icon: 'maghrib-icon.png' },
        Isha: { time: '08:23 PM', icon: 'isha-icon.png' }
    };

    let prayerTimesString = '';
    for (const [prayer, data] of Object.entries(prayerTimes)) {
        prayerTimesString += `<img src="${data.icon}" style="width: 20px; height: 20px;"> ${prayer}: ${data.time} `;
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
            north: ['<b>Al-Ameen Eating Corner</b><br> 35 Marsiling Industrial Estate Rd 3, S739257', '<b>Bishan Stadium</b><br> 7 Bishan Street 14, S579784', '<b>Singapore Mandai Zoo</b><br>80 Mandai Lake Road, S729826'],
            central: ['<b>National Stadium</b><br>1 Stadium Dr, S397629', '<b>Lucky Plaza</b><br>304 Orchard Road, S238863', '<b>Plaza Singapura</b><br>68 Orchard Road, S238839'],
            south: ['<b>Civil Service College</b><br> 31 North Buona Vista Rd, S275983', '<b>Keppel Bay Tower</b><br>1 Harbourfront Avenue, S098632', '<b>Vivocity</b><br>1 Harbourfront Walk, S098585'],
            east: ['<b>Bedok Mall</b><br>311 New Upper Changi Rd, S467360', '<b>Downtown East</b><br>1 Pasir Ris Close, S519599', '<b>Ikea Tampines</b><br>60 Tampines North Drive 2, S528764'],
            west: ['<b>Bukit Batok Driving Centre</b><br>815 Bukit Batok West Avenue 5, S659085', '<b>Jurong Point</b><br>1 Jurong West Central 2, S648886', '<b>Queensway Shopping Centre</b><br>1 Queensway, S149053']
        },
        hospitals: {
            north: ['<b>Khoo Teck Puat Hospital</b><br>90 Yishun Central, S768828', '<b>Thomson Medical Centre</b><br>339 Thomson Road, S307677'],
            central: ['<b>KK Women and Children Hospital</b><br>100 Bukit Timah Road, S229899', '<b>Mount Elizabeth Novena Hospital</b><br>38 Irrawady Rd, S329563', '<b>Raffles Hospital</b><br>585 North Bridge Road, S188770'],
            south: ['<b>Gleneagles Hospital</b><br>6A Napier Road, S258500', '<b>National University Hospital</b><br> 5 Lower Kent Ridge Road, S119074'],
            east: ['<b>Parkway East Hospital - Formerly East Shore Hospital</b><br>321 Joo Chiat Place, S427990', '<b>Sengkang General Hospital</b><br>110 Sengkang E WAy, S544886'],
            west: ['<b>Ng Teng Fong General Hospital</b><br>1 Jurong East Street 21, S609606']
        },
        campus: {
            north: ['<b>Nanyang Polytechnic</b><br>180 Ang Mo Kio Ave 8, S569830'],
            central: ['<b>Singapore Management University (SMU)</b><br>81 Victoria St, S188065', '<b>ITE College Central</b><br>2 Ang Mo Kio Dr, S567720'],
            south: ['<b>Singapore University of Social Sciences (SUSS)</b><br>462 Clementi Rd, S599494'],
            east: ['<b>ITE College East</b><br>10 Simei Ave, S486047', '<b>Temasek Polytechnic</b><br>21 Tampines Ave 1, S529757'],
            west: ['<b>Nanyang Technological University (NTU)</b><br>50 Nanyang Ave, S639798', '<b>ITE College West</b><br>1 Choa Chu Kang Grove, S688236', '<b>National Institute Of Education (NIE)</b><br>1 Nanyang Walk,S637616']
        },
        mosques: {
            north: ['<b>Masjid Muhajirin</b><br>275 Braddell Road, S579704', '<b>Masjid Al-Muttaqin</b><br>5140 Ang Mo Kio Central Avenue 6, S569844', '<b>Masjid Ahmad Ibrahim</b><br>15 Jalan Ulu Seletar, S769227'],
            central: ['<b>Masjid Hajjah Fatimah</b><br>4001 Beach Road, S199584', '<b>Masjid Malabar</b><br>471 Victoria Street, S198370', '<b>Masjid Abdul Gafoor</b><br>41 Dunlop Street, S198370'],
            south: ['<b>Masjid Haji Muhammad Salleh</b><br>37 Palmer Road, S079424', '<b>Masjid Kampong Delta</b><br>10 Delta Avenue, S169831', '<b>Masjid Temenggong</b><br>30 Telok Blangah Road, S098827'],
            east: ['<b>Masjid Al-Istighfar</b><br>2 Pasir Ris Walk, S518239', '<b>Masjid Darul Ghufran</b><br>503 Tampines Avenue 5, S529651', '<b>Masjid Al-Ansar</b><br>155 Bedok North Avenue 1, S469751'],
            west: ['<b>Masjid Pusara Aman</b><br>11 Lim Chu Kang Road, S719452', '<b>Masjid Tentera Di Raja</b><br>81 Clementi Road, S129797', '<b>Masjid Al-Mukminin</b><br>271 Jurong East Street 21, S609603']
        }
    };

    if (lists[category] && lists[category][region]) {
        content = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)} - ${region.charAt(0).toUpperCase() + region.slice(1)}</h2>`;
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


