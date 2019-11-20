import React from 'react'

///Agruiculture

const agReqs =
  'Most agricultural workers do not need a high school diploma. They usually receive short-term on-the-job training. Most animal breeders have a high school diploma, and typically have several years of experience in a related occupation. Most agricultural workers receive some short-term on-the-job training.'

const agricultureCareers = [
  {
    title: 'Altria Group inc.',
    city: 'Richmond, VA && New York, NY',
    avgPay: '58k - 81k',
    description:
      'Previously known as Philip Morris Companies, Altria Group Inc. is one of the most popular tobacco manufacturers and distributors in the world. The company has a series of different divisions and subsidiaries. They are usually responsible for the client interaction. Some of them include U.S. Smokeless Tobacco Company and Philip Morris USA.The company was founded in 1985 by Philip Morris and a couple of other companies. Today, its products are sold all over the world.It is headquartered in New York City, NY. In 2011, it had about 10,000 workers. During the same year, revenues exceeded all expectations – over $23.8 billion.',
    img:
      'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/de3cc36aa0661eb7cf296820ddf2ca4a'
  },
  {
    title: 'Archer Daniels Midland Company',
    city: 'Chicago, Il',
    avgPay: '65k - 110k',
    description:
      'Archer Daniels Midland Company represents a food processing corporation, as well as a powerful trader of commodities. It deals with foods, beverages, bioenergy and ethanol. The company was founded in 1902. Today, it is based in Decatur, Illinois. It runs over 420 cropping facilities, as well as 270 plants. They are spread all over the world. In 2014, the headquarters is expected to relocate to Chicago. From 2009 to 2011, Forbes declared Archer Daniels Midland Company to be the most admired food manufacturer in the world. In 2012, the company had around 30,000 employees and a yearly revenue of almost $90 billion.',
    img:
      'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/6/2/6/216263-6-eng-GB/ADM_USA-CP-Food-2009_news_large.jpg'
  },
  {
    title: 'Chiquita Brands International Inc',
    city: 'Charlotte, NC',
    avgPay: '66k',
    description:
      'Chiquita Brands International Inc. is a front running title in the agricultural world. The company produces and distributes bananas and other similar products. It is world renowned for the blue and yellow logo with a lady on it. The company was created in 1863 and headquarters in Cincinnati, Ohio. It has been through a few different title changes as well. Today, it represents the largest producer and distributor of bananas in the United States of America, but its products are sold around Europe, Australia, Asia and South America too. In 2012, yearly revenues went to $3.07 billion, while Chiquita Brands International Inc. has over 20,000 employees.',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/a/a7/Chiquita_Brands_Logo_2018.jpg'
  },
  {
    title: 'CHS inc.',
    city: 'Inver Grove Heights, MN',
    avgPay: '45k - 115k',
    description:
      'Headquartered in Inner Grove Heights, Minnesota, CHS Inc. is one of the Fortune 100 businesses dealing with food processing and wholesale operations. It also handles various farm supplies and equipment, as well as the popular Cenex fuel. It provides financial help to more or less popular businesses, but it also owns some of the actions at Ventura Foods. The company is owned by ranchers, farmers and agricultural companies. Revenues in 2012 exceeded $40.6 billion, while the net income raised to $1.26 billion. It is worth noting that CHS Inc. was not as powerful as today. Overtime, it has assimilated various companies and cooperatives.',
    img: 'https://www.hoosieragtoday.com/wp-content/uploads/2015/06/chhs.jpg'
  },
  {
    title: 'Dean Foods Company',
    city: 'Dallas, TX',
    avgPay: '60k - 194k',
    description:
      'Dean Foods Company is a front running beverage and food company that has specialized in all kinds of dairy items overtime. The company is responsible for a series of plants established around the United Kingdom and the United States of America. It was created in 1925. It is now based in Dallas, Texas. Obviously, it handles a few different divisions, but it also employs more than 22,000 individuals. At the end of 2011, the company reported a financial revenue of over $11.4 billion. On the other hand, the net income was a little lower than in 2010 – about $161 million.',
    img:
      'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/7faae710369e0f300c31da601339f702'
  }
]

