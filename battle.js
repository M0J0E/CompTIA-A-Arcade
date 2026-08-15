/* ===================================================== */
/* COMPTIA A+ ARCADE - SAVED CAMPAIGN BATTLE SYSTEM      */
/* ===================================================== */


/* ===================================================== */
/* SETTINGS                                              */
/* ===================================================== */

const SAVE_KEY =
  "comptiaArcadeCampaignSaveV1";

const NORMAL_QUESTIONS_PER_STAGE =
  9;

const NORMAL_ENEMY_HP =
  100;

const BOSS_HP =
  200;

const PLAYER_MAX_HP =
  100;

const PLAYER_DAMAGE =
  50;

const NORMAL_ENEMY_DAMAGE =
  20;

const BOSS_DAMAGE =
  30;


/* ===================================================== */
/* BATTLE STATE                                          */
/* ===================================================== */

let playerHP =
  PLAYER_MAX_HP;

let playerMaxHP =
  PLAYER_MAX_HP;

let enemyHP =
  NORMAL_ENEMY_HP;

let enemyMaxHP =
  NORMAL_ENEMY_HP;


/*
  questionsAnswered is the index
  of the NEXT campaign question.

  Example:

  0 = about to answer campaign question 1
  1 = about to answer campaign question 2
*/
let questionsAnswered =
  0;


/*
  Stage:

  0 = enemy1 / boss1
  1 = enemy2 / boss2
  2 = enemy3 / boss3
*/
let currentStage =
  0;


/*
  Number of normal questions completed
  during this stage.

  When this reaches 9,
  boss phase begins.
*/
let normalQuestionsThisStage =
  0;


/*
  Current phase:

  "normal"
  "boss"
*/
let battlePhase =
  "normal";


let isBoss =
  false;

let battleFinished =
  false;

let campaignComplete =
  false;


/* ===================================================== */
/* ENEMY NAMES                                           */
/* ===================================================== */

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
/* TOTAL QUESTIONS                                       */
/* ===================================================== */

function getTotalCampaignQuestions() {

  if (
    typeof campaignQuestions !==
      "undefined" &&
    Array.isArray(
      campaignQuestions
    ) &&
    campaignQuestions.length > 0
  ) {

    return campaignQuestions.length;

  }


  if (
    typeof questions !==
      "undefined" &&
    Array.isArray(
      questions
    )
  ) {

    return questions.filter(
      question => {

        return (

          question.pbq !== true &&

          Array.isArray(
            question.answers
          ) &&

          question.answers.length >
            0 &&

          question.correct !==
            null &&

          question.correct !==
            undefined &&

          !(
            question.multiple ===
              true &&

            Array.isArray(
              question.correct
            ) &&

            question.correct.length <
              2
          )

        );

      }
    ).length;

  }


  return 0;

}


/* ===================================================== */
/* SAVE CAMPAIGN                                         */
/* ===================================================== */

function saveCampaign() {

  const data = {

    questionsAnswered:
      questionsAnswered,

    currentStage:
      currentStage,

    normalQuestionsThisStage:
      normalQuestionsThisStage,

    battlePhase:
      battlePhase,

    playerHP:
      playerHP,

    enemyHP:
      enemyHP,

    enemyMaxHP:
      enemyMaxHP,

    xp:
      typeof xp !== "undefined"
        ? xp
        : 0,

    lives:
      typeof lives !== "undefined"
        ? lives
        : 3,

    campaignComplete:
      campaignComplete

  };


  localStorage.setItem(
    SAVE_KEY,
    JSON.stringify(data)
  );

}


/* ===================================================== */
/* LOAD CAMPAIGN                                         */
/* ===================================================== */

function loadSavedCampaign() {

  const raw =
    localStorage.getItem(
      SAVE_KEY
    );


  if (!raw) {

    return false;

  }


  try {

    const data =
      JSON.parse(raw);


    const total =
      getTotalCampaignQuestions();


    if (
      typeof data.questionsAnswered !==
        "number"
    ) {

      return false;

    }


    questionsAnswered =
      Math.max(
        0,
        Math.min(
          data.questionsAnswered,
          total
        )
      );


    currentStage =
      data.currentStage || 0;


    normalQuestionsThisStage =
      data.normalQuestionsThisStage || 0;


    battlePhase =
      data.battlePhase || "normal";


    playerHP =
      typeof data.playerHP ===
        "number"
        ? data.playerHP
        : PLAYER_MAX_HP;


    /*
      Never resume dead.
      Retry from the same question
      with full HP.
    */

    if (
      playerHP <= 0
    ) {

      playerHP =
        PLAYER_MAX_HP;

    }


    enemyHP =
      typeof data.enemyHP ===
        "number"
        ? data.enemyHP
        : NORMAL_ENEMY_HP;


    enemyMaxHP =
      typeof data.enemyMaxHP ===
        "number"
        ? data.enemyMaxHP
        : NORMAL_ENEMY_HP;


    campaignComplete =
      data.campaignComplete ===
      true;


    if (
      typeof xp !== "undefined"
    ) {

      xp =
        data.xp || 0;

    }


    if (
      typeof lives !== "undefined"
    ) {

      lives =
        data.lives ?? 3;

    }


    return true;

  }


  catch (error) {

    console.error(
      "Could not load campaign save:",
      error
    );


    return false;

  }

}


