

//  <!-- Details for timeline-->
var additionalOptions = {
    // Starts at the end of the timeline
      start_at_end: true,
      
    // Height of the timeline navigation
      timenav_height: 175,

    // Timeline navigation in aligned to bottom
      timenav_position: "bottom",

    // Slide BG colour, currently set to yellow
     default_bg_color: "#FEC66A",

    // Enables the updating of the browser URL each time a slide advances, so that people can link directly to specific slides.
    hash_bookmark: true,
    }

   // Link to GoogleDocs file for timeline
    timeline = new TL.Timeline('timeline-embed',
    'https://docs.google.com/spreadsheets/d/1av0_VOnj69CmZN0MYk6gzVo4LuaAjhecyARnHsR1cXE/edit?usp=sharing', additionalOptions);