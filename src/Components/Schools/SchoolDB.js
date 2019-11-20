import React from 'react'

//Agruiculture

const agriculturalJobs = [
  'Agricultural Engineer',
  'Agricultural Food Scientist',
  'Agricultural Inspector',
  'Agricultural Manager',
  'Agricultural Specialist',
  'Agronomist',
  'Aquatic Ecologist',
  'Arborist'
]

const agSchools = [
  {
    name: 'College of Technical Agriculture',
    city: 'Curtis, NE',
    inState: '$135 per credit hour',
    outofState: '$135 per credit hour',
    img:
      'https://s3-us-west-2.amazonaws.com/asset.plexuss.com/college/overview_images/2308_Nebraska_College_of_Technical_Agriculture_001_ncta_dusk_0755.jpg'
  },
  {
    name: 'McNeese State University',
    city: 'Lake Charles, LA',
    inState: '$4,200',
    outofState: '$6,700',
    img: 'http://stem.edu.gr/wp-content/uploads/2019/03/159717_hero.jpg'
  },
  {
    name: 'University of Nevada, Reno',
    city: 'Reno, NV',
    inState: '$233 per credit',
    outofState: '$233 per credit',
    img: 'https://wolfweb.unr.edu/homepage/ttam/UNR.jpg'
  },

  {
    name: 'Florida A&M University',
    city: 'Tallahasse, FL ',
    inState: '$22,116',
    outofState: '$34,062',
    img: 'https://wolfweb.unr.edu/homepage/ttam/UNR.jpg'
  },

  {
    name: 'Abraham Baldwin Agricultural College',
    city: 'Tifton, GA ',
    inState: '$22,116',
    outofState: '$34,062',
    img:
      'http://1s273w2jyvlqr4xji2eywmgr.wpengine.netdna-cdn.com/wp-content/uploads/2016/06/campus-940x560.jpg'
  }
]

//Arts

const artJobs = [
  'Animator',
  'Art teacher',
  'Cake decorator',
  'Fashion designer',
  'Graphic designer',
  'Illustrator and technical illustrator',
  'Industrial designer',
  'Makeup artist'
]

const artSchools = [
  {
    name: 'Rhode Island School of Design',
    city: 'Providence, RI',
    inState: '$51,800',
    outofState: '$51,800',
    img:
      'https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/217493_hero.jpg?itok=Ei4PxkdX'
  },
  {
    name: 'School of the Art Institute of Chicago',
    city: 'Chicago, IL',
    inState: '$64,610',
    outofState: '$64,610',
    img:
      'https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/143048_hero.jpg?itok=BxNOnogc'
  },
  {
    name: 'California Institute of the Arts',
    city: 'San Francisco, CA',
    inState: '$31,950',
    outofState: '$31,950',
    img:
      'https://signalscv.com/wp-content/uploads/2018/01/013118_news_cal_arts_campus_NS_o_2.jpg'
  },
  {
    name: 'University of California, Los Angeles',
    city: 'Los Angeles, CA',
    inState: '$17,272',
    outofState: '$32,374',
    img:
      'https://dimg04.c-ctrip.com/images/fd/tg/g3/M05/13/47/CggYGVYknjKAR2ZpACDezvyZ1k8318_C_750_350.jpg?proc=source%2Ftrip'
  },
  {
    name: 'Pratt Institute',
    city: 'Brooklyn, NY ',
    inState: '$57,257',
    outofState: '$57,257',
    img: 'https://rew-online.com/wp-content/uploads/2017/01/pratt.jpg'
  }
]

const lawSchools = [
  {
    name: 'Yale  University',
    city: 'New Haven, CT',
    inState: '$88,593',
    outofState: '$88,593',
    img:
      'https://news.yale.edu/sites/default/files/styles/featured_media/public/2016_10_12_15-03-40_dsc_0199.jpg?itok=ioUMDI3p&c=07307e7d6a991172b9f808eb83b18804'
  },
  {
    name: 'Yale  University',
    city: 'New Haven, CT',
    inState: '$88,593',
    outofState: '$88,593',
    img:
      'https://news.yale.edu/sites/default/files/styles/featured_media/public/2016_10_12_15-03-40_dsc_0199.jpg?itok=ioUMDI3p&c=07307e7d6a991172b9f808eb83b18804'
  },
  {
    name: 'Stanford University',
    city: 'Stanford, CA',
    inState: '$45,158',
    outofState: '$45,158',
    img:
      'https://static1.squarespace.com/static/592f3d832994ca8183be02d6/5d1d101702495e0001dfb68d/5d1d11cd6a3ed50001bd70c5/1562186429994/stanford-campus.jpg?format=2500w'
  },
  {
    name: 'Harvard University',
    city: 'Cambridge, MA',
    inState: '$64,978',
    outofState: '$64,978',
    img:
      'https://hls.harvard.edu/content/uploads/2008/08/110930_Langdell_186.jpg'
  },
  {
    name: 'University of Chicago',
    city: 'Chicago, IL',
    inState: '$53,649',
    outofState: '$53,649',
    img:
      'https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/UChicagoUpdate_0912.jpg?itok=tp_xkgJ3'
  },
  {
    name: 'Columbia University',
    city: 'New York, NY',
    inState: '$55,056',
    outofState: '$55,056',
    img:
      'https://www.columbia.edu/content/sites/default/files/styles/cu_crop/public/content/Morningside%20Campus%20at%20Dusk%202.jpg?itok=SkwvzD5S'
  }
]

//Audio/Video Technology

const videoJobs = [
  'Director',
  'Producer',
  'Set Designer',
  'Director of Photography',
  'Costume Designer',
  'Prop Master',
  'Makeup Artist',
  'Movie Editor'
]

const videoSchools = [
  {
    name: 'Stanford University',
    city: 'Stanford, CA',
    inState: '$45,158',
    outofState: '$45,158',
    img:
      'https://static1.squarespace.com/static/592f3d832994ca8183be02d6/5d1d101702495e0001dfb68d/5d1d11cd6a3ed50001bd70c5/1562186429994/stanford-campus.jpg?format=2500w'
  },
  {
    name: 'Full Sail University',
    city: 'Winter Park, FL',
    inState: '$23,116',
    outofState: '$23,116',
    img:
      'https://www.insidehighered.com/sites/default/server_files/styles/large/public/full-sail-studios-1_1111x737%202.jpg?itok=K1JZm-3N'
  },
  {
    name: 'University of North Carolina School of the Arts',
    city: 'Winston-Salem, NC',
    inState: '$9,139',
    outofState: '$24,609',
    img:
      'https://www.bararch.com/system/uploads/project_image/image/769/mainshot.jpg'
  },
  {
    name: 'Academy of Art University',
    city: 'San Francisco, CA',
    inState: '$21,252',
    outofState: '$21,252',
    img:
      'http://www.smc.edu/StudentServices/TransferServices/AreasofStudy/PrivateCalifornia/PublishingImages/Academy-of-Art-University.jpg'
  },
  {
    name: 'ArtCenter College of Design',
    city: 'Pasadena, CA',
    inState: '$21,252',
    outofState: '$21,252',
    img:
      'https://i.pinimg.com/originals/df/d9/8c/dfd98c62958ab02ad60af02f27486c05.jpg'
  }
]

//Architecture and Construction.

const architectJobs = [
  'Architect',
  'Architectural technologist',
  'Interior and spatial designer',
  'Building surveyor',
  'Town planner',
  'Production designer',
  'Historic buildings inspector',
  'Structural engineer'
]

const architectSchools = [
  {
    name: 'Boston Architectural College',
    city: 'Boston, MA ',
    inState: '$20,666',
    outofState: '$20,666',
    img:
      'https://inhabitat.com/wp-content/blogs.dir/1/files/2012/08/Boston-Architectural-College-Sustainable-Design-school.jpg.png'
  },
  {
    name: 'NewSchool of Architecture and Design',
    city: 'San Diego, CA',
    inState: '$26,463',
    outofState: '$26,463',
    img:
      'https://ca-times.brightspotcdn.com/dims4/default/50946c6/2147483647/strip/true/crop/2048x1152+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fbc%2F34%2Feedf02680fcc9243f2d90f6ee752%2Fsd-1501106860-2r7xkpbf8f-snap-image'
  },
  {
    name: 'Rensselaer Polytechnic Institute',
    city: 'Troy, NY',
    inState: '$50,767',
    outofState: '$50,767',
    img: 'https://news.rpi.edu/sites/default/files/Campus-145%20%28003%29.jpg'
  },
  {
    name: 'Southern California Institute of Architecture',
    city: 'Los Angeles, CA ',
    inState: '$42,900',
    outofState: '$42,900',
    img:
      'https://ocbj.media.clients.ellingtoncms.com/img/photos/2016/08/25/sciaic_t670.jpg?b3f6a5d7692ccc373d56e40cf708e3fa67d9af9d'
  },
  {
    name: 'Cornell University',
    city: 'Ithaca, New York',
    inState: '$50,953',
    outofState: '$50,953',
    img:
      'https://www.cornell.edu/assets/images/about/barnes-hall-tower-view-1280x720.jpg'
  }
]

//Education and Training. ...

const educationJobs = [
  'Guidance counselor',
  'School psychologist',
  'Career counselor',
  'Juvenile corrections worker',
  'Family counselor',
  'Education consultant',
  'Admission counselor/recruiter',
  'Child life specialist'
]

const educationSchools = [
  {
    name: 'Ohio State University',
    city: 'Columus, OH',
    inState: '$10,037',
    outofState: '$28,229',
    img:
      'https://radio.wosu.org/sites/wosu2/files/styles/x_large/public/201711/moritz_college_of_law.jpg'
  },
  {
    name: 'Stanford University',
    city: 'Stanford, CA',
    inState: '$45,158',
    outofState: '$45,158',
    img:
      'https://static1.squarespace.com/static/592f3d832994ca8183be02d6/5d1d101702495e0001dfb68d/5d1d11cd6a3ed50001bd70c5/1562186429994/stanford-campus.jpg?format=2500w'
  },
  {
    name: 'Northwestern University',
    city: 'Evanston, Illinois',
    inState: '$50,855',
    outofState: '$50,855',
    img:
      'https://www.library.northwestern.edu/images/homepage/university-library.jpg'
  },
  {
    name: 'Washington University in St. Louis',
    city: 'St. Lois, Missouri ',
    inState: '$49,770',
    outofState: '$49,770',
    img:
      'https://media.bizj.us/view/img/10428030/washington-university-2014-003*750xx5472-3078-0-285.jpg'
  },
  {
    name: 'Johns Hopkins University ',
    city: 'Baltimore, Maryland',
    inState: '$50,410',
    outofState: '$50,410',
    img:
      'https://api.hub.jhu.edu/factory/sites/default/files/styles/landscape/public/gilman_1.jpg?itok=ZO7EGHHn'
  }
]

//Government and Public Administration. ...

const govJobs = [
  'School Counselor',
  'Librarian',
  'Social Worker',
  'Special Education Teacher',
  'Police Officer',
  'Firefighter',
  'Athletic Director',
  'Correctional Officer'
]

const govSchools = [
  {
    name: 'Georgetown University ',
    city: 'Washington DC',
    inState: '$50,547',
    outofState: '$50,547',
    img:
      'http://mathbrainlab.com/wp-content/uploads/2015/03/georgetown-university-online-master-of-science-in-nursing-1.jpg'
  },
  {
    name: 'Columbia University of New York',
    city: 'New York, NY',
    inState: '$55,056',
    outofState: '$55,056',
    img:
      'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/RKEOD6NZNFCVBOKVPFGCXRQA7Y.jpg'
  },
  {
    name: 'Princeton University',
    city: 'Princeton, NJ',
    inState: '$45,320',
    outofState: '$45,320',
    img:
      'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_768,q_50,w_1024/v1/clients/princetonnj/princeton_university_main_building_at_front_gate_geraldine_scull_209cbd93-c4fc-4485-a274-66b4076c71e0.jpg'
  },
  {
    name: 'Washington University in St. Louis',
    city: 'St. Lois, Missouri ',
    inState: '$49,770',
    outofState: '$49,770',
    img:
      'https://media.bizj.us/view/img/10428030/washington-university-2014-003*750xx5472-3078-0-285.jpg'
  },
  {
    name: 'Harvard University',
    city: 'Cambridge, MA',
    inState: '$64,978',
    outofState: '$64,978',
    img:
      'https://hls.harvard.edu/content/uploads/2008/08/110930_Langdell_186.jpg'
  }
]

//Hospitality and Tourism. ...

let hopsitalityJobs = [
  'Barista',
  'Bartender',
  'Concierge',
  'Cook',
  'Cruise Ship Attendant',
  'Flight Attendant',
  'Food and Beverage Manager',
  'Front of House Manager'
]

let hospitalitySchools = [
  {
    name: 'Purdue University',
    city: ' West Lafayette, IN',
    inState: '$10,002',
    outofState: '$28,804',
    img:
      'https://www.cummins.com/sites/default/files/styles/newsroom_hero_image/public/images/newsroom_news_release/Purdue%20University%20-%20Cummins.jpg?itok=N9KGMrV_'
  },
  {
    name: 'New York University',
    city: ' New York City, NY',
    inState: '$49,062',
    outofState: '$49,062',
    img:
      'https://www.stern.nyu.edu/sites/default/files/assets/images/con_045896.jpg'
  },
  {
    name: 'University of Delaware',
    city: 'Newark, DE',
    inState: '$12,830',
    outofState: '$32,250',
    img:
      'https://www.udel.edu/content/dam/udelImages/main/graphics/layout/hero-images/ud-spring-hero-apply.jpg/_jcr_content/renditions/original'
  },
  {
    name: 'Iowa State University ',
    city: 'Ames, IA',
    inState: '$8,219',
    outofState: '$21,583',
    img:
      'https://www.music.iastate.edu/files/resize/page/images/campanile_spring_2018_0-675x506.jpg'
  },
  {
    name: 'Pennsylvania State University',
    city: 'State College, PA',
    inState: '$17,900',
    outofState: '$32,382',
    img:
      'https://www.worldcampus.psu.edu/sites/default/files/styles/title_banner_16_7_xl/public/2018-12/1920x840_about-us_L1_1.jpg?itok=uI7YMnxy'
  }
]

//Information Technology. ...

const techJobs = [
  'Technical Support',
  'Programmers',
  'Web Developers',
  'Computer Systems Analyst',
  'IT Security',
  'Network Engineer'
]

const techSchools = [
  {
    name: 'Carnegie Mellon University',
    city: 'Pittsburgh, PA',
    inState: '$52,310',
    outofState: '$52,310',
    img:
      'https://res.cloudinary.com/highereducation/image/upload/w_740,h_415,c_scale,f_auto,q_auto/v1/TheBestSchools.org/carnegie-mellon-university-PA.jpg'
  },
  {
    name: 'Cornell University',
    city: 'Ithaca, New York',
    inState: '$50,953',
    outofState: '$50,953',
    img:
      'https://www.cornell.edu/assets/images/about/barnes-hall-tower-view-1280x720.jpg'
  },
  {
    name: 'Rensselaer Polytechnic Institute',
    city: 'Troy, NY',
    inState: '$50,767',
    outofState: '$50,767',
    img: 'https://news.rpi.edu/sites/default/files/Campus-145%20%28003%29.jpg'
  },
  {
    name: 'Purdue University',
    city: ' West Lafayette, IN',
    inState: '$10,002',
    outofState: '$28,804',
    img:
      'https://www.cummins.com/sites/default/files/styles/newsroom_hero_image/public/images/newsroom_news_release/Purdue%20University%20-%20Cummins.jpg?itok=N9KGMrV_'
  },
  {
    name: 'Brigham Young University',
    city: 'Provo, UT',
    inState: '$5,300',
    outofState: '$5,300',
    img:
      'https://www.collegeatlas.org/wp-content/uploads/2014/06/Brigham-Young-University-BYU-Utah.jpg'
  }
]