/* ===================================================== */
/* DELETE SAVE                                           */
/* ===================================================== */

function clearCampaignSave() {

  localStorage.removeItem(
    SAVE_KEY
  );

}


/* ===================================================== */
/* RESTART CAMPAIGN                                      */
/* ===================================================== */

function restartCampaign() {

  const confirmed =
    window.confirm(
      "Restart the entire campaign? Your saved progress will be erased."
    );


  if (!confirmed) {

    return;

  }


  clearCampaignSave();


  questionsAnswered =
    0;

  currentStage =
    0;

  normalQuestionsThisStage =
    0;

  battlePhase =
    "normal";

  playerHP =
    PLAYER_MAX_HP;

  enemyHP =
    NORMAL_ENEMY_HP;

  enemyMaxHP =
    NORMAL_ENEMY_HP;

  isBoss =
    false;

  battleFinished =
    false;

  campaignComplete =
    false;


  if (
    typeof xp !==
    "undefined"
  ) {

    xp = 0;

  }


  if (
    typeof lives !==
    "undefined"
  ) {

    lives = 3;

  }


  document.getElementById(
    "xp"
  ).innerText =
    "0";


  document.getElementById(
    "lives"
  ).innerText =
    "3";


  loadCurrentEncounter(
    true
  );


  loadCampaignQuestion(
    0
  );


  updateBattleUI();

  updateCampaignCounter();

  saveCampaign();

}


/* ===================================================== */
/* SETUP CAMPAIGN                                        */
/* ===================================================== */

function setupBattle() {

  battleFinished =
    false;


  const didLoadSave =
    loadSavedCampaign();


  if (!didLoadSave) {

    questionsAnswered =
      0;

    currentStage =
      0;

    normalQuestionsThisStage =
      0;

    battlePhase =
      "normal";

    playerHP =
      PLAYER_MAX_HP;

    enemyHP =
      NORMAL_ENEMY_HP;

    enemyMaxHP =
      NORMAL_ENEMY_HP;

    campaignComplete =
      false;

  }


  if (
    typeof xp !==
    "undefined"
  ) {

    document.getElementById(
      "xp"
    ).innerText =
      xp;

  }


  if (
    typeof lives !==
    "undefined"
  ) {

    document.getElementById(
      "lives"
    ).innerText =
      lives;

  }


  /*
    If saved enemy HP is invalid,
    recreate the encounter.
  */

  if (
    enemyHP <= 0 ||
    enemyMaxHP <= 0
  ) {

    loadCurrentEncounter(
      true
    );

  }


  else {

    restoreCurrentEncounterVisuals();

  }


  updateBattleUI();

  updateCampaignCounter();

}


/* ===================================================== */
/* RESTORE VISUALS                                       */
/* ===================================================== */

function restoreCurrentEncounterVisuals() {

  if (
    battlePhase ===
    "boss"
  ) {

    isBoss =
      true;


    showBoss();

  }


  else {

    isBoss =
      false;


    showNormalEnemy();

  }

}


/* ===================================================== */
/* CURRENT ENCOUNTER                                     */
/* ===================================================== */

function loadCurrentEncounter(
  resetHP = true
) {

  battleFinished =
    false;


  if (
    battlePhase ===
    "boss"
  ) {

    isBoss =
      true;


    if (resetHP) {

      enemyMaxHP =
        BOSS_HP;

      enemyHP =
        BOSS_HP;

    }


    showBoss();

  }


  else {

    isBoss =
      false;


    if (resetHP) {

      enemyMaxHP =
        NORMAL_ENEMY_HP;

      enemyHP =
        NORMAL_ENEMY_HP;

    }


    showNormalEnemy();

  }


  updateBattleUI();

}


/* ===================================================== */
/* NORMAL ENEMY                                          */
/* ===================================================== */

