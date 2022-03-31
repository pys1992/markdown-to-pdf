navigator.serviceWorker.register('/sw.js');

document.addEventListener('keydown', event => {
    let meta = navigator.userAgent.indexOf('Mac OS X') ? 'metaKey' : 'ctrlKey';

    if (event[meta] && event.key == 'p') {
        event.preventDefault();
        let title = document.title;
        document.title = 'untitled';
        window.print();
        document.title = title;
    }
})

