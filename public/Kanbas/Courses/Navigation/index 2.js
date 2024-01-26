function CourseNavigation(location) {
    const links =[
        {name: "Home", url: "../Home/screen.html"},
        {name: "Modules", url: "#"},
        {name: "Piazza", url: "#"},
        {name: "Zoom Meetings", url: "#"},
        {name: "Assignments", url: "../Assignments/screen.html"},
        {name: "Quizzes", url: "#"},
        {name: "Grades", url: "../Grades/screen.html"},
        {name: "People", url: "#"},
        {name: "Panopto Video", url: "#"},
        {name: "Discussions", url: "#"},
        {name: "Announcements", url: "#"},
        {name: "Pages", url: "#"},
        {name: "Files", url: "#"},
        {name: "Rubrics", url: "#"},
        {name: "Outcomes", url: "#"},
        {name: "Collaborations", url: "#"},
        {name: "Syllabus", url: "#"},
        {name: "Settings", url: "#"},
    ];

    return `
        <ul>
            ${links
                .map((link) => {
                    return `
                        <li><a style="color:${
                            link.name == location ? "red" : "black"
                        }" href="${link.url}">${link.name}</a></li>
                    `;
            })
            .join("")}
    </ul>     
    `;
}