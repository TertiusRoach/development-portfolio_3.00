// default-text.ts
//--|🠊 Every word on the page lives here, so changing the text never means touching a component. 🠈|--//
//--|🠊 Images load from public/content, so they work offline, on any branch and on GitHub Pages. 🠈|--//
export const imageURI: string = 'content';

//--|🠋 01. Home 🠋|--//
export const homeText = {
  title: 'Multimedia Programmer',
  career: 'My Career',
  contact: 'Contact Me',
  profile: `${imageURI}/png-files/profile-picture.png`,
  subject: 'Welcome to my portfolio,',
  portfolio: 'View Portfolio',
  description: [
    `As a Multimedia Programmer, I create immersive websites, captivating animations, and interactive
     applications, blending cutting-edge technologies with an artistic vision for engaging experiences. My
     curiosity drives me to experiment with upcoming tools to stay ahead in this fast-paced world of computer
     technologies. I thrive in collaborative environments, and love to transform abstract ideas into impactful,
     long-lasting applications.`,
    `My strong work ethic and demonstrable skills equip me to excel in this field. I'm a quick learner, eager to
     prove myself and bring value to your team. So if you're willing to take a chance on me then we can create
     something extraordinary together. While I may not have a traditional "Computer Science De 😬 gree". Uhm, I
     shouldn't have used those air quotes...take a chance on me?`,
    `Well this pitch took an unexpected turn.`,
  ],
};

//--|🠋 02. Skills 🠋|--//
//--|🠊 [name, logo file, rating out of 10]. The ratings are the ones from development-portfolio_2.00. 🠈|--//
export interface SkillsText {
  title: string;
  subject: string;
  groups: Array<{ name: string; skills: Array<[string, string, number]> }>;
}
export const skillsText: SkillsText = {
  title: 'Skills',
  subject: 'Out of ten, honestly.',
  groups: [
    {
      name: 'Design',
      skills: [
        ['Photoshop', 'Adobe Photoshop', 9],
        ['Scribus', 'Scribus', 8],
        ['Figma', 'Figma', 7],
        ['Illustrator', 'Adobe Illustrator', 6],
        ['Inkscape', 'Inkscape', 5],
      ],
    },
    {
      name: 'Editing',
      skills: [
        ['DaVinci Resolve', 'DaVinci Resolve', 10],
        ['Premiere Pro', 'Adobe Premiere Pro', 7],
        ['Final Cut Pro', 'Final Cut Pro', 6],
      ],
    },
    {
      name: 'Admin',
      skills: [
        ['Microsoft Word', 'Microsoft Word', 10],
        ['Google Sheets', 'Google Sheets', 8],
      ],
    },
    {
      name: 'Languages',
      skills: [
        ['HTML', 'HTML', 10],
        ['VBA', 'Visual Basic for Applications', 9],
        ['Sass', 'Sass', 9],
        ['CSS', 'CSS', 8],
        ['JavaScript', 'JavaScript', 8],
        ['TypeScript', 'TypeScript', 7],
        ['Python', 'Python', 3],
        ['C++', 'C++', 1],
      ],
    },
    {
      name: 'Utilities',
      skills: [
        ['Google Drive', 'Google Drive', 10],
        ['OneDrive', 'Microsoft OneDrive', 10],
        ['Gulp', 'Gulp', 8],
        ['jQuery', 'jQuery', 8],
        ['Apps Script', 'Google Apps Script', 7],
        ['SharePoint', 'SharePoint', 7],
        ['GitHub', 'GitHub', 6],
        ['Node.js', 'NodeJS', 5],
        ['VS Code', 'Visual Studio Code', 5],
      ],
    },
    {
      name: 'Databases',
      skills: [
        ['MySQL', 'MySQL', 6],
        ['MongoDB', 'MongoDB', 5],
      ],
    },
  ],
};

