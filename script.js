// ========================================
// YouTube Clone - Enhanced Version
// ========================================
console.log('Script loaded');

// ========================================
// Mock Data Configuration
// ========================================
// ========================================
// Mock Data Categories
// ========================================

const musicVideos = [
    {
        id: 'kJQP7kiw5Fk',
        title: "Luis Fonsi - Despacito ft. Daddy Yankee",
        thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hq720.jpg",
        duration: "4:42",
        channel: "Luis Fonsi",
        views: "8.2B views",
        date: "6 years ago",
        category: "music",
        description: "Despacito by Luis Fonsi ft. Daddy Yankee."
    },
    {
        id: 'jg09lNupc1s',
        title: "Ed Sheeran - Shape of You (Official Video)",
        thumbnail: "https://i.ytimg.com/vi/jg09lNupc1s/hq720.jpg",
        duration: "4:24",
        channel: "Ed Sheeran",
        views: "6.1B views",
        date: "6 years ago",
        category: "music",
        description: "The official music video for Ed Sheeran - Shape of You."
    },
    {
        id: '9bZkp7q19f0',
        title: "PSY - GANGNAM STYLE(강남스타일) M/V",
        thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg",
        duration: "4:13",
        channel: "officialpsy",
        views: "5.2B views",
        date: "11 years ago",
        category: "music",
        description: "The world famous Gangnam Style."
    },
    {
        id: '09R8_2nJtjg',
        title: "Maroon 5 - Sugar (Official Music Video)",
        thumbnail: "https://i.ytimg.com/vi/09R8_2nJtjg/hq720.jpg",
        duration: "5:02",
        channel: "Maroon 5",
        views: "4B views",
        date: "9 years ago",
        category: "music",
        description: "Maroon 5 - Sugar official video."
    },
    {
        id: 'fRh_vgS2dFE',
        title: "Justin Bieber - Sorry (PURPOSE : The Movement)",
        thumbnail: "https://i.ytimg.com/vi/fRh_vgS2dFE/hq720.jpg",
        duration: "3:26",
        channel: "Justin Bieber",
        views: "3.7B views",
        date: "8 years ago",
        category: "music",
        description: "Justin Bieber - Sorry."
    },
    {
        id: 'nfWlot6h_JM',
        title: "Taylor Swift - Shake It Off",
        thumbnail: "https://i.ytimg.com/vi/nfWlot6h_JM/hq720.jpg",
        duration: "4:02",
        channel: "Taylor Swift",
        views: "3.4B views",
        date: "9 years ago",
        category: "music",
        description: "Taylor Swift - Shake It Off."
    },
    {
        id: 'YQHsXMglC9A',
        title: "Adele - Hello",
        thumbnail: "https://i.ytimg.com/vi/YQHsXMglC9A/hq720.jpg",
        duration: "6:07",
        channel: "Adele",
        views: "3.1B views",
        date: "8 years ago",
        category: "music",
        description: "Adele - Hello."
    },
    {
        id: 'lp-EO5I60KA',
        title: "Ed Sheeran - Thinking Out Loud (Official Video)",
        thumbnail: "https://i.ytimg.com/vi/lp-EO5I60KA/hq720.jpg",
        duration: "4:57",
        channel: "Ed Sheeran",
        views: "3.7B views",
        date: "9 years ago",
        category: "music",
        description: "Ed Sheeran - Thinking Out Loud."
    },
    {
        id: 'RgKAFK5djSk',
        title: "Wiz Khalifa - See You Again ft. Charlie Puth",
        thumbnail: "https://i.ytimg.com/vi/RgKAFK5djSk/hq720.jpg",
        duration: "3:58",
        channel: "Wiz Khalifa",
        views: "6.2B views",
        date: "9 years ago",
        category: "music",
        description: "See You Again ft. Charlie Puth."
    },
    {
        id: 'OPf0YbXqDm0',
        title: "Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars",
        thumbnail: "https://i.ytimg.com/vi/OPf0YbXqDm0/hq720.jpg",
        duration: "4:31",
        channel: "Mark Ronson",
        views: "5.1B views",
        date: "9 years ago",
        category: "music",
        description: "Uptown Funk ft. Bruno Mars."
    }
];

