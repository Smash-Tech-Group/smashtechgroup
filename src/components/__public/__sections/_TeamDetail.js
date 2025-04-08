import { useParams } from 'react-router-dom';
import biz1 from './../../../assets/images/ourbusiness/Ride.jpg';
import biz2 from './../../../assets/images/ourbusiness/Food.jpg';
import vivian from './../../../assets/images/ourteam/Vivian.jpg';
import Header from '../__layouts/Header';
import Banner_otherpages from './_Banner_otherpages';
import {Link} from 'react-router-dom';
import ceo from './../../../assets/images/ourteam/CEO.jpg';
import md from './../../../assets/images/ourteam/MD.jpg';
import ea from './../../../assets/images/ourteam/_EA.jpg';
import gm from './../../../assets/images/ourteam/_GM.jpg';
import hr from './../../../assets/images/ourteam/_HR.jpg';
import hop from './../../../assets/images/ourteam/_HOP.jpg';
import finance from './../../../assets/images/ourteam/_Finance.jpg';
import admin from './../../../assets/images/ourteam/_Admin.jpg';
import gracious from './../../../assets/images/ourteam/Gracious.jpg';
import precious from './../../../assets/images/ourteam/Precious.jpg';
import favour from './../../../assets/images/ourteam/Favour1.jpg';
import charity from './../../../assets/images/ourteam/Charity.jpg';
import val from './../../../assets/images/ourteam/Val.jpg';
import chris from './../../../assets/images/ourteam/Chris.jpg';
import obike from './../../../assets/images/ourteam/Obike.jpg';
import lagos_branch_mgr from './../../../assets/images/ourteam/lagos_branch_manager.jpg';
import evelyn from './../../../assets/images/ourteam/Evelyn.jpg';
import segun from './../../../assets/images/ourteam/Segun.jpg';
import uwem from './../../../assets/images/ourteam/Uwem.png';
import { UilArrowLeft } from '@iconscout/react-unicons';
    
