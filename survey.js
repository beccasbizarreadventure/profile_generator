const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is you prefered name? ', (answer) => {
  console.log(`Hi there ${answer}!`);

  rl.question('Which one of my bunnies is the best and why is it Laurel? ', (answer) => {
    if (answer.toLowerCase() !== "laurel") {
      console.log(`Wrong!! Laurel is the best little girl!`);
    } else {
      console.log(`You're so right. She's a perfect darling`);
    }

    rl.question('What is your favourite pokemon? ', (answer) => {
      const changeToCaps = (answer.charAt(0).toUpperCase() + answer.slice(1));
      console.log(`${changeToCaps} is so cool!! My favourite is Umbreon`);

      rl.question('Do you prefer pancakes or waffles? ', (answer) => {
        if (answer.toLowerCase() === "pancakes") {
          console.log(`Yum!! Great choice!`);
        } else if (answer.toLowerCase() === "waffles") {
          console.log(`So crispy and fluffy!!`);
        } else {
          console.log(`Oh? Not much of sweet breakfast person?`);
        }

        rl.question('What is your favourite movie genre? ', (answer) => {
          const changeToCaps = (answer.charAt(0).toUpperCase() + answer.slice(1));
          console.log(`${changeToCaps} movies are so facinating`);

          rl.question('How do you like your coffee? ', (answer) => {
            if (answer.toLowerCase() === "i don't like coffee") {
              console.log(`But it's the best!`);
            } else {
              const changeToCaps = (answer.charAt(0).toUpperCase() + answer.slice(1));
              console.log(`${changeToCaps} sounds great!`);
            }

            console.log('\n');
            console.log("Thank you for participating! Goodbye!");

            rl.close();
          });
        });
      });
    });
  });
});