const gamingVideos = [
    { id: 'K_03kFqWfqk', title: "Elden Ring: Shadow of the Erdtree Review", thumbnail: "https://i.ytimg.com/vi/K_03kFqWfqk/hq720.jpg", duration: "22:15", channel: "IGN", views: "1.2M", date: "2 days ago", category: "gaming" },
    { id: 'QdBZY2fkU-0', title: "Grand Theft Auto VI Trailer 1", thumbnail: "https://i.ytimg.com/vi/QdBZY2fkU-0/hq720.jpg", duration: "1:31", channel: "Rockstar Games", views: "190M", date: "6 months ago", category: "gaming" },
    { id: '0e3GPea1Tyg', title: "Nintendo Switch 2 Leaks!", thumbnail: "https://i.ytimg.com/vi/0e3GPea1Tyg/hq720.jpg", duration: "10:05", channel: "SwitchForce", views: "450K", date: "1 week ago", category: "gaming" },
    { id: 'jNQXAC9IVRw', title: "Me at the zoo", thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/hq720.jpg", duration: "0:19", channel: "jawed", views: "320M", date: "19 years ago", category: "gaming" }, // Using as classic, maybe not gaming but iconic
    { id: 'V1llkLoME0s', title: "Minecraft: 15 Years of Minecraft", thumbnail: "https://i.ytimg.com/vi/V1llkLoME0s/hq720.jpg", duration: "1:30", channel: "Minecraft", views: "5M", date: "1 month ago", category: "gaming" },
    { id: 'Lmbw4_b7TMc', title: "League of Legends - Arcane Season 2 Trailer", thumbnail: "https://i.ytimg.com/vi/Lmbw4_b7TMc/hq720.jpg", duration: "2:45", channel: "League of Legends", views: "15M", date: "2 weeks ago", category: "gaming" },
    { id: 'odv9A9e3p-g', title: "God of War Ragnarok - Valhalla DLC", thumbnail: "https://i.ytimg.com/vi/odv9A9e3p-g/hq720.jpg", duration: "3:00", channel: "PlayStation", views: "8M", date: "6 months ago", category: "gaming" },
    { id: 'Ftr8Vdfj7sY', title: "Final Fantasy VII Rebirth - Final Trailer", thumbnail: "https://i.ytimg.com/vi/Ftr8Vdfj7sY/hq720.jpg", duration: "4:00", channel: "Final Fantasy", views: "2M", date: "3 months ago", category: "gaming" },
    { id: 'vj1aO_f4w40', title: "DOOM: The Dark Ages - Trailer", thumbnail: "https://i.ytimg.com/vi/vj1aO_f4w40/hq720.jpg", duration: "2:10", channel: "Bethesda", views: "4M", date: "1 week ago", category: "gaming" },
    { id: 'c18d6at7_jo', title: "Fortnite Chapter 5 Season 3 Trailer", thumbnail: "https://i.ytimg.com/vi/c18d6at7_jo/hq720.jpg", duration: "1:45", channel: "Fortnite", views: "10M", date: "2 weeks ago", category: "gaming" }
];

const newsVideos = [
    { id: 'LXb3EKWsInQ', title: "COSTA RICA IN 4K 60fps HDR (ULTRA HD)", thumbnail: "https://i.ytimg.com/vi/LXb3EKWsInQ/hq720.jpg", duration: "5:00", channel: "Jacob + Katie Schwarz", views: "100M", date: "8 years ago", category: "news" }, // Nature as generic news/doc placeholder
    { id: 'ysz5S6P_cNY', title: "BBC News Theme", thumbnail: "https://i.ytimg.com/vi/ysz5S6P_cNY/hq720.jpg", duration: "1:00", channel: "BBC", views: "5M", date: "10 years ago", category: "news" },
    { id: '9X07H1d8gC4', title: "Breaking News Intro", thumbnail: "https://i.ytimg.com/vi/9X07H1d8gC4/hq720.jpg", duration: "0:30", channel: "News Channel", views: "1M", date: "5 years ago", category: "news" },
    { id: '_Am7g9C-d20', title: "SpaceX Starship Launch", thumbnail: "https://i.ytimg.com/vi/_Am7g9C-d20/hq720.jpg", duration: "4:30", channel: "SpaceX", views: "2.1M", date: "5 hours ago", category: "news" },
    { id: 'eIho2S0ZahI', title: "Total Solar Eclipse 2024", thumbnail: "https://i.ytimg.com/vi/eIho2S0ZahI/hq720.jpg", duration: "3:00", channel: "NASA", views: "10M", date: "2 months ago", category: "news" },
    { id: '5i_DPGj0KkM', title: "Global Warming Explained", thumbnail: "https://i.ytimg.com/vi/5i_DPGj0KkM/hq720.jpg", duration: "10:00", channel: "News Today", views: "500K", date: "1 year ago", category: "news" },
    { id: 'r2yY1iKqWzI', title: "Election Results 2024", thumbnail: "https://i.ytimg.com/vi/r2yY1iKqWzI/hq720.jpg", duration: "Live", channel: "Political News", views: "20K watching", date: "Live", category: "news" },
    { id: 'T4sim5s73C8', title: "Tech News Weekly", thumbnail: "https://i.ytimg.com/vi/T4sim5s73C8/hq720.jpg", duration: "15:00", channel: "Tech News", views: "200K", date: "2 days ago", category: "news" },
    { id: '2Vv-BfVoq4g', title: "Weather Forecast Today", thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hq720.jpg", duration: "5:00", channel: "Weather Channel", views: "50K", date: "Today", category: "news" },
    { id: 'ClvLp8t5q3U', title: "Stock Market Update", thumbnail: "https://i.ytimg.com/vi/ClvLp8t5q3U/hq720.jpg", duration: "8:00", channel: "Finance News", views: "100K", date: "Yesterday", category: "news" }
];

const sportsVideos = [
    { id: 'T1r6b4aK1l8', title: "Best Goals of 2024", thumbnail: "https://i.ytimg.com/vi/T1r6b4aK1l8/hq720.jpg", duration: "10:00", channel: "FIFA", views: "5M", date: "1 month ago", category: "sports" },
    { id: 'UBMk30rjy0o', title: "10 Minute Full Body Workout", thumbnail: "https://i.ytimg.com/vi/UBMk30rjy0o/hq720.jpg", duration: "10:00", channel: "Fitness Pro", views: "3.4M", date: "1 year ago", category: "sports" },
    { id: 'Vf0A-_b7_rU', title: "NBA Top 10 Plays of the Night", thumbnail: "https://i.ytimg.com/vi/Vf0A-_b7_rU/hq720.jpg", duration: "3:00", channel: "NBA", views: "1M", date: "1 day ago", category: "sports" },
    { id: 'L6yX6O_6skI', title: "Messi vs Ronaldo - The Rivalry", thumbnail: "https://i.ytimg.com/vi/L6yX6O_6skI/hq720.jpg", duration: "15:00", channel: "Football Daily", views: "20M", date: "2 years ago", category: "sports" },
    { id: 'N9c4_Zp9sg0', title: "UFC 300 Highlights", thumbnail: "https://i.ytimg.com/vi/N9c4_Zp9sg0/hq720.jpg", duration: "10:00", channel: "UFC", views: "5M", date: "1 month ago", category: "sports" },
    { id: 'g8X0_cZ9y4I', title: "F1 Monaco Grand Prix Highlights", thumbnail: "https://i.ytimg.com/vi/g8X0_cZ9y4I/hq720.jpg", duration: "8:00", channel: "Formula 1", views: "3M", date: "2 weeks ago", category: "sports" },
    { id: 'G9x1_A8y5j0', title: "Wimbledon Final 2024", thumbnail: "https://i.ytimg.com/vi/G9x1_A8y5j0/hq720.jpg", duration: "12:00", channel: "Wimbledon", views: "2M", date: "3 months ago", category: "sports" },
    { id: 'B7d9_F3k2lM', title: "Olympics 100m Final", thumbnail: "https://i.ytimg.com/vi/B7d9_F3k2lM/hq720.jpg", duration: "9:58", channel: "Olympics", views: "50M", date: "4 years ago", category: "sports" },
    { id: 'D5e2_H6n1oP', title: "NFL Super Bowl Highlights", thumbnail: "https://i.ytimg.com/vi/D5e2_H6n1oP/hq720.jpg", duration: "15:00", channel: "NFL", views: "10M", date: "4 months ago", category: "sports" },
    { id: 'I8f3_J7k4mN', title: "Tony Hawk Skateboard Tricks", thumbnail: "https://i.ytimg.com/vi/I8f3_J7k4mN/hq720.jpg", duration: "5:00", channel: "X Games", views: "1M", date: "10 years ago", category: "sports" }
];

const educationVideos = [
    { id: 'kqtD5dpn9C8', title: "Python for Beginners - Full Course", thumbnail: "https://i.ytimg.com/vi/kqtD5dpn9C8/hq720.jpg", duration: "1:00:00", channel: "Programming Hub", views: "8.2M", date: "2 years ago", category: "education" },
    { id: '8jPOHVQx9aM', title: "The History of the World: Every Year", thumbnail: "https://i.ytimg.com/vi/8jPOHVQx9aM/hq720.jpg", duration: "19:50", channel: "Ollie Bye", views: "10M", date: "7 years ago", category: "education" },
    { id: 'h8K49dD52WA', title: "History of the Internet", thumbnail: "https://i.ytimg.com/vi/h8K49dD52WA/hq720.jpg", duration: "45:00", channel: "Educational Stories", views: "2M", date: "1 year ago", category: "education" },
    { id: 'b7_hI6b7_g0', title: "Quantum Physics for 7 Year Olds", thumbnail: "https://i.ytimg.com/vi/b7_hI6b7_g0/hq720.jpg", duration: "4:00", channel: "Dominic Walliman", views: "5M", date: "8 years ago", category: "education" },
    { id: 'uD4izuDMUQA', title: "TIMELAPSE OF THE FUTURE: A Journey to the End of Time", thumbnail: "https://i.ytimg.com/vi/uD4izuDMUQA/hq720.jpg", duration: "29:21", channel: "Melodysheep", views: "100M", date: "5 years ago", category: "education" },
    { id: '9bZkp7q19f0', title: "Learn Spanish in 10 Minutes", thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg", duration: "10:00", channel: "Language Pod", views: "1M", date: "1 year ago", category: "education" }, // Reusing ID for demo
    { id: '7Ron6MN45LY', title: "How to Solve a Rubik's Cube", thumbnail: "https://i.ytimg.com/vi/7Ron6MN45LY/hq720.jpg", duration: "15:30", channel: "Cube Master", views: "10M", date: "5 years ago", category: "education" },
    { id: 'JvS2l0s8g9A', title: "Calculus 1 - Full College Course", thumbnail: "https://i.ytimg.com/vi/JvS2l0s8g9A/hq720.jpg", duration: "5:00:00", channel: "FreeCodeCamp", views: "2M", date: "3 years ago", category: "education" },
    { id: 'Yw6u6YkDmqY', title: "The Solar System Explained", thumbnail: "https://i.ytimg.com/vi/Yw6u6YkDmqY/hq720.jpg", duration: "12:00", channel: "Space Info", views: "500K", date: "2 years ago", category: "education" },
    { id: 'H6u0VBqNBQ8', title: "How a CPU is made", thumbnail: "https://i.ytimg.com/vi/H6u0VBqNBQ8/hq720.jpg", duration: "10:00", channel: "Tech Facts", views: "3M", date: "4 years ago", category: "education" }
];

const technologyVideos = [
    { id: 'K4TORB4efI0', title: "iPhone 16 Pro Max - First Impressions", thumbnail: "https://i.ytimg.com/vi/K4TORB4efI0/hq720.jpg", duration: "15:00", channel: "Tech Reviewer", views: "3.2M", date: "3 days ago", category: "technology" },
    { id: 'y881t8ilMyc', title: "Building a YouTube Clone", thumbnail: "https://i.ytimg.com/vi/y881t8ilMyc/hq720.jpg", duration: "14:20", channel: "Web Dev Simply", views: "1.2M", date: "2 days ago", category: "technology" },
    { id: 'UZwM37cZz8Q', title: "Future of AI", thumbnail: "https://i.ytimg.com/vi/UZwM37cZz8Q/hq720.jpg", duration: "55:00", channel: "Tech Minds", views: "800K", date: "1 month ago", category: "technology" },
    { id: '78-1MPWJv4', title: "Apple Vision Pro - Review", thumbnail: "https://i.ytimg.com/vi/78-1MPWJv4/hq720.jpg", duration: "20:00", channel: "MKBHD", views: "15M", date: "3 months ago", category: "technology" },
    { id: 'g04s2u3v_5', title: "Tesla Cybertruck Driven", thumbnail: "https://i.ytimg.com/vi/g04s2u3v_5/hq720.jpg", duration: "18:00", channel: "Top Gear", views: "5M", date: "4 months ago", category: "technology" },
    { id: 'd9b3_j6k2l1', title: "Windows 12 Leaks", thumbnail: "https://i.ytimg.com/vi/d9b3_j6k2l1/hq720.jpg", duration: "8:00", channel: "Windows Central", views: "500K", date: "1 week ago", category: "technology" },
    { id: 'f1e2_d3c4b5', title: "Programming Setup 2025", thumbnail: "https://i.ytimg.com/vi/f1e2_d3c4b5/hq720.jpg", duration: "12:00", channel: "Code Life", views: "100K", date: "2 days ago", category: "technology" },
    { id: 'a1s2_d3f4g5', title: "The End of Smartphones?", thumbnail: "https://i.ytimg.com/vi/a1s2_d3f4g5/hq720.jpg", duration: "10:00", channel: "Tech Futures", views: "1M", date: "1 month ago", category: "technology" },
    { id: 'h6j7_k8l9q0', title: "Robots are taking over", thumbnail: "https://i.ytimg.com/vi/h6j7_k8l9q0/hq720.jpg", duration: "14:00", channel: "Boston Dynamics", views: "10M", date: "1 year ago", category: "technology" },
    { id: 'z1x2_c3v4b5', title: "Best Laptops 2025", thumbnail: "https://i.ytimg.com/vi/z1x2_c3v4b5/hq720.jpg", duration: "15:00", channel: "Dave2D", views: "2M", date: "1 month ago", category: "technology" }
];

const entertainmentVideos = [
    { id: '3Z1Z9C8_g_k', title: "Hydraulic Press Compilation", thumbnail: "https://i.ytimg.com/vi/3Z1Z9C8_g_k/hq720.jpg", duration: "12:30", channel: "Crush It", views: "5.2M", date: "1 month ago", category: "entertainment" },
    { id: 'BydH7kS24e8', title: "Cute Cat Compilation", thumbnail: "https://i.ytimg.com/vi/BydH7kS24e8/hq720.jpg", duration: "10:00", channel: "MeowTube", views: "50M", date: "3 years ago", category: "entertainment" },
    { id: 'dQw4w9WgXcQ', title: "Rick Astley - Never Gonna Give You Up", thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg", duration: "3:32", channel: "Rick Astley", views: "1.5B", date: "14 years ago", category: "entertainment" },
    { id: 'GfJ6Wj5k4L0', title: "Unboxing a Mystery Box", thumbnail: "https://i.ytimg.com/vi/GfJ6Wj5k4L0/hq720.jpg", duration: "15:00", channel: "MrBeast", views: "100M", date: "1 year ago", category: "entertainment" }, // Placeholder ID
    { id: 'H1i2_J3k4l5', title: "Funny Fails 2025", thumbnail: "https://i.ytimg.com/vi/H1i2_J3k4l5/hq720.jpg", duration: "10:00", channel: "FailArmy", views: "5M", date: "1 month ago", category: "entertainment" },
    { id: 'M6n7_O8p9q0', title: "Magic Tricks Revealed", thumbnail: "https://i.ytimg.com/vi/M6n7_O8p9q0/hq720.jpg", duration: "8:00", channel: "Magician", views: "1M", date: "2 years ago", category: "entertainment" },
    { id: 'Q1w2_E3r4t5', title: "Street Interviews NYC", thumbnail: "https://i.ytimg.com/vi/Q1w2_E3r4t5/hq720.jpg", duration: "12:00", channel: "Talk Show", views: "500K", date: "1 week ago", category: "entertainment" },
    { id: 'Y7u8_I9o0p1', title: " reacting to weird tiktoks", thumbnail: "https://i.ytimg.com/vi/Y7u8_I9o0p1/hq720.jpg", duration: "20:00", channel: "Reactor", views: "2M", date: "3 days ago", category: "entertainment" },
    { id: 'A1s2_D3f4g5', title: "Behind the Scenes Movie", thumbnail: "https://i.ytimg.com/vi/A1s2_D3f4g5/hq720.jpg", duration: "10:00", channel: "Movie Buff", views: "1M", date: "1 month ago", category: "entertainment" },
    { id: 'Z9x8_C7v6b5', title: "Stand Up Comedy Special", thumbnail: "https://i.ytimg.com/vi/Z9x8_C7v6b5/hq720.jpg", duration: "1:00:00", channel: "Comedy Club", views: "5M", date: "1 year ago", category: "entertainment" }
];

const cookingVideos = [
    { id: 'iM_KMYnDngM', title: "The Ultimate Cheeseburger", thumbnail: "https://i.ytimg.com/vi/iM_KMYnDngM/hq720.jpg", duration: "8:45", channel: "Cooking Master", views: "5.6M", date: "3 months ago", category: "cooking" },
    { id: '1-SJGQ2HLp8', title: "Making Pasta from Scratch", thumbnail: "https://i.ytimg.com/vi/1-SJGQ2HLp8/hq720.jpg", duration: "18:45", channel: "Italian Grandma", views: "900K", date: "6 months ago", category: "cooking" },
    { id: 'u3h4_g5j6k7', title: "Gordon Ramsay Cooks Steak", thumbnail: "https://i.ytimg.com/vi/u3h4_g5j6k7/hq720.jpg", duration: "10:00", channel: "Gordon Ramsay", views: "10M", date: "2 years ago", category: "cooking" },
    { id: 'l9k8_j7h6g5', title: "Best Pizza in Naples", thumbnail: "https://i.ytimg.com/vi/l9k8_j7h6g5/hq720.jpg", duration: "12:00", channel: "Food Traveler", views: "1M", date: "1 year ago", category: "cooking" },
    { id: 'p1o2_i3u4y5', title: "How to Bake Sourdough Bread", thumbnail: "https://i.ytimg.com/vi/p1o2_i3u4y5/hq720.jpg", duration: "15:00", channel: "Bread Life", views: "500K", date: "6 months ago", category: "cooking" },
    { id: 't6r5_e4w3q2', title: "Spicy Ramen Challenge", thumbnail: "https://i.ytimg.com/vi/t6r5_e4w3q2/hq720.jpg", duration: "20:00", channel: "Food Challenge", views: "2M", date: "1 month ago", category: "cooking" },
    { id: 'm1n2_b3v4c5', title: "5 Minute Breakfast Ideas", thumbnail: "https://i.ytimg.com/vi/m1n2_b3v4c5/hq720.jpg", duration: "5:00", channel: "Quick Meals", views: "3M", date: "1 year ago", category: "cooking" },
    { id: 'x9c8_v7b6n5', title: "Sushi Masterclass", thumbnail: "https://i.ytimg.com/vi/x9c8_v7b6n5/hq720.jpg", duration: "25:00", channel: "Sushi Chef", views: "1M", date: "2 years ago", category: "cooking" },
    { id: 'z1l2_k3j4h5', title: "Chocolate Cake Recipe", thumbnail: "https://i.ytimg.com/vi/z1l2_k3j4h5/hq720.jpg", duration: "8:00", channel: "Baking 101", views: "2M", date: "1 month ago", category: "cooking" },
    { id: 'q1w2_e3r4t5', title: "Street Food in Bangkok", thumbnail: "https://i.ytimg.com/vi/q1w2_e3r4t5/hq720.jpg", duration: "15:00", channel: "Street Food", views: "5M", date: "3 years ago", category: "cooking" }
];

const travelVideos = [
    { id: 't4gH1e9nC6o', title: "Top 10 Travel Destinations 2025", thumbnail: "https://i.ytimg.com/vi/t4gH1e9nC6o/hq720.jpg", duration: "10:05", channel: "Wanderlust World", views: "450K", date: "1 week ago", category: "travel" },
    { id: '0e3GPea1Tyg', title: "Amazing Street Food in Japan", thumbnail: "https://i.ytimg.com/vi/0e3GPea1Tyg/hq720.jpg", duration: "20:00", channel: "Foodie Traveler", views: "1.5M", date: "2 weeks ago", category: "travel" },
    { id: 'Vq17cZ7YwJ0', title: "Minimalist Apartment Tour", thumbnail: "https://i.ytimg.com/vi/Vq17cZ7YwJ0/hq720.jpg", duration: "12:00", channel: "Living Simple", views: "600K", date: "5 months ago", category: "travel" },
    { id: 'h1g2_f3d4s5', title: "Backpacking across Europe", thumbnail: "https://i.ytimg.com/vi/h1g2_f3d4s5/hq720.jpg", duration: "25:00", channel: "Backpacker", views: "2M", date: "1 year ago", category: "travel" },
    { id: 'j6k7_l8p9o0', title: "Van Life Documentry", thumbnail: "https://i.ytimg.com/vi/j6k7_l8p9o0/hq720.jpg", duration: "40:00", channel: "Van Lifer", views: "3M", date: "2 years ago", category: "travel" },
    { id: 'p0o9_i8u7y6', title: "Luxury Hotel Review Dubai", thumbnail: "https://i.ytimg.com/vi/p0o9_i8u7y6/hq720.jpg", duration: "15:00", channel: "Luxury Travel", views: "1M", date: "6 months ago", category: "travel" },
    { id: 't5r4_e3w2q1', title: "Hiking the Alps", thumbnail: "https://i.ytimg.com/vi/t5r4_e3w2q1/hq720.jpg", duration: "18:00", channel: "Hiker", views: "500K", date: "3 months ago", category: "travel" },
    { id: 'm1n2_b3v4c5', title: "Solo Travel in Bali", thumbnail: "https://i.ytimg.com/vi/m1n2_b3v4c5/hq720.jpg", duration: "12:00", channel: "Solo Traveler", views: "800K", date: "1 year ago", category: "travel" },
    { id: 'z1x2_c3v4b5', title: "New York City Guide", thumbnail: "https://i.ytimg.com/vi/z1x2_c3v4b5/hq720.jpg", duration: "10:00", channel: "City Guide", views: "2M", date: "4 years ago", category: "travel" },
    { id: 'q1w2_e3r4t5', title: "Safari in Africa", thumbnail: "https://i.ytimg.com/vi/q1w2_e3r4t5/hq720.jpg", duration: "20:00", channel: "Wildlife", views: "1M", date: "2 years ago", category: "travel" }
];

const mockVideos = [
    ...musicVideos,
    ...gamingVideos,
    ...newsVideos,
    ...sportsVideos,
    ...educationVideos,
    ...technologyVideos,
    ...entertainmentVideos,
    ...cookingVideos,
    ...travelVideos
];


// State for videos
let videos = [...mockVideos]; // Initialize with mock data

// ========================================
// API/Mock Functions
// ========================================
async function fetchVideos(query = '', category = 'all') {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));

    console.log(`Fetching videos (Mock) - Query: "${query}", Category: "${category}"`);

    let filteredVideos = mockVideos;

    if (category && category !== 'all') {
        filteredVideos = filteredVideos.filter(video => video.category === category);
    }

    if (query) {
        const lowerQuery = query.toLowerCase();
        filteredVideos = filteredVideos.filter(video =>
            video.title.toLowerCase().includes(lowerQuery) ||
            video.channel.toLowerCase().includes(lowerQuery)
        );
    }

    return filteredVideos;
}

// ========================================
// State Management
// ========================================
let currentCategory = 'all';
let currentTheme = localStorage.getItem('theme') || 'dark';
let sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
let watchHistory = JSON.parse(localStorage.getItem('watchHistory') || '[]');
let playlists = JSON.parse(localStorage.getItem('playlists') || '[]');
let likedVideos = JSON.parse(localStorage.getItem('likedVideos') || '[]');

// ========================================
// DOM Elements
// ========================================
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const videoGrid = document.getElementById('videoGrid');
const categoryChips = document.querySelectorAll('.chip');

// ========================================
// Initialization
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    console.log('initializeApp called');
    applyTheme(currentTheme);
    updateThemeUI(currentTheme);
    loadProfile();
    setSidebarState(sidebarCollapsed);

    // Check if we are on home page or video page
    if (document.getElementById('videoGrid')) {
        fetchVideos().then(fetchedVideos => {
            videos = fetchedVideos;
            renderVideos(videos);
        });
    } else if (document.getElementById('videoTitle')) {
        loadVideoPage();
    }

    attachEventListeners();

    // Show toast notification
    showToast('Welcome to VidStream! 🎥', 'success');
}

async function loadVideoPage() {
    console.log('loadVideoPage called');
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');
    console.log('Video ID:', videoId);

    if (videoId) {
        try {
            // Find video in mock data
            // In a real app with more pages, we might need to check if it's in the full list
            // For this demo, we can just look in mockVideos directly
            const video = mockVideos.find(v => v.id === videoId);

            if (!video) {
                console.error('Video not found in mock data:', videoId);
                // Fallback or error handling
                // throw new Error('Video not found');
            }

            console.log('Video found:', video ? video.title : 'Not in local list (might be from related)');

            // Use the found video or a fallback if arriving from a direct link not in initial set
            const videoData = video || {
                title: "Mock Video Title",
                channel: "Mock Channel",
                views: "1M views",
                date: "1 day ago",
                description: "This is a mock description because the video ID wasn't found in our limited mock set."
            };


            // Update Page Title
            document.title = `${videoData.title} - VidStream`;

            // Update Video Info
            const titleEl = document.getElementById('videoTitle');
            const viewsEl = document.getElementById('videoViews');
            const dateEl = document.getElementById('videoDate');
            const channelNameEl = document.querySelector('.channel-name');
            const channelAvatarEl = document.querySelector('.channel-avatar.large');
            const descriptionEl = document.querySelector('.video-description .description-text'); // Targeted more specifically if needed

            if (titleEl) titleEl.textContent = videoData.title;
            if (viewsEl) viewsEl.textContent = videoData.views;
            if (dateEl) dateEl.textContent = videoData.date;
            if (channelNameEl) channelNameEl.textContent = videoData.channel;

            // Note: The previous code replaced the whole description content including the button
            // We should be careful to only replace text or reconstruct. 
            try {
                // Toggle UI elements
                if (sidebar) sidebar.classList.add('collapsed');
                if (videoGrid) videoGrid.style.display = 'none';

                // Setup Video Player Wrapper
                const videoPageContent = document.getElementById('videoPageContent');
                if (videoPageContent) {
                    videoPageContent.style.display = 'grid'; // Ensure grid layout

                    const playerWrapper = document.querySelector('.video-player-wrapper');
                    if (playerWrapper) {
                        // Clear existing content (custom player)
                        playerWrapper.innerHTML = '';

                        // Create YouTube Iframe
                        const iframe = document.createElement('iframe');
                        iframe.src = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;
                        iframe.title = video.title;
                        iframe.width = '100%';
                        iframe.height = '100%';
                        iframe.style.position = 'absolute';
                        iframe.style.top = '0';
                        iframe.style.left = '0';
                        iframe.border = '0';
                        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
                        iframe.allowFullscreen = true;

                        playerWrapper.appendChild(iframe);
                    }
                }

                // Update Video Info
                document.querySelector('.video-title-main').textContent = video.title;
                document.querySelector('.channel-name').textContent = video.channel;
                document.querySelector('.channel-subscribers').textContent = '1.2M subscribers'; // Mock sub count
                document.querySelector('.description-text').textContent = video.description;

                // Update Avatar
                const avatar = document.querySelector('.channel-avatar.large');
                if (avatar) {
                    avatar.style.backgroundImage = `url('https://ui-avatars.com/api/?name=${video.channel}&background=random')`;
                }
            } catch (error) {
                console.error("Error updating video UI:", error);
            }

            // Update Watch Later Button State
            const saveBtn = document.getElementById('saveBtn');
            if (saveBtn) {
                console.log('Save button found, attaching listener');
                const watchLater = JSON.parse(localStorage.getItem('watchLater') || '[]');
                const isSaved = watchLater.includes(videoId);

                if (isSaved) {
                    saveBtn.classList.add('active');
                    saveBtn.querySelector('i').className = 'fas fa-bookmark';
                    saveBtn.querySelector('span').textContent = 'Saved';
                }

                // Remove existing listeners (if any) by cloning
                const newSaveBtn = saveBtn.cloneNode(true);
                saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);

                newSaveBtn.addEventListener('click', () => {
                    console.log('Save button clicked');
                    toggleWatchLater(videoId, newSaveBtn);
                });
            } else {
                console.error('Save button NOT found');
            }

            // Mock Related Videos
            const relatedList = document.getElementById('relatedVideosList');
            if (relatedList) {
                // Exclude current video
                const related = mockVideos.filter(v => v.id !== videoId);

                relatedList.innerHTML = related.map(video => `
                    <div class="related-video-card" onclick="window.location.href='video.html?id=${video.id}'">
                        <div class="related-thumbnail">
                            <img src="${video.thumbnail}" alt="${video.title}">
                            <span class="duration" style="position: absolute; bottom: 5px; right: 5px; background: rgba(0,0,0,0.8); color: white; padding: 2px 4px; border-radius: 4px; font-size: 10px;">${video.duration}</span>
                        </div>
                        <div class="related-info">
                            <h4 class="related-title">${video.title}</h4>
                            <p class="related-channel">${video.channel}</p>
                            <p class="related-stats">${video.views} • ${video.date}</p>
                        </div>
                    </div>
                `).join('');
            }


        } catch (error) {
            console.error('Error loading video page:', error);
            showToast('Failed to load video details', 'error');
        }
    }
}

