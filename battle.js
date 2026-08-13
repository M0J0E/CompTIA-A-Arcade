/* ===================================================== */
/* COMPTIA A+ ARCADE - FULL CAMPAIGN BATTLE SYSTEM       */
/* ===================================================== */


/* ===================================================== */
/* PLAYER / BATTLE STATE                                 */
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

const TOTAL_CAMPAIGN_QUESTIONS = 462;

const BOSS_INTERVAL = 10;


/* ===================================================== */
/* NORMAL ENEMIES                                        */
/* ===================================================== */

/*
  Add your actual images to assets/ using these names.

  You do NOT need all 46 images immediately.

  If an image is missing, the code will fall back to
  assets/enemy.PNG.
*/

const normalEnemies = [

  {
    name: "Malware Bot",
    image: "assets/enemy1.PNG",
    hp: 100
  },

  {
    name: "Firewall Beast",
    image: "assets/enemy2.PNG",
    hp: 110
  },

  {
    name: "Packet Goblin",
    image: "assets/enemy3.PNG",
    hp: 120
  },

  {
    name: "Virus Slime",
    image: "assets/enemy4.PNG",
    hp: 130
  },

  {
    name: "Data Imp",
    image: "assets/enemy5.PNG",
    hp: 140
  },

  {
    name: "Cable Crawler",
    image: "assets/enemy6.PNG",
    hp: 150
  },

  {
    name: "RAM Wraith",
    image: "assets/enemy7.PNG",
    hp: 160
  },

  {
    name: "Port Phantom",
    image: "assets/enemy8.PNG",
    hp: 170
  },

  {
    name: "BIOS Bug",
    image: "assets/enemy9.PNG",
    hp: 180
  },

  {
    name: "Cloud Creep",
    image: "assets/enemy10.PNG",
    hp: 190
  },

  {
    name: "Cache Creeper",
    image: "assets/enemy11.PNG",
    hp: 200
  },

  {
    name: "Router Rogue",
    image: "assets/enemy12.PNG",
    hp: 210
  },

  {
    name: "Switch Spider",
    image: "assets/enemy13.PNG",
    hp: 220
  },

  {
    name: "Signal Specter",
    image: "assets/enemy14.PNG",
    hp: 230
  },

  {
    name: "Storage Stalker",
    image: "assets/enemy15.PNG",
    hp: 240
  },

  {
    name: "Thermal Troll",
    image: "assets/enemy16.PNG",
    hp: 250
  },

  {
    name: "Printer Poltergeist",
    image: "assets/enemy17.PNG",
    hp: 260
  },

  {
    name: "Voltage Viper",
    image: "assets/enemy18.PNG",
    hp: 270
  },

  {
    name: "DNS Demon",
    image: "assets/enemy19.PNG",
    hp: 280
  },

  {
    name: "DHCP Phantom",
    image: "assets/enemy20.PNG",
    hp: 290
  },

  {
    name: "Fiber Fiend",
    image: "assets/enemy21.PNG",
    hp: 300
  },

  {
    name: "Wireless Wraith",
    image: "assets/enemy22.PNG",
    hp: 310
  },

  {
    name: "Virtual Vandal",
    image: "assets/enemy23.PNG",
    hp: 320
  },

  {
    name: "Hypervisor Horror",
    image: "assets/enemy24.PNG",
    hp: 330
  },

  {
    name: "RAID Raider",
    image: "assets/enemy25.PNG",
    hp: 340
  },

  {
    name: "Socket Stalker",
    image: "assets/enemy26.PNG",
    hp: 350
  },

  {
    name: "Power Parasite",
    image: "assets/enemy27.PNG",
    hp: 360
  },

  {
    name: "Display Drake",
    image: "assets/enemy28.PNG",
    hp: 370
  },

  {
    name: "Peripheral Phantom",
    image: "assets/enemy29.PNG",
    hp: 380
  },

  {
    name: "Subnet Shade",
    image: "assets/enemy30.PNG",
    hp: 390
  },

  {
    name: "Protocol Predator",
    image: "assets/enemy31.PNG",
    hp: 400
  },

  {
    name: "Encryption Entity",
    image: "assets/enemy32.PNG",
    hp: 410
  },

  {
    name: "NFC Nightmare",
    image: "assets/enemy33.PNG",
    hp: 420
  },

  {
    name: "Bluetooth Brute",
    image: "assets/enemy34.PNG",
    hp: 430
  },

  {
    name: "Cloud Corruptor",
    image: "assets/enemy35.PNG",
    hp: 440
  },

  {
    name: "Latency Lurker",
    image: "assets/enemy36.PNG",
    hp: 450
  },

  {
    name: "Firmware Fiend",
    image: "assets/enemy37.PNG",
    hp: 460
  },

  {
    name: "Thermal Titanling",
    image: "assets/enemy38.PNG",
    hp: 470
  },

  {
    name: "Storage Shade",
    image: "assets/enemy39.PNG",
    hp: 480
  },

  {
    name: "Network Nemesis",
    image: "assets/enemy40.PNG",
    hp: 490
  },

  {
    name: "Memory Marauder",
    image: "assets/enemy41.PNG",
    hp: 500
  },

  {
    name: "Boot Beast",
    image: "assets/enemy42.PNG",
    hp: 510
  },

  {
    name: "Signal Serpent",
    image: "assets/enemy43.PNG",
    hp: 520
  },

  {
    name: "Cloud Crusher",
    image: "assets/enemy44.PNG",
    hp: 530
  },

  {
    name: "System Specter",
    image: "assets/enemy45.PNG",
    hp: 540
  },

  {
    name: "Core Corruptor",
    image: "assets/enemy46.PNG",
    hp: 550
  }

];


