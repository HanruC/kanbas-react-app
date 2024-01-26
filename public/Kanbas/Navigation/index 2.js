function KanbasNavigation() {
    const links =[
        {name: "Account", url: "../Account/Navigation/index.html"},
        {name: "Dashboard", url: "#"},
        {name: "Courses", url: "#"},
        {name: "Calendar", url: "#"},
        {name: "Inbox", url: "#"},
        {name: "History", url: "#"},
        {name: "Studio", url: "#"},
        {name: "Commons", url: "#"},
        {name: "Help", url: "#"},
    ];
    return `
        <ul style="background-color: black; padding-left: 0px; list-style-type: none">
            ${links
                .map((link) => {
                    return `
                        <li style="padding: 20px"><a style="font-family: arial; color: white; text-decoration: none" href="${link.url}">${link.name}</a></li>
                    `;
                })
                .join("")}
      </ul> `;
}   