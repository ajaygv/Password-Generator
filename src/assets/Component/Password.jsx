// import { useState } from 'react';

// export const Password = () => {
//   const AlphabetSmall = [];
//   for (let i = 97; i <= 122; i++) {
//     AlphabetSmall.push(String.fromCharCode(i));
//   }

//   const Alphabetcap = [];
//   for (let i = 65; i <= 90; i++) {
//     Alphabetcap.push(String.fromCharCode(i));
//   }

//   const symbol = [];
//   for (let i = 123; i <= 127; i++) {
//     symbol.push(String.fromCharCode(i));
//   }

//   const Num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   const [password, setpassword] = useState();

//   let final = [];
//   function generate() {
//     const input = document.getElementById('numberIn').value;
//     const numbox = document.getElementById('numbox').checked;
//     const symbox = document.getElementById('symbox').checked;
//     const uppbox = document.getElementById('uppbox').checked;
//     const lowbox = document.getElementById('lowbox').checked;

//     if (numbox) final = final.concat(Num);

//     if (symbox) final = final.concat(symbol);

//     if (uppbox) final = final.concat(Alphabetcap);

//     if (lowbox) final = final.concat(AlphabetSmall);

//     if (final.length === 0) {
//       alert('Please select at least one character type.');
//       return;
//     }

//     // Generate password
//     const finalPassword = Array.from(
//       { length },
//       () => final[Math.floor(Math.random() * final.length)]
//     ).join('');

//     setpassword(finalPassword);
//   }

//   return (
//     <>
//       <div>
//         <input
//           type="Number"
//           placeholder=" Enter length of character"
//           id="numberIn"
//         />

//         <input type="checkbox" id="numbox" />
//         <label>Include Number</label>

//         <input type="checkbox" id="symbox" />
//         <label>Include Symbols</label>

//         <input type="checkbox" id="uppbox" />
//         <label>Include Uppercase</label>

//         <input type="checkbox" id="lowbox" />
//         <label>Include Lowercase</label>

//         <button onClick={generate}>Genenrate</button>
//         <input type="text" value={password} placeholder="" />
//         <button>Copy</button>
//       </div>
//     </>
//   );
// };

import { useState } from 'react';

export const Password = () => {
  // Define arrays for different character types
  const AlphabetSmall = [];
  for (let i = 97; i <= 122; i++) {
    AlphabetSmall.push(String.fromCharCode(i));
  }

  const Alphabetcap = [];
  for (let i = 65; i <= 90; i++) {
    Alphabetcap.push(String.fromCharCode(i));
  }

  const symbol = [];
  for (let i = 33; i <= 47; i++) {
    symbol.push(String.fromCharCode(i)); // Adjusted to symbols in the correct range (33-47)
  }

  const Num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // React state for password, length, and checkboxes
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8); // Default password length
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);

  // Function to generate the password
  function generate() {
    let final = [];

    // Add selected character types to the final array
    if (includeNumbers) final = final.concat(Num);
    if (includeSymbols) final = final.concat(symbol);
    if (includeUppercase) final = final.concat(Alphabetcap);
    if (includeLowercase) final = final.concat(AlphabetSmall);

    // If no character type is selected, alert the user
    if (final.length === 0) {
      alert('Please select at least one character type.');
      return;
    }

    // Generate password using random selection
    const finalPassword = Array.from(
      { length },
      () => final[Math.floor(Math.random() * final.length)]
    ).join('');

    setPassword(finalPassword); // Set the generated password in state
  }

  return (
    <>
      <div>
        {/* Password length input */}
        <input
          type="number"
          placeholder="Enter length of character"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))} // Update length using state
        />

        {/* Checkboxes for different character types */}
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)} // Toggle number inclusion
        />
        <label>Include Number</label>

        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)} // Toggle symbol inclusion
        />
        <label>Include Symbols</label>

        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)} // Toggle uppercase inclusion
        />
        <label>Include Uppercase</label>

        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)} // Toggle lowercase inclusion
        />
        <label>Include Lowercase</label>

        {/* Button to generate the password */}
        <button onClick={generate}>Generate</button>

        {/* Display the generated password */}
        <input type="text" value={password} readOnly />

        {/* Copy button (currently not functional, but can be added later) */}
        <button>Copy</button>
      </div>
    </>
  );
};