/* ===================================================== */
/* BOSSES                                                */
/* ===================================================== */

/*
  Same idea here.

  Missing boss art falls back to assets/enemy.PNG.
*/

const bosses = [

  {
    name: "Malware Overlord",
    image: "assets/boss1.PNG",
    hp: 250
  },

  {
    name: "Network Titan",
    image: "assets/boss2.PNG",
    hp: 275
  },

  {
    name: "Cyber Dragon",
    image: "assets/boss3.PNG",
    hp: 300
  },

  {
    name: "RAID Colossus",
    image: "assets/boss4.PNG",
    hp: 325
  },

  {
    name: "Cloud Emperor",
    image: "assets/boss5.PNG",
    hp: 350
  },

  {
    name: "Thermal King",
    image: "assets/boss6.PNG",
    hp: 375
  },

  {
    name: "Packet Warlord",
    image: "assets/boss7.PNG",
    hp: 400
  },

  {
    name: "BIOS Behemoth",
    image: "assets/boss8.PNG",
    hp: 425
  },

  {
    name: "Port Reaper",
    image: "assets/boss9.PNG",
    hp: 450
  },

  {
    name: "Firewall Sovereign",
    image: "assets/boss10.PNG",
    hp: 475
  },

  {
    name: "Storage Leviathan",
    image: "assets/boss11.PNG",
    hp: 500
  },

  {
    name: "Wireless Overlord",
    image: "assets/boss12.PNG",
    hp: 525
  },

  {
    name: "Virtualization King",
    image: "assets/boss13.PNG",
    hp: 550
  },

  {
    name: "Subnet Tyrant",
    image: "assets/boss14.PNG",
    hp: 575
  },

  {
    name: "Printer Emperor",
    image: "assets/boss15.PNG",
    hp: 600
  },

  {
    name: "Voltage Monarch",
    image: "assets/boss16.PNG",
    hp: 625
  },

  {
    name: "DNS Destroyer",
    image: "assets/boss17.PNG",
    hp: 650
  },

  {
    name: "DHCP Devourer",
    image: "assets/boss18.PNG",
    hp: 675
  },

  {
    name: "Fiber Overlord",
    image: "assets/boss19.PNG",
    hp: 700
  },

  {
    name: "Signal Emperor",
    image: "assets/boss20.PNG",
    hp: 725
  },

  {
    name: "Hypervisor Titan",
    image: "assets/boss21.PNG",
    hp: 750
  },

  {
    name: "RAID Emperor",
    image: "assets/boss22.PNG",
    hp: 775
  },

  {
    name: "Socket Tyrant",
    image: "assets/boss23.PNG",
    hp: 800
  },

  {
    name: "Power Overlord",
    image: "assets/boss24.PNG",
    hp: 825
  },

  {
    name: "Display Colossus",
    image: "assets/boss25.PNG",
    hp: 850
  },

  {
    name: "Peripheral King",
    image: "assets/boss26.PNG",
    hp: 875
  },

  {
    name: "Protocol Emperor",
    image: "assets/boss27.PNG",
    hp: 900
  },

  {
    name: "Encryption Titan",
    image: "assets/boss28.PNG",
    hp: 925
  },

  {
    name: "NFC Warlord",
    image: "assets/boss29.PNG",
    hp: 950
  },

  {
    name: "Bluetooth Overlord",
    image: "assets/boss30.PNG",
    hp: 975
  },

  {
    name: "Cloud Leviathan",
    image: "assets/boss31.PNG",
    hp: 1000
  },

  {
    name: "Latency Tyrant",
    image: "assets/boss32.PNG",
    hp: 1025
  },

  {
    name: "Firmware Emperor",
    image: "assets/boss33.PNG",
    hp: 1050
  },

  {
    name: "Thermal Colossus",
    image: "assets/boss34.PNG",
    hp: 1075
  },

  {
    name: "Storage Monarch",
    image: "assets/boss35.PNG",
    hp: 1100
  },

  {
    name: "Network Overlord",
    image: "assets/boss36.PNG",
    hp: 1125
  },

  {
    name: "Memory Emperor",
    image: "assets/boss37.PNG",
    hp: 1150
  },

  {
    name: "Boot Tyrant",
    image: "assets/boss38.PNG",
    hp: 1175
  },

  {
    name: "Signal Overlord",
    image: "assets/boss39.PNG",
    hp: 1200
  },

  {
    name: "Cloud Devourer",
    image: "assets/boss40.PNG",
    hp: 1225
  },

  {
    name: "System Emperor",
    image: "assets/boss41.PNG",
    hp: 1250
  },

  {
    name: "Core Titan",
    image: "assets/boss42.PNG",
    hp: 1275
  },

  {
    name: "Protocol Destroyer",
    image: "assets/boss43.PNG",
    hp: 1300
  },

  {
    name: "Network Sovereign",
    image: "assets/boss44.PNG",
    hp: 1325
  },

  {
    name: "Cyber Emperor",
    image: "assets/boss45.PNG",
    hp: 1350
  },

  {
    name: "A+ Guardian",
    image: "assets/boss46.PNG",
    hp: 1400
  }

];