function toggleWatchLater(videoId, btn) {
    let watchLater = JSON.parse(localStorage.getItem('watchLater') || '[]');
    const index = watchLater.indexOf(videoId);

    if (index === -1) {
        // Add
        watchLater.push(videoId);
        btn.classList.add('active');
        btn.querySelector('i').className = 'fas fa-bookmark';
        btn.querySelector('span').textContent = 'Saved';
        showToast('Saved to Watch Later', 'success');
    } else {
        // Remove
        watchLater.splice(index, 1);
        btn.classList.remove('active');
        btn.querySelector('i').className = 'far fa-bookmark';
        btn.querySelector('span').textContent = 'Save';
        showToast('Removed from Watch Later', 'success');
    }

    localStorage.setItem('watchLater', JSON.stringify(watchLater));
}

// ========================================
// Profile Functions
// ========================================
function updateProfileName(name) {
    localStorage.setItem('profileName', name);
    const nameDisplay = document.getElementById('profileNameDisplay');
    if (nameDisplay) nameDisplay.textContent = name;
}

function updateProfileAvatar(imageUrl) {
    localStorage.setItem('profileAvatar', imageUrl);

    // Update all avatar instances
    const avatars = document.querySelectorAll('.user-avatar');
    avatars.forEach(avatar => {
        if (avatar.classList.contains('large')) {
            avatar.style.backgroundImage = `url(${imageUrl})`;
            avatar.textContent = '';
        } else {
            avatar.style.backgroundImage = `url(${imageUrl})`;
            avatar.style.backgroundSize = 'cover';
            avatar.textContent = '';
        }
    });
}

