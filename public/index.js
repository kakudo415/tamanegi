navigator.serviceWorker.register('/service-worker.js');

navigator.serviceWorker.ready.then(async (registration) => {
  return registration.pushManager.getSubscription().then(async (subscription) => {
    if (subscription) {
      return subscription;
    }

    // Is urlBase64ToUint8Array() not needed because https://bugs.chromium.org/p/chromium/issues/detail?id=802280 is fixed?
    const pubKey = await (await fetch('/vapid')).text();
    // TODO: 通知の許可が必要
    return registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: pubKey,
    });
  }).then((subscription) => {
    fetch('./subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    });
  });
});
