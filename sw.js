self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://yourwebsite.com') // Replace with your URL
    );
});