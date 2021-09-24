const quizData = [
  {
    key: "1",
    question:
      "Which mode of operation for a block cipher has the characteristic that each possible block of plaintext has a defined corresponding ciphertext value and vice versa?",
    options: [
      {
        answerText: "Hash function",
        description:
          "Hashing is a method of cryptography that converts any form of data into a unique string of text",
      },
      {
        answerText: "Footprinting",
        description:
          "Footprinting means gathering information about a target system which can be used to execute a successful cyber attack. To get this information, a hacker might use various methods with variant tools.",
      },
      {
        answerText: "Watermark",
        description:
          "Watermarking is the process of hiding digital information in a carrier signal; the hidden information should but does not need to contain a relation to the carrier signal.",
      },
      {
        answerText: "Electronic code book",
        description:
          "The Electronic Code Book (ECB) mode uses simple substitution, making it one of the easiest and fastest algorithms to implement. The input plaintext is broken into a number of blocks, and encrypted individually using the key.",
      },
    ],

    correct: "Electronic code book",
  },

  {
    key: "2",
    question:
      "In password protection, what is the name of a random string of data used to modify a password hash called?",
    options: [
      {
        answerText: "Sheep dip",
        description:
          "Sheep dipping refers to the analysis of suspect files, incoming messages, etc. for malware",
      },
      {
        answerText: "Salt",
        description:
          "SALT—or Secured Automated Lending Technology—provides loans to borrowers by using cryptocurrency as collateral. SALT lending provides personal and business loans to their members who put up blockchain assets as collateral.",
      },
      {
        answerText: "Bypass",
        description:
          "Bitcoin is the oldest and most popular cryptocurrency in the world. .",
      },
      {
        answerText: "Dongle",
        description:
          "A dongle is a small USB device that allows you to access the internet.",
      },
    ],

    correct: "Salt",
  },
  {
    key: "3",
    question:
      "Which cryptography approach is most often used by today's internet businesses and users?",
    options: [
      {
        answerText: "Public key infrastructure",
        description:
          "A public key infrastructure (PKI) is a set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates and manage public-key encryption",
      },
      {
        answerText: "Output feedback",
        description:
          "Output Feedback (OFB) differs from CFB in the way feedback is accomplished: CFB uses the previous ciphertext—",
      },
      {
        answerText: "Encrypting File System",
        description:
          "The Encrypted Files System enables individual users on the system to encrypt their data on J2 file system through their individual key stores. A key is associated to each user..",
      },
      {
        answerText: "Single sign-on",
        description:
          "Blockchain Single Sign On is a security bridge between a cloud user and a cloud service provider",
      },
    ],

    correct: "Public key infrastructure",
  },
  {
    key: "4",
    question:
      "What is the name of the issuer of public key infrastructure certificates?",
    options: [
      {
        answerText: "Public key infrastructure",
        description:
          "A public key infrastructure (PKI) is a set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates and manage public-key encryption",
      },
      {
        answerText: "Output feedback",
        description:
          "Output Feedback (OFB) differs from CFB in the way feedback is accomplished: CFB uses the previous ciphertext—",
      },
      {
        answerText: "Encrypting File System",
        description:
          "The Encrypted Files System enables individual users on the system to encrypt their data on J2 file system through their individual key stores. A key is associated to each user..",
      },
      {
        answerText: "Single sign-on",
        description:
          "Blockchain Single Sign On is a security bridge between a cloud user and a cloud service provider",
      },
    ],
    // options: {
    //   A: "Man in the middle",
    //   B: "Certificate authority",
    //   C: "Resource Access Control Facility",
    //   D: "Script kiddie",
    // },

    correct: "Certificate authority",
  },
  {
    key: "5",
    question:
      "Which of the following was not a final contender in NIST's assessment of Data Encryption Standard, or DES, replacements?",
    // options: {
    //   A: "MARS",
    //   B: "RC6",
    //   C: "Rijndael",
    //   D: "Blowfish",
    // },
    options: [
      {
        answerText: "Public key infrastructure",
        description:
          "A public key infrastructure (PKI) is a set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates and manage public-key encryption",
      },
      {
        answerText: "Output feedback",
        description:
          "Output Feedback (OFB) differs from CFB in the way feedback is accomplished: CFB uses the previous ciphertext—",
      },
      {
        answerText: "Encrypting File System",
        description:
          "The Encrypted Files System enables individual users on the system to encrypt their data on J2 file system through their individual key stores. A key is associated to each user..",
      },
      {
        answerText: "Single sign-on",
        description:
          "Blockchain Single Sign On is a security bridge between a cloud user and a cloud service provider",
      },
    ],

    correct: "Blowfish",
  },
];
export default quizData;