function loadProfile() {
    const name = localStorage.getItem('profileName');
    const avatar = localStorage.getItem('profileAvatar');

    if (name) {
        const nameDisplay = document.getElementById('profileNameDisplay');
        if (nameDisplay) nameDisplay.textContent = name;
    }

    if (avatar) {
        updateProfileAvatar(avatar);
    }
}

// ========================================
// Theme Functions
// ========================================
const systemThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    currentTheme = theme;

    updateThemeUI(theme);
    applyTheme(theme);
}

function updateThemeUI(theme) {
    // Update label
    const label = document.getElementById('currentThemeLabel');
    if (label) {
        label.textContent = theme === 'auto' ? 'Device Theme' : (theme === 'dark' ? 'Dark theme' : 'Light theme');
    }

    // Update checkmarks
    document.querySelectorAll('.theme-option-item').forEach(item => {
        const check = item.querySelector('i');
        if (check) {
            check.style.opacity = item.dataset.theme === theme ? '1' : '0';
        }
        item.classList.toggle('active', item.dataset.theme === theme);
    });
}

function handleSystemThemeChange(e) {
    if (currentTheme === 'auto') {
        const newSystemTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newSystemTheme);
    }
}

function applyTheme(theme) {
    const html = document.documentElement;

    // Remove listener first to ensure clean state
    systemThemeMediaQuery.removeEventListener('change', handleSystemThemeChange);

    if (theme === 'auto') {
        const systemTheme = systemThemeMediaQuery.matches ? 'dark' : 'light';
        html.setAttribute('data-theme', systemTheme);
        // Add listener for system theme changes
        systemThemeMediaQuery.addEventListener('change', handleSystemThemeChange);
    } else {
        html.setAttribute('data-theme', theme);
    }
}

