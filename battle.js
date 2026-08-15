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

let battleFinished = false;

let campaignComplete = false;


/* ===================================================== */
/* SETTINGS                                              */
/* ===================================================== */

const BOSS_INTERVAL = 10;

const NORMAL_ENEMY_HP = 100;

const BOSS_HP = 200;

const PLAYER_DAMAGE = 50;

const NORMAL_ENEMY_DAMAGE = 20;

const BOSS_DAMAGE = 30;


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
        question.correct !== undefined
      );

    }).length;
  }

  return 0;
}


/* ===================================================== */
/* ENEMY NAMES                                           */
/* ===================================================== */

/*
  These names line up with:

  enemy1.png
  enemy2.png
  enemy3.png
  ...

  You can rename these however you want.
*/

const enemyNames = [

  "Malware Bot",
  "Firewall Beast",
  "Packet Goblin",
  "Virus Slime",
  "Data Imp",
  "Cable Crawler",
  "RAM Wraith",
  "Port Phantom",
  "BIOS Bug",
  "Cloud Creep",

  "Cache Creeper",
  "Router Rogue",
  "Switch Spider",
  "Signal Specter",
  "Storage Stalker",
  "Thermal Troll",
  "Printer Poltergeist",
  "Voltage Viper",
  "DNS Demon",
  "DHCP Phantom",

  "Fiber Fiend",
  "Wireless Wraith",
  "Virtual Vandal",
  "Hypervisor Horror",
  "RAID Raider",
  "Socket Stalker",
  "Power Parasite",
  "Display Drake",
  "Peripheral Phantom",
  "Subnet Shade",

  "Protocol Predator",
  "Encryption Entity",
  "NFC Nightmare",
  "Bluetooth Brute",
  "Cloud Corruptor",
  "Latency Lurker",
  "Firmware Fiend",
  "Thermal Titanling",
  "Storage Shade",
  "Network Nemesis",

  "Memory Marauder",
  "Boot Beast",
  "Signal Serpent",
  "Cloud Crusher",
  "System Specter",
  "Core Corruptor"

];


/* ===================================================== */
/* BOSS NAMES                                            */
/* ===================================================== */

const bossNames = [

  "Malware Overlord",
  "Network Titan",
  "Cyber Dragon",
  "RAID Colossus",
  "Cloud Emperor",
  "Thermal King",
  "Packet Warlord",
  "BIOS Behemoth",
  "Port Reaper",
  "Firewall Sovereign",

  "Storage Leviathan",
  "Wireless Overlord",
  "Virtualization King",
  "Subnet Tyrant",
  "Printer Emperor",
  "Voltage Monarch",
  "DNS Destroyer",
  "DHCP Devourer",
  "Fiber Overlord",
  "Signal Emperor",

  "Hypervisor Titan",
  "RAID Emperor",
  "Socket Tyrant",
  "Power Overlord",
  "Display Colossus",
  "Peripheral King",
  "Protocol Emperor",
  "Encryption Titan",
  "NFC Warlord",
  "Bluetooth Overlord",

  "Cloud Leviathan",
  "Latency Tyrant",
  "Firmware Emperor",
  "Thermal Colossus",
  "Storage Monarch",
  "Network Overlord",
  "Memory Emperor",
  "Boot Tyrant",
  "Signal Overlord",
  "Cloud Devourer",

  "System Emperor",
  "Core Titan",
  "Protocol Destroyer",
  "Network Sovereign",
  "Cyber Emperor",
  "A+ Guardian"

];


/* ===================================================== */
/* START BATTLE                                          */
/* ===================================================== */

function setupBattle() {

  playerHP = 100;

  playerMaxHP = 100;

  questionsAnswered = 0;

  currentStage = 0;

  isBoss = false;

  battleFinished = false;

  campaignComplete = false;

  loadEnemyForCurrentQuestion();

  updateBattleUI();

  updateCampaignCounter();
}


/* ===================================================== */
/* DETERMINE CURRENT STAGE                               */
/* ===================================================== */

function getStageIndex(questionNumber) {

  return Math.floor(
    (questionNumber - 1) / BOSS_INTERVAL
  );
}


/* ===================================================== */
/* CHECK IF CURRENT QUESTION IS BOSS                     */
/* ===================================================== */

function isBossQuestion(questionNumber) {

  return (
    questionNumber % BOSS_INTERVAL === 0
  );
}


