const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Universitas Komputer Indonesia",
        degree: "S.Kom, Computer System Engineering",
        detail: "Bachelor's Degree in Computer System Engineering from UNiKOM.",
        year: "2007-2012",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Axiata Digital Labs",
        role: "Senior Frontend Developer",
        url: "https://www.axiatadigitallabs.com",
        desc: "As a  Senior frontend developer, I use Angular framework and JavaScript to build user interfaces for web applications.",
        year: "juli-2020 - Present",
        location: "Jakarta, Indonesia",
      },
      {
        id: 2,
        title: "kreasi digital indo utama",
        role: "senior software enginner",
        url: "no website",
        desc: "create web application in react js for point of sale",
        year: "januari-2020 - may-2020",
        location: "Bandung, Indonesia",
      },
      {
        id: 3,
        title: "Ayo Media Network",
        role: "Senior software enginner",
        desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP and create mobile application using Android Studio and IOS",
        url: "https://www.ayomedianetwork.com",
        year: "okt-2019 - dec -2019",
        location: "Bandung, Indonesia",
      },
      {
        id: 4,
        title: "Bank BTPN",
        role: "Front End Engineer",
        desc: "I work there as a Angular framework and JavaScript to build user interfaces for web applications.",
        url: "https://www.btpn.com",
        year: "jun-2019 - sep -2019",
        location: "Jakarta, Indonesia",
      },
      {
        id: 5,
        title: "Bisnis Indonesia Sibertama",
        role: "software enginner",
        desc: "i work there as a PHP developer, there I learned how to do CRUD'S operations in PHP framework.",
        url: "https://www.bisnisindonesiagroup.com",
        year: "jun-2018 - aug -2019",
        location: "Jakarta, Indonesia",
      },
      {
        id: 6,
        title: "Bisnis Indonesia",
        role: "software enginner",
        desc: "i work there as a PHP developer, there I learned how to do CRUD'S operations in PHP framework.",
        url: "https://www.bisnisindonesiagroup.com",
        year: "aug-2015 - jul -2018",
        location: "Bandung, Indonesia",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
