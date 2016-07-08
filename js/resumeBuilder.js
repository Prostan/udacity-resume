var bio = {
  name: "Stan Adamchyk",
  role: "Web Developer",
  contacts: {
    mobile: "650-555-5555",
    email: "stan.adamchyk@gmail.com",
    githumb: "@stan",
    location: "Mountain View, CA"
  },
  pictureUrl: "image.jpg",
  welcomeMessage: "Hello People",
  skills: ["Java", "Testing", "WebDevier"]
}

var education = {
  "schools": [
    {
      "name": "Zhirovichi College",
      "city": "Zhirovichi",
      "degree": "BA",
      "major": "Mechanical Engineering",
      "dates": 2013
    },
    {
      "name": "BSATU",
      "city": "Minsk",
      "degree": "Masters",
      "major": "Mechanical Engineering",
      "dates": 2016,
      "url": "https://udacity.com"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Google",
      "title": "QA Engineer",
      "location": "Mountain View, CA",
      "description": "Worked on Enterprice Search and Cloud search projects",
      "dates": "2013 - 2015"
    },
    {
      "employer": "Linkedin",
      "title": "QA Engineer",
      "location": "Mountain View, CA",
      "description": "Worked on Intranet WebApplication and Sales Leeds gen",
      "dates": "2015 - 2016"
    },
    {
      "employer": "SleepIQ",
      "title": "Software Developer in Test, Server",
      "location": "San Jose, CA",
      "description": "Server side",
      "dates": "2016 - current"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "SomeProject",
      "images": ["someUrl", "someUrl"],
      "description": "Worked on Enterprice Search and Cloud search projects",
      "dates": "2013 - 2015"
    },
    {
      "title": "QA Engineer",
      "images": ["someUrl", "someUrl"],
      "description": "Worked on Intranet WebApplication and Sales Leeds gen",
      "dates": "2015 - 2016"
    }
  ]
}

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
      projects.projects[project].tilte);
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
