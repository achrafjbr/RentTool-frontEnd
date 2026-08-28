export const whatsAppContact = (phone: string) => {
  const whatsapplink = `https://wa.me/${phone}?text=${encodeURIComponent("Salut")}`;
  window.open(whatsapplink, "_blank", "noopener,noreferrer");
};
