const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.classList.add('noScroll');
});

close.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.classList.remove('noScroll');
});

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('noScroll');
  });
});

const speakersData = [
  {
    speakerName: "Richard Dawkins",
    speakerOrg: "University of Oxford",
    speakerDesc: "The Stoic Mind: Richard Dawkins on Applying Stoicism in a World of Science and Reason",
    speakerImg: "images/speaker_01.png",
    speakerClass: "speaker-one"
  },
  {
    speakerName: "Robert Greene",
    speakerOrg: "University of Wisconsin",
    speakerDesc: "The Mastery of Stoicism: Using Ancient Wisdom to Achieve Personal Power",
    speakerImg: "images/speaker_02.png",
    speakerClass: "speaker-two"
  },
  {
    speakerName: "Massimo Pigliucci",
    speakerOrg: "University of Connecticut",
    speakerDesc: "Stoicism 101: A Practical Guide to Living with Virtue and Resilience",
    speakerImg: "images/speaker_03.png",
    speakerClass: "speaker-three"
  },
  {
    speakerName: "Ryan Holiday",
    speakerOrg: "UC Riverside (dropout)",
    speakerDesc: "The Art of Stillness: Stoic Principles for Modern Life",
    speakerImg: "images/speaker_04.png",
    speakerClass: "speaker-four"
  },
  {
    speakerName: "Sophia Shapira",
    speakerOrg: "University of Pittsburgh",
    speakerDesc: "The Feminine Face of Stoicism: Exploring Gender and Virtue in Ancient Philosophy",
    speakerImg: "images/speaker_05.png",
    speakerClass: "speaker-five"
  },
  {
    speakerName: "Curtis Jackson",
    speakerOrg: "Southside Jamaica Queens",
    speakerDesc: "From the Streets to Stoicism: How the Philosophy of Marcus Aurelius Changed My Life",
    speakerImg: "images/speaker_06.png",
    speakerClass: "speaker-six"
  }
];

const speakersSection = document.getElementById('speakers');

speakersData.forEach((speaker) => {
  const speakerElement = document.createElement('div');
  speakerElement.classList.add('speaker', speaker.speakerClass);

  speakerElement.innerHTML = `
    <div class="speaker-img"><img src="${speaker.speakerImg}" alt="${speaker.speakerName}" srcset=""></div>
    <div class="speakers-info">
      <div class="speaker-name">${speaker.speakerName}</div>
      <div class="speaker-org">${speaker.speakerOrg}</div>
      <div class="speaker-desc">${speaker.speakerDesc}</div>
    </div>
  `;

  speakersSection.appendChild(speakerElement);
});