const artReqs =
  'Formal schooling beyond a high school diploma is rarely required for craft and fine artists. However, it is difficult to gain adequate artistic skills, without some formal education in the fine arts. Most craft and fine artists have at least a high school diploma. High school classes like art, shop, and home economics can teach prospective artists some of the basic skills they will need, such as drawing, woodworking, or sewing. Craft and fine artists advance professionally as their work circulates and as they establish a reputation for their particular style. Many of the most successful artists continually develop new ideas, and their work often evolves over time. Craft and fine artists improve their skills through practice and repetition. They can train in several ways other than—or in addition to—formal schooling. Craft and fine artists can train with simpler projects before attempting something more ambitious.'

const artCareers = [
  {
    title: 'Art Director',
    reqs:
      "Art directors need at least a bachelor's degree in an art or design subject and previous work experience. Depending on the industry, they may have worked as graphic designers, fine artists, editors, or photographers, or in another art or design occupation before becoming art directors.",
    avgPay: '71k - 136k',
    description:
      'Art directors are responsible for the visual style and images in magazines, newspapers, product packaging, and movie and television productions. They create the overall design and direct others who develop artwork or layouts.',
    img:
      'http://www.katiehajjar.com/wp-content/uploads/2017/11/Essential-Skill-for-Your-WordPress-Business-shutterstock_285271100.png'
  },
  {
    title: 'Art Agent',
    reqs:
      'A job as an Artist Agent falls under the broader career category of Agents and Business Managers of Artists, Performers, and Athletes. The information on this page will generally apply to all careers in this category but may not specifically apply to this career title.',
    avgPay: '80k - 100k',
    description:
      'An artist agent is any professional who works on behalf of an artist to represent, promote, and sell their work. In many ways, they represent the business interests of the artist, whether by pursuing individual sales, licensing deals, publicity, or opportunities like teaching, events, or commissions for artists',
    img:
      'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/01/thr_joel_lubin_20170111_joellubin-2290.jpg'
  },
  {
    title: 'Animator',
    reqs:
      "Multimedia artists and animators typically have a bachelor's degree in fine art, computer graphics, animation, or a related field. Programs in computer graphics often include courses in computer science in addition to art courses. Bachelor's degree programs in art include courses in painting, drawing, and sculpture",
    avgPay: '50k-112k',
    description:
      'Animator Job Description. Animators use computers and other techniques to create moving images that tell stories or provide information. They work with clients and production team members to establish project goals, create storyboards, and design and refine animations',
    img: 'https://i.ytimg.com/vi/hgiNoYlVVMg/maxresdefault.jpg'
  },
  {
    title: 'Interior Designer',
    reqs:
      "A bachelor's degree is usually required in order to become an interior designer, as are classes in interior design, drawing, and computer-aided design (CAD). A bachelor's degree in any field is acceptable, and interior design programs are available at the associate's, bachelor's, and master's degree levels",
    avgPay: '35k - 69k',
    description:
      'Interior designers make interior spaces functional, safe, and beautiful by determining space requirements and selecting decorative items, such as colors, lighting, and materials. They read blueprints and must be aware of building codes and inspection regulations, as well as universal accessibility standards.',
    img:
      'https://www.thespruce.com/thmb/FL1IsKFMOisGMtOsGAaGu09Jpwc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Interiordesignercolorswatches-GettyImages-547128950-59659d565f9b583f18177447.jpg'
  },
  {
    title: 'Graphic Designer',
    reqs:
      "Graphic designers usually need a bachelor's degree in graphic design or a related field. Candidates for graphic design positions should demonstrate their creativity and originality through a professional portfolio that features their best designs.",
    avgPay: '37k - 69k',
    description:
      'Graphic designers create visual concepts, by hand or using computer software, to communicate ideas that inspire, inform, or captivate consumers. They develop the overall layout and production design for advertisements, brochures, magazines, and corporate reports.',
    img:
      'https://www.careergirls.org/wp-content/uploads/2018/05/Graphic_Designer1920x1080.jpg'
  }
]

