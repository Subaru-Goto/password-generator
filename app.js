// Random selections for password lists
const characters = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o", "p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
 "~","`","!","@","#","$","%","^","&","*","(",")","_",
 "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

class Password{
  constructor() {
    this.$leftBox = document.getElementById("left-box")
    this.$rightBox = document.getElementById("right-box")
    this.addEventListners();
  }

  // Trigger function
  addEventListners() {
    document.body.addEventListener("click", event => {
      this._generatePassword(event);
      this._copyPasswords(event);
    });
  };

// Main function
_generatePassword(event) {
  const idName = event.target.id;
  if (idName === "generate") {
    const firstOptions = this._getMultipleRandom(characters, 15);
    const secondOptions = this._getMultipleRandom(characters, 15);
    this.$leftBox.innerHTML = firstOptions;
    this.$rightBox.innerHTML = secondOptions;
  }
  };
  // Select random elements from am array
  _getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num).join('');
  }

  // Copy generated passwprds
  _copyPasswords(event){
    const classes = event.target.className;
    if (classes === "display-box") {
      let textToCopy = event.target.innerHTML;
      this._copyContent(textToCopy);
        }
      };
  // By clicking the displayed password, copy them
  async _copyContent(text) {
        try{
          await navigator.clipboard.writeText(text);
          alert("Password is copied to clipboard!"); 
        } catch(err) {
          console.error("Failed to copy", err.status);
        }
      };
}

new Password();
