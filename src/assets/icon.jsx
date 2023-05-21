export const icon = [
    {
        id: 1,
        name: "Line",
        url: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1684648473/Line_dbhlda.svg"
    },
    {
        id: 2,
        name: "WA",
        url: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1684648475/WA_f0jecc.svg",
    },
    {
        id: 3,
        name: "LogoBEM",
        url: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1684387560/Logo_BEM_nxphj5.svg",
    },
    {
        id: 4,
        name: "Shadow",
        url: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1684403948/Shadow1_h7wijp.svg",
    },

];

export const findIcon = (name) => {
    let obj = icon.find((item) => item.name === name);
    if (obj) {
        return obj.url;
    }

    console.log("Icon not found or Check your parameter");
    return ""; 
}