const TeamDetail = () => {
  const { slug } = useParams();

  // Data for each category
  const teamDetails = {    
    president_grp_ceo: {
      title: 'President/Group CEO',
      description: [
        `I am Paul Smith, a highly accomplished visionary leader, an empathetic entrepreneur, and a technological innovator. With a robust academic foundation that includes a B.Sc. in Business Administration, a B.Sc. in Accounting, and an M.Sc. in both Business Administration and Banking & Financial Support Services, I have built a career over the past two decades that blends strategic insight, empathy, and discipline to drive success across multiple industries`,

        `My entrepreneurial journey began in 2007, when I took on the role of Managing Director at a Microfinance institution because of my problem-solving and result-driven persona. It was there that I honed my leadership skills, learned the intricacies of business management, and laid the groundwork for my future ventures. By 2012, I had a vision to create something transformative – Smash Group. However, recognizing the importance of continuous growth, I made the strategic decision to refine my abilities further, which led me to become the Management Executive at Business Network Worldwide in 2020. Over the next five years, I gained invaluable expertise in leadership, technology, and entrepreneurship, enriching my experience and expanding my vision.`,

        `Armed with a wealth of knowledge and practical insight, I returned to my initial vision with renewed vigor, relaunching Smash Group as Smash Technology. My focus on integrating cutting-edge technology into daily operations has allowed us to solve real-world problems on both a local and global scale. Today, Smash Technology is a pioneering force, with 13 subsidiaries across industries such as e-hailing, e-commerce, travel, real estate, transportation, and entrepreneur empowerment. Our flagship brands such as RideSmash, SmashWise, SmashTravels, SmashApartments, SmashHire, Qiimeet, SmashBuy, SmashFood247, SmashOffice are driving impactful change across their respective markets.`,

        `As a compassionate leader, I believe in leading with heart and by example. My commitment to integrity, consistency, hard work and empowering my team defines my approach. I strive to create a culture of innovation, collaboration, and growth. With an unwavering dedication to transforming industries and improving lives, I continue to drive Smash Technology toward new heights by delivering excellent and valuable solutions to our esteemed clients locally and globally.`,
      ],
      image: ceo,
    },

    md_smash: {
      title: 'President/Group CEO',
      description: [
        `I am Paul Smith, a highly accomplished visionary leader, an empathetic entrepreneur, and a technological innovator. With a robust academic foundation that includes a B.Sc. in Business Administration, a B.Sc. in Accounting, and an M.Sc. in both Business Administration and Banking & Financial Support Services, I have built a career over the past two decades that blends strategic insight, empathy, and discipline to drive success across multiple industries`,

        `My entrepreneurial journey began in 2007, when I took on the role of Managing Director at a Microfinance institution because of my problem-solving and result-driven persona. It was there that I honed my leadership skills, learned the intricacies of business management, and laid the groundwork for my future ventures. By 2012, I had a vision to create something transformative – Smash Group. However, recognizing the importance of continuous growth, I made the strategic decision to refine my abilities further, which led me to become the Management Executive at Business Network Worldwide in 2020. Over the next five years, I gained invaluable expertise in leadership, technology, and entrepreneurship, enriching my experience and expanding my vision.`,

        `Armed with a wealth of knowledge and practical insight, I returned to my initial vision with renewed vigor, relaunching Smash Group as Smash Technology. My focus on integrating cutting-edge technology into daily operations has allowed us to solve real-world problems on both a local and global scale. Today, Smash Technology is a pioneering force, with 13 subsidiaries across industries such as e-hailing, e-commerce, travel, real estate, transportation, and entrepreneur empowerment. Our flagship brands such as RideSmash, SmashWise, SmashTravels, SmashApartments, SmashHire, Qiimeet, SmashBuy, SmashFood247, SmashOffice are driving impactful change across their respective markets.`,

        `As a compassionate leader, I believe in leading with heart and by example. My commitment to integrity, consistency, hard work and empowering my team defines my approach. I strive to create a culture of innovation, collaboration, and growth. With an unwavering dedication to transforming industries and improving lives, I continue to drive Smash Technology toward new heights by delivering excellent and valuable solutions to our esteemed clients locally and globally.`,
      ],
      image: md,
    },
    
    exec_asst_to_ceo: {
      title: 'Executive Assistant to CEO',
      description: [
        `As an Executive Assistant to the CEO at Smash Technology, my career journey has been a dynamic and rewarding experience. From managing complex schedules and coordinating high-level meetings to streamlining communication across teams, I’ve gained invaluable insights into organizational operations and strategic decision-making.`,

        `This role has allowed me to develop a diverse skill set, including problem-solving, multitasking, and fostering strong professional relationships. Each challenge has provided an opportunity for growth, enabling me to better anticipate needs and contribute to the company’s success.`,

        `The process has been a continuous learning experience, deepening my understanding of leadership, business processes, and effective collaboration. I’m excited to further expand my knowledge and contribute to impactful initiatives moving forward.`,

        `A brief description of how i joined Smash Technology`,

        `I first came across the vacancy for Smash Technology online, and after reading through the job description, I became intrigued. To learn more about the company, I visited their Instagram page and was immediately impressed by the way the team collaborates. The uniformity in their approach and the positive, dynamic energy stood out to me. It seemed like a place where teamwork and innovation thrive. Having never worked with a tech company before, I saw this as an exciting opportunity to grow and gain valuable experience. I was eager to be part of such a forward-thinking company and contribute to its success.`,

        `Ezugwu Onyinyechukwu`,
      ],
      image: ea,
    },

    // gm: {
    //   title: 'General Manager',
    //   description: [
    //     ` I'm Yahaya Shedrack Abdulkadir, the General Manager Smash Technology. My desire for sales and business development for about 2 decades, grew when i found out that i had a deposit of leadership, skills and idea, and what it takes to meet the needs of clients/customer's at every given point in time. Am a graduate of BSc Economics from a reputable Nigerian university, MBA in marketing, Chartered in Project management, Professional Diploma in Operations management from Blessed cosmopolitan college UK and Chartered in Operations management from the American institute of oil and Gas USA.`,

    //     `I started my career as a young sales officer in kano that was passionate and enthusiastic about getting results at all cost. In my pursuit for career growth and significant development, i was dedicated, rugged and dogged in ensuring i could climb through all odds just to achieve unprecedented success. However, it's been a magnanimous journey thus far.`,

    //    `I have a vast experience in business and project development with proven track records of successfully implementing strategic initiatives and driving company's growth. Skilled in identifying opportunities, building partnerships and fostering on client relationships, a strong leadership abilities to lead cross functional teams, manage complex projects, and deliver results within budget and timeline. Am a very good effective communicator with exceptional negotiation and problem-solving skills, committed to fostering innovation and driving continuous improvement. An adept at analyzing market trends, developing actionable strategies, and delivering exceptional value for clients and stakeholders.`,

    //     `I am committed as the GM in taking Smash technology to greater heights and ensuring that the vision, dreams and aspiration of what will be of the company will be achieved through collective efforts of the entire staff and high level display of expertise in making the company a global brand known for excellence.`,
    //   ],
    //   image: gm,
    // },
    grp_biz_operations: {
      title: 'Group Head of Business Operations',
      description: [
        `Meet Claire Aguolu, Group Business Operations. As the Head of Operations at Smash Technology I’m honored to lead the team that ensures our technology-driven vision is seamlessly brought to life. With a strong passion for operational excellence and a deep understanding of scaling businesses in the tech industry, my role revolves around optimizing processes, fostering innovation, and driving sustainable growth.`,

        `My journey to Smash Technology has been an exciting blend of challenges and accomplishments. With over 8 years of experience across specific areas, like the operational strategy, Client Relationship, Supply Chain Management, Sales and Process improvement, I’ve had the privilege of working with diverse teams across the Finance and Hospitality industry. My career began at Wema Bank PlC where I had an impactful role working in the operations department as a Branch Service Associate and later transitioned into the Hospitality industry which solidified my expertise in Operational excellence and Optimization What drew me to Smash Technology was not just its innovative technology but also its commitment to always striving for Excellence, Integrity, Commitment, Innovation and Optimal service delivery.`,

        `Joining this dynamic organization has allowed me to combine my operational acumen with a forward-thinking team that thrives on collaboration and creativity. At Smash Technology, I am dedicated to building systems that enable our teams to innovate fearlessly, deliver exceptional value to our clients, and set new industry standards. Together, we’re shaping a future where technology empowers people and businesses to achieve more.`,

        `I’m thrilled to be part of this journey, and I look forward to contributing to Smash Technology's legacy of excellence.`,
      ],
      image: hop,
    },
    // biz_operations_mgr_lag: {
    //   title: 'Business Operations Manager, Lagos',
    //   description: [
    //     `My name is Igbinai Tehilah Uche.`,
    //     `A dedicated and highly motivated professional with a background in banking, finance, customer service, operations, administrative management ,and a vast knowledge and certification in healthcare.`,

    //     `I am currently serving as the Lagos State Branch Operations Manager at Smash Technology, where I oversee business processes to ensure goal oriented operations.`,

    //     `With a strong passion for tech innovation and business transformation, I joined Smash Technology to further my passion for and excellence in the tech industry. This role has enabled me to integrate my diverse skill set with the company’s progressive vision, achieving significant outcomes.
    //     I am dedicated to contributing a distinctive combination of skills and experience that strengthens the company’s commitment to delivering satisfying solutions`,

    //     `In my capacity as Operations Manager, I have contributed to refining internal workflows, strengthening team collaborations, and spearheading initiatives that align with the company’s strategic goals.`,

    //     `Smash Technology, in turn, has significantly enriched my professional journey by fostering a culture of learning and innovation, empowering me to grow as a leader in the tech industry.`,

    //     `I look forward to continuing to grow with the Smash Technology and achieving greater success together.`,
    //   ],
    //   image: lagos_branch_mgr,
    // },
    // branchmgr_abuja: {
    //   title: 'Branch Manager, Abuja',
    //   description: [
    //     `My name is Charity John, and I am the Business Operations Manager, Abuja. Customer service is more than just a role for me, it’s a passion.`,

    //     `My love for helping people and solving problems inspired me to pursue this field as a career.`,

    //     `I joined Smash Technology in June 2024 as a Customer Service Executive and was promoted to Team Lead within three months. This role has allowed me to refine my leadership skills, enhance communication, and contribute meaningfully to the company’s growth.`,

    //     `Since I joined till date, my amazing team and I have achieved significant milestones, including converting leads into paying clients and boosting customer satisfaction by 80%. Through proactive engagement and streamlined processes, we’ve built stronger connections with clients and enhanced their overall experience.`,

    //     `I’m motivated by a desire to help people overcome challenges and achieve their goals. Every interaction is an opportunity to create value, whether for clients or my team.`,

    //     `I aim to help Smash Technology double its achievements, grow its client base, and set new benchmarks for customer satisfaction. With focused strategies and teamwork, I believe we can elevate the company to even greater heights.`,
    //   ],
    //   image: charity,
    // },
    // grp_hrm: {
    //   title: 'Group Human Resources Manager',
    //   description: [
    //     `Sharon Chiazom is a dedicated and results-oriented professional with extensive experience in Administration, Human Resources, and Customer Service. With a solid educational foundation from Anambra State University Uli, Sharon has honed her skills through years of excellence in the Healthcare and Information Technology industries.
    //     Known for her ability to deliver exceptional service and build strong, positive relationships, Sharon is highly proficient in Complaint Management, Personnel Management, Administrative Skills, Interpersonal Communication, Service Quality, Teamwork, and Customer Service. Her dedication to professionalism and problem-solving has made her an invaluable asset in every organization she’s worked for.
    //     Sharon's strong communication skills and ability to resolve issues swiftly and effectively are key components in her commitment to enhancing organizational success. She is eager to contribute her wealth of expertise to continue driving success in a dynamic, fast-paced organizational setting.`,

    //     `How I Joined Smash Technology
    //     My journey with Smash Technology began when I applied for the role of Human Resource Manager through LinkedIn. I was drawn to the opportunity and took the initiative to express my interest in the position by reaching out directly to the CEO. This proactive step led to an invitation for an interview, during which I had the opportunity to discuss my extensive experience in human resources and customer service. The CEO was impressed with my skills and knowledge, and I was offered the role of Human Resource Manager.
    //     Since joining Smash Technology, I have applied my expertise in talent acquisition to ensure the company attracts and retains a talented workforce. My focus on effective employee management and team collaboration has been integral in achieving organizational goals. I have also worked tirelessly to enhance employee welfare by creating a positive, supportive work environment that encourages professional growth and satisfaction.
    //     My role at Smash Technology has contributed immensely to my personal and professional growth. Every challenge I face at work is an opportunity for development, and I am proud to have navigated these challenges with resilience and a positive mindset. Additionally, working closely with the CEO has been incredibly rewarding; he is not just a boss but also a mentor and father figure. His guidance has helped shape my leadership skills and has given me the tools to succeed in this dynamic industry.`,

    //     `At Smash Technology, I continue to leverage my experience and skills to make a meaningful impact and drive the company's ongoing success.`,
    //   ],
    //   image: hr,
    // },
    head_of_finance: {
      title: 'Head of Finance',
      description: [
        `Aribamikan Akinlolu's career journey.`,
        `I have worked with several organizations as a professional accountant for so many years which I have gained a lot of experience on Financial Management, Resources Management and Auditing. In my Career so far, I have worked in an enabling and challenging environment where the best of in me utilized optimally for the advancement of the Organization and my fulfilment.`,

        `A brief of how I joined Smash Technology Limited.`,
        `On one faithful day I saw the advert online for the position of an Accountant and after reading the job descriptions instantaneously I became scheming and more interested to visited the company sites and Instagram for more information after reading the company profile, value and brands, then I industrialized more interest and eager to work and contributed to the continued success in Smash Technology Limited.`,

        `Contributions to Smash Technology Limited`,
        `Since joining, I have helped streamline financial management processes, improve budgeting and cost control, enhance internal auditing practices, and optimize resource allocation. Additionally, I have fostered collaboration across departments to ensure financial policies align with organizational goals, contributing to the company's financial stability and growth.`,
      ],
      image: finance,
    },


    grp_head_media_it_communications: {
      title: 'Group Head, Media & I.T. Communications',
      description: [
        `I am Gracious Onyeahialam and I'm passionate about Cybersecurity. I started my career in 2018 after acquiring a B.Sc in Biotechnology, as a Confidential Secretary to the Director of Health in the Federal Ministry of Science, Technology and Innovation, Abuja overseeing a range of parastatals. During this time, I developed strong analytical, communication, and organizational skills that set the foundation for my future endeavors.`,

        `Thereafter, I took on the role of Operations Manager in a computing firm, where my attention to the sensitivity of customer and employee data led me to explore the world of cybersecurity. My transition into the tech landscape opened my eyes to crucial areas such as network security, risk management, ethical hacking, data protection, security compliance, cryptography, cloud security.`,

        `When I joined Smash Technology as a Cybersecurity Analyst, I gained hands-on experience by working on real-time projects and collaborating closely with development teams for web and mobile applications security. I have now been promoted to Head of Media and I.T Communications, where I now lead an 8-man team of talented IT professionals who are very diligent in their roles and always seeking to learn and grow in this ever-evolving tech field.`,

        `I believe in the power of relationships, zero-trust model and kindness, with an understanding that they are key to creating a safer, secured, and more connected digital world.`,
      ],
      image: gracious,
    },
    head_admin_operations: {
      title: 'Head, Admin Operations',
      description: [
        `My name is Paul Alex Abiche a dedicated and highly motivated administrative professional currently serving as the Admin Manager at Smash Technology. With a proven track record of excellence in administrative management, I plays a pivotal role in ensuring the smooth and efficient operation of the organization.`,

        `Driven by a deep passion for administration, I excels at streamlining processes, enhancing organizational efficiency, and fostering collaboration among teams. My proactive approach to problem-solving and attention to detail have made me a cornerstone in maintaining the operational integrity of Smash Technology.`,

        `Beyond my administrative expertise, I am fueled by a profound interest in technology and innovation. I envisions a future where technology serves as a catalyst for growth, transforming businesses and society. This vision inspires me to stay ahead of industry trends and leverage cutting-edge tools to drive impactful change within the organization.`,

        `My quest for innovation is evident in my commitment to integrating modern solutions into administrative practices. I believes that technology and creativity go hand in hand in shaping a sustainable and progressive workplace culture.`,

        `With a focus on continuous learning and improvement, I remains an advocate for adopting forward-thinking strategies that align with the ever-evolving tech landscape. My passion for administration and innovation makes me a valuable leader in Smash Technology's mission to push the boundaries of what’s possible.`,
      ],
      image: admin,
    },

    team_lead_ridesmash: {
      title: 'Team Lead for Ridesmash',
      description: [
        `My Name is Favour Jipson.`,

        `My Journey with Smash Technology`,
        `A graduate of Business Education from Alvan Ikoku Federal University Owerri.`,

        `My journey with Smash Technology began on June 6th, 2024, when I join the company as a customer support executive for Ridesmash. At a time, I was still a timid person, and lacking confidence to truly step into a leadership role although still  believing In my self, however, joining Smash Technology quickly changed all of that.`,

        `From day one, I was trained to handle customer inquiries with professionalism and poise, handle pressure and stay connected in difficult situation.Although my major work then was to Onboard drivers into our platform. In a short time, I was honored to be promoted to Team Lead for Ridesmash, a role that allowed me to further smothen my leadership skills. The experience of leading a team and over seeing customer operations helped me build my confidence and leadership stature. I went from being someone who doubted myself to becoming a confident and assertive leader, ready to face any challenge that came my way.`,
        `There were moments of tough scoldings, moments when I felt like I wasn't good enough but those moments helped shape me into the person I am today. Smash Technology never gave up on me, and their feedback pushed me to be better each day.`,

        `Today, I can proudly say that Smash Technology has completely rebranded me. I am no longer the timid person I once was. I am now confident, capable, and assertive. I am grateful for the opportunity to be part of such a remarkable company that has played a huge role in shaping my career and leadership journey.`,

        `In the coming future with Smash, I will make sure that our clients get seamless experience with our hire purchase plan by helping them acquire their dream car.`,
        
        `All thanks to Smash Technology for believing in me and helping me reach new heights.`,
      ],
      image: favour,
    },

    team_lead_smashwise: {
      title: 'Team Lead for Smashwise',
      description: [
        `My name is Adugba Precious Oluomachukwu - Teamlead for Smashwise`,
        `I joined Smash Technology on 5th June, 2024 as a Customer Support Executive. I still laugh when I think about how I came straight from my previous job, dressed in a suit, for the interview. The CEO, a compassionate man, saw something in me and offered me the position.`,

        `When I resumed duties on June 6th, 2024, I remember staring at my desktop for two whole days, unsure of what to do next. If you know e-commerce, you understand that setting up a successful platform is no easy feat. I quickly realized that this role was more than just answering customer inquiries – it was about proactively reaching out to vendors and driving results.`,

        `The turning point came when the CEO asked for the leads I had generated. That’s when it truly hit me – I needed to focus on vendor acquisition, not just customer support. So, I took it upon myself to learn. I started researching, attending online seminars and absorbing everything I could to improve my skills. With constant encouragement from the CEO, I quickly found my foot.`,

        `From starting as a customer support executive to becoming the team lead of Smashwise, it has been a journey of hard work, dedication, and growth. Setting up an e-commerce platform from scratch is challenging, and there were moments when I felt like giving up. But with God’s guidance, the support of our CEO, and the amazing colleagues I have in Charity John and Favour Jipson – who are truly angels sent from above – I pushed through. May God bless you both abundantly. Amen!`,

        `I’m proud to share that I single-handedly grew our vendor list from 12 to 200 between June and August, before team members were assigned to me.`,

        `Smash Technology has truly transformed me. It has built my confidence, sharpened my intellect and enhanced my leadership skills. I’m still growing, and I’m excited for the future.`,

        `Thank you, Smash Technology. Thank you, CEO – you are a blessing sent to me by God.`,
      ],
      image: precious,
    },

    team_lead_smashtravels: {
      title: 'Team Lead for Smash Travels',
      description: [
        `My name is Ajodo Evelyn Edebo, and I am the Team Lead at Smash Travels, a division of Smash Technology. Customer service is more than just a role for me, it’s a passion.`,

        `My love for helping people and solving problems inspired me to pursue this field as a career.`,

        `I joined Smash Technology in August 2024 as a Customer Service and was promoted to Team Lead in January 2025 This role has allowed me to refine my leadership skills, enhance communication, and contribute meaningfully to the company’s growth.`,

        `Since I joined till date, my amazing team and I have achieved significant milestones, including converting leads into paying clients and boosting customer satisfaction by 80%. Through proactive engagement and streamlined processes, we’ve built stronger connections with clients and enhanced their overall experience.`,

        `I’m motivated by a desire to help people overcome challenges and achieve their goals. Every interaction is an opportunity to create value, whether for clients or my team.`,

        `I aim to help Smash Technology double its achievements, grow its client base, and set new benchmarks for customer satisfaction. With focused strategies and teamwork, I believe we can elevate the company to even greater heights.`,
      ],
      image: evelyn,
    },

    product_designer: {
      title: 'Lead Designer',
      description: [
        `My name is Mamah Valentine Obumneme, a Lead Designer at Smash Technology, where I have had the privilege of working on a variety of innovative and user-centered products. My passion lies in transforming complex problems into seamless, intuitive designs that enhance user experiences. Over the years, I have honed my skills in areas such as user research, UI/UX design, prototyping, and usability testing, always striving to create solutions that not only look great but also function smoothly.`,

        `At Smash Technology, I have had the opportunity to work on projects that push the boundaries of design, collaborating with talented teams to deliver cutting-edge solutions. My work is deeply rooted in a user-first approach, ensuring that every design decision is made with the user’s needs in mind.`,

        `Working at Smash Technology has been instrumental in shaping my career and expanding my skill set in ways that go beyond design. The company has provided me with invaluable experiences that have allowed me to grow both professionally and personally.`,
        
        `Being part of cross-functional teams has given me hands-on experience in managing design projects from start to finish. I’ve learned to balance creative goals with business objectives, ensuring that we meet deadlines while delivering high-quality results. Collaborating with developers, project managers, and stakeholders has taught me how to effectively manage resources and keep projects on track.`,                                                              
        
        `At Smash Technology, I have worked closely with the QA team, helping to ensure that the products we design meet rigorous quality standards. This experience has sharpened my ability to identify potential issues early in the process, iterate quickly, and maintain a focus on user experience throughout the testing phase.`,

        `My role has also involved collaborating with the marketing team to ensure that our product designs align with the brand’s messaging and target audience. Working alongside marketers, I’ve gained a deeper understanding of how design connects with broader market strategies and how to create visually compelling products that resonate with users.`,

        `One of the most rewarding aspects of my time at Smash Technology has been the relationships I’ve built with colleagues across different departments. I’ve had the chance to collaborate closely with engineers, product managers, and other designers, which has helped me improve my communication skills and learn how to integrate various perspectives into my design process.`,

        `These experiences at Smash Technology have allowed me to become a more well-rounded product designer, capable of contributing to projects from multiple angles. I’m grateful for the growth I’ve experienced here, and I continue to strive for excellence in every project I take on. My journey at Smash Technology has not only shaped me as a designer but also as a versatile professional who understands the full scope of what it takes to create successful, user-centered products.`,
      ],
      image: val,
    },
    social_media: {
      title: 'Team Lead, Social Media/Content Creation',
      description: [
        `My name is Ezeonwuka Greatness Vivian - Team Lead, Social Media/Content Creation at Smash Technology.`,
        `I still vividly remember the thrill of receiving my offer letter from Smash Technology. It marked the beginning of an extraordinary chapter in my career as a social media influencer and content creator. From that moment on, I knew I was in for an exciting ride.`,

        `Fast-forward to today, and I can confidently say that my journey at Smash Technology has been nothing short of remarkable. It's been a rollercoaster of challenges, growth, and impact. I've had the privilege of working with an exceptional team, collaborating on innovative projects, and pushing the boundaries of creative storytelling.`,
      ],
      image: vivian,
    },
    graphic_designer: {
      title: 'Graphic Designer',
      description: [
        `I am a Certified Brand Identity Designer with a strong passion for creativity. My interest in graphic design started when I discovered CorelDRAW. I enjoyed exploring the software and giving myself tasks to create different designs, which sparked my love for design.`,

        `When I got into school, I started practicing graphic design more seriously. This gave me the chance to improve my skills, especially in brand identity design. I focused on creating unique designs that help brands tell their stories.`,  
        `After finishing school, I joined Smash Technology in September 2024 as a Graphic Designer. I work on designs for all the company’s sub-brands, including RideSmash, Smash Travels, SmashWise, Smash Apartments, and others. At first, it was challenging to meet the design needs of each brand, but with time and practice, I got better at my work and gained confidence in my skills.`,  

        `Working at Smash Technology has also taught me more than just design. I have learned about marketing, teamwork, and other important skills that have helped me grow as a professional.`,  

        `I am passionate about using my designs to bring ideas to life.`,
      ],
      image: chris,
    },

    it_support: {
      title: 'Frontend Developer 1 & IT Support',
      description: [
        `My name is Obike Victor Emeka. Since after my secondary school, my passion for technology and computers only grew stronger. Although I explored other industries, including healthcare, my love for tech remained unwavering. I took a proactive approach to learning, starting with the basics and progressively expanding my skills across various areas, including software and hardware training, coding, computer programming, and graphics design.`,

        `My time in Smash Technology has been a transformative experience, offering invaluable opportunities for growth, learning, and development. Joining as an IT Support Executive, I've had the privilege of collaborating with a talented team of innovative and forward-thinking professionals. This exposure has significantly contributed to my career advancement in tech and has enabled me to enhance my skills and expertise.`,

        `As an IT Support Executive, I encounter a wide range of software and hardware challenges on a daily basis. From familiar issues to novel ones, I leverage my broad IT expertise to provide timely and effective support to my colleagues. I deliver technical assistance, troubleshoot problems, and resolve issues within tight deadlines, all while maintaining workflow efficiency and minimizing downtime.`,
          
        `Smash Technology's commitment to excellence and perfection serves as a powerful motivator for me. I strive to embody this organizational mindset by staying up-to-date with the latest trends and advancements in the tech world. I am dedicated to delivering high-quality results, ensuring that all tasks are completed on time and to the highest standards of perfection.`,
          
        `My aspiration is to continue growing and learning, and I envision a future where I transition into a full-stack mobile app developer role. I am committed to expanding my skill set and expertise to achieve this goal.`,
      ],
      image: obike,
    },

    software_engineer: {
      title: 'Software Engineer',
      description: [
        `I'm Omogbehinmi Olusegun E. `,
        `I'm a dedicated software engineer with over 3 years of experience in the tech industry, specializing in developing scalable applications and robust API solutions. My work focuses on building user-centric tools that streamline workflows, boost productivity, and drive innovation.`,
        `With a strong commitment to delivering high-quality, scalable solutions, I’m continuously honing my technical expertise to stay at the forefront of industry advancements. I’m passionate about using technology to create meaningful impact and to solve real-world problems.`,
      ],
      image: segun,
    },
    // leadfs: {
    //   title: 'Lead Full Stack Engineer',
    //   description: [
    //     `I am Uwem Akpabot. I emphasize that software should be created in a way that it is easy to maintain in the long run. 
    //     Engineering and proper Architecture should be applied to software to make it easy to use, easy to reuse or modify, and perform flawlessly over 
    //     a long period of time and continue to meet users' needs.`,

    //     `In 2013, I earned a Master's Degree with Merit in Software Engineering in the UK - University of Greenwich, London, I am a Microsoft Certified Professional 
    //     with progressive professional experience working with several technologies for over a decade. FHI 360 Abuja, Luday AB Nigeria/Sweden, Zyzics, and Tasty Foods Belvedere, UK
    //     are just few of the organizations that my productivity was showcased with good leadership quality.`,

    //     `Joining Smash Technology is a dream come true; a vision that aligns with mine. Vibrant, innovative, and smart place to work in. 
    //     A visionary CEO and intelligent teams across brands; they push my drive even further. `,
    //   ],
    //   image: uwem,
    // },
  };

  // Fetch the details for the specific slug
  const category = teamDetails[slug];

  if (!category) {
    return <p>Team member not found!</p>; // Handle invalid slugs
  }

  return (
    <>
    <Header />
    <Banner_otherpages title={category.title} image={category.image} />

    <div className="sections business-detail" id="whoweare">
      <h2 className="title-height">{category.title}</h2>
      {category.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {category.details && <p>{category.details}</p>}
      {category.website && (
        <Link to={category.website} className="smashtech-button swipe-button">
          Visit {category.title} Website
        </Link>
      )}

      <Link to='/' className="smashtech-button swipe-button"><UilArrowLeft /> Back Home</Link>
    </div>

    </>
  );
};
export default TeamDetail;