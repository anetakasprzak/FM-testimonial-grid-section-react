/* eslint react/prop-types: 0 */
import "./App.css";

const data = [
  {
    i: 1,
    image: "images/image-daniel.jpg",
    user: "Daniel Clifford",
    verified: "Verified Graduate",
    heading:
      "I received a job offer mid-course, and the subjects I learned we are current, if not more so, in the company I joined. I honestly feel I got every penny worth.",
    text: `"I was an EMT for many years before I joined the bootcamp. Ive
  been looking to make a transition and have heard some people who had
  an amazing experience here. I signed up for the free intro course
  and found it incredibly fun! I enrolled shortly thereafter. The next
  12 weeks was the best - and most grueling - time of my life. Since
  completing the course, Ive successfully switched careers, working
  as a Software Engineer at a VR startup."`,
  },
  {
    i: 2,
    image: "images/image-jonathan.jpg",
    user: "Jonathan Walters",
    verified: "Verified Graduate",
    heading: "The team was very supportive and kept me motivated",
    text: `  “ I started as a total newbie with virtually no coding skills. I now
  work as a mobile engineer for a big company. This was one of the
  best investments I’ve made in myself.”`,
  },
  {
    i: 3,
    image: "images/image-jeanette.jpg",
    user: "Jeanette Harmon",
    verified: "Verified Graduate",
    heading: "An overall wonderful and rewarding experience",
    text: ` “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.”`,
  },
  {
    i: 4,
    image: "images/image-patrick.jpg",
    user: "Patrick Abrams",
    verified: "Verified Graduate",
    heading:
      " Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    text: ` “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to
  be able to go out in the world and present myself as a capable
  junior developer. The standard is above the rest. You will get the
  personal attention you need from an incredible community of smart
  and amazing people. ”`,
  },
  {
    i: 5,
    image: "images/image-kira.jpg",
    user: "Kira Whittle",
    verified: "Verified Graduate",
    heading: "Such a life-changing experience. Highly recommended!",
    text: `“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn
  programming step by step. I was encouraged to enroll by a former
  student of theirs who can only say wonderful things about the
  program. The entire curriculum and staff did not disappoint. They
  were very hands-on and I never had to wait long for assistance. The
  agile team project, in particular, was outstanding. It took my
  learning to the next level in a way that no tutorial could ever
  have. In fact, I’ve often referred to it during interviews as an
  example of my developent experience. It certainly helped me land a
  job as a full-stack developer after receiving multiple offers. 100%
  recommend!”`,
  },
];

function App() {
  return (
    <div className="wrapper">
      {data.map((data) => (
        <Testimonial data={data} key={data.i} />
      ))}
    </div>
  );
}

function Testimonial({ data }) {
  return (
    <div className={`testimonial__card testimonial__card--${data.i}`}>
      <div className="person__box">
        <img src={data.image} alt={data.user} className="person__img" />
        <div className="person__text-box">
          <p className="person__name">{data.user}</p>
          <p className="person__verified">{data.verified}</p>
        </div>
      </div>
      <h2 className="testimonial__heading--1 extra--margin">{data.heading}</h2>
      <p className="testimonial__text">{data.text}</p>
    </div>
  );
}

export default App;
