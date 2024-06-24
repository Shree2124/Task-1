import post1 from "../images/Post1.jpg"
import post2 from "../images/Post2.jpg"
import post3 from "../images/Post3.jpg"
import avatar1 from "../images/avatar1.jpg"
import avatar2 from "../images/avatar2.jpg"
import avatar3 from "../images/avatar3.jpg"
import avatar4 from "../images/avatar4.jpg"

export const SamplePosts = [
    {
        image: post1,
        title: "✍️ Article",
        subTitle: "What if famous brands had regular fonts? Meet RegulaBrands!",
        content: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        user: {
            avatar: avatar1,
            name: "Siddharth Goyal",
            views: "1.4k"
        }
    },
    {
        image: post2,
        title: "🔬️ Education",
        subTitle: "Tax Benefits for Investment under National Pension Scheme launched by Government",
        content: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        user: {
            avatar: avatar2,
            name: "Siddharth Goyal",
            views: "1.4k"
        }
    },
    {
        type: "job",
        image: "",
        title: "🗓️ Meetup",
        subTitle: "Finance & Investment Elite Social Mixer @Lujiazui",
        content: "",
        date: "Fri, 12 Oct, 2018",
        location: "Ahmedabad, India",    
        user: {
            avatar: avatar4,
            name: "Siddharth Goyal",
            views: "1.4k"
        }
    },
    {
        type: "job",
        image: post3,
        title: "💼️ Job",
        company: "Innovaccer Analytics Private Ltd.",
        location: "Noida, India",
        website: "blabla",
        subTitle: "Software Developer",
        content: "",
        user: {
            avatar: avatar3,
            name: "Siddharth Goyal",
            views: "1.4k"
        }
    },
]