// ========================================
// Event Listeners
// ========================================
function attachEventListeners() {
    console.log('attachEventListeners called');

    // Menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
    }

    // Search
    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }

    // Category chips
    categoryChips.forEach(chip => {
        chip.addEventListener('click', () => handleCategoryChange(chip));
    });

    // Sidebar items
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Profile dropdown
    const userAvatar = document.getElementById('userAvatar');
    const profileDropdown = document.getElementById('profileDropdown');
    const profileHeader = document.getElementById('profileHeader');
    const avatarUpload = document.getElementById('avatarUpload');
    const appearanceMenu = document.getElementById('appearanceMenu');
    const themeOptionsContainer = document.getElementById('themeOptions');

    if (userAvatar && profileDropdown) {
        userAvatar.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.profile-container')) {
                profileDropdown.classList.remove('show');
                // Also close theme options if open
                if (themeOptionsContainer) themeOptionsContainer.style.display = 'none';
            }
        });

        // Profile Editing
        if (profileHeader) {
            profileHeader.addEventListener('click', () => {
                const newName = prompt("Enter your new channel name:", document.getElementById('profileNameDisplay').textContent);
                if (newName && newName.trim()) {
                    updateProfileName(newName.trim());
                }

                // Trigger file upload for avatar
                if (avatarUpload) avatarUpload.click();
            });
        }

        if (avatarUpload) {
            avatarUpload.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        updateProfileAvatar(e.target.result);
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        // Appearance Menu Toggle
        if (appearanceMenu && themeOptionsContainer) {
            appearanceMenu.addEventListener('click', (e) => {
                e.stopPropagation();
                const isHidden = themeOptionsContainer.style.display === 'none';
                themeOptionsContainer.style.display = isHidden ? 'block' : 'none';
            });
        }
    }

    // Theme Selection using event delegation
    if (themeOptionsContainer) {
        console.log('Theme options container found, attaching listener');
        themeOptionsContainer.addEventListener('click', (e) => {
            const item = e.target.closest('.theme-option-item');
            if (item) {
                e.stopPropagation();
                const theme = item.dataset.theme;
                console.log('Theme selected:', theme);
                setTheme(theme);
            }
        });
    } else {
        console.error('Theme options container NOT found');
    }
}

