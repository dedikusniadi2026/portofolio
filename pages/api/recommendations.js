const recommendationCard = [
  {
    id: 0,
    name: "Mohammad Riza Nur Utama",
    image: "images/reza.jpeg",
    designation:
      "Business Analyst | Proficient in Data Flow analysis - Business Process modeling - UML data modeling | Waterfall & Agile",
    view: "I worked with Dedi Kusniadi in couple of different projects. In those times, Dedi has showed us that he is a well knowledgeable software developer with a wide range of expertise. He is a good learner when it comes to new tools and technology. In one of our project together, Dedi also gave his persistence and dedication to tackle any difficulties that arise, even showed his willingness to support and backup his fellow developer. Although Dedi doesn't often speak his opinions nor voice his concerns openly, he always tries to get the job done. And I do remember that he showed a glimpse of his leadership quality once in a while, but currently he is the type of engineer that mostly needs his moments of solitude to get in the flow and excel as an individual contributor. In summary, I am certain that Dedi Kusniadi can be a valuable member in any software development team.",
    linkednURL: "https://www.linkedin.com/in/mohammad-riza-nur-utama/",
  },
  {
    id: 1,
    name: "Billy Huar Noning",
    image: "images/billy.jpeg",
    designation: "Entrepreneur | Special Situation & Critical Mission",
    view: "You know? I found Dedi is like found a gold in the nature. Yes, he is silent man, but trust me, he is so skillful and will finish all the task assigned to him. He is very good learner, and will push himself over the limit to achieve that. One thing for sure, I feel safe everytime having Dedi on the project. This guy is F awesome!",
    linkednURL: "https://www.linkedin.com/in/billyhuarnoning/",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