function showNormalEnemy() {

  const index =
    Math.min(
      currentStage,
      enemyNames.length - 1
    );


  setEnemyName(

    enemyNames[index] +

    " Lv. " +

    (currentStage + 1)

  );


  setEnemyImage(

    "assets/enemy" +

    (index + 1) +

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


/* ===================================================== */
/* BOSS                                                  */
/* ===================================================== */

function showBoss() {

  const index =
    Math.min(
      currentStage,
      bossNames.length - 1
    );


  setEnemyName(

    "👑 " +

    bossNames[index]

  );


  setEnemyImage(

    "assets/boss" +

    (index + 1) +

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


/* ===================================================== */
/* SET NAME                                              */
/* ===================================================== */

function setEnemyName(name) {

  const element =
    document.getElementById(
      "enemyName"
    );


  if (element) {

    element.innerText =
      name;

  }

}


/* ===================================================== */
/* SET IMAGE                                             */
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

      this.onerror =
        null;


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


  if (
    enemyHP < 0
  ) {

    enemyHP =
      0;

  }


  animatePlayerAttack();


  showDamage(
    "-" + PLAYER_DAMAGE,
    "enemy"
  );


  updateBattleUI();


  /*
    Wait for animation before
    deciding whether foe died.
  */

  setTimeout(
    () => {

      resolveAnsweredQuestion(
        true
      );

    },
    650
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


    /*
      Save same question position
      but restore HP for retry.
    */

    playerHP =
      PLAYER_MAX_HP;


    saveCampaign();


    setTimeout(
      battleGameOver,
      650
    );


    return;

  }


  setTimeout(
    () => {

      resolveAnsweredQuestion(
        false
      );

    },
    650
  );

}


/* ===================================================== */
/* RESOLVE COMPLETED QUESTION                            */
/* ===================================================== */

function resolveAnsweredQuestion(
  answeredCorrectly
) {

  battleFinished =
    true;


  const totalQuestions =
    getTotalCampaignQuestions();


  /*
    Advance actual question index.
  */

  questionsAnswered++;


  /*
    NORMAL PHASE
  */

  if (
    battlePhase ===
    "normal"
  ) {

    normalQuestionsThisStage++;


    /*
      Enemy was defeated.

      Spawn another COPY of the
      same stage enemy unless it
      is time for the boss.
    */

    if (
      enemyHP <= 0
    ) {

      if (
        normalQuestionsThisStage <
        NORMAL_QUESTIONS_PER_STAGE
      ) {

        enemyMaxHP =
          NORMAL_ENEMY_HP;

        enemyHP =
          NORMAL_ENEMY_HP;

      }

    }


    /*
      Nine normal questions
      completed.

      NEXT question begins boss fight.
    */

    if (
      normalQuestionsThisStage >=
      NORMAL_QUESTIONS_PER_STAGE
    ) {

      battlePhase =
        "boss";

      isBoss =
        true;

      enemyMaxHP =
        BOSS_HP;

      enemyHP =
        BOSS_HP;

    }

  }


  /*
    BOSS PHASE
  */

  else if (
    battlePhase ===
    "boss"
  ) {

    /*
      Boss stays until HP reaches 0.

      Since boss has 200 HP and
      correct answers do 50 damage,
      four correct answers defeat it.
    */

    if (
      enemyHP <= 0
    ) {

      /*
        Boss defeated.

        Advance to next stage.
      */

      currentStage++;


      normalQuestionsThisStage =
        0;


      battlePhase =
        "normal";


      isBoss =
        false;


      enemyMaxHP =
        NORMAL_ENEMY_HP;


      enemyHP =
        NORMAL_ENEMY_HP;


      /*
        Heal after beating boss.
      */

      playerHP +=
        25;


      if (
        playerHP >
        playerMaxHP
      ) {

        playerHP =
          playerMaxHP;

      }


      if (
        typeof xp !==
        "undefined"
      ) {

        xp += 50;


        document.getElementById(
          "xp"
        ).innerText =
          xp;

      }

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


  saveCampaign();


  /*
    End campaign if all
    playable questions are done.
  */

  if (
    questionsAnswered >=
    totalQuestions
  ) {

    setTimeout(
      campaignVictory,
      1200
    );


    return;

  }


  /*
    Load correct visual for
    the NEXT question.
  */

  setTimeout(
    () => {

      loadCurrentEncounter(
        false
      );


      loadNextCampaignQuestion();

    },
    1200
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

  const element =
    document.getElementById(
      "enemyCount"
    );


  if (!element) {

    return;

  }


  const total =
    getTotalCampaignQuestions();


  if (
    total <= 0
  ) {

    element.innerText =
      "0/0";


    return;

  }


  const current =
    Math.min(
      questionsAnswered + 1,
      total
    );


  element.innerText =

    current +

    "/" +

    total;

}


/* ===================================================== */
/* UI                                                    */
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
/* DAMAGE NUMBER                                         */
/* ===================================================== */

function showDamage(
  amount,
  target
) {

  const id =
    target === "enemy"
      ? "enemyCharacter"
      : "playerCharacter";


  const targetElement =
    document.getElementById(
      id
    );


  if (!targetElement) {

    return;

  }


  const damage =
    document.createElement(
      "div"
    );


  damage.className =
    "damage-number";


  damage.innerText =
    amount;


  targetElement.appendChild(
    damage
  );


  setTimeout(
    () => {

      damage.remove();

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

    "Your campaign progress was saved."

    +

    "<br><br>"

    +

    "You are at question "

    +

    Math.min(
      questionsAnswered + 1,
      total
    )

    +

    " of "

    +

    total

    +

    "."

    +

    "<br><br>"

    +

    "Return to the menu and continue when you're ready.";


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


  saveCampaign();


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

    "You completed every playable question."

    +

    "<br><br>"

    +

    "Final XP: "

    +

    (
      typeof xp !== "undefined"
        ? xp
        : 0
    );


  document.getElementById(
    "answersContainer"
  ).innerHTML =
    "";


  document.getElementById(
    "submitAnswerButton"
  ).style.display =
    "none";

}