//--|🠋 03. Career 🠋|--//
//--|🠊 Word for word from the development-portfolio_2.00 résumé. 🠈|--//
export interface CareerText {
  title: string;
  more: string;
  jobs: Array<{ title: string; dates: string; logo: string; paragraphs: Array<string> }>;
}
export const careerText: CareerText = {
  title: 'Career',
  more: 'Read the whole story',
  jobs: [
      {
        title: "Tshwane University of Technology",
        dates: "Bachelor's Degree from 2011 to 2014",
        logo: `${imageURI}/png-files/main-employment/Thswane University of Technology.png`,
        paragraphs: [
          "In the dim recesses of Academia, my dreams collided with the harsh reality that an opinion can affect creative integrity. I found myself in a whirlwind of chaos, confusion and excessive amounts of caffeine. I was inadvertently thrusted into a demanding world where teamwork was essential. This was coupled with persistent panic attacks induced by the consumption of too many energy drinks. It felt like the universe was conspiring against my sanity, dangling me over an edge for four mentally exhausting years.",
          "While other students harbored dreams of global directorial acclaim, my ambitions were firmly rooted in pragmatism. My goal was to cultivate skills that could pave a way to financial stability, facilitating my ascent into a higher tax bracket for all the politicians I didn't vote for, but I'm getting ahead of myself. While some may view education merely as a means of survival, I saw it as a versatile tool to fend off hunger by entertaining people with things that looked pretty. Now, how do I get them to pay me?",
          "With each passing year, my weary steps mirrored the weight of sleepless nights, culminating in the receipt of a Bachelor's Degree: A piece of paper that seemed absurd amidst the tumultuous journey to obtain it. Yet, within the preposterousness of pursuing it, there lay a strange allure from the audacity it took to attain this document. And so, with a tired smile and a heart heavy with relief, I bid farewell to the treacherous landscapes this piece of paper compelled me to navigate.",
        ],
      },
      {
        title: "South African Broadcasting Corporation",
        dates: "Art Assistant from March to May, 2016",
        logo: `${imageURI}/png-files/main-employment/South African Broadcasting Corporation.png`,
        paragraphs: [
          "Graduation was meant to herald my arrival into adulthood, but instead, all I received was a tax number tethered to my name. It turns out the money you sign for doesn't reflect the amount paid into your bank account. Why didn't anyone explain this to me, Mother? Anyway, being broke isn't as exhilarating as it sounds, I know, right? It's enough to drive most people to do anything, and that's how I stumbled through two doomed feature films before ending up in the heart of Hillbrow, chasing carpentry gigs. Yes, the one in Johannesburg.",
          "The name of the series was \"Ithuba,\" and it never graced television screens because of... reasons. Our art department was a team of three, and we scrounged for materials by day before piecing them together by night. We used discarded pallets and fake grass to complete the bare minimum, and I'm pretty certain we accrued more debt at the end of the ordeal. As dusk settled, we rested our weary bodies on dilapidated couches in a penthouse nestled within the crime capital of South Africa; daily commutes weren't factored into our budget. Despite the worn appearance of these sofas, they proved surprisingly comfy. After three months of shooting, the director had to pitch the pilot episode to the very producers withholding our salaries.",
          "Reality hit the crew like a ton of bricks when the video editor showed us a cut of the pilot episode, his magnum opus. The final product was more pixelated than the face of a person who asked to remain anonymous. It's as if the editor was trying to hide all the mistakes we made as an art department by compressing the video its lowest resolution. I believe he ran out of disk space, but that's beside the point. Unsurprisingly, this failed to impress. The entire crew abandoned the project with unpaid salaries and left with a bond that can only be forged through a shared dream driven by desperation. But hey, at least it provided me with enough material to incorporate a somewhat respectable logo into my portfolio. Ah, the absurdity of it all.",
        ],
      },
      {
        title: "Clinton Lubbe Productions",
        dates: "Directing Assistant from April, 2016 to December, 2017",
        logo: `${imageURI}/png-files/main-employment/Clinton Lubbe Productions.png`,
        paragraphs: [
          "Let's rewind the clock to my days as a film student, where the thought of a lecture on rifle mics was about as enthralling as watching paint dry. But fate had surprises in store for me that day. Enter Professor Frank, a maestro of dry wit and subtle humor capable of breathing life into any topic, no matter how mundane. Initially, I was more bored than a toddler stripped of their iPad. I found myself sitting in the classroom as Professor Frank brandished his very own rifle mic with gusto and that's where things became intriguing. He turned a discussion about oscillating magnets into a symphony of \"unintentional\" innuendos, eliciting giggles that bubbled from the back of the classroom like a pair of mice having a brawl in your attic. His intention, I reckon, was to grab the students' attention.",
          "That's when a figure sauntered into the classroom and interrupted Professor Frank's chain of thought. The man who entered looked like a relic from the Woodstock era and exuded the sassiness of someone who would roll their eyes at you while munching on avocado toast. His mission? To lure unsuspecting students into an internship for a film dubbed \"Somer Son\". Little did I know, this day would mark not only my enlightenment on the mechanics microphones but also the beginning of my short journey into cinema. That night, with the click of a button I sent him an email with my trusty Curriculum Vitae: A document boasting less substance than a politician's promises. To my astonishment, in July 2014, I was whisked away with a crew for a movie shoot in Mozambique.",
          "Now, back to me toiling away on the SABC project. My phone rang. On the other end? None other than the hippie himself, Clinton Lubbe, munching away on a piece of avocado toast as we talked. And so began a collaboration that would launch my career into the stratosphere of success. From delving into televisual wizardry to concocting YouTube content that struck gold, every endeavor seemed to flourish. Our music videos, featuring the likes of Jo Black, Robbie Wessels, Bok van Blerk and Appel, garnered millions of views. We ran a relatively successful photography channel which was modest in subscriber count but had a dedicated fan base that spiked our views.",
        ],
      },
      {
        title: "Green Planet Productions",
        dates: "Video Editor from February to July, 2017",
        logo: `${imageURI}/png-files/main-employment/Green Planet Productions.png`,
        paragraphs: [
          "One day, I received a call from a friend with whom I had collaborated with at Tshwane University of Technology. His name is Brenton, and over time, he became a father to three daughters, with the second pair being twins. Poor guy: They say if you have a boy, you have to look after him, but if you have a girl, then you have to look after the whole neighborhood. Now, multiply that by three, and you can't help but feel for him. I should really give him a call, but I digress. During our conversation, he mentioned that it might be a good idea for me to apply for an editing job at Green Planet Productions, where he worked at that time. This suggestion came at a time when my career as a freelancer was flourishing. I was collaborating with an Afrikaans record label called \"Inhoud Huis\", owned by a composer named Johan Vorster.",
          "With that being said, I applied for the job and was interviewed by Francois Nolte, who agreed to hire me as an hourly employee. Stepping into the workplace, I was greeted by none other than Schalk Burger. Despite his penchant for airing grievances, he had a knack for attention to detail and an unwavering dedication to quality. His ability to pinpoint flaws, while occasionally overwhelming new hires with depressed thoughts about being a video editor, undoubtedly influenced the perspectives of many in this line of work. Still, one couldn't help but wonder if his perpetual grumbling was a cunning ploy to test the endurance of potential editors. After all, who wouldn't lock themselves in a room with him on a daily basis to brave the daily deluge of complaints...until, of course, he no longer worked there.",
          "For the next 6 months, I endured the monotony of a desk job, tethered to the task of editing a television show that highlighted the top Afrikaans songs of the week. Each episode demanded meticulous crafting, starting with a song ranked at number 20 before counting down to the coveted number 1 spot, encompassing a full 45 minutes. Amidst this routine, I found solace in witnessing three of my music videos ascend to the top of the charts. Then came Francois Nolte's offer for a permanent contract with a fixed salary. Despite the appeal of a stable income, I hesitated. The creative energy and success of my other ventures stood in stark contrast to the mundanity of the future he offered. At that time, it was one of the toughest decisions of my life. The prospect of burning bridges and facing disapproval from powerful industry producers wasn't something to be taken lightly. Ultimately, I declined the offer, firmly closing the doors of Green Planet Productions. It was a moment fraught with uncertainty, yet tinged with the excitement of forging my own path forward. That remained true until Clinton Lubbe's studio was ransacked at the end of November 2017.",
        ],
      },
      {
        title: "Akademia",
        dates: "Studio Technician from February, 2018 to May, 2023",
        logo: `${imageURI}/png-files/main-employment/Akademia.png`,
        paragraphs: [
          "Start with SuperSport before going into this chapter.",
          "__Rewrite__ Introduce Casper Labuschagne and P.C. Luttig for Nou Pra' jy for Solidariteit. As a 'Studio Technician' for the company moderating the broadcasted sessions, it is my responsibility to ensure that everything runs smoothly by creating the digital links along with setting up its security. This involves coordinating with lecturers and managing any technical issues that may arise during the consultation. In addition to that it's also my responsibility to record, upload and log the footage for future repurposing. This involves using programming languages to build and automate software when things get busy during the peak seasons for content distribution.",
          "__Rewrite__ This was one of the best places to work due to my manager Desmond Stols: PRAISE HIM because no manager will match his empathy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris. Vestibulum mattis ullamcorper velit sed ullamcorper. Turpis tincidunt id aliquet risus feugiat in. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Cras adipiscing enim eu turpis egestas pretium. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Fames ac turpis egestas maecenas pharetra. Quis ipsum suspendisse ultrices gravida dictum fusce ut. In massa tempor nec feugiat nisl pretium fusce. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Praesent tristique magna sit amet purus. Arcu cursus vitae congue mauris rhoncus aenean vel elit.",
          "__Rewrite__ Expand on your I.T. skills. Et tortor at risus viverra adipiscing at in. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Nunc faucibus a pellentesque sit amet porttitor. Nibh praesent tristique magna sit. Mattis pellentesque id nibh tortor. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Mi bibendum neque egestas congue quisque egestas. Venenatis urna cursus eget nunc scelerisque viverra mauris. Vitae tempus quam pellentesque nec nam. Amet nisl suscipit adipiscing bibendum est. Quis enim lobortis scelerisque fermentum dui faucibus. Sem integer vitae justo eget magna. Eget arcu dictum varius duis at consectetur lorem donec massa. Arcu dui vivamus arcu felis bibendum ut tristique et. Et malesuada fames ac turpis egestas sed. Dui faucibus in ornare quam viverra. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nisl condimentum id venenatis a. Sem nulla pharetra diam sit. Nisi porta lorem mollis aliquam.",
          "__Write__ Add the funny things that happened during your time here. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Lacus luctus accumsan tortor posuere ac ut consequat. Augue interdum velit euismod in pellentesque. Lorem sed risus ultricies tristique nulla aliquet. Sit amet facilisis magna etiam tempor. Dolor sit amet consectetur adipiscing elit. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Malesuada nunc vel risus commodo viverra. Gravida dictum fusce ut placerat orci. Nunc mi ipsum faucibus vitae aliquet nec. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Duis ut diam quam nulla porttitor massa id. Arcu risus quis varius quam quisque id diam vel quam. Hendrerit dolor magna eget est lorem ipsum dolor. Blandit turpis cursus in hac habitasse. Faucibus pulvinar elementum integer enim neque volutpat ac. Euismod in pellentesque massa placerat duis ultricies lacus sed. Suspendisse sed nisi lacus sed. Morbi leo urna molestie at elementum eu facilisis sed. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus.",
          "__Write__ More funny things? Et tortor at risus viverra adipiscing at in. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Nunc faucibus a pellentesque sit amet porttitor. Nibh praesent tristique magna sit. Mattis pellentesque id nibh tortor. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Mi bibendum neque egestas congue quisque egestas. Venenatis urna cursus eget nunc scelerisque viverra mauris. Vitae tempus quam pellentesque nec nam. Amet nisl suscipit adipiscing bibendum est. Quis enim lobortis scelerisque fermentum dui faucibus. Sem integer vitae justo eget magna. Eget arcu dictum varius duis at consectetur lorem donec massa. Arcu dui vivamus arcu felis bibendum ut tristique et. Et malesuada fames ac turpis egestas sed. Dui faucibus in ornare quam viverra. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nisl condimentum id venenatis a. Sem nulla pharetra diam sit. Nisi porta lorem mollis aliquam.",
          "__Rewrite__ Flow into how you applied for a Digital Production Coordinator at the U.S. Embassy. In aliquam sem fringilla ut morbi tincidunt. Mauris rhoncus aenean vel elit. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Et ligula ullamcorper malesuada proin libero nunc. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Egestas sed tempus urna et pharetra pharetra massa. Vulputate eu scelerisque felis imperdiet proin fermentum. Tortor at risus viverra adipiscing at in tellus. Sed ullamcorper morbi tincidunt ornare. Convallis posuere morbi leo urna molestie at elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Vivamus at augue eget arcu dictum varius. Ipsum dolor sit amet consectetur adipiscing. Sodales ut eu sem integer vitae justo eget. Dolor sit amet consectetur adipiscing elit. Amet porttitor eget dolor morbi non arcu risus.",
        ],
      },
      {
        title: "SuperSport",
        dates: "Director from April to November, 2019",
        logo: `${imageURI}/png-files/main-employment/SuperSport.png`,
        paragraphs: [
          "__Improve__ This story exemplifies how networking, recommendations, and the assistance of others can significantly impact one's career trajectory. When the studio was ransacked, I had to sever ties with numerous contacts and pivot towards self-promotion as a video editor. This is where Pieter Lombaard entered the picture, accompanied by another friend whose name escapes me, but whose distinguishing feature was a single arm. It felt peculiar greeting him with my left hand, but let's not dwell on that. Pieter entrusted me with editing a pilot episode for a series exploring purportedly haunted locations. Our approach lent itself more to the ambiance of a campfire ghost story. Regrettably, this concept didn't transition to television, yet it was a gratifying project to be involved in. Subsequently, Pieter introduced me to P.C. Luttig, an aspiring cinematographer eager to break into the industry.",
          "__Improve__ I collaborated with P.C. Luttig on several montage cuts until we convened at a bar to deliberate the potential viability of an Afrikaans YouTube channel. Adhering to internet tropes, we emulated the style of a show called \"Good Mythical Morning,\" incorporating brand placements from companies willing to sponsor us. It was during this discussion that I recommended Solidariteit, a company with ties to another employer, Akademia, where I was freelancing at the time. What better way to expand my reach than by collaborating with those already interested in my work? Thus, P.C. and I explored the prospect, enlisting Casper Labuschagne. While this endeavor garnered attention from affluent individuals, the sustained funding required for such content production proved impractical.",
          "__Improve__ Then, Karel Lensley reached out to me on P.C. Luttig's recommendation for editing assistance. Karel was producing an episode for SuperSport and sought someone capable of delivering a professional end product without resorting to the commonplace, lackluster editing styles prevalent today. My primary role involved overseeing and managing the production of sports-related content. Rika Nieuwoudt provided narration, and together with a team of producers, we crafted a creative vision for a sports fishing tournament. Admittedly, I possessed minimal knowledge about fishing, nor was it a hobby of mine. However, Rika and I collaborated to develop a respectable script. Utilizing contestant scores, we crafted a narrative around the event, integrating live footage, interesting facts, and score updates to recount the proceedings accurately. This surpassed SuperSport's expectations, leading to the episode airing on their main channel during prime time.",
        ],
      },
      {
        title: "U.S. Embassy in South Africa",
        dates: "Digital Production Coordinator from May, 2023 to Present",
        logo: `${imageURI}/png-files/main-employment/United States Embassy.png`,
        paragraphs: [
          "__Rewrite__ I implement visual content for the U.S. Embassy in South Africa for distribution across various platforms. This includes making and refining audio, visuals, artwork, photos and other multimedia products by selecting, designing and customizing compelling videos for digital projects in support of specific goals. My responsibilities includes compiling material by strategically creating professional graphics using Adobe and other related tools. Additionally, I conduct on-camera interviews and provide training to staff to expand in-house capacity in order to produce multimedia content. The position also involves researching, tracking and analyzing countrywide digital trends to identify regional preferences for a changing audience by planning the products beforehand to match multimedia trends. This requires developing strong, collaborative relationships to expand awareness by using the power of visual media to create content with clear objectives by performing administrative functions which includes equipment tracking, logistics acquisitions, inventory maintenance, correspondence drafting and serving as a representative for the officers.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris. Vestibulum mattis ullamcorper velit sed ullamcorper. Turpis tincidunt id aliquet risus feugiat in. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Cras adipiscing enim eu turpis egestas pretium. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Fames ac turpis egestas maecenas pharetra. Quis ipsum suspendisse ultrices gravida dictum fusce ut. In massa tempor nec feugiat nisl pretium fusce. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Praesent tristique magna sit amet purus. Arcu cursus vitae congue mauris rhoncus aenean vel elit.",
          "Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Mauris pellentesque pulvinar pellentesque habitant. Pulvinar neque laoreet suspendisse interdum consectetur libero. Et molestie ac feugiat sed. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Nullam eget felis eget nunc lobortis mattis aliquam. Duis tristique sollicitudin nibh sit amet. Ullamcorper a lacus vestibulum sed. Odio euismod lacinia at quis risus sed. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. In egestas erat imperdiet sed euismod nisi porta. Purus non enim praesent elementum facilisis. At imperdiet dui accumsan sit amet nulla facilisi morbi. Laoreet suspendisse interdum consectetur libero id. Arcu non odio euismod lacinia. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.",
        ],
      },
  ],
};

