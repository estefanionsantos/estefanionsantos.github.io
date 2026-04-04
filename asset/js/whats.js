
function getWhatsAppLink(phone) {
    const phoneApi = phone.replace(/\D/g, '');

    const isMobile = /iPhone|Android|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

    let link = "";

    if (isMobile) {
        link = `https://api.whatsapp.com/send?l=pt_BR&phone=5551${phoneApi}`;
    } else {
        link = `https://web.whatsapp.com/send?phone=+5551${phoneApi}&text=#`;
    }

    return link;
}

function redirectWhatsApp(phone) {
    const url = getWhatsAppLink(phone);
    window.location.assign(url);
}


