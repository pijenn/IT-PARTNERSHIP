export const DataButtonSlide = [
    {
        id: 1,
        title: "Line",
        msg: "Add Line",
        icon: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1684648473/Line_dbhlda.svg",
        link: "",
    },
    {
        id: 2,
        title: "WA",
        msg: "Chat WA",
        icon: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1684648475/WA_f0jecc.svg",
        link: "",
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