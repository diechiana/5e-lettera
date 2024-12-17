
document.getElementById("formLettera").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const scuola = document.getElementById("scuola").value;
    const problema = document.getElementById("problema").value;

    const testoLettera = `
        Spettabile ${scuola},<br><br>
        Mi chiamo ${nome} e desidero segnalare un problema riguardante la pulizia della vostra struttura scolastica. <br><br>
        ${problema}<br><br>
        Spero che possiate prendere provvedimenti tempestivi per risolvere questa situazione.<br><br>
        Cordiali saluti,<br>
        ${nome}
    `;

    document.getElementById("testoLettera").innerHTML = testoLettera;
    document.getElementById("letteraGenerata").classList.remove("lettera-nascosta");
});