// ========================================
// Helper Functions
// ========================================
function toggleSidebar() {
    sidebarCollapsed = !sidebarCollapsed;
    localStorage.setItem('sidebarCollapsed', sidebarCollapsed);
    setSidebarState(sidebarCollapsed);
}

function setSidebarState(collapsed) {
    if (collapsed) {
        sidebar.classList.add('collapsed');
    } else {
        sidebar.classList.remove('collapsed');
    }
}

function handleSearch() {
    const query = searchInput.value.toLowerCase();

    // Always fetch from API
    fetchVideos(query).then(fetchedVideos => {
        videos = fetchedVideos;
        renderVideos(videos);
    });
}

function handleCategoryChange(selectedChip) {
    // Update active state
    categoryChips.forEach(chip => chip.classList.remove('active'));
    selectedChip.classList.add('active');

    currentCategory = selectedChip.dataset.category;

    const query = currentCategory === 'all' ? '' : currentCategory;

    fetchVideos(query).then(fetchedVideos => {
        videos = fetchedVideos;
        renderVideos(videos);
    });
}

function renderVideos(videos) {
    if (!videoGrid) return;

    videoGrid.innerHTML = videos.map(video => `
        <div class="video-card" onclick="window.location.href='video.html?id=${video.id}'">
            <div class="thumbnail-container">
                <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail">
                <span class="duration">${video.duration}</span>
            </div>
            <div class="video-info">
                <div class="channel-avatar" style="background-image: url('https://ui-avatars.com/api/?name=${video.channel}&background=random')"></div>
                <div class="video-details">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="channel-name">${video.channel}</p>
                    <p class="video-stats">${video.views} • ${video.date}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    const container = document.getElementById('toastContainer');
    if (container) {
        container.appendChild(toast);

        // Trigger reflow
        toast.offsetHeight;

        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }
}
