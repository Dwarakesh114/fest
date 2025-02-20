import type { ScheduleData } from '../types/shedule';

const scheduleData: ScheduleData = {
  departments: {
    "FED-1": {
      name: "FED-1",
      faculty_coordinator: {
        name: "Dr B Sri Hari Rao",
        phone: "9293786399"
      },
      student_coordinator: {
        name: "M.HOMESH",
        roll_no: "24KN1A42B3",
        class: "CSM -B",
        phone: "7013028648"
      },
      events: [
        {
          name: "Math Puzzle Hunt",
          venue: "Main Hall",
          type: "technical",
          coordinator: {
            name: "Dr. G. Adilakshmi",
            phone: "9985398080"
          },
          rules: [
            "The first puzzle file has no password and can be accessed directly.",
            "The solution to each question leads to the password for the next file.",
            "Solving the puzzle is the only way to continue and unlock the password for the next file.",
            "The file may contain: (a) The Magic Number Trick, (b) The Birthday Paradox, (c) Mental Multiplication, (d) Basic Calculations, (e) Pattern Recognition, (f) Logic and Reasoning Problems, (g) Algebraic Equations."
          ]
        },
        {
          name: "Declamation",
          venue: "Auditorium",
          type: "technical",
          coordinator: {
            name: "Mrs. V. Navata",
            phone: "7893838177"
          },
          rules: [
            "Individual Participation.",
            "Participants must deliver a portion of a speech previously delivered by a great personality.",
            "The goal is to convey a message with clarity, emotion, and persuasiveness.",
            "Time limit: 3 minutes."
          ]
        }
      ]
    },
    "FED-2": {
      name: "FED-2",
      faculty_coordinator: {
        name: "Dr. G. Srinivasa Rao",
        phone: "9866391041"
      },
      student_coordinator: {
        name: "R Madhu Venkata Sai Ganesh",
        phone: "9666485544"
      },
      events: [
        {
          name: "Rebus Puzzles",
          venue: "Room No: 2204",
          type: "technical",
          coordinator: {
            name: "Dr. CH. Chandrakala(9440959794),Mrs. K. Krishnapriya(9490228746)",
            phone: ""
          },
          rules: [
            "Individual Participation",
            "Twenty pictorial representations will be given",
            "Need to carry a pen"
          ]
        },
        {
          name: "Poster Presentation",
          venue: "Room No: 2207",
          type: "technical",
          coordinator: {
            name: "Dr. M.Siva Kishore",
            phone: "9866143345"
          },
          rules: [
            "Min no. of participants: 3",
            "Max no. of participants: 5",
            "Size poster: 2X3",
            "Poster must clear, visually appealing and easy to read from distance."
          ]
        },
        {
          name: "Mehndi",
          venue: "FED Block",
          type: "non-technical",
          coordinator: {
            name: "Mrs. Y. Pavani",
            phone: "8686482101"
          },
          rules: [
            "No of participants:2",
            "Time limit for the event is 30 minutes",
            "Mahendi design must cover one hand",
            "Design should be creative and unique",
            "Participants should bring their Mehndi Cones and other materials"
          ]
        }
      ]
    },
    "CSE": {
      name: "CSE",
      faculty_coordinators: [
        {
          name: "Mr.N.V.Satyanarayana",
          phone: "9885190561",
          email: "satya4satya@gmail.com"
        },
        {
          name: "Mr.P.Somaraju",
          phone: "9703130583",
          email: "somaraju.p@nriit.edu.in"
        }
      ],
      student_coordinator: {
        name: "Mr.M.Sravan",
        phone: "8317634794",
        email: "sravanmandava1126@gmail.com"
      },
      events: [
        {
          name: "LOGO QUIZ",
          venue: "192 Lab",
          type: "technical",
          coordinator: {
            name: "Mr. M.V.P. Uma Maheswara Rao, Mr.G.Sivannarayana,Mrs.Nahida",
            phone: "7382745151"
          },
          rules: [
            "Only 2 persons per team",
            "Every team should bring a pen"
          ]
        },
        {
          name: "BUG WAR",
          venue: "DBMS Lab",
          type: "technical",
          coordinator: {
            name: "Mrs. CH. N. Santha Kumari Mrs.L.Indraja Mr.Raj Sagar",
            phone: "7207444601"
          },
          rules: [
            "Phones and smartwatches are not allowed"
          ]
        },
        {
          name: "AVISHKAAR ANVESHAN",
          venue: "1214 Lab",
          type: "technical",
          coordinator: {
            name: "Dr. G. Shobana Mrs.V.Aruna Mrs.CH.Santhi",
            phone: "8985423344"
          },
          rules: [
            "Posters related to CSE topics such as AI, ML, Cloud Computing, Data Science, Blockchain, or any emerging technology."
          ]
        },
        {
          name: "CODE SANKALP",
          venue: "WT Lab",
          type: "technical",
          coordinator: {
            name: "Mr. A. Tarak Ram Mr.S.Sai Bala Krishna Mrs.R.Rama Devi",
            phone: "8106356348"
          },
          rules: [
            "Only 2 persons per team",
            "Phones and smartwatches are not allowed"
          ]
        },
        {
          name: "WESTERN SOLO DANCE",
          venue: "R.V.R Knowledge center",
          type: "non-technical",
          coordinator: {
            name: "Mrs. M. Lakshmi Durga Dr.P.Durga Mrs.S.Sindhura",
            phone: "9030094592"
          }
        },
        {
          name: "GROUP DANCE",
          venue: "R.V.R Knowledge center",
          type: "non-technical",
          coordinator: {
            name: "Dr. G. Shobana Mrs.V.Aruna Mrs.CH.Santhi",
            phone: "8985423344"
          }
        }
      ]
    },
    "IT": {
      name: "IT",
      faculty_coordinator: {
        name: "Smt.G.Baleswari",
        phone: "8500275537"
      },
      student_coordinator: {
        name: "T.Revanth",
        phone: "8886168440"
      },
      events: [
        {
          name: "INNOVISTAS",
          venue: "Room 3205",
          type: "technical",
          coordinator: {
            name: "Mrs. K. Vijitha",
            phone: "7997605390"
          },
          rules: [
            "Only 2 persons per team",
            "Presentation time is 8 min and 2 min. for queries",
            "Candidates should submit one hard copy at the time of presentation",
            "All students are to ensure fair and professional environment"
          ]
        },
        {
          name: "Creative Exhibit",
          venue: "Room 3204",
          type: "technical",
          coordinator: {
            name: "Mr. N. Narasimha Rao  Mrs.Ch. Bindu Sri",
            phone: "8184972436,7207794076"
          },
          rules: [
            "Maximum of 3 participants per project/model",
            "A team member can participate in only one project",
            "Projects must be in working condition",
            "Participants must bring their own accessories",
            "Submit a hard copy of the abstract during the presentation"
          ]
        },
        {
          name: "Bytes and Bits Quiz",
          venue: "Room 3304",
          type: "technical",
          coordinator: {
            name: "Mr. P. Kiran Babu",
            phone: "9989643958"
          },
          rules: [
            "Team comprises of 2 members",
            "Each team would be given a set of 25 objective-type questions",
            "Time limit: 15 minutes",
            "Only 5 teams would be selected for the FINAL ROUND",
            "In case of a tie, 3 additional questions would be asked"
          ]
        },
        {
          name: "Next Gen Ideas",
          venue: "Room 3303",
          type: "technical",
          coordinator: {
            name: "Ms. M. Tejaswini",
            phone: "8179883362"
          },
          rules: [
            "The poster size should be 20 x 30 inches",
            "Maximum of 2 persons per presentation",
            "Participants must bring their own materials",
            "Judges/reviewers and audience may pose questions",
            "Ensure a fair and professional environment"
          ]
        },
        {
          name: "RANGOLI",
          venue: "Between the Civil And Mechanical Block",
          type: "non-technical",
          coordinator: {
            name: "Mrs. Ch. Bindu Sri ,Mrs. K.Vijitha,  Ms. M.Tejaswini",
            phone: "7207794076,7997605390,8179883362"
          },
          rules: [
            "Team event (Max. 2 participants)",
            "Participants have to carry their own materials",
            "Time - 2 hours",
            "An area of 3x3 ft will be provided",
            "Liquid colors are not allowed"
          ]
        }
      ]
    },
    "CSE-DS": {
      name: "CSE-DS",
      faculty_coordinator: {
        name: "Mr. B. Phanindra Kumar",
        phone: "9014260174"
      },
      student_coordinator: {
        name: "K.Sripathi Rao",
        phone: "8328109217"
      },
      events: [
        {
          name: "Technical Quiz",
          venue: "Room No: 6203",
          type: "technical",
          coordinator: {
            name: "Mr. B. Phanindra Kumar",
            phone: "9014260174"
          },
          rules: [
            "Teams of 2 members",
            "20 multiple-choice questions",
            "Time limit: 15 minutes"
          ]
        },
        {
          name: "Blind Coding",
          venue: "150 LAB",
          type: "technical",
          coordinator: {
            name: "Mr. B. Phanindra Kumar",
            phone: "9014260174"
          },
          rules: [
            "Participants must write code without seeing the screen",
            "Time limit: 10 minutes"
          ]
        },
        {
          name: "Gen AI Models Expo",
          venue: "Room No: 6201",
          type: "technical",
          time: "10:30AM"
        },
        {
          name: "Idea to Prototype challenge",
          venue: "Room No:6202",
          type: "technical",
          time: "11:30AM"
        },
        {
          name: "INSTA REELS",
          type: "non-technical",
          venue: "Data Science Department",
          time: "10:00AM"
        }
      ]
    },
    "CSE-AIML": {
      name: "CSE-AIML",
      faculty_coordinator: {
        name: "Mrs. Madhuri/Mr. Pratap",
        phone: "9392832668"
      },
      student_coordinator: {
        name: "",
        phone: ""
      },
      events: [
        {
          name: "Paper/PPT presentation",
          venue: "4201",
          type: "technical",
          coordinator: {
            name: "Mrs. Madhuri/Mr. Pratap",
            phone: "9392832668"
          },
          rules: [
            "Team size should be two"
          ]
        },
        {
          name: "Code Hackathon",
          venue: "4205",
          type: "technical",
          coordinator: {
            name: "Mr. SVR/Mr. Rajendra",
            phone: "9703820443"
          },
          rules: [
            "Team size should be up to a maximum of four"
          ]
        },
        {
          name: "Poster Presentation",
          venue: "4301",
          type: "technical",
          coordinator: {
            name: "Mrs. Mangamma/Mrs. Saidamma",
            phone: "9182990067"
          },
          rules: [
            "Team size should be two and make sure that the poster should contain updated trends in AI and ML"
          ]
        },
        {
          name: "Project Expo",
          venue: "Corridors of 2nd and 3rd floors",
          type: "technical",
          coordinator: {
            name: "Mr. Rajesh/Mrs. Rani",
            phone: "9885963630"
          },
          rules: [
            "Team size should be up to a maximum of four"
          ]
        }
      ]
    },
    "AIML": {
      name: "AIML",
      faculty_coordinator: {
        name: "Dr. Y. Arpitha",
        phone: "9493468888"
      },
      student_coordinator: {
        name: "K. Sai Harsha",
        phone: "9985584854"
      },
      events: [
        {
          name: "Code & Quest",
          venue: "150 LAB",
          type: "technical",
          time: "10:30AM",
          coordinator: {
            name: "Dr. Y. Arpitha",
            phone: "9493468888"
          }
        },
        {
          name: "Ideathon",
          venue: "Room No: 7002",
          type: "technical",
          time: "10:30AM"
        },
        {
          name: "Prompt perfect",
          venue: "Room No: 7003 (R&D LAB)",
          type: "technical",
          time: "02:00PM"
        },
        {
          name: "PPT Challenge",
          venue: "Room No: 7001",
          type: "technical",
          time: "02:00PM"
        },
        {
          name: "BEST OUT OF WASTE",
          type: "non-technical",
          venue: "AIML Department",
          time: "10:00AM"
        }
      ]
    },
    "ECE": {
      name: "ECE",
      faculty_coordinator: {
        name: "Gottipati Srinivas Babu",
        phone: "9492273639",
        email: "srinivasababug@nriit.edu.in"
      },
      student_coordinator: {
        name: "K Maanas Reddy",
        phone: "9515739145",
        email: "maanasr116@gmail.com"
      },
      events: [
        {
          name: "Paper Presentation",
          venue: "Room No: 1311",
          type: "technical",
          time: "10:30AM",
          coordinator: {
            name: "Mrs. B. Sneha Latha(9949848112) Mr.N Gopi(8074749109)",
            phone: ""
          },
          rules: [
            "Team Size 2 Members"
          ]
        },
        {
          name: "Poster Presentation",
          venue: "3rd Floor Corridor",
          type: "technical",
          time: "11:00AM",
          coordinator: {
            name: "Mr. M Mahesh(9290741749),Mrs N. Malathi(7901569899)",
            phone: ""
          },
          rules: [
            "Team Size 2 Members"
          ]
        },
        {
          name: "Technical Quiz",
          venue: "Room No: 1301",
          type: "technical",
          time: "11:00AM",
          coordinator: {
            name: "Mrs. G. Sree Lakshmi(8500523262),Mrs. P B Sudha Rani(8464844217)", 
            phone: ""
          },
          rules: [
            "Team Size 3 Members"
          ]
        },
        {
          name: "Project Expo",
          venue: "Room No: 1305",
          type: "technical",
          time: "01:00PM",
          coordinator: {
            name: "Mr. D.Murali(9848506089) Mrs.K Swathi(8143388342) ",
            phone: ""
          },
          rules: [
            "Team Size 3 Members"
          ]
        },
        {
          name: "Mr & Miss SuNRIse",
          venue: "R.V.R Knowledge center",
          type: "non-technical",
          coordinator: {
            name: "Dr. K Prathyush",
            phone: "9866582296"
          }
        }
      ]
    },
    "EEE": {
      name: "EEE",
      faculty_coordinator: {
        name: "Mr.R.Raghu Nadha Sastry",
        phone: "9490337572"
      },
      student_coordinator: {
        name: "MATTA BALA VENKATA SAI",
        phone: "7207219186"
      },
      events: [
        {
          name: "Paper Presentation",
          venue: "Room No: 2107",
          type: "technical",
          time: "10:30AM"
        },
        {
          name: "Poster Presentation",
          venue: "Room No: 2201",
          type: "technical",
          time: "10:30AM"
        },
        {
          name: "Technical Quiz",
          venue: "Room No: 2106",
          type: "technical",
          time: "10:30AM"
        },
        {
          name: "Electrical Project Expo",
          venue: "Room No: 2004",
          type: "technical",
          time: "11:00AM"
        },
        {
          name: "FLASH MOB",
          venue: "Dr.RVR Knowledge Center",
          type: "non-technical",
          time: "03:30PM"
        }
      ]
    },
    "Mechanical": {
      name: "Mechanical",
      faculty_coordinator: {
        name: "Mrs. CH. Srilatha",
        phone: "8985140500",
        email: "srilatha@nriit.edu.in"
      },
      student_coordinator: {
        name: "Mr. N. Bharath",
        phone: "8247329390",
        email: "bharathnaraga@gmail.com"
      },
      events: [
        {
          name: "Paper Presentation",
          venue: "Room No: 4104",
          type: "technical",
          coordinator: {
            name: "Dr. P.Siva naga sree,Mr.G.Durga Prasad ",
            phone: "9492348529,9490659033"
          },
          rules: [
            "Maximum two persons per presentation are allowed",
            "No. of slides in PPT should not be more than 15, including the title slide and conclusion",
            "Time limit for the presentation is 10 mins and its division is 8 min-explanation & 2 mins-queries",
            "The paper must be in IEEE format",
            "The word limit of abstract is 200 words and that of full paper is 6000 words",
            "Two hard copies and a soft copy of the paper must be submitted during presentation"
          ]
        },
        {
          name: "Project Expo",
          venue: "Block 5 corridor (5001)",
          type: "technical",
          coordinator: {
            name: "Dr. K. Babu raja,Mr. M. Surendra ",
            phone: "9494474128,9381935547"
          },
          rules: [
            "Only 3 persons per team"
          ]
        },
        {
          name: "Thrust Rocket",
          venue: "College ground",
          type: "technical",
          coordinator: {
            name: "Dr. Siva Krishna,Mr. O.N.V.P.Bhagavan",
            phone: "9494639099,9701207236"
          },
          rules: [
            "A team may consist of a maximum of 3 member",
            "Teams may use different rockets for different rounds",
            "Cross college teams are also allowed",
            "The rocket must be built completely from scratch and not using model rocketry par",
            "The pressure vessel must be made from commercially available non-metallic soda bottles (PET bottles)",
            "The rocket must use tap water as its primary reaction mass",
            "Participants will be provided with tap water",
            "The angle at which the rocket is to be launched can be decided by the participant",
            "The organizers will not provide a launcher, so teams must bring their own launcher",
            "The rocket must use compressed air as its energy source"
          ]
        },
        {
          name: "CAD builder",
          venue: "Room No: 5302",
          type: "technical",
          coordinator: {
            name: "Dr. B.Naga sudha rani",
            phone: "7989786319"
          },
          rules: [
            "Only 1 persons per team",
            "Phones and smart watch are not allowed"
          ]
        },
        {
          name: "Spot Painting",
          venue: "Drawing Hall (5201)",
          type: "non-technical",
          coordinator: {
            name: "Ms.K. Bhargavi,Mrs. A. Madhuri",
            phone: "9573706007,6304586870"
          },
          rules: [
            "Only 1 persons per team",
            "Participant should bring their own material",
            "Drawing sheet will be provided"
          ]
        }
      ]
    },
    "Civil": {
      name: "Civil",
      faculty_coordinator: {
        name: "A Sai Chandu",
        phone: "9346799566"
      },
      student_coordinator: {
        name: "Santi Swaroop",
        phone: "9573496479"
      },
      events: [
        {
          name: "Power point presentation",
          venue: "Room No: 3106",
          type: "technical",
          coordinator: {
            name: "A Sai Chandu",
            phone: "9346799566"
          },
          rules: [
            "Team size should be two"
          ]
        },
        {
          name: "Poster Presentation",
          venue: "Corridor",
          type: "technical",
          coordinator: {
            name: "A Sai Chandu",
            phone: "9346799566"
          },
          rules: [
            "Team size should be two and make sure that the poster should explain something closely updated trends in civil engineering"
          ]
        },
        {
          name: "Technical Quiz",
          venue: "Room No: 3106",
          type: "technical",
          coordinator: {
            name: "A Sai Chandu",
            phone: "9346799566"
          },
          rules: [
            "Team size should be three and mobile phones are restricted"
          ]
        },
        {
          name: "CAD Crusade",
          venue: "Room No: 5302",
          type: "technical",
          coordinator: {
            name: "A Sai Chandu",
            phone: "9346799566"
          },
          rules: [
            "Individual and time limit. Everyone should carry their own laptop"
          ]
        },
        {
          name: "Treasure Hunt",
          venue: "Civil, IT and Mechanical block",
          type: "non-technical",
          coordinator: {
            name: "A Sai Chandu",
            phone: "9346799566"
          },
          rules: [
            "Teams size three"
          ]
        }
      ]
    },
    "MBA": {
      name: "MBA",
      faculty_coordinator: {
        name: "Dr.K.Chinni Krishna",
        phone: "9393363615"
      },
      student_coordinator: {
        name: "D. Aravind",
        phone: "9010655815"
      },
      events: [
        {
          name: "YOUNG MANAGER",
          venue: "Room No: 1008",
          type: "technical",
          coordinator: {
            name: "Mrs.P.Manasa,Ms.P.Shanthi,Ms.A.Akhila",
            phone: "7396173755"
          },
          rules: [
            "Only 1 person per team",
            "Bring your own pen",
            "Phones and smart watches are not allowed"
          ]
        },
        {
          name: "MARKET MAKERS",
          venue: "Room No: 1009",
          type: "technical",
          coordinator: {
            name: "Mrs.G.Dhana lakshmi,Mr.T.Shanthi kumar,Mr.K.Charan babu",
            phone: "7013895587"
          },
          rules: [
            "Maximum 3 members are allowed per team",
            "Phones are allowed for 3rd round",
            "Bring your own stationary"
          ]
        },
        {
          name: "BUSINESS QUIZ",
          venue: "Room No: 1009",
          type: "technical",
          coordinator: {
            name: "Mr.D.Naga Rajesh Varma,Mr.K.Hemanth Kumar,Mr.A.Rohit Kumar,Ms.R.Viraja",
            phone: "9963251690"
          },
          rules: [
            "Maximum 3 members are allowed per team",
            "Bring your own pen",
            "Phones and smart watches are not allowed"
          ]
        },
        {
          name: "CLASSICAL DANCE",
          venue: "RVR",
          type: "non-technical",
          coordinator: {
            name: "Mrs.G.Dhana lakshmi,Ms.K.Hemanjali",
            phone: "7013895587"
          },
          rules: [
            "Bring your own property"
          ]
        }
      ]
    }
  }
};

export default scheduleData;