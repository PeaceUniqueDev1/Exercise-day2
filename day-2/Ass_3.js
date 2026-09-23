let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';     
 let loveCount = sentence1.toLowerCase().match(/love/g); 
 console.log(loveCount.length);
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
 let becauseCount = sentence2.match(/because/g); 
 console.log(becauseCount.length);
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'; 
let cleanSentence = sentence3.replace(/[^a-zA-Z0-9\s]/g, ''); 
console.log(cleanSentence);
let words = cleanSentence.toLowerCase().split(/\s+/);
let wordCount = {}; words.forEach(word => { wordCount[word] = (wordCount[word] || 0) + 1; });
let mostFrequentWord = ''; 
let highestCount = 0; for (let word in wordCount) { if (wordCount[word] > highestCount) { highestCount = wordCount[word]; mostFrequentWord = word; } } 
console.log(mostFrequentWord); 
console.log(highestCount);

let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numbers = income.match(/\d+/g).map(Number); 
let salaryPerMonth = numbers[0];
 let annualBonus = numbers[1]; 
 let coursesPerMonth = numbers[2];

 let totalAnnualIncome = salaryPerMonth * 12 + annualBonus + coursesPerMonth * 12; 
 console.log(totalAnnualIncome);





 