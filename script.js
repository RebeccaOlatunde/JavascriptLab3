
let submissions = [
    {
        name: "jane",
        score: 95,
        date: 2020-01-24,
        passed: true,
    },
    {
        name:"joe",
        score: 77,
        date:2018-05-14,
        passed: true,
    },
    {
        name: "jack",
        score: 59,
        date: 2019-07-05,
        passed: false,
    },
    {
        name: "jill",
        score: 88,
        date: 2020-04-22,
        passed: true,
    }
];

       // Declare a function named addSubmission
       // ○ Parameter(s): array, newName, newScore, newDate
      // ○ Functionality: construct an object and push it into the array. The object must
      // have the same properties as the objects already in the array. Use conditional
      // statements to set the value for the passed property to true if the score is
      // greater than or equal to 60 and false otherwise

       const addSubmission = (array, newName,newScore,newDate) =>{
       let newSubmission = {
        name: newName,
        score: newScore,
        date:newDate,
        passed:newScore >= 60,
        }
        array.push(newSubmission);
        };
        addSubmission(submissions, "Rebecca", 90, 2020-01-22);
        console.log(submissions);
        
         
       //  Declare a function named deleteSubmissionByIndex
       // ○ Parameter(s): array, index
       // ○ Functionality: remove the object from the array at the specified index using

        const deleteSubmissionByIndex = (array, index)=>{
        array.splice(index, 1)
        };
        deleteSubmissionByIndex(submissions, 1);
        console.log(submissions);

   
       //    Declare a function named deleteSubmissionByName
       //    ○ Parameter(s): array, name
       //    ○ Functionality: remove the object from the array that has the provided name.
       //    Incorporate the findIndex method and the splice method.
        const deleteSubmissionByName = (array, name) => {
        let foundName = array.findIndex((item) => {
          return item.name === name;
        });
        array.splice(foundName, 1);
        };
        deleteSubmissionByName(submissions, "jane");
        console.log(submissions);

        //    Declare a function named editSubmission
        //   ○ Parameter(s): array, index, score
        //   ○ Functionality: update an object’s score in the array at the specified index. Use
        //   conditional statements to set the value for the passed property to true if the
        //   score is greater than or equal to 60 and false otherwise.

        const editSubmission = (array, index, score) =>{
        array[index].score = score;
        array[index].passed = score >= 60;
        };
        (editSubmission, 2, 99);
        console.log(submissions);

        //   Declare a function named findSubmissionByName
        //   ○ Parameter(s): array, name
        //   ○ Functionality: return the object in the array that has the provided name. Use the
        //   find method.
           
        const findSubmissionByName = (array, name) =>{
         let find = array.find((student) => {
         return student.name === name;
         });
         return find;
         };
          console.log(findSubmissionByName(submissions, "jill"));

        // Declare a function named findLowestScore
        // ○ Parameter(s): array
        // ○ Functionality: return the object in the array that has the lowest score. Use the
        // forEach method to loop through the whole array.

        console.log("--");
        const findLowestScore = (array) => {
        let lowestScore = array[0];
        array.forEach((person) => {
        if (person.score < lowestScore.score) {
        lowestScore = person;
        }
        });
        return lowestScore;
        };
        console.log(findLowestScore(submissions));
           

        // Declare a function named findAverageScore
        // ○ Parameter(s): array
        // ○ Functionality: return the average quiz score. Use a for...of loop.
         const findAverageScore = (array) => {
         let sum = 0;
         for (let submission of array) {
         sum += submission.score;
         }
         let average = sum / array.length;
         return average;
         };
         console.log(findAverageScore(submissions));
           
    

        // Declare a function named filterPassing
        // ○ Parameter(s): array
        // ○ Functionality: return a new array using the filter method. The filter method
        // should find objects in the array that have passing scores.

         const filterPassing = (array) => {
         let objectsPassed = array.filter((passingScores) => {
          return passingScores.passed === true;
          });
          return objectsPassed;
          };
         console.log(filterPassing(submissions));
  
         // Declare a function named filter90AndAbove
         // ○ Parameter(s): array
         // ○ Functionality: return a new array using the filter method. The filter method
         // should find objects in the array that have scores greater than or equal to 90.
  
        const filter90AndAbove = (array) => {
        let scoresGreaterThan90 = array.filter((scores) => {
        return scores.score >= 90;
        });
        return scoresGreaterThan90;
        };
        console.log(filter90AndAbove(submissions));
