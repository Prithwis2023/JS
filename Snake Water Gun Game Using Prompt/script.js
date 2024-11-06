// Use Js to create a game of snake water & gun. The game should ask user to enter S (Snake), W (Water), G (Gun). The computer should be able to generate randomly generate S (Snake), W (Water), G (Gun) and declare win or loose using alert. Use confirm and prompt wherever required.

const Snake_Water_Gun = () => {
  let Choice = prompt("Enter S (Snake), W (Water), or G (Gun):").toUpperCase();

  const choices = ["S", "W", "G"];
  
  if (!choices.includes(Choice)) {
    alert("Invalid choice! Please enter 'S', 'W', or 'G'.");
    return Snake_Water_Gun();
  }

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine the result
  const getResult = (user, computer) => {
    if (user === computer) return "It's a tie!";
    if (
      (user === "S" && computer === "W") ||
      (user === "W" && computer === "G") ||
      (user === "G" && computer === "S")
    ) return "You win!";
    return "You lose!";
  };

  const result = getResult(Choice, computerChoice);
  alert(`Your choice: ${Choice}\nComputer's choice: ${computerChoice}\nResult: ${result}`);
  document.write("\n" , result);
  confirm("Do you want to play again?") ? Snake_Water_Gun() : alert("Thank you for playing!");
};

Snake_Water_Gun();