/* ===================================================== */
/* FINAL ENCOUNTERS                                      */
/* ===================================================== */

const finalEnemy = {

  name: "Exam Sentinel",

  image:
    "assets/final-enemy.PNG",

  hp:
    650

};


const finalBoss = {

  name:
    "CompTIA Grandmaster",

  image:
    "assets/final-boss.PNG",

  hp:
    1600

};


/* ===================================================== */
/* SETUP BATTLE                                          */
/* ===================================================== */

function setupBattle() {

  playerHP =
    100;

  playerMaxHP =
    100;


  questionsAnswered =
    0;


  currentStage =
    0;


  isBoss =
    false;


  isFinalEnemy =
    false;


  isFinalBoss =
    false;


  battleFinished =
    false;


  campaignComplete =
    false;


  updateCampaignCounter();


  loadEnemyForCurrentQuestion();


  updateBattleUI();

}


/* ===================================================== */
/* LOAD CORRECT ENEMY FOR NEXT QUESTION                  */
/* ===================================================== */

function loadEnemyForCurrentQuestion() {

  battleFinished =
    false;


  const questionNumber =
    questionsAnswered + 1;


  /*
    =====================================
    QUESTION 461
    =====================================
  */

  if (
    questionNumber === 461
  ) {

    isBoss =
      false;

    isFinalEnemy =
      true;

    isFinalBoss =
      false;


    applyEnemy(
      finalEnemy,
      "⚔️ FINAL GUARDIAN"
    );


    document.getElementById(
      "bossBanner"
    ).style.display =
      "block";


    document.getElementById(
      "bossBanner"
    ).innerText =
      "⚔️ FINAL GUARDIAN ⚔️";


    return;

  }


  /*
    =====================================
    QUESTION 462
    =====================================
  */

  if (
    questionNumber === 462
  ) {

    isBoss =
      true;

    isFinalEnemy =
      false;

    isFinalBoss =
      true;


    applyEnemy(
      finalBoss,
      "👑 FINAL BOSS"
    );


    document.getElementById(
      "bossBanner"
    ).style.display =
      "block";


    document.getElementById(
      "bossBanner"
    ).innerText =
      "👑 FINAL BOSS 👑";


    return;

  }


  /*
    =====================================
    NORMAL CAMPAIGN
    =====================================
  */


  isFinalEnemy =
    false;


  isFinalBoss =
    false;


  const stageIndex =

    Math.floor(
      (questionNumber - 1) /
      BOSS_INTERVAL
    );


  currentStage =
    stageIndex;


  /*
    Every tenth question
    is the boss.
  */


  isBoss =

    questionNumber %
    BOSS_INTERVAL === 0;


  if (
    isBoss
  ) {

    const boss =

      bosses[
        Math.min(
          stageIndex,
          bosses.length - 1
        )
      ];


    applyEnemy(
      boss,
      "👑 " +
      boss.name
    );


    document.getElementById(
      "bossBanner"
    ).style.display =
      "block";


    document.getElementById(
      "bossBanner"
    ).innerText =
      "👑 BOSS BATTLE 👑";

  }


  else {

    const enemy =

      normalEnemies[
        Math.min(
          stageIndex,
          normalEnemies.length - 1
        )
      ];


    applyEnemy(
      enemy,
      enemy.name +
      " Lv. " +
      (stageIndex + 1)
    );


    document.getElementById(
      "bossBanner"
    ).style.display =
      "none";

  }

}


