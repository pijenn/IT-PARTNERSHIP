export const DataButtonSlide = [
    {
        id: 1,
        title: "Line",
        msg: "Add Line",
        icon: "https://res.cloudinary.com/dkncrhkfo/image/upload/v1717011695/Component_2_gwgelw.svg",
        link: "https://line.me/ti/p/ahrzeHOgey",
    },
    {
        id: 2,
        title: "WA",
        msg: "Chat Whatsapp",
        icon: "https://res.cloudinary.com/dkncrhkfo/image/upload/v1717011695/Component_1_byjvbv.svg",
        link: "https://wa.me/6285694477190?text=Halo,%20saya%20tertarik%20dengan%20IT%20Partnership!",
    },
]

export const findButtonSlide = (title) => {
    let obj = DataButtonSlide.find((item) => item.title === title);
    if (obj) {
        return obj;
    }

    console.log("ButtonSlide not found or Check your parameter");
    return {};
}