const lawReqs =
  'Becoming a lawyer usually takes 7 years of full-time study after high school—4 years of undergraduate study, followed by 3 years of law school. Most states and jurisdictions require lawyers to complete a Juris Doctor (J.D.) degree from a law school accredited by the American Bar Association (ABA)'

const lawCareers = [
  {
    title: 'Public Interest Lawyer',
    reqs:
      'You need to earn a juris doctorate degree from an institution accredited by the American Bar Association. The student must obtain a license from their state in order to practice law. Continuing education is often required due to the fact that the law is fluid and changes often, especially as new public policies are set',
    avgPay: '50k - 80k',
    description:
      "Public Interest Lawyer. Attorneys that serve the public's interest may practice law in several capacities. They offer individualized legal services to clients, as well as work on legal reformation. They are found in many nonprofit organizations and government agencies",
    img:
      'https://www.findlawimages.com/blogs/placeholders/Greedy_Associates2.jpg'
  },
  {
    title: 'Government Lawyer',
    reqs:
      'Government attorneys need a law degree, known as a Juris Doctor. They must also pass a bar exam and admission to a state bar association is usually required. ... Experience requirements vary; some agencies will hire attorneys directly out of law school, while others require several years of experience.',
    avgPay: '142k',
    description:
      'Government Lawyer/Attorney. A government lawyer works for some branch of the government, whether it is at the city, state, or federal level. ... While a government lawyer may practice law in the same manner as a private attorney, their day-to-day focus will be on the laws and policies that affect their governing body.',
    img:
      'https://static.seattletimes.com/wp-content/uploads/2017/08/6f332434-8c44-11e7-b2f6-803715e683f3-780x466.jpg'
  },
  {
    title: 'Trial Lawyer',
    reqs:
      ' Trial lawyers, like any attorneys, will need an education that includes an appropriate bachelors degree, taking an LSAT test to enter law school, completing law school, and passing a bar exam. Each state may have varying requirements for their state bar.',
    avgPay: '66k - 100k',
    description:
      "Trial lawyers meet with clients and agree to represent them in court cases. After performing legal research, trial lawyers go to court to argue their client's case on their behalf to the judge or jury.",
    img:
      'https://cdtalaw.com/wp-content/uploads/2019/02/Trial-Lawyers-Must-Have-Exceptional-Organizational-Skills.jpg'
  },
  {
    title: 'Private Sector Lawyer',
    reqs:
      'Lawyers must obtain a juris doctorate degree from a law school accredited by the American Bar Association. Along with their degree, the private lawyer will need to pass the state bar and apply for the license to practice in their state',
    avgPay: '155k - 180k',
    description:
      'Private sector lawyer refers to the broad category of lawyers that do not work for the government or nonprofits but instead work for private companies and law firms. Private sector lawyers usually make more than public sector lawyers. ',
    img: 'https://careerconfidential.com/wp-content/uploads/2016/02/lawyer.jpg'
  },
  {
    title: 'Corporate Lawyer',
    reqs:
      "To be a corporate lawyer, a juris doctorate degree is required. Most corporations prefer their corporate lawyers receive one from a law school accredited by the American Bar Association. They must also hold an attorney's license in order to practice law in the state in which they are employed",
    avgPay: '76k - 240k',
    description:
      'Many corporate lawyers work in law firms, particularly large or mid-size firms, where they counsel clients and handle business transactions including negotiation, drafting, and review of contracts and other agreements associated with the activities of the business, such as mergers, acquisitions, and divestitures',
    img: 'https://dilitrust.com/wp-content/uploads/2018/03/lawyer850.gif'
  }
]

//audio/video

