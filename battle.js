let playerHP = 100;
let enemyHP = 100;
let enemyLevel = 1;

function setupBattle() {
  playerHP = 100;
  enemyHP = 100;
  enemyLevel = 1;

  updateBattleUI();
}

function correctBattleAnswer() {
  const damage = 20;

  enemyHP -= damage;

  if (enemyHP < 0) {
    enemyHP = 0;
  }

  animatePlayerAttack();

  updateBattleUI();

  if (enemyHP <= 0) {
    setTimeout(() => {
      nextEnemy();
    }, 700);
  }
}

function wrongBattleAnswer() {
  const damage = 25;

  playerHP -= damage;

  if (playerHP < 0) {
    playerHP = 0;
  }

  animateEnemyAttack();

  updateBattleUI();

  if (playerHP <= 0) {
    setTimeout(() => {
      battleGameOver();
    }, 700);
  }
}

function nextEnemy() {
  enemyLevel++;

  enemyHP = 100 + ((enemyLevel - 1) * 20);

  document.getElementById("enemyName").innerText =
    "Malware Bot Lv. " + enemyLevel;

  updateBattleUI();
}

function updateBattleUI() {
  const playerHealthBar =
    document.getElementById("playerHealthBar");

  const enemyHealthBar =
    document.getElementById("enemyHealthBar");

  if (playerHealthBar) {
    playerHealthBar.style.width =
      Math.max(playerHP, 0) + "%";
  }

  if (enemyHealthBar) {
    const enemyMaxHP =
      100 + ((enemyLevel - 1) * 20);

    const enemyPercent =
      (enemyHP / enemyMaxHP) * 100;

    enemyHealthBar.style.width =
      Math.max(enemyPercent, 0) + "%";
  }

  const playerHPText =
    document.getElementById("playerHPText");

  const enemyHPText =
    document.getElementById("enemyHPText");

  if (playerHPText) {
    playerHPText.innerText =
      playerHP + " HP";
  }

  if (enemyHPText) {
    enemyHPText.innerText =
      enemyHP + " HP";
  }
}

function animatePlayerAttack() {
  const player =
    document.getElementById("playerCharacter");

  if (!player) return;

  player.classList.add("player-attack");

  setTimeout(() => {
    player.classList.remove("player-attack");
  }, 400);
}

function animateEnemyAttack() {
  const enemy =
    document.getElementById("enemyCharacter");

  if (!enemy) return;

  enemy.classList.add("enemy-attack");

  setTimeout(() => {
    enemy.classList.remove("enemy-attack");
  }, 400);
}

function battleGameOver() {
  document.getElementById("question").innerText =
    "You were defeated!";

  document.getElementById("result").innerHTML =
    "You reached enemy level " +
    enemyLevel +
    ".<br><br>Refresh the page to try again.";

  document.querySelectorAll(".answer")
    .forEach(button => {
      button.style.display = "none";
    });
}