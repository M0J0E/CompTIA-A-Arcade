/* ===================================================== */
/* COMPTIA A+ ARCADE - CAMPAIGN BATTLE SYSTEM            */
/* ===================================================== */


/* ===================================================== */
/* BATTLE STATE                                          */
/* ===================================================== */

let playerHP = 100;
let playerMaxHP = 100;

let enemyHP = 100;
let enemyMaxHP = 100;

let questionsAnswered = 0;

let currentStage = 0;

let isBoss = false;
let isFinalEnemy = false;
let isFinalBoss = false;

let battleFinished = false;
let campaignComplete = false;


/* ===================================================== */
/* CAMPAIGN SETTINGS                                     */
/* ===================================================== */

const BOSS_INTERVAL = 10;


/* ===================================================== */
/* GET TOTAL PLAYABLE QUESTIONS                          */
/* ===================================================== */

function getTotalCampaignQuestions() {

  if (
    typeof campaignQuestions !== "undefined" &&
    Array.isArray(campaignQuestions) &&
    campaignQuestions.length > 0
  ) {
    return campaignQuestions.length;
  }

  if (
    typeof questions !== "undefined" &&
    Array.isArray(questions)
  ) {

    return questions.filter(question => {

      return (
        question.pbq !== true &&

        Array.isArray(question.answers) &&

        question.answers.length > 0 &&

        question.correct !== null &&

        question.correct !== undefined &&

        !(
          question.multiple === true &&
          Array.isArray(question.correct) &&
          question.correct.length < 2
        )
      );

    }).length;
  }

  return 0;
}


/* ===================================================== */
/* NORMAL ENEMIES                                        */
/* ===================================================== */

const normalEnemies = [

  {
    name: "Malware Bot",
    image: "assets/enemy1.png",
    hp: 100
  },

  {
    name: "Firewall Beast",
    image: "assets/enemy2.png",
    hp: 110
  },

  {
    name: "Packet Goblin",
    image: "assets/enemy3.png",
    hp: 120
  },

  {
    name: "Virus Slime",
    image: "assets/enemy4.png",
    hp: 130
  },

  {
    name: "Data Imp",
    image: "assets/enemy5.png",
    hp: 140
  },

  {
    name: "Cable Crawler",
    image: "assets/enemy6.png",
    hp: 150
  },

  {
    name: "RAM Wraith",
    image: "assets/enemy7.png",
    hp: 160
  },

  {
    name: "Port Phantom",
    image: "assets/enemy8.png",
    hp: 170
  },

  {
    name: "BIOS Bug",
    image: "assets/enemy9.png",
    hp: 180
  },

  {
    name: "Cloud Creep",
    image: "assets/enemy10.png",
    hp: 190
  },

  {
    name: "Cache Creeper",
    image: "assets/enemy11.png",
    hp: 200
  },

  {
    name: "Router Rogue",
    image: "assets/enemy12.png",
    hp: 210
  },

  {
    name: "Switch Spider",
    image: "assets/enemy13.png",
    hp: 220
  },

  {
    name: "Signal Specter",
    image: "assets/enemy14.png",
    hp: 230
  },

  {
    name: "Storage Stalker",
    image: "assets/enemy15.png",
    hp: 240
  },

  {
    name: "Thermal Troll",
    image: "assets/enemy16.png",
    hp: 250
  },

  {
    name: "Printer Poltergeist",
    image: "assets/enemy17.png",
    hp: 260
  },

  {
    name: "Voltage Viper",
    image: "assets/enemy18.png",
    hp: 270
  },

  {
    name: "DNS Demon",
    image: "assets/enemy19.png",
    hp: 280
  },

  {
    name: "DHCP Phantom",
    image: "assets/enemy20.png",
    hp: 290
  },

  {
    name: "Fiber Fiend",
    image: "assets/enemy21.png",
    hp: 300
  },

  {
    name: "Wireless Wraith",
    image: "assets/enemy22.png",
    hp: 310
  },

  {
    name: "Virtual Vandal",
    image: "assets/enemy23.png",
    hp: 320
  },

  {
    name: "Hypervisor Horror",
    image: "assets/enemy24.png",
    hp: 330
  },

  {
    name: "RAID Raider",
    image: "assets/enemy25.png",
    hp: 340
  },

  {
    name: "Socket Stalker",
    image: "assets/enemy26.png",
    hp: 350
  },

  {
    name: "Power Parasite",
    image: "assets/enemy27.png",
    hp: 360
  },

  {
    name: "Display Drake",
    image: "assets/enemy28.png",
    hp: 370
  },

  {
    name: "Peripheral Phantom",
    image: "assets/enemy29.png",
    hp: 380
  },

  {
    name: "Subnet Shade",
    image: "assets/enemy30.png",
    hp: 390
  },

  {
    name: "Protocol Predator",
    image: "assets/enemy31.png",
    hp: 400
  },

  {
    name: "Encryption Entity",
    image: "assets/enemy32.png",
    hp: 410
  },

  {
    name: "NFC Nightmare",
    image: "assets/enemy33.png",
    hp: 420
  },

  {
    name: "Bluetooth Brute",
    image: "assets/enemy34.png",
    hp: 430
  },

  {
    name: "Cloud Corruptor",
    image: "assets/enemy35.png",
    hp: 440
  },

  {
    name: "Latency Lurker",
    image: "assets/enemy36.png",
    hp: 450
  },

  {
    name: "Firmware Fiend",
    image: "assets/enemy37.png",
    hp: 460
  },

  {
    name: "Thermal Titanling",
    image: "assets/enemy38.png",
    hp: 470
  },

  {
    name: "Storage Shade",
    image: "assets/enemy39.png",
    hp: 480
  },

  {
    name: "Network Nemesis",
    image: "assets/enemy40.png",
    hp: 490
  },

  {
    name: "Memory Marauder",
    image: "assets/enemy41.png",
    hp: 500
  },

  {
    name: "Boot Beast",
    image: "assets/enemy42.png",
    hp: 510
  },

  {
    name: "Signal Serpent",
    image: "assets/enemy43.png",
    hp: 520
  },

  {
    name: "Cloud Crusher",
    image: "assets/enemy44.png",
    hp: 530
  },

  {
    name: "System Specter",
    image: "assets/enemy45.png",
    hp: 540
  },

  {
    name: "Core Corruptor",
    image: "assets/enemy46.png",
    hp: 550
  }

];