const vidReqs =
  "In this field, you'll work with high-end equipment and cutting-edge technology—and in exciting environments, too. Work settings include TV and radio stations, sporting events, concerts, film sets, recording studios, theaters, presentations and conferences. For entry-level positions, it's best to have a certificate at minimum. However, better job opportunities await those with associate's degrees in audio or video production. If the following job descriptions look good to you, an audio or video production career may be a great fit"

const vidCareers = [
  {
    title: 'Screenwriter',
    reqs:
      "Patience, self-motivation and the ability to accept criticism are also essential. ... Screenwriters adapt or write scripts for film or television, providing synopses and shooting scripts, and collaborating and rewriting on deadlines. Can you become a screenwriter without a degree? YES—and you especially don't need a degree in film, theater, or screenwriting. In fact, most working writers I know do not have a degree from film school. Most however, have gone to college and many have graduate degrees. Still, college isn't for everyone, and there are other ways to become a great writer",
    avgPay: '60k - +100k',
    description:
      'A screenplay writer, scriptwriter or scenarist is a writer who practices the craft of screenwriting, writing screenplays on which mass media, such as films, television programs and video games, are based',
    img:
      'https://images.huffingtonpost.com/2016-04-12-1460482613-9632925-9InspiringReasonstoPursueaCareerinScreenwriting-thumb.jpg'
  },
  {
    title: 'Audio and Video Technician',
    reqs:
      "A bachelor's degree or an associate degree in communications, broadcast technology or a related field is required by some corporations employing audio visual technicians. Training for entry-level positions is also available through trade schools and professional group certification programs.",
    avgPay: '48k - 66k',
    description:
      'Audio visual technicians set up, operate, maintain and repair equipment used to enhance live events, such as microphones, video recorders, projectors, lighting and sound mixing equipment.',
    img:
      'https://userscontent2.emaze.com/images/c173a4f8-4548-4c57-be13-d4548147d58e/ab24e0f0f5a9570d01b3fceaf677c1ef.jpg'
  },
  {
    title: 'Film Editor',
    reqs:
      "Most editor positions require a bachelor's degree in a field related to film or broadcasting, such as communications. Many colleges offer courses in cinematography or video-editing software. Coursework involves a mix of film theory with practical training. Editors may complete a brief period of on-the-job training",
    avgPay: '31k - 88k',
    description:
      "The job of a Film Editor (also known as Picture Editor) is to figure out how to tell a story using a bunch of video footage. Sometimes it's a commercial, sometimes it's branded content, sometimes it's a feature film",
    img:
      'https://www.productionbeast.com/wp-content/uploads/2017/11/Film-Editor-feature-computer-StudioBinder-min-3-1920x1080.jpg?x17258'
  },
  {
    title: 'Audio Visual Engineer',
    reqs:
      "Many employers require technicians to have a high school diploma or GED or an associate degree in audio visual technology or a related field, such as digital media. Some employers may prefer a bachelor's degree in journalism, broadcasting or communications",
    avgPay: '55k-60k',
    description:
      'An Audio Visual Technician aid educators, program producers, recording production engineers, and presenters to generate sound, images, and videos to produce CDs, DVDs, as well as TV and film productions. Technicians work with producers and directors and keep track of equipment inventory and fix equipment issues.',
    img: 'https://usa.sae.edu/assets/Uploads/Media/IMG_2960_11_17copy.jpg'
  },
  {
    title: 'Videographer',
    reqs:
      "While you don't necessarily need a specific degree in order to work as a videographer, most individuals in the field have a bachelor's degree in some area that is related to film or broadcasting. While earning a degree, you will gain valuable technical skills and experiences. ... Broadcasting. Video editing",
    avgPay: '40k- 80k',
    description:
      'A videographer is hired to record videos for television, internet, and film. Unlike cinematographers who perform similar tasks working on the sets of major motion pictures and record on film, videographers usually employ some kind of electronic media. This may be videotape, hard disk, streaming media, and so on.',
    img: ''
  }
]