//--|🠋 04. Contact 🠋|--//
export interface ContactText {
  title: string;
  subject: string;
  links: Array<{ name: string; text: string; url: string; icon: string; download?: boolean }>;
}
export const contactText: ContactText = {
  title: 'Contact Me',
  subject: 'The pitch went sideways, but the offer stands.',
  links: [
    {
      name: 'email',
      text: 'tertius.roach@nerdsonsite.com',
      url: 'mailto:tertius.roach@nerdsonsite.com',
      icon: `${imageURI}/svg-files/icon-collection/solid/envelope.svg`,
    },
    {
      name: 'github',
      text: 'GitHub',
      url: 'https://github.com/TertiusRoach',
      icon: `${imageURI}/svg-files/icon-collection/brands/github.svg`,
    },
    {
      name: 'linkedin',
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tertius-roach/',
      icon: `${imageURI}/svg-files/icon-collection/brands/linkedin.svg`,
    },
    {
      name: 'youtube',
      text: 'YouTube',
      url: 'https://www.youtube.com/@TertiusRoach',
      icon: `${imageURI}/svg-files/icon-collection/brands/youtube.svg`,
    },
    {
      name: 'resume',
      text: 'Download my CV',
      url: `${imageURI}/pdf-files/curriculum-vitae.pdf`,
      icon: `${imageURI}/svg-files/icon-collection/solid/download.svg`,
      download: true,
    },
  ],
};
