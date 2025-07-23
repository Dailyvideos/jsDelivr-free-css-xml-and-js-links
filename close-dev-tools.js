    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
    });

    
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
        }
    });

    
    const devtoolsCheck = setInterval(() => {
        const element = new Image();
        Object.defineProperty(element, 'id', {
            get: function () {
                throw new Error('DevTools Detected');
            }
        });
        try {
            console.log(element);
        } catch (e) {
            alert('Please close the developer tools!');
            clearInterval(devtoolsCheck);
        }
    }, 1000);

    
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'J' || e.key === 'K')) {
            e.preventDefault();
        }
    });

    
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
        }
    });

    
    setInterval(() => {
        const before = performance.now();
        debugger;
        const after = performance.now();
        if (after - before > 10) {
            alert('Debugger detected! Please close developer tools.');
        }
    }, 1000);
