var bio = {
  name: "Stan Adamchyk",
  role: "Web Developer",
  contacts: {
    mobile: "650-555-5555",
    email: "stan.adamchyk@gmail.com",
    github: "@stan",
    location: "Mountain View, CA"
  },
  biopic: "images/fry.jpg",
  welcomeMessage: "Hello People",
  skills: ["JavaScript", "UI test automation", "Web Development",
    "BE test automation", "CSS"]
}

var education = {
  "schools": [
    {
      "name": "Zhirovichi College",
      "city": "Zhirovichi, BY",
      "degree": "BA",
      "major": "Mechanical Engineering",
      "dates": 2013,
      "url": "https://udacity.com"
    },
    {
      "name": "BSATU",
      "city": "Minsk, BY",
      "degree": "Masters",
      "major": "Mechanical Engineering",
      "dates": 2016,
      "url": "https://udacity.com"
    }
  ],
  "onlineCourses": {
    "title": "WebDeveloper",
    "shool": "Udacity",
    "dates": "2016",
    "url": "someUrl"
  }
}

var work = {
  "jobs": [
    {
      "employer": "Google",
      "title": "QA Engineer",
      "location": "Mountain View, CA",
      "description": "Enterprice Search and Cloud search test automation",
      "dates": "2013 - 2015"
    },
    {
      "employer": "Linkedin",
      "title": "QA Engineer",
      "location": "Mountain View, CA",
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
    },
    {
      "title": "Some Project 2",
      "images": ["images/197x148.gif", "images/197x148.gif"],
      "description": "Worked on Intranet WebApplication and Sales Leeds gen",
      "dates": 2016
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
    $(".education-entry:last").append(formattedSchoolName);

    var formattedDegree = HTMLschoolDegree.replace("%data%",
      education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%",
      education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%",
      education.schools[school].city);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%",
      education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);

    //TODO add online classes
  }
}

education.display();
