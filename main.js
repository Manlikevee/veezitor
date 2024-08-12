if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('sw.js')
    .then(function(swReg) {
        console.log('Service Worker is registered', swReg);

        document.getElementById('notify').addEventListener('click', function() {
            Notification.requestPermission(function(result) {
                if (result === 'granted') {
                    navigator.serviceWorker.ready.then(function(registration) {
                        registration.showNotification('Notification with ServiceWorker', {
                            body: 'This is the body of the notification',
                            icon: 'images/icon.png',
                            badge: 'images/badge.png'
                        });
                    });
                }
            });
        });
    })
    .catch(function(error) {
        console.error('Service Worker Error', error);
    });
} else {
    console.warn('Push messaging is not supported');
}