Science

const scienceJobs = [
  'Psychologist',
  'Industrial Psychologist',
  'Biochemist',
  'Epidemiologist/Medical Scientist',
  'Anthropologist',
  'Archaeologist',
  'Environmental Science and Protection Technician'
]

scienceSchools = [
  {
    name: 'Stanford University',
    city: 'Stanford, CA',
    inState: '$45,158',
    outofState: '$45,158',
    img:
      'https://static1.squarespace.com/static/592f3d832994ca8183be02d6/5d1d101702495e0001dfb68d/5d1d11cd6a3ed50001bd70c5/1562186429994/stanford-campus.jpg?format=2500w'
  },
  {
    name: 'Massachusetts Institute of Technology ',
    city: 'Cambridge, MA',
    inState: '$48,452',
    outofState: '$48,452',
    img:
      'https://images.squarespace-cdn.com/content/v1/5a07cf28a803bb1549f04032/1550167251950-H6QKI7WKUJ1Z8SMWZPM8/ke17ZwdGBToddI8pDm48kFTEgwhRQcX9r3XtU0e50sUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcW7uEhC96WQdj-SwE5EpM0lAopPba9ZX3O0oeNTVSRxdHAmtcci_6bmVLoSDQq_pb/massachusetts.jpg'
  },
  {
    name: 'University of California',
    city: 'Provo, UT',
    inState: '$13,509',
    outofState: '$40,191',
    img:
      'https://www.thoughtco.com/thmb/5KOEjBN2iZWltEAsqpoAqUzqFfk=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/royce-hall-ucla-56a187235f9b58b7d0c0672a.jpg'
  },
  {
    name: 'Harvard University',
    city: 'Cambridge, MA',
    inState: '$64,978',
    outofState: '$64,978',
    img:
      'https://hls.harvard.edu/content/uploads/2008/08/110930_Langdell_186.jpg'
  },
  {
    name: 'Princeton University',
    city: 'Princeton, NJ',
    inState: '$45,320',
    outofState: '$45,320',
    img:
      'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_768,q_50,w_1024/v1/clients/princetonnj/princeton_university_main_building_at_front_gate_geraldine_scull_209cbd93-c4fc-4485-a274-66b4076c71e0.jpg'
  }
]

//Medical

const medicalJobs = [
  'Physician Assistant',
  'Family Nurse Practitioner',
  'Nurse Anesthetist',
  'Adult Gerontology Nurse',
  'Cardiovascular Technologist',
  'Registered Nurse',
  'Physical Therapist'
]

const medicalSchools = [
  {
    name: 'University of California, San Francisco School of Medicine',
    city: 'San Francisco, CA',
    inState: '$34,977',
    outofState: '$47,222',
    img:
      'https://pathology.ucsf.edu/sites/pathology.ucsf.edu/files/inline-images/UCSF%20Med%20Center%20at%20Mission%20Bay%20Night%20Shot.jpg'
  },
  {
    name: 'Stanford University, Medical School',
    city: 'Stanford, CA',
    inState: '$58,197',
    outofState: '$58,197',
    img:
      'https://wp.stanforddaily.com/wp-content/uploads/2018/10/Stanford_School_of_Medicine_Li_Ka_Shing_Center.jpg'
  },
  {
    name: 'University of Pennsylvania Perelman School of Medicine',
    city: 'Philadelphia, PA ',
    inState: '$57,884',
    outofState: '$57,884',
    img:
      'https://www.med.upenn.edu/admissions/assets/user-content/images/hup-dusk.jpg'
  },
  {
    name: 'Johns Hopkins University School of Medicine',
    city: 'Baltimore, MD',
    inState: '$53,400',
    outofState: '$53,400',
    img: 'https://www.hopkinsmedicine.org/sebin/r/x/Dome%20SLW_640.jpg'
  },
  {
    name: 'Harvard University',
    city: 'Boston, MA',
    inState: '$45,050',
    outofState: '$45,050',
    img:
      'http://bei.brighamandwomens.org/wp-content/uploads/2017/11/havard-medical-school-masters.jpg'
  }
]

