function orderWhatsApp() {
    const phone = "916302695391";
    const message = "Hello, I want to order food";

    const url =
        "https://api.whatsapp.com/send?phone=" +
        phone +
        "&text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}
