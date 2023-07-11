// Assuming you have an array of resources with their details



var resources = [
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "My Philosophy on Teaching Writing",
      content: "Brandon Sanderson speaks here about what he's found to be the best way to teach students how to write science fiction and fantasy.",
      author: "Brandon Sanderson",
      link: "./resources/brandon-sanderson/writing-lectures-2020#0",
      thumbnail: "https://i.ytimg.com/vi_webp/0cf-qdZ7GbA/sddefault.webp",
      type: "video"
    },
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "Introduction",
      content: "In the introduction lecture, Brandon Sanderson sets the stage for the series, providing an overview of the topics to be covered.",
      author: "Brandon Sanderson",
      link: "./resources/brandon-sanderson/writing-lectures-2020#1",
      thumbnail: "https://i.ytimg.com/vi/-6HOdHEeosc/hqdefault.jpg",
      type: "video"
    },
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "Plot - Part 1",
      content: "Sanderson delves into the intricacies of plotting in the first part of the plot lecture.",
      author: "Brandon Sanderson",
      link: "./resources/brandon-sanderson/writing-lectures-2020#2",
      thumbnail: "https://i.ytimg.com/vi/jrIogch5DBU/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLB3DcVeb3RHCOjvCVypKgC3wmE6-Q",
      type: "video"
    },
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "Plot - Part 2",
      content: "Continuing from the previous lecture, Sanderson explores plot development further in the second part of the plot lecture.",
      author: "Brandon Sanderson",
      link: "./resources/brandon-sanderson/writing-lectures-2020#3",
      thumbnail: "https://i.ytimg.com/vi_webp/Qgbsz7Gnrd8/maxresdefault.webp",
      type: "video"
    },
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "Viewpoint and Q&A",
      content: "Sanderson discusses viewpoint in writing and engages in a Q&A session with the audience.",
      author: "Brandon Sanderson",
      link: "./resources/brandon-sanderson/writing-lectures-2020#4",
      thumbnail: "https://i.ytimg.com/vi/-6HOdHEeosc/hqdefault.jpg",
      type: "video"
    },
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "Worldbuilding - Part 1",
      content: "Worldbuilding takes the spotlight in the first part of the worldbuilding lecture, as Sanderson shares insights and techniques.",
      author: "Brandon Sanderson",
      link: "./resources/brandon-sanderson/writing-lectures-2020#5",
      thumbnail: "https://i.ytimg.com/vi/-6HOdHEeosc/hqdefault.jpg",
      type: "video"
    },
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "Worldbuilding - Part 2",
      content: "Sanderson continues his exploration of worldbuilding in the second part of the lecture, delving into additional aspects and considerations.",
      author: "Brandon Sanderson",
      link: "./resources/brandon-sanderson/writing-lectures-2020#6",
      thumbnail: "https://i.ytimg.com/vi/-6HOdHEeosc/hqdefault.jpg",
      type: "video"
    },
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "Short Stories",
      content: "Short stories are the focus of this lecture, as a guest, Mary Robinette Kowal provides guidance and tips for crafting compelling narratives in a condensed format.",
      author: "Mary Robinette Kowal",
      link: "./resources/brandon-sanderson/writing-lectures-2020#7",
      thumbnail: "https://i.ytimg.com/vi/-6HOdHEeosc/hqdefault.jpg",
      type: "video"
    },
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "Worldbuilding Q&A",
      content: "Sanderson addresses audience questions specifically related to worldbuilding in this Q&A session.",
      author: "Brandon Sanderson",
      link: "./resources/brandon-sanderson/writing-lectures-2020#8",
      thumbnail: "https://i.ytimg.com/vi/-6HOdHEeosc/hqdefault.jpg",
      type: "video"
    },
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "Characters - Part 1",
      content: "In the first part of the characters lecture, Sanderson dives into the art of developing rich and believable characters.",
      author: "Brandon Sanderson",
      link: "./resources/brandon-sanderson/writing-lectures-2020#9",
      thumbnail: "https://i.ytimg.com/vi/-6HOdHEeosc/hqdefault.jpg",
      type: "video"
    },
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "Characters - Part 2",
      content: "Building upon the previous lecture, Sanderson explores advanced techniques for character development in the second part of the characters lecture.",
      author: "Brandon Sanderson",
      link: "./resources/brandon-sanderson/writing-lectures-2020#10",
      thumbnail: "https://i.ytimg.com/vi/-6HOdHEeosc/hqdefault.jpg",
      type: "video"
    },
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "Characters Q&A",
      content: "The characters Q&A session allows Sanderson to provide further insights and advice on crafting memorable characters.",
      author: "Brandon Sanderson",
      link: "./resources/brandon-sanderson/writing-lectures-2020#11",
      thumbnail: "https://i.ytimg.com/vi/-6HOdHEeosc/hqdefault.jpg",
      type: "video"
    },
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "Publishing - Part 1",
      content: "Sanderson delves into the publishing process in the first part of the publishing lecture, offering guidance on navigating the industry.",
      author: "Brandon Sanderson",
      link: "./resources/brandon-sanderson/writing-lectures-2020#12",
      thumbnail: "https://i.ytimg.com/vi/-6HOdHEeosc/hqdefault.jpg",
      type: "video"
    },
    {
      series: "Writing Sci-Fi and Fantasy",
      title: "Publishing - Part 2",
      content: "Concluding the series, Sanderson continues his discussion on publishing, focusing on key aspects such as contracts, book covers, and marketing in the second part of the lecture.",
      author: "Brandon Sanderson",
      link: "./resources/brandon-sanderson/writing-lectures-2020#13",
      thumbnail: "https://i.ytimg.com/vi/-6HOdHEeosc/hqdefault.jpg",
      type: "video"
    }
    // Add more resources as needed
  ];  





  function selectRandomResource(seed) {
    // Set the seed for the random number generator
    Math.seedrandom(seed);
  
    // Generate a random index within the range of available resources
    var randomIndex = Math.floor(Math.random() * resources.length);
    return resources[randomIndex];
  }

  
  function updatePageWithRandomResource(resource) {
    
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var date = currentDate.getDate();

    var today = month + "/" + date + "/" + year;

    // Update the resource series title
    document.getElementById('rotd-date').textContent = today;

    // Update the resource series title
    document.getElementById('rotd-series').textContent = resource.series;

    // Update the resource title
    document.getElementById('rotd-title').textContent = resource.title;
  
    // Update the resource content
    document.getElementById('rotd-content').textContent = resource.content;
  
    // Update the resource author
    document.getElementById('rotd-author').textContent = 'By ' + resource.author;
  
    // Update the resource link
    document.getElementById('rotd-link').setAttribute('href', resource.link);
  
    // Update the resource link
    document.getElementById('rotd').style.backgroundImage = "url(" + resource.thumbnail + ")";

    // Update the resource type
    if (resource.type == "video") {
      document.getElementById('rotd-link').textContent = "Watch Now";
    } else if (resource.type == "article") {
      document.getElementById('rotd-link').textContent = "Read Now";
    } else {
      document.getElementById('rotd-link').textContent = "Explore Now";
    }
  }
  
  function displayRandomResource() {
    // Get the current date, year, and month
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
    var day = currentDate.getDate();
  
    // Use the current date, year, and month as the seed for selecting a random resource
    var seed = year + '-' + month * day;
  
    // Select the random resource using the seed
    var randomResource = selectRandomResource(seed);
  
    // Update the page with the random resource
    updatePageWithRandomResource(randomResource);
  }
  
  // Implement the function 'updatePageWithRandomResource' to handle updating the page with the random resource

// Call the displayRandomArticle function on page load
  window.addEventListener('load', function() {
    // Load the seedrandom.js library
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/seedrandom/2.4.4/seedrandom.min.js';
    script.onload = function() {
      displayRandomResource();
    };
    document.body.appendChild(script);
  });
  