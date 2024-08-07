// Initialize variables to store points for each category
let firstlanguagePoints = 0;
let seclanguagePoints = 0;
let educationPoints = 0;
let workExperiencePoints = 0;
let agePoints = 0;
let arrangedEmploymentPoints = 0;
let adaptabilityPoints = 0;

// Function to update total points
function updateTotalPoints() {
    const totalPoints = seclanguagePoints+firstlanguagePoints + educationPoints + workExperiencePoints + 
                        agePoints + arrangedEmploymentPoints + adaptabilityPoints;
    document.getElementById('totalPoints').textContent = totalPoints;
    
    if (totalPoints >= 67) {
        document.getElementById('result').textContent = "You may qualify for the Federal Skilled Worker Program.";
    } else {
        document.getElementById('result').textContent = "You don't qualify for the program. Consider improving your score.";
    }
}

// Language Points

function getNumber(){
    const clb1Points = parseInt(document.getElementById('clb1').value) || 0;
    firstlanguagePoints = clb1Points; // Max 24 points for first language
    console.log(clb1Points);
    document.getElementById('clb1_output').textContent = `First Language Points: ${firstlanguagePoints}`;
    updateTotalPoints();
}

function getNumber2(){
    const clb2Points = parseInt(document.getElementById('clb2').value) || 0;
    seclanguagePoints = clb2Points; // Max 4 points for second language
    document.getElementById('clb2_output').textContent = `Second Language Points: ${seclanguagePoints}`;
    updateTotalPoints();
}

// Language Skills
// document.getElementById('clb1_button').addEventListener('click', function() {
//     const clb1Points = parseInt(document.getElementById('clb1').value) || 0;
//     languagePoints = Math.max(clb1Points, 24); // Max 24 points for first language
//     console.log(clb1Points);
//     document.getElementById('clb1_output').textContent = `First Language Points: ${languagePoints}`;
//     updateTotalPoints();
// });

// document.getElementById('clb2_button').addEventListener('click', function() {
//     const clb2Points = parseInt(document.getElementById('clb2').value) || 0;
//     languagePoints += Math.min(clb2Points, 4); // Max 4 points for second language
//     document.getElementById('clb2_output').textContent = `Second Language Points: ${clb2Points}`;
//     updateTotalPoints();
// });


// Education

function getEdu(){
    const eduPoints = parseInt(document.getElementById('education').value) || 0;
    educationPoints = eduPoints; // Max 4 points for second language
    // document.getElementById('edu_output').textContent = `Education Points: ${seclanguagePoints}`;
    updateTotalPoints();
}

// document.getElementById('edu_button').addEventListener('click', function() {
//     educationPoints = parseInt(document.getElementById('education').value) || 0;
//     document.getElementById('edu_output').textContent = `Education Points: ${educationPoints}`;
//     updateTotalPoints();
// });

// Work Experiance Points

function getWork(){
    workExperiencePoints =parseInt(document.getElementById('work_points').value);
    // console.log(work_points);
    updateTotalPoints();
}

// Work Experience
// document.querySelector('.work_exp select').addEventListener('change', function(e) {
//     switch(e.target.value) {
//         case '1y': workExperiencePoints = 9; break;
//         case '2y': workExperiencePoints = 11; break;
//         case '3y': workExperiencePoints = 13; break;
//         case '4y': workExperiencePoints = 15; break;
//         default: workExperiencePoints = 0;
//     }
//     updateTotalPoints();
// });

// Age

function age_bolo(){
    agePoints = parseInt(document.getElementById('age_koto').value);
    updateTotalPoints();
}

// document.querySelector('.age select').addEventListener('change', function(e) {
//     switch(e.target.value) {
//         case 'a': agePoints = 0; break;  // Under 18
//         case 'b': agePoints = 12; break; // 18-35
//         case 'c': agePoints = 11; break; // 36
//         case 'd': agePoints = 10; break; // 37
//         case 'e': agePoints = 9; break;  // 38
//         case 'f': agePoints = 8; break;  // 39
//         case 'g': agePoints = 7; break;  // 40
//         case 'h': agePoints = 6; break;  // 41
//         case 'i': agePoints = 5; break;  // 42
//         case 'j': agePoints = 4; break; // 43
//         case 'k': agePoints = 3; break; // 44
//         case 'l': agePoints = 2; break; // 45
//         case 'm': agePoints = 1; break; // 46
//         case 'n': agePoints = 0; break; // 47 or Older
//         default: agePoints = 0;
//     }
//     updateTotalPoints();
// });

// Arranged Employment

function employ_lagbe(){
    arrangedEmploymentPoints = parseInt(document.getElementById('employ_ase').value);
    updateTotalPoints();
}

// document.querySelector('.employment select').addEventListener('change', function(e) {
//     switch(e.target.value){
//         case 'option1': arrangedEmploymentPoints = 10; break; // 44
//         case 'option2': arrangedEmploymentPoints = 10; break; // 45
//         case 'option3': arrangedEmploymentPoints = 10; break; // 46
//         case 'option4': arrangedEmploymentPoints = 10; break;
//         default:
//     }
//     updateTotalPoints();
// });

// Adaptability

function ada_fun(){
    const adaPoints = parseInt(document.getElementById('adaptability').value) || 0;
    adaptabilityPoints = adaPoints; // Max 4 points for second language
    // document.getElementById('edu_output').textContent = `Education Points: ${seclanguagePoints}`;
    updateTotalPoints();
}

document.getElementById('ada_button').addEventListener('click', function() {
    adaptabilityPoints = Math.min(parseInt(document.getElementById('adaptability').value) || 0, 10);
    document.getElementById('ada_output').textContent = `Adaptability Points: ${adaptabilityPoints}`;
    updateTotalPoints();
});

// Initial update
updateTotalPoints();

document.addEventListener('DOMContentLoaded', (event) => {
    const value = document.getElementById("p1");
    value.textContent = "Total Point";
})