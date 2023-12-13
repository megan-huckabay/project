import React from 'react';
import "../Styles/About.css";
import prettyPicture from '../images/pretty.jpg';
import kisses from '../images/kisses.jpg';
import picture1 from '../images/snap-pic.jpg';
import picture2 from '../images/snap-pic2.jpg';

const About = () => {
  return (
    <div className="about-container about-page">

      <div className="about-section">
        <h1>About Me</h1>

        <p><b>Hello there!</b> I'm a <i><b>passionate</b></i> and <i><b>dedicated individual</b></i> with a diverse background that has shaped my journey into the world of technology. Born and raised in <i><b>Porterville, California</b></i>, I bring a unique blend of experiences ranging from the fast-paced environment of the fast-food industry to the compassionate role of an <i><b>In-Home Care Nurse</b></i>. My transition into the tech world was marked by my recent graduation from <i><b>BloomTech Institute of Technology</b></i> as a <i><b>Full-Stack Web Developer</b></i>. Throughout my journey, I've honed a variety of skills, including <b><i>front-end and back-end development</i></b>, proficiency in languages like <i><b>HTML</b></i>, <i><b>CSS</b></i>, <i><b>JavaScript</b></i>, and have started to self-teach myself some <i><b>Python</b></i>. I've developed a keen interest in a variety of technologies, from <i><b>JavaScript</b></i> to learning the more complex languages like <i><b>C##</b></i>, <i><b>Java</b></i>, and <i><b>Rust</b></i> in the future.</p>

        
        <div className="picture-section">
          <img src={picture1} alt="picture1" />
          <img src={prettyPicture} alt="prettyPicture" />
          <img src={kisses} alt="kisses" />
          <img src={picture2} alt="picture2" />
        </div>
      

        <p>In my previous roles, whether it was managing the opening crew operations at <i>Little Caesars</i> or providing compassionate care as a <i>Youth Care Worker/In-home Care Nurse</i>, my experiences have taught me the value of <b><i>effective communication</i></b>,<b><i>attention to detail</i></b>, and <b><i>the importance of fostering a positive</i></b> and <b><i>collaborative work environment</i></b>. I've cultivated a <i><b>strong work ethic, adaptability, and problem-solving skills</b></i>. I believe in approaching challenges with kindness and hope, a philosophy that extends to my perspective on addressing complex issues like the homeless crisis, not only in California but around the world.</p>
      </div>

      <div className="fun-container">
        <h1>Things I Enjoy in My Spare Time!</h1>

        <div className="art-section">
          <h2>The Art of Pour Painting!</h2>

          <p><i><b>Pour painting</b></i> has become a central passion in my life. This mesmerizing art form involves the harmonious blend of <i><b>acrylic paints, pouring medium, and a touch of silicone</b></i>, all mixed in a single cup. The resulting colorful concoction is then poured onto a canvas and carefully manipulated by tilting it back and forth. There are numerous techniques, each resulting in its own unique masterpiece. It's a <i>messy affair</i>, but the joy and fulfillment it brings are <i><b>absolutely worth every splash of color</b></i>!</p>
        </div>

        <div className="helping-section">
          <h2>Extending a Helping Hand</h2>

          <p><i><b>One of my greatest joys</b></i> is reaching out to those in need. I believe in the power of a <i><b>simple act of kindness</b></i>. If there are any leftovers from our dinner, I make it a point to share them with those who could use a warm meal. If I have the chance to hangout and get to know those I'm giving meals to I like to talk to them hear their story and try to connect with them on a personal level. <i><b><u>It's not just about providing sustenance, but also about connecting with fellow human beings in a compassionate and caring way</u></b></i>.</p>
        </div>

        <div className="nature-section">
          <h2>Embracing Nature's Beauty</h2>

          <p><i><b>Nature</b></i>, in all its magnificent forms, holds a special place in my heart as well, living in one of the most beautiful states I have so many places I love to hike even a trip to the lake with my fur babies is nice. Whether it's the 106 degrees in the middle of summer or a cold rainy winter night watch rain drops fall down my window with the thunder and lightning show in the distance. I find solace and boundless inspiration in its ever-changing beauty. From vibrant sunsets to the tranquil rustling of leaves, every moment in <i><b>nature</b></i> is a reminder of the wonders that surround us.</p>

        </div>
        <div className="power-section">
          <h2>Learning How to Code!!</h2>

          <p><i>Recently, I've been captivated by the world of coding.</i> It's a new passion that I'm <i><b>eager to explore further</b></i>. Learning one language is just the beginning. I'm excited about the prospect of diving into a multitude of coding languages. It's like unlocking a <i><b>secret language</b></i> that opens up endless possibilities in the digital realm. This webpage is a testament to my progress, with more exciting projects on the horizon.</p>

        </div>
      </div>

      <div className="dream-container">
        <h1>What's Next for Me!</h1>

        <div className="job-section">
          <h2>Where I Wanna Work!</h2>

          <p><i><b>I am deeply passionate</b></i> about embarking on a career in technology, and I am eager to align myself with companies that share my values of <i><b>continuous growth and learning</b></i>. My immediate goal is to secure an entry-level position within a forward-thinking organization that places a strong emphasis on <i><b>career progression</b></i> and offers ample opportunities for <i><b>skill development</b></i>.</p>

          <p>After gaining a solid foundation and honing my skills for about a year, I aspire to take on a role as a <i><b>learner's assistant</b></i> at <i><b>BloomTech</b></i>. This role speaks to my desire to give back and support others in their journey into the world of development. Guiding and mentoring fellow enthusiasts is a fulfilling prospect that I believe will not only contribute to their growth but also enhance my understanding of the field.</p>

          <p>Looking ahead, I am excited to expand my horizons and explore new technologies. Within the next year, I plan to immerse myself in learning <i><b>cutting-edge tools and languages</b></i>. My ultimate aspiration is to contribute to groundbreaking projects, and I see organizations like <i><b>Tesla</b></i>, at the forefront of innovation, as the perfect environment to bring my vision to life. The intersection of technology and artificial intelligence is a realm I am particularly drawn to, and I am driven to play a pivotal role in shaping the future of this dynamic field.</p>

          <p>In this journey, I am committed to <i><b>continuous self-improvement</b></i> and am enthusiastic about the challenges and opportunities that lie ahead. I look forward to being a part of companies that not only value individual growth but also foster a <i><b>collaborative and innovative work culture</b></i>.</p>
        </div>

        <div className="future-section">
          <h2>What's In My Distant Future Plans!!</h2>

          <p><i>As I look ahead to the distant future,</i> my drive to make a difference burns <i><b>brighter than ever</b></i>. I'm dedicated to being a guiding force for young adults struggling with addiction and homelessness, offering them not just a helping hand, but a chance at a future filled with <i><b>recovery, stability, and hope</b></i>. In the years to come, I see the birth of an organization that doesn't just provide immediate aid, but <i><b>empowers with purpose</b></i>. This means giving them more than just jobs, but the skills they need to thrive, creating a strong foundation for their professional journeys. I'm also committed to creating programs that help the homeless transition into homes of their own, marking a significant step towards independence. My vision extends beyond practical assistance. I long for a world where <i><b>compassion outweighs judgment</b></i>, and <i><b>understanding replaces stereotypes</b></i>. Through open conversations, breaking down biases, and advocating for widespread education, I hope to spark a movement towards a society that actively uplifts those in need. In this future, I envision a collective effort against homelessness, uniting people from all walks of life. Together, we'll share stories of transformation, showcasing the incredible potential within each individual. This isn't just about providing relief; it's about planting the seeds for a <i><b>sustained, inclusive society</b></i>, where homelessness is but a distant memory.</p>

        </div>
      </div>
    </div>
  );
};

export default About;
