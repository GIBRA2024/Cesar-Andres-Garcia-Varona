function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:García Varona;Cesar;Andrés;;
FN:Cesar Andrés García Varona
TEL:+57 3102776017
EMAIL;TYPE=WORK: directorporcicultura@cervalle.com
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