/* ===================================================== */
/* LOAD ENEMY/BOSS                                       */
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


  currentStage =
    getStageIndex(
      questionNumber
    );


  isBoss =
    isBossQuestion(
      questionNumber
    );


  /*
    =====================================
    BOSS QUESTION
    =====================================
  */

  if (isBoss) {

    enemyMaxHP =
      BOSS_HP;

    enemyHP =
      BOSS_HP;


    const bossIndex =
      Math.min(
        currentStage,
        bossNames.length - 1
      );


    const bossName =
      bossNames[bossIndex];


    setEnemyName(
      "👑 " +
      bossName
    );


    setEnemyImage(
      "assets/boss" +
      (bossIndex + 1) +
      ".png"
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

  }


  /*
    =====================================
    NORMAL ENEMY
    =====================================
  */

  else {

    enemyMaxHP =
      NORMAL_ENEMY_HP;

    enemyHP =
      NORMAL_ENEMY_HP;


    const enemyIndex =
      Math.min(
        currentStage,
        enemyNames.length - 1
      );


    const enemyName =
      enemyNames[enemyIndex];


    setEnemyName(
      enemyName +
      " Lv. " +
      (currentStage + 1)
    );


    setEnemyImage(
      "assets/enemy" +
      (enemyIndex + 1) +
      ".png"
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


  updateBattleUI();

  updateCampaignCounter();
}


/* ===================================================== */
/* SET ENEMY NAME                                        */
/* ===================================================== */

function setEnemyName(name) {

  const enemyName =
    document.getElementById(
      "enemyName"
    );

  if (enemyName) {
    enemyName.innerText = name;
  }
}


/* ===================================================== */
/* SET ENEMY IMAGE                                       */
/* ===================================================== */

function setEnemyImage(path) {

  const image =
    document.querySelector(
      "#enemyCharacter img"
    );


  if (!image) {
    return;
  }


  image.onerror =
    function () {

      this.onerror = null;

      this.src =
        "assets/enemy.png";
    };


  image.src =
    path;
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


  enemyHP -=
    PLAYER_DAMAGE;


  if (enemyHP < 0) {
    enemyHP = 0;
  }


  animatePlayerAttack();


  showDamage(
    "-" + PLAYER_DAMAGE,
    "enemy"
  );


  updateBattleUI();


  /*
    Boss has 200 HP.

    One correct question deals 50,
    but because the boss only appears
    on one campaign question, we finish
    the current encounter after the answer.

    The HP bar still visually shows
    the 50 damage before transition.
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
    isBoss
      ? BOSS_DAMAGE
      : NORMAL_ENEMY_DAMAGE;


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


  if (
    playerHP <= 0
  ) {

    battleFinished = true;


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
/* FINISH CURRENT QUESTION                               */
/* ===================================================== */

function finishBattleQuestion(
  answeredCorrectly
) {

  battleFinished =
    true;


  const wasBoss =
    isBoss;


  /*
    Small heal for correct answers.
  */

  if (answeredCorrectly) {

    playerHP += 5;

    if (
      playerHP >
      playerMaxHP
    ) {
      playerHP =
        playerMaxHP;
    }
  }


  questionsAnswered++;


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


  /*
    Campaign finished
  */

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


  /*
    =====================================
    BOSS TRANSITION
    =====================================

    Example:

    Q10 = boss1.png

    After Q10 finishes:
    wait so player can see boss result

    then Q11 loads enemy2.png
  */

  if (wasBoss) {

    setTimeout(
      () => {

        loadEnemyForCurrentQuestion();

        loadNextCampaignQuestion();

      },
      2200
    );


    return;
  }


  /*
    Normal enemy question transition
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
/* NEXT CAMPAIGN QUESTION                                */
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
/* CAMPAIGN COUNTER                                      */
/* ===================================================== */

function updateCampaignCounter() {

  const counter =
    document.getElementById(
      "enemyCount"
    );


  if (!counter) {
    return;
  }


  const total =
    getTotalCampaignQuestions();


  if (total <= 0) {

    counter.innerText =
      "0/0";

    return;
  }


  const current =
    Math.min(
      questionsAnswered + 1,
      total
    );


  counter.innerText =
    current +
    "/" +
    total;
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


  if (playerBar) {

    playerBar.style.width =
      Math.max(
        playerPercent,
        0
      ) +
      "%";
  }


  if (enemyBar) {

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
/* PLAYER ATTACK                                         */
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


/* ===================================================== */
/* ENEMY ATTACK                                          */
/* ===================================================== */

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


  const total =
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
      total
    ) +

    " of " +
    total +

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

  battleFinished =
    true;

  questionLocked =
    true;


  const total =
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

    total +

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
}
