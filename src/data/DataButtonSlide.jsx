export const DataButtonSlide = [
    {
        id: 1,
        title: "Line",
        msg: "Add Line",
        icon: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1684648473/Line_dbhlda.svg",
        link: "https://line.me/ti/p/~Wirkananda10",
    },
    {
        id: 2,
        title: "WA",
        msg: "Chat Whatsapp",
        icon: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1684648475/WA_f0jecc.svg",
        link: "https://api.whatsapp.com/send/?phone=+6281236548660&text=Halo+Saya+Tertarik+dengan+IT+Partnership&type=phone_number&app_absent=0",
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