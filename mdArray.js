function codingProblem3() {
    // Note: Using literal arrays for demonstration.  Replace with prompt() for user input in a submitted assignment.  Error handling is crucial for real-world applications.
  
    const names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
    const ages = [24, 65, 21, 5, 9];
  
    // Error Handling: Check for matching array lengths.  If lengths differ, alert the user and exit.
    if (names.length !== ages.length) {
      console.error("Error: The number of names and ages must be equal.");
      return; // Exit the function if there's a mismatch
    }
  
    // Create the restructured array
    const restructuredArray = [];
    for (let i = 0; i < names.length; i++) {
      restructuredArray.push([names[i], ages[i]]);
    }
  
    // Log the restructured array to the console
    console.log("Restructured multi-dimensional array:");
    restructuredArray.forEach(item => console.log(item)); //Log each subarray on a new line
  }
  
  codingProblem3();