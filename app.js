// NAME INVITE
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get('n') || '';
    const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';

    const namaContainer = document.querySelector('.hero h4 span');
    namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ',');
    // file:///E:/Project%20Sendiri/Wedding%20Invitation%20Adiet_Narto/index.html?n=Adiet+Narto
    // file:///E:/Project%20Sendiri/Wedding%20Invitation%20Adiet_Narto/index.html?p=Bapak&n=Adiet+Narto

    document.querySelector('#nama').value = nama;

// SIMPLY COUNTDOWN OPENING
    simplyCountdown('.simply-countdown', {
        year: 2025, // required
        month: 1, // required
        day: 31, // required
        hours: 13, // Default is 0 [0-23] integer
        minutes: 30, // Default is 0 [0-59] integer
        // seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: { singular: 'hari', plural: 'hari' },
            hours: { singular: 'jam', plural: 'jam' },
            minutes: { singular: 'menit', plural: 'menit' },
            seconds: { singular: 'detik', plural: 'detik' }
        },
        // plural: true, //use plurals
        // inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
        // inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
        // in case of inline set to false
        // enableUtc: false,
        // onEnd: function () {
            // your code
            // return;
        // },
        // refresh: 1000, //default refresh every 1s
        // sectionClass: 'simply-section', //section css class
        // amountClass: 'simply-amount', // amount css class
        // wordClass: 'simply-word', // word css class
        // zeroPad: false,
        // countUp: false, // enable count up if set to true
    });

// AFTER KLIK BUTTON "LIHAT UNDANGAN"
    const rootElement = document.querySelector(":root");
    const song = document.querySelector('#song');
    const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
    const audioIcon = document.querySelector('.audio-icon-wrapper i');
    let isPlaying = false;
    menu = document.querySelector('#menu');
    menu.style.visibility = 'hidden';
    menu.style.opacity = '0';
        
    function disableScroll() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        window.onscroll = function() {
            window.scrollTo(scrollTop, scrollLeft);
        }
        rootElement.style.scrollBehavior = 'auto';
    }

    function enableScroll() {
        window.onscroll = function() {}
        menu.style.visibility = 'visible';
        menu.style.opacity = '1';
        menu.style.transition = 'all 0.5s ease-in-out';
        menu.style.position = 'fixed';
        rootElement.style.scrollBehavior = 'smooth';
        // localStorage.setItem('opened', 'true');
        playAudio();
    }

    function playAudio() {
        song.volume = 1;
        audioIconWrapper.style.display = 'flex';
        song.play();
        isPlaying = true;
    }

    audioIconWrapper.onclick = function() {
        if (isPlaying) {
            song.pause();
            audioIcon.classList.remove('bi-disc');
            audioIcon.classList.add('bi-pause-circle');
        } else {
            song.play();
            audioIcon.classList.add('bi-disc');
            audioIcon.classList.remove('bi-pause-circle');
        }
        isPlaying = !isPlaying;
    }
    disableScroll();

// MENU BAR
    function menuOnClick() {
        document.getElementById("menu-bar").classList.toggle("change");
        document.getElementById("nav").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
    }

// SESI RESERVATION
// DISQUS
/**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
**/
/*
    prana-wedding.disqus.com
    var disqus_config = function () {
        this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
*/
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://prana-wedding.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();

// ALERT NOTIF RESERVATION
    window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const data = new FormData(form);
            const action = e.target.action;
            fetch(action, {
                method: 'POST',
                body: data,
            })
            .then(() => {
                alert("Konfirmasi kehadiran berhasil terkirim!");
            })
        });
    });

// SESI GIFTS
// COPY-PASTE (BCA Adiet)
    var copyBtn = document.querySelector('.js-copyBtn');  
    copyBtn.addEventListener('click', function(event) {  
        // Select the email link anchor text  
        var copyLink = document.querySelector('.js-copyLink');  
        var range = document.createRange();  
        range.selectNode(copyLink);  
        window.getSelection().addRange(range);  

        try {  
            // Now that we've selected the anchor text, execute the copy command  
            var successful = document.execCommand('copy');  
            var msg = successful ? 'successful' : 'unsuccessful';  
            console.log('Copy command was ' + msg);  
        } catch(err) {  
            console.log('Oops, unable to copy');  
        }  

        // Remove the selections - NOTE: Should use
        // removeRange(range) when it is supported  
        window.getSelection().removeAllRanges();  
    });

// COPY-PASTE (BSI Vini)
    var copyBtn = document.querySelector('.js-copyBtn_1');  
    copyBtn.addEventListener('click', function(event) {
        var copyLink = document.querySelector('.js-copyLink_1');  
        var range = document.createRange();  
        range.selectNode(copyLink);  
        window.getSelection().addRange(range);  

        try {
            var successful = document.execCommand('copy');  
            var msg = successful ? 'successful' : 'unsuccessful';  
            console.log('Copy command was ' + msg);  
        } catch(err) {  
            console.log('Oops, unable to copy');  
        } 
        window.getSelection().removeAllRanges();  
    });
// www.youtube.com/watch?v=1lCKoLKTzRk&t=2220s (Recommended)
// www.youtube.com/watch?v=JpuQstTuKjs (Membuat WEBSITE dengan bantuan CHATGPT sampai upload ke WEB HOSTING)
// www.youtube.com/watch?v=js4c1nclm4I (Buat Undangan Website Gratis Fitur Lengkap Modal HP | FREE LINK UNDANGAN)
// www.youtube.com/watch?v=4uOqF8OvKuI (Wedding Invitation#01 |Customized Dev |Wedding Invitation using HTML & CSS)
// www.youtube.com/watch?v=RFcD3ULkAbc (Wedding Planner Website using Html Css & Jquery)
// www.youtube.com/watch?v=jpdKciSgIR8 (Website Undangan Pernikahan dengan Codeigniter)