var bio = {
  name: "Stan Adamchyk",
  role: "Web Developer",
  contacts: {
    mobile: "508-283-0758",
    email: "stan.adamchyk@gmail.com",
    github: "@stan",
    location: "Mountain View, CA"
  },
  biopic: "images/profile.jpg",
  welcomeMessage: "IT Professional is looking for new challenge",
  skills: ["Web Development, UI test Automation, BE test Automation",
  "Release managment, Deploiment, Risk managment",
    "JQure, Angular JS, React, Redux, Backbone", "JavaScript, Java, CSS, HTML, SQL",
    "WebDriver, TestNg, Maven, Allure, Gradle, LogStash, Git",
    "MySQL, Cassandra, Micrasoft SQL server"
  ]
}

var education = {
  "schools": [
    {
      "name": "Zyrovicy College",
      "location": "Zyrovicy, BY",
      "degree": "BA",
      "major": "ME",
      "dates": 2013,
      "url": "https://udacity.com"
    },
    {
      "name": "BSATU",
      "location": "Minsk, BY",
      "degree": "Masters",
      "major": "ME",
      "dates": 2016,
      "url": "https://udacity.com"
    }
  ],
  "onlineCourses": [
    {
    "title": "WebDeveloper",
    "school": "Udacity",
    "dates": "2016",
    "url": "https://classroom.udacity.com/nanodegrees/nd001"
  }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "MokaFive",
      "title": "QA Engineer",
      "location": "Redwood City, CA",
      "description": "Enterprice managment system",
      "dates": "2012 - 2013"
    },
    {
      "employer": "Salesforce.com",
      "title": "QA Engineer",
      "location": "San Franciso, CA",
      "description": "CRM, Chatter",
      "dates": "2012 - 2013"
    },
    {
      "employer": "Google",
      "title": "Automation QA Engineer",
      "location": "Mountain View, CA",
      "description": "Enterprice Search and Cloud search test automation",
      "dates": "2013 - 2015"
    },
    {
      "employer": "Linkedin",
      "title": "QA Engineer, Release Manager",
      "location": "Sunnyvale, CA",
      "description": "Likedin prodactivity apps test automation",
      "dates": "2015 - 2016"
    },
    {
      "employer": "SleepIQ",
      "title": "Software Developer in Test, Server",
      "location": "San Jose, CA",
      "description": "Cloud and Server side test automation",
      "dates": "2016 - current"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "SomeProject 1",
      "images": ["images/197x148.gif", "images/197x148.gif"],
      "description": "Worked on Enterprice Search and Cloud search projects",
      "dates": 2015
    }
  ]
}



bio.displayHeader = function() {

  var fomrattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(fomrattedRole);

  var fomrattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(fomrattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);

  var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBiopic);

  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedMessage);

  $("#header").append(HTMLskillsStart);
  for(skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#header").append(formattedSkill);
  }
}

bio.displayHeader();

work.displayJobs = function () {
  for (job in work.jobs) {
    //Creating new div for work experience
    $("#workExperience").append(HTMLworkStart);
    //Conctinate employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    // appending to the last element of work-entry
    $(".work-entry:last").append(formattedEmployerTitle);

    //Same for dates
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocations = HTMLworkLocation.replace("%data%",
      work.jobs[job].location);
    $(".work-entry:last").append(formattedLocations);

    //For description
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

work.displayJobs();

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",
      projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%",
      projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%",
      projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%",
          projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

projects.display();

education.display = function() {
  for (school in education.schools) {
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

    var formattedMajor = HTMLschoolMajor.replace("%data%",
      education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
  }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (course in education.onlineCourses) {
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
    }
}

education.display();

$("#mapDiv").append(googleMap);
initializeMap();
