// Voltando ao topo
function backToTop(continuar) {
    if (continuar) document.documentElement.scrollTop = 0;
    else if (window.location.pathname.split('/').pop() === 'historia.html') window.open('./#', '_self');
    else window.open('../#', '_self');
}