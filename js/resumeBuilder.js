var bio = {
  name: "Stan Adamchyk",
  role: "Web Developer",
  contacts: {
    mobile: "508-283-0758",
    email: "stan.adamchyk@gmail.com",
    github: "@Prostan",
    location: "Mountain View, CA"
  },
  biopic: "images/profile.jpg",
  welcomeMessage: "IT Professional is looking for new challenge",
  skills: ["Web Development", "UI test Automation", "BE test Automation",
  "Release managment", "Deploiment", "Risk managment",
    "JQuery", "React", "Redux", "Backbone", "JavaScript", "Java", "CSS", "HTML", "SQL",
    "WebDriver", "TestNg", "Maven", "Allure", "Gradle", "LogStash", "Git",
    "MySQL", "Cassandra", "Micrasoft SQL server"
  ]
};

var education = {
  schools: [
    {
      name: "Zyrovicy College",
      location: "Zyrovicy, BY",
      degree: "BA",
      majors: ["ME"],
      dates: "2013",
      url: "https://udacity.com"
    },
    {
      name: "BSATU",
      location: "Minsk, BY",
      degree: "Masters",
      majors: ["ME"],
      dates: "2016",
      url: "https://udacity.com"
    }
  ],
  onlineCourses: [
    {
    title: "WebDeveloper",
    school: "Udacity",
    dates: "2016",
    url: "https://classroom.udacity.com/nanodegrees/nd001"
    }
  ]
};

var work = {
  jobs: [
    {
      employer: "MokaFive",
      title: "QA Engineer",
      location: "Redwood City, CA",
      description: "Enterprice managment system",
      dates: "2012 - 2013"
    },
    {
      employer: "Salesforce.com",
      title: "QA Engineer",
      location: "San Franciso, CA",
      description: "CRM, Chatter",
      dates: "2012 - 2013"
    },
    {
      employer: "Google",
      title: "Automation QA Engineer",
      location: "Mountain View, CA",
      description: "Enterprice Search and Cloud search test automation",
      dates: "2013 - 2015"
    },
    {
      employer: "Linkedin",
      title: "QA Engineer, Release Manager",
      location: "Sunnyvale, CA",
      description: "Likedin prodactivity apps test automation",
      dates: "2015 - 2016"
    },
    {
      employer: "SleepIQ",
      title: "Software Developer in Test, Server",
      location: "San Jose, CA",
      description: "Cloud and Server side test automation",
      dates: "2016 - current"
    }
  ]
};

var projects = {
  projects: [
    {
      title: "SomeProject 1",
      images: ["images/project2-img.jpg", "images/project3-img.jpg"],
      description: "Worked on Enterprice Search and Cloud search projects",
      dates: "2015"
    }
  ]
};

bio.displayHeaderAndFooter = function() {

  var fomrattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(fomrattedRole);

  var fomrattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(fomrattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts, #footerContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts, #footerContacts").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts, #footerContacts").append(formattedGithub);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts, #footerContacts").append(formattedLocation);

  var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBiopic);

  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedMessage);

  $("#header").append(HTMLskillsStart);

  var skills = bio.skills;
  skills.map(function(skill) {
    var formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkill);
  });
};

bio.displayHeaderAndFooter();

work.displayJobs = function() {

  //Creating new div for work experiencsse
  $("#workExperience").append(HTMLworkStart);

  //Using map to iteretaee
  Object.keys(work.jobs).map(function(key)  {
    var formatEmployer = HTMLworkEmployer.replace("%data%",
      work.jobs[key].employer);
    var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[key].title);
    $(".work-entry:last").append(formatEmployer + formatTitle);

    var formatDates = HTMLworkDates.replace("%data%", work.jobs[key].dates);
    $(".work-entry:last").append(formatDates);

    var formatLocations = HTMLworkLocation.replace("%data%",
      work.jobs[key].location);
    $(".work-entry:last").append(formatLocations);

    var formatDescription = HTMLworkDescription.replace("%data%",
      work.jobs[key].description);
    $(".work-entry:last").append(formatDescription);
  });
};

work.displayJobs();


projects.display = function() {
  $("#projects").append(HTMLprojectStart);

  Object.keys(projects.projects).map (function(key) {
    var formattedTitle = HTMLprojectTitle.replace("%data%",
      projects.projects[key].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%",
      projects.projects[key].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%",
      projects.projects[key].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[key].images.length > 0) {
      var images = projects.projects[key].images;
      Object.keys(images).map(function(image) {
        var formattedImage = HTMLprojectImage.replace("%data%",
          projects.projects[key].images[image]);
        $(".project-entry:last").append(formattedImage);
        });
      }
    }
  );
};

projects.display();

education.display = function() {
  Object.keys(education.schools).map(function(school) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%",
      education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%",
      education.schools[school].degree);
    var formattedSchoolNameDegree = formattedSchoolName + formattedDegree;
    $(".education-entry:last").append(formattedSchoolNameDegree);

    var formattedDates = HTMLschoolDates.replace("%data%",
      education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%",
      education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var majors = education.schools[school].majors;
    majors.map(function(major) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", major);
      $(".education-entry:last").append(formattedMajor);
    });
  });

    $(".education-entry:last").append(HTMLonlineClasses);

    Object.keys(education.onlineCourses).map(function(course) {
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",
        education.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",
        education.onlineCourses[course].school);
      $(".education-entry:last").append(formattedOnlineTitle +
        formattedOnlineSchool);

      var formattedOnlineDates = HTMLonlineDates.replace("%data%",
        education.onlineCourses[course].dates);

      $(".education-entry:last").append(formattedOnlineDates);

      var formattedOnlineUrl = HTMLonlineURL.replace("%data%",
        education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedOnlineUrl);
    });
};

education.display();

$("#mapDiv").append(googleMap);