/* ===================================================== */
/* APPLY ENEMY DATA                                      */
/* ===================================================== */

function applyEnemy(
  enemyData,
  displayName
) {

  enemyMaxHP =
    enemyData.hp;


  enemyHP =
    enemyMaxHP;


  document.getElementById(
    "enemyName"
  ).innerText =
    displayName;


  const image =
    document.querySelector(
      "#enemyCharacter img"
    );


  if (
    image
  ) {

    image.onerror =
      function () {

        this.onerror =
          null;


        this.src =
          "assets/enemy.PNG";

      };


    image.src =
      enemyData.image;

  }


  updateBattleUI();

}


/* ===================================================== */
/* CORRECT ANSWER                                        */
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


  if (
    enemyHP < 0
  ) {

    enemyHP =
      0;

  }


  animatePlayerAttack();


  showDamage(
    "-" + damage,
    "enemy"
  );


  updateBattleUI();


  /*
    Each question advances
    even if the enemy still has HP.

    Enemy HP here is mainly visual.
  */


  finishBattleQuestion(
    true
  );

}


/* ===================================================== */
/* WRONG ANSWER                                          */
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


  if (
    playerHP < 0
  ) {

    playerHP =
      0;

  }


  animateEnemyAttack();


  showDamage(
    "-" + damage,
    "player"
  );


  updateBattleUI();


  if (
    playerHP <= 0
  ) {

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
/* PLAYER DAMAGE                                         */
/* ===================================================== */

function calculatePlayerDamage() {

  if (
    isFinalBoss
  ) {

    return 100;

  }


  if (
    isFinalEnemy
  ) {

    return 90;

  }


  if (
    isBoss
  ) {

    return 75;

  }


  return 55;

}


/* ===================================================== */
/* ENEMY DAMAGE                                          */
/* ===================================================== */

function calculateEnemyDamage() {

  if (
    isFinalBoss
  ) {

    return 40;

  }


  if (
    isFinalEnemy
  ) {

    return 35;

  }


  if (
    isBoss
  ) {

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


  updateCampaignCounter();


  /*
    Heal slightly after
    correct answers.
  */


  if (
    answeredCorrectly
  ) {

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


  /*
    Campaign finished.
  */


  if (
    questionsAnswered >=
    TOTAL_CAMPAIGN_QUESTIONS
  ) {

    setTimeout(
      campaignVictory,
      1400
    );


    return;

  }


  /*
    Normal transition.
  */


  setTimeout(
    () => {

      loadEnemyForCurrentQuestion();


      loadNextCampaignQuestion();

    },
    1600
  );

}


/* ===================================================== */
/* LOAD NEXT QUESTION IN ORDER                           */
/* ===================================================== */

function loadNextCampaignQuestion() {

  /*
    Battle Mode is meant
    to go in order.

    This function calls the campaign-aware
    question loader if you add it to index.html.

    If not, it falls back to loadQuestion().
  */


  if (
    typeof loadCampaignQuestion ===
    "function"
  ) {

    loadCampaignQuestion(
      questionsAnswered
    );


    return;

  }


  loadQuestion();

}


/* ===================================================== */
/* CAMPAIGN COUNTER                                      */
/* ===================================================== */

function updateCampaignCounter() {

  const counter =
    document.getElementById(
      "enemyCount"
    );


  if (
    !counter
  ) {

    return;

  }


  const nextQuestion =
    Math.min(
      questionsAnswered + 1,
      TOTAL_CAMPAIGN_QUESTIONS
    );


  counter.innerText =
    nextQuestion +
    "/" +
    TOTAL_CAMPAIGN_QUESTIONS;

}


/* ===================================================== */
/* UPDATE BATTLE UI                                      */
/* ===================================================== */

function updateBattleUI() {

  const playerPercent =

    (
      playerHP /
      playerMaxHP
    ) *
    100;


  const enemyPercent =

    (
      enemyHP /
      enemyMaxHP
    ) *
    100;


  const playerBar =
    document.getElementById(
      "playerHealthBar"
    );


  const enemyBar =
    document.getElementById(
      "enemyHealthBar"
    );


  if (
    playerBar
  ) {

    playerBar.style.width =

      Math.max(
        playerPercent,
        0
      ) +
      "%";

  }


  if (
    enemyBar
  ) {

    enemyBar.style.width =

      Math.max(
        enemyPercent,
        0
      ) +
      "%";

  }


  const playerText =
    document.getElementById(
      "playerHPText"
    );


  const enemyText =
    document.getElementById(
      "enemyHPText"
    );


  if (
    playerText
  ) {

    playerText.innerText =

      playerHP +

      " / " +

      playerMaxHP +

      " HP";

  }


  if (
    enemyText
  ) {

    enemyText.innerText =

      enemyHP +

      " / " +

      enemyMaxHP +

      " HP";

  }

}


/* ===================================================== */
/* PLAYER ATTACK ANIMATION                               */
/* ===================================================== */

function animatePlayerAttack() {

  const player =
    document.getElementById(
      "playerCharacter"
    );


  if (
    !player
  ) {

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


/* ===================================================== */
/* ENEMY ATTACK ANIMATION                                */
/* ===================================================== */

function animateEnemyAttack() {

  const enemy =
    document.getElementById(
      "enemyCharacter"
    );


  if (
    !enemy
  ) {

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

    target ===
    "enemy"

      ?

      "enemyCharacter"

      :

      "playerCharacter";


  const targetElement =
    document.getElementById(
      targetId
    );


  if (
    !targetElement
  ) {

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


  document.getElementById(
    "bossBanner"
  ).style.display =
    "none";


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

    "You reached Question " +

    (
      questionsAnswered + 1
    ) +

    " of " +

    TOTAL_CAMPAIGN_QUESTIONS +

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
/* CAMPAIGN VICTORY                                      */
/* ===================================================== */

function campaignVictory() {

  campaignComplete =
    true;


  questionLocked =
    true;


  document.getElementById(
    "bossBanner"
  ).style.display =
    "block";


  document.getElementById(
    "bossBanner"
  ).innerText =
    "🏆 CAMPAIGN COMPLETE 🏆";


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

    TOTAL_CAMPAIGN_QUESTIONS +

    " campaign questions." +

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


  enemyHP =
    0;


  updateBattleUI();

}
