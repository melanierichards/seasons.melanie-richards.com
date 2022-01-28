// Set up notification content
const notifsWrap = document.getElementById('notifs-wrap');
const notifsInfo = document.createElement('div');
const grantedMsg = '<p class="notifs__status">✓ You’re subscribed to season notifications. You’ll get one alert a week before each seasonal change, and one day-of. To unsubscribe, visit your browser settings for notifications.';
const deniedMsg = '<p class="notifs__status">✗ You’ve chosen not to received season notifications from this site. If you change your mind, you can update your browser settings for notifications on this site.</p>'

notifsInfo.classList = 'notifs';
if (Notification.permission === 'granted') {
  notifsInfo.innerHTML = grantedMsg;
} else if (Notification.permission === 'denied') {
  notifsInfo.innerHTML = deniedMsg;
} else {
  notifsInfo.innerHTML = '<button id="notifs__subscribe" class="notifs__subscribe" aria-describedby="subscribe-desc">Notify me of new seasons</button><p class="notifs__desc" id="subscribe-desc">Sends 16 browser notifications per year: one alert a week before each seasonal change, and one day-of.</p>';
}

// Seasonal data for notifications
const seasons = [
  {
    title: 'Late Winter',
    sabbat: 'Imbolc',
    emoji: '🕯️',
    date: '01 Feb 2022 00:09:30'
  },
  {
    title: 'Early Spring',
    sabbat: 'Ostara',
    emoji: '🍀',
    date: '20 Mar 2022 00:09:30'
  },
  {
    title: 'Late Spring',
    sabbat: 'Beltane',
    emoji: '💐',
    date: '30 Apr 2022 00:09:30'
  },
  {
    title: 'Early Summer',
    sabbat: 'Litha',
    emoji: '🔥',
    date: '21 Jun 2022 00:09:30'
  },
  {
    title: 'Late Summer',
    sabbat: 'Lammas',
    emoji: '🌾',
    date: '08 Aug 2022 00:09:30'
  },
  {
    title: 'Early Autumn',
    sabbat: 'Mabon',
    emoji: '🍎',
    date: '22 Sep 2022 00:09:30'
  },
  {
    title: 'Late Autumn',
    sabbat: 'Samhain',
    emoji: '🎃',
    date: '31 Oct 2022 00:09:30'
  },
  {
    title: 'Early Winter',
    sabbat: 'Yule',
    emoji: '🎄',
    date: '21 Dec 2022 00:09:30'
  }
];

// Subscribe user to notifications
const subscribeToNotifs = async function () {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      const timeNow = new Date().getTime();
      navigator.serviceWorker.ready.then(registration => {
        seasons.forEach(season => {
          const timeOnSabbat = Date.parse(season.date);
          const timeWeekOut = timeOnSabbat - (1000 * 60 * 60 * 24 * 7); // 7 days' worth of ms

          // Notification one week before sabbat
          if (timeWeekOut > timeNow) {
            registration.showNotification(
              `${season.emoji} ${season.title} begins in one week`,
              {
                tag: timeWeekOut,
                body: `Visit SEA — Seasons for ideas on observing ${season.sabbat}`,
                lang: 'en-US',
                showTrigger: new TimestampTrigger(timeWeekOut), // set the time for the push notification
                data: {
                  url: window.location.href
                },
                actions: [
                  {
                    action: 'open',
                    title: 'Visit site'
                  },
                  {
                    action: 'close',
                    title: 'Dismiss'
                  }
                ]
              }
            );
          }

          // Day of sabbat
          if (timeOnSabbat > timeNow) {
            registration.showNotification(
              `${season.emoji} Happy ${season.sabbat}!`,
              {
                tag: timeOnSabbat,
                body: 'Visit SEA — Seasons for ideas on observing ' + season.title,
                lang: 'en-US',
                showTrigger: new TimestampTrigger(timeOnSabbat), // set the time for the push notification
                data: {
                  url: window.location.href
                },
                actions: [
                  {
                    action: 'open',
                    title: 'Visit site'
                  },
                  {
                    action: 'close',
                    title: 'Dismiss'
                  }
                ]
              }
            );
          }
        });
      });

      document.querySelector('.notifs').innerHTML = grantedMsg;
    } else if (permission === 'denied') {
      document.querySelector('.notifs').innerHTML = deniedMsg;
    }
  });
};

const startupNotifs = function () {
  notifsWrap.appendChild(notifsInfo);
  if (Notification.permission === 'default') {
    document.getElementById('notifs__subscribe').addEventListener('click', subscribeToNotifs, false);
  }
};

// Add notification content to footer
startupNotifs();
