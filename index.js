const parms = new URLSearchParams(window.location.search);
window.location.replace(`mailto:${parms.get('email')}`);
close();