/* ===================================================== */
/* BOSSES                                                */
/* ===================================================== */

const bosses = [

  { name: "Malware Overlord", image: "assets/boss1.png", hp: 250 },
  { name: "Network Titan", image: "assets/boss2.png", hp: 275 },
  { name: "Cyber Dragon", image: "assets/boss3.png", hp: 300 },
  { name: "RAID Colossus", image: "assets/boss4.png", hp: 325 },
  { name: "Cloud Emperor", image: "assets/boss5.png", hp: 350 },
  { name: "Thermal King", image: "assets/boss6.png", hp: 375 },
  { name: "Packet Warlord", image: "assets/boss7.png", hp: 400 },
  { name: "BIOS Behemoth", image: "assets/boss8.png", hp: 425 },
  { name: "Port Reaper", image: "assets/boss9.png", hp: 450 },
  { name: "Firewall Sovereign", image: "assets/boss10.png", hp: 475 },

  { name: "Storage Leviathan", image: "assets/boss11.png", hp: 500 },
  { name: "Wireless Overlord", image: "assets/boss12.png", hp: 525 },
  { name: "Virtualization King", image: "assets/boss13.png", hp: 550 },
  { name: "Subnet Tyrant", image: "assets/boss14.png", hp: 575 },
  { name: "Printer Emperor", image: "assets/boss15.png", hp: 600 },
  { name: "Voltage Monarch", image: "assets/boss16.png", hp: 625 },
  { name: "DNS Destroyer", image: "assets/boss17.png", hp: 650 },
  { name: "DHCP Devourer", image: "assets/boss18.png", hp: 675 },
  { name: "Fiber Overlord", image: "assets/boss19.png", hp: 700 },
  { name: "Signal Emperor", image: "assets/boss20.png", hp: 725 },

  { name: "Hypervisor Titan", image: "assets/boss21.png", hp: 750 },
  { name: "RAID Emperor", image: "assets/boss22.png", hp: 775 },
  { name: "Socket Tyrant", image: "assets/boss23.png", hp: 800 },
  { name: "Power Overlord", image: "assets/boss24.png", hp: 825 },
  { name: "Display Colossus", image: "assets/boss25.png", hp: 850 },
  { name: "Peripheral King", image: "assets/boss26.png", hp: 875 },
  { name: "Protocol Emperor", image: "assets/boss27.png", hp: 900 },
  { name: "Encryption Titan", image: "assets/boss28.png", hp: 925 },
  { name: "NFC Warlord", image: "assets/boss29.png", hp: 950 },
  { name: "Bluetooth Overlord", image: "assets/boss30.png", hp: 975 },

  { name: "Cloud Leviathan", image: "assets/boss31.png", hp: 1000 },
  { name: "Latency Tyrant", image: "assets/boss32.png", hp: 1025 },
  { name: "Firmware Emperor", image: "assets/boss33.png", hp: 1050 },
  { name: "Thermal Colossus", image: "assets/boss34.png", hp: 1075 },
  { name: "Storage Monarch", image: "assets/boss35.png", hp: 1100 },
  { name: "Network Overlord", image: "assets/boss36.png", hp: 1125 },
  { name: "Memory Emperor", image: "assets/boss37.png", hp: 1150 },
  { name: "Boot Tyrant", image: "assets/boss38.png", hp: 1175 },
  { name: "Signal Overlord", image: "assets/boss39.png", hp: 1200 },
  { name: "Cloud Devourer", image: "assets/boss40.png", hp: 1225 },

  { name: "System Emperor", image: "assets/boss41.png", hp: 1250 },
  { name: "Core Titan", image: "assets/boss42.png", hp: 1275 },
  { name: "Protocol Destroyer", image: "assets/boss43.png", hp: 1300 },
  { name: "Network Sovereign", image: "assets/boss44.png", hp: 1325 },
  { name: "Cyber Emperor", image: "assets/boss45.png", hp: 1350 },
  { name: "A+ Guardian", image: "assets/boss46.png", hp: 1400 }

];


/* ===================================================== */
/* FINAL ENCOUNTERS                                      */
/* ===================================================== */

const finalEnemy = {
  name: "Exam Sentinel",
  image: "assets/final-enemy.png",
  hp: 650
};


const finalBoss = {
  name: "CompTIA Grandmaster",
  image: "assets/final-boss.png",
  hp: 1600
};


/* ===================================================== */
/* SETUP                                                 */
/* ===================================================== */

function setupBattle() {

  playerHP = 100;
  playerMaxHP = 100;

  questionsAnswered = 0;

  currentStage = 0;

  isBoss = false;
  isFinalEnemy = false;
  isFinalBoss = false;

  battleFinished = false;
  campaignComplete = false;

  updateCampaignCounter();

  loadEnemyForCurrentQuestion();

  updateBattleUI();
}


/* ===================================================== */
/* LOAD ENEMY                                            */
/* ===================================================== */

function loadEnemyForCurrentQuestion() {

  battleFinished = false;

  const totalQuestions =
    getTotalCampaignQuestions();

  if (totalQuestions <= 0) {
    return;
  }


  const questionNumber =
    questionsAnswered + 1;


  /* FINAL GUARDIAN */

  if (
    totalQuestions >= 2 &&
    questionNumber === totalQuestions - 1
  ) {

    isBoss = false;
    isFinalEnemy = true;
    isFinalBoss = false;

    applyEnemy(
      finalEnemy,
      finalEnemy.name
    );

    const banner =
      document.getElementById(
        "bossBanner"
      );

    if (banner) {

      banner.style.display =
        "block";

      banner.innerText =
        "⚔️ FINAL GUARDIAN ⚔️";
    }

    return;
  }


  /* FINAL BOSS */

  if (
    questionNumber ===
    totalQuestions
  ) {

    isBoss = true;
    isFinalEnemy = false;
    isFinalBoss = true;

    applyEnemy(
      finalBoss,
      "👑 " + finalBoss.name
    );

    const banner =
      document.getElementById(
        "bossBanner"
      );

    if (banner) {

      banner.style.display =
        "block";

      banner.innerText =
        "👑 FINAL BOSS 👑";
    }

    return;
  }


  /* NORMAL STAGES */

  isFinalEnemy = false;
  isFinalBoss = false;

  const stageIndex =
    Math.floor(
      (questionNumber - 1) /
      BOSS_INTERVAL
    );

  currentStage =
    stageIndex;

  isBoss =
    questionNumber %
    BOSS_INTERVAL ===
    0;


  if (isBoss) {

    const bossIndex =
      Math.min(
        stageIndex,
        bosses.length - 1
      );

    const boss =
      bosses[bossIndex];

    applyEnemy(
      boss,
      "👑 " + boss.name
    );

    const banner =
      document.getElementById(
        "bossBanner"
      );

    if (banner) {

      banner.style.display =
        "block";

      banner.innerText =
        "👑 BOSS BATTLE 👑";
    }

  } else {

    const enemyIndex =
      Math.min(
        stageIndex,
        normalEnemies.length - 1
      );

    const enemy =
      normalEnemies[enemyIndex];

    applyEnemy(
      enemy,
      enemy.name +
      " Lv. " +
      (stageIndex + 1)
    );

    const banner =
      document.getElementById(
        "bossBanner"
      );

    if (banner) {
      banner.style.display =
        "none";
    }
  }
}