//Engineering

const engineerJobs = [
  'Civil Engineering',
  'Mechanical Engineering',
  'Chemical Engineering',
  'Petroleum Engineering',
  'Electrical Engineering',
  'Aerospace Engineering'
]

const engineerSchools = [
  {
    name: 'Princeton University',
    city: 'Princeton, NJ',
    inState: '$45,320',
    outofState: '$45,320',
    img:
      'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_768,q_50,w_1024/v1/clients/princetonnj/princeton_university_main_building_at_front_gate_geraldine_scull_209cbd93-c4fc-4485-a274-66b4076c71e0.jpg'
  },
  {
    name: 'California Institute of Technology (CALTECH)',
    city: 'Pasadena, CA ',
    inState: '$47,577',
    outofState: '$47,577',
    img:
      'https://44q9ujwr3wj1fkeca1mc9231-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/pp-ns-caltech-1140x641.jpg'
  },
  {
    name: 'University of Wisconsin-Madison',
    city: 'Madison, WI',
    inState: '$10,488',
    outofState: '$32,738',
    img:
      'https://www.vc.wisc.edu/wp-content/uploads/sites/245/2017/09/BascHill_autumn_banner.jpg'
  },
  {
    name: 'University of Minnesota',
    city: 'Minneapolis, MN',
    inState: '$14,142',
    outofState: '$23,806',
    img:
      'https://twin-cities.umn.edu/sites/twin-cities.umn.edu/files/board_rochester.jpg'
  },
  {
    name: 'University of Texas at Austin',
    city: 'Austin, TX',
    inState: '$10,092',
    outofState: '$35,682',
    img:
      'https://static.wixstatic.com/media/51fd41_cd680d9da48947ac8cfa080d7ad54d08~mv2_d_3300_2255_s_2.jpg'
  }
]

//Nursing

const nursingSchools = [
  {
    name: 'Johns Hopkins University',
    city: 'Baltimore, MD',
    inState: '$50,410',
    outofState: '$50,410',
    img:
      'https://media-cdn.tripadvisor.com/media/photo-s/0f/88/cb/14/entrance-to-university.jpg'
  },
  {
    name: 'Duke University',
    city: 'Durham, NC',
    inState: '$51,265',
    outofState: '$51,265',
    img: 'https://media.glassdoor.com/l/3c/c1/31/1b/beautiful-campus.jpg'
  },
  {
    name: 'University of Pennsylvania',
    city: 'Philadelphia, PA',
    inState: '$51,464',
    outofState: '$51,464',
    img: 'https://media.glassdoor.com/l/3c/c1/31/1b/beautiful-campus.jpg'
  },
  {
    name: 'Emory University',
    city: 'Atlanta, GA',
    inState: '$47,954',
    outofState: '$47,954',
    img:
      'https://www.zgf.com/wp-content/uploads/2013/04/D80820_Emory-1500x700.jpg'
  },
  {
    name: 'Ohio State University',
    city: 'Columus, OH',
    inState: '$10,037',
    outofState: '$28,229',
    img:
      'https://radio.wosu.org/sites/wosu2/files/styles/x_large/public/201711/moritz_college_of_law.jpg'
  }
]

const codingBootcamps = [
  {
    name: 'Dev Mountain',
    city: 'Lehi, UT',
    inState: '$12,000',
    outofState: '$12,000',
    img: 'https://miro.medium.com/max/750/1*0iPeGOldVa0EpBAhCUUA9Q.jpeg'
  },
  {
    name: 'General Assembly',
    city: 'New York, NY',
    inState: '$14,500',
    outofState: '$14,500',
    img:
      'http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png'
  },
  {
    name: 'Bloc',
    city: 'Lehi, UT',
    inState: '$8,500',
    outofState: '$8,500',
    img:
      'https://pbs.twimg.com/profile_images/935545553181483008/NqTOIvxr_400x400.jpg'
  }
]
