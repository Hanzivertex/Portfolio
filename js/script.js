const glow = document.querySelector('.cursor-glow');

window.addEventListener('pointermove', e => {
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});


/* =========================
   MOBILE MENU
========================= */

const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

menu?.addEventListener('click', () => {
  links?.classList.toggle('open');
});

links?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links?.classList.remove('open');
  });
});


/* =========================
   VIDEO LOADING
========================= */

document.querySelectorAll('video').forEach(video => {

  video.addEventListener('loadeddata', () => {
    video.classList.add('video-ready');
    video.setAttribute('data-ready', 'true');
  });

  video.addEventListener('error', () => {
    video.classList.remove('video-ready');
  });

});


/* =========================
   PORTFOLIO VIDEOS
========================= */

document.querySelectorAll('.work-card').forEach(card => {

  const video = card.querySelector('video');
  const btn = card.querySelector('.play-btn');
  const sound = card.querySelector('.card-sound-toggle');

  if (!video || !btn) return;


  /* PLAY / PAUSE BUTTON */

  btn.addEventListener('click', event => {

    event.stopPropagation();

    if (video.paused) {

      video.play().catch(() => {});
      btn.textContent = '❚❚';

    } else {

      video.pause();
      btn.textContent = '▶';

    }

  });


  /* SOUND BUTTON */

  sound?.addEventListener('click', event => {

    event.stopPropagation();

    video.muted = !video.muted;

    sound.textContent = video.muted
      ? 'SOUND OFF'
      : 'SOUND ON';

    sound.setAttribute(
      'aria-label',
      video.muted
        ? 'Turn sound on'
        : 'Turn sound off'
    );

    /*
      A user has interacted with the page,
      so mobile browsers allow playback here.
    */

    if (video.paused) {
      video.play().catch(() => {});
    }

  });


  /* =========================
     DESKTOP HOVER
  ========================= */

  card.addEventListener('mouseenter', () => {

    if (window.matchMedia('(hover: hover)').matches) {

      if (video.paused) {
        video.play().catch(() => {});
      }

    }

  });


  card.addEventListener('mouseleave', () => {

    if (window.matchMedia('(hover: hover)').matches) {

      if (!video.paused) {

        video.pause();
        video.currentTime = 0;
        btn.textContent = '▶';

      }

    }

  });


  /* =========================
     MOBILE TAP
  ========================= */

  card.addEventListener('click', event => {

    /*
      Don't trigger play/pause when
      the user taps a button.
    */

    if (
      event.target.closest('.play-btn') ||
      event.target.closest('.card-sound-toggle') ||
      event.target.closest('a')
    ) {
      return;
    }


    /*
      Mobile browsers require a user
      interaction before playback.
    */

    if (video.paused) {

      video.play()
        .then(() => {
          btn.textContent = '❚❚';
        })
        .catch(() => {});

    } else {

      video.pause();
      btn.textContent = '▶';

    }

  });

});


/* =========================
   HERO VIDEO
========================= */

const heroVideo = document.querySelector('.featured-frame video');
const heroSound = document.querySelector('.featured-frame .sound-toggle');

heroSound?.addEventListener('click', event => {

  event.stopPropagation();

  if (!heroVideo) return;

  heroVideo.muted = !heroVideo.muted;

  heroSound.textContent = heroVideo.muted
    ? 'SOUND OFF'
    : 'SOUND ON';

  heroSound.setAttribute(
    'aria-label',
    heroVideo.muted
      ? 'Turn sound on'
      : 'Turn sound off'
  );

  if (heroVideo.paused) {
    heroVideo.play().catch(() => {});
  }

});


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }

    });

  },
  {
    threshold: 0.08
  }
);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});


/* =========================
   COPYRIGHT YEAR
========================= */

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}