/* ===================================================== */
/* APPLY ENEMY                                           */
/* ===================================================== */

function applyEnemy(
  enemyData,
  displayName
) {

  enemyMaxHP =
    enemyData.hp;

  enemyHP =
    enemyMaxHP;


  const enemyName =
    document.getElementById(
      "enemyName"
    );

  if (enemyName) {

    enemyName.innerText =
      displayName;
  }


  const image =
    document.querySelector(
      "#enemyCharacter img"
    );

  if (image) {

    image.onerror =
      function () {

        this.onerror =
          null;

        this.src =
          "assets/enemy.png";
      };

    image.src =
      enemyData.image;
  }


  updateBattleUI();
}


/* ===================================================== */
/* CORRECT                                               */
/* ===================================================== */

function correctBattleAnswer() {

  if (
    battleFinished ||
    campaignComplete
  ) {
    return;
  }


  const damage =
    calculatePlayerDamage();

  enemyHP -=
    damage;

  if (enemyHP < 0) {
    enemyHP = 0;
  }


  animatePlayerAttack();

  showDamage(
    "-" + damage,
    "enemy"
  );

  updateBattleUI();

  finishBattleQuestion(
    true
  );
}


/* ===================================================== */
/* WRONG                                                 */
/* ===================================================== */

function wrongBattleAnswer() {

  if (
    battleFinished ||
    campaignComplete
  ) {
    return;
  }


  const damage =
    calculateEnemyDamage();

  playerHP -=
    damage;

  if (playerHP < 0) {
    playerHP = 0;
  }


  animateEnemyAttack();

  showDamage(
    "-" + damage,
    "player"
  );

  updateBattleUI();


  if (playerHP <= 0) {

    battleFinished =
      true;

    setTimeout(
      battleGameOver,
      700
    );

    return;
  }


  finishBattleQuestion(
    false
  );
}


/* ===================================================== */
/* DAMAGE VALUES                                         */
/* ===================================================== */

function calculatePlayerDamage() {

  if (isFinalBoss) {
    return 100;
  }

  if (isFinalEnemy) {
    return 90;
  }

  if (isBoss) {
    return 75;
  }

  return 55;
}


function calculateEnemyDamage() {

  if (isFinalBoss) {
    return 40;
  }

  if (isFinalEnemy) {
    return 35;
  }

  if (isBoss) {
    return 30;
  }

  return 20;
}


/* ===================================================== */
/* FINISH QUESTION                                       */
/* ===================================================== */

function finishBattleQuestion(
  answeredCorrectly
) {

  battleFinished =
    true;

  questionsAnswered++;


  if (answeredCorrectly) {

    playerHP +=
      5;

    if (
      playerHP >
      playerMaxHP
    ) {
      playerHP =
        playerMaxHP;
    }
  }


  updateBattleUI();

  updateCampaignCounter();


  if (
    typeof updateCampaignDisplay ===
    "function"
  ) {
    updateCampaignDisplay();
  }


  const totalQuestions =
    getTotalCampaignQuestions();


  if (
    questionsAnswered >=
    totalQuestions
  ) {

    setTimeout(
      campaignVictory,
      1400
    );

    return;
  }


  setTimeout(
    () => {

      loadEnemyForCurrentQuestion();

      loadNextCampaignQuestion();

    },
    1600
  );
}


/* ===================================================== */
/* NEXT QUESTION                                         */
/* ===================================================== */

function loadNextCampaignQuestion() {

  if (
    typeof loadCampaignQuestion ===
    "function"
  ) {

    loadCampaignQuestion(
      questionsAnswered
    );

    return;
  }


  if (
    typeof loadQuestion ===
    "function"
  ) {
    loadQuestion();
  }
}


/* ===================================================== */
/* COUNTER                                               */
/* ===================================================== */

function updateCampaignCounter() {

  const counter =
    document.getElementById(
      "enemyCount"
    );

  if (!counter) {
    return;
  }


  const totalQuestions =
    getTotalCampaignQuestions();


  if (
    totalQuestions <= 0
  ) {

    counter.innerText =
      "0/0";

    return;
  }


  const currentQuestion =
    Math.min(
      questionsAnswered + 1,
      totalQuestions
    );


  counter.innerText =
    currentQuestion +
    "/" +
    totalQuestions;
}


/* ===================================================== */
/* UI                                                    */
/* ===================================================== */

function updateBattleUI() {

  const playerPercent =
    (
      playerHP /
      playerMaxHP
    ) * 100;


  const enemyPercent =
    (
      enemyHP /
      enemyMaxHP
    ) * 100;


  const playerBar =
    document.getElementById(
      "playerHealthBar"
    );

  const enemyBar =
    document.getElementById(
      "enemyHealthBar"
    );


  if (playerBar) {

    playerBar.style.width =
      Math.max(
        playerPercent,
        0
      ) + "%";
  }


  if (enemyBar) {

    enemyBar.style.width =
      Math.max(
        enemyPercent,
        0
      ) + "%";
  }


  const playerText =
    document.getElementById(
      "playerHPText"
    );

  const enemyText =
    document.getElementById(
      "enemyHPText"
    );


  if (playerText) {

    playerText.innerText =
      playerHP +
      " / " +
      playerMaxHP +
      " HP";
  }


  if (enemyText) {

    enemyText.innerText =
      enemyHP +
      " / " +
      enemyMaxHP +
      " HP";
  }
}


/* ===================================================== */
/* ANIMATIONS                                            */
/* ===================================================== */

function animatePlayerAttack() {

  const player =
    document.getElementById(
      "playerCharacter"
    );

  if (!player) {
    return;
  }


  player.classList.add(
    "player-attack"
  );


  setTimeout(
    () => {

      player.classList.remove(
        "player-attack"
      );

    },
    400
  );
}


function animateEnemyAttack() {

  const enemy =
    document.getElementById(
      "enemyCharacter"
    );

  if (!enemy) {
    return;
  }


  enemy.classList.add(
    "enemy-attack"
  );


  setTimeout(
    () => {

      enemy.classList.remove(
        "enemy-attack"
      );

    },
    400
  );
}


/* ===================================================== */
/* DAMAGE TEXT                                           */
/* ===================================================== */

function showDamage(
  amount,
  target
) {

  const targetId =
    target === "enemy"
      ? "enemyCharacter"
      : "playerCharacter";


  const targetElement =
    document.getElementById(
      targetId
    );


  if (!targetElement) {
    return;
  }


  const damageText =
    document.createElement(
      "div"
    );


  damageText.className =
    "damage-number";

  damageText.innerText =
    amount;


  targetElement.appendChild(
    damageText
  );


  setTimeout(
    () => {

      damageText.remove();

    },
    800
  );
}


/* ===================================================== */
/* GAME OVER                                             */
/* ===================================================== */

function battleGameOver() {

  questionLocked =
    true;


  const totalQuestions =
    getTotalCampaignQuestions();


  const banner =
    document.getElementById(
      "bossBanner"
    );

  if (banner) {
    banner.style.display =
      "none";
  }


  document.getElementById(
    "question"
  ).innerText =
    "💀 You Were Defeated";


  document.getElementById(
    "questionInstructions"
  ).innerText =
    "";


  document.getElementById(
    "result"
  ).innerHTML =
    "You reached campaign question " +

    Math.min(
      questionsAnswered + 1,
      totalQuestions
    ) +

    " of " +
    totalQuestions +

    ".<br><br>" +

    "Final XP: " +
    xp;


  document.getElementById(
    "answersContainer"
  ).innerHTML =
    "";


  document.getElementById(
    "submitAnswerButton"
  ).style.display =
    "none";
}


/* ===================================================== */
/* VICTORY                                               */
/* ===================================================== */

function campaignVictory() {

  campaignComplete =
    true;

  battleFinished =
    true;

  questionLocked =
    true;


  const totalQuestions =
    getTotalCampaignQuestions();


  const banner =
    document.getElementById(
      "bossBanner"
    );


  if (banner) {

    banner.style.display =
      "block";

    banner.innerText =
      "🏆 CAMPAIGN COMPLETE 🏆";
  }


  document.getElementById(
    "question"
  ).innerText =
    "🎓 CompTIA A+ Campaign Complete!";


  document.getElementById(
    "questionInstructions"
  ).innerText =
    "";


  document.getElementById(
    "result"
  ).innerHTML =
    "You completed all " +

    totalQuestions +

    " playable campaign questions." +

    "<br><br>" +

    "Final XP: " +
    xp;


  document.getElementById(
    "answersContainer"
  ).innerHTML =
    "";


  document.getElementById(
    "submitAnswerButton"
  ).style.display =
    "none";


  enemyHP = 0;

  updateBattleUI();
}
