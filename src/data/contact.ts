export const CONTACT = {
  email: "mahenaj.dev@gmail.com",
  phone: "+880 1317690285",
  whatsapp: "+880 1317690285",
  location: "Chattogram, Bangladesh",
  github: "https://github.com/mahenaj-tabassum",
  linkedin: "https://www.linkedin.com/in/mahenaj-tabassum/",
};

export const phoneHref = (phone: string) =>
  `tel:${phone.replace(/[^\d+]/g, "")}`;

export const whatsappHref = (number: string) =>
  `https://wa.me/${number.replace(/\D/g, "")}`;
