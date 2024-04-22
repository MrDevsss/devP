function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var allSections = document.querySelectorAll('.hidden-content');
    
    // I-loop ang lahat ng mga seksyon at itago ang mga ito maliban sa piniling seksyon
    allSections.forEach(function(sec) {
      if (sec.id !== sectionId) {
        sec.style.display = 'none';
      }
    });
    
    // Toggle ang display ng piniling seksyon
    if (section.style.display === 'none') {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }