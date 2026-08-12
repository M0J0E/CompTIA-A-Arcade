let playerHP = 100;
let enemyHP = 100;
let enemyMaxHP = 100;
let enemyLevel = 1;
let enemiesDefeated = 0;
let isBoss = false;

function setupBattle() {
  playerHP = 100;
  enemyLevel = 1;
  enemiesDefeated = 0;
  spawnEnemy();

  updateBattleUI();
}

function spawnEnemy() {
  isBoss = enemyLevel % 5 === 0;

  if (isBoss) {
    enemyMaxHP = 200 + ((enemyLevel - 1) * 25);
  } else {
    enemyMaxHP = 100 + ((enemyLevel - 1) * 20);
  }

  enemyHP = enemyMaxHP;

  const enemyName = document.getElementById("enemyName");

  if (isBoss) {
    enemyName.innerText =
      "👑 Malware Boss Lv. " + enemyLevel;
  } else {
    enemyName.innerText =
      "Malware Bot Lv. " + enemyLevel;
  }

  updateBattleUI();
}

function correctBattleAnswer() {
  let damage = 20;

  if (isBoss) {
    damage = 25;
  }

  enemyHP -= damage;

  if (enemyHP < 0) {
    enemyHP = 0;
  }

  animatePlayerAttack();
  showDamage("-" + damage, "enemy");

  updateBattleUI();

  if (enemyHP <= 0) {
    setTimeout(() => {
      defeatEnemy();
    }, 700);
  }
}

function wrongBattleAnswer() {
  let damage = 25;

  if (isBoss) {
    damage = 35;
  }

  playerHP -= damage;

  if (playerHP < 0) {
    playerHP = 0;
  }

  animateEnemyAttack();
  showDamage("-" + damage, "player");

  updateBattleUI();

  if (playerHP <= 0) {
    setTimeout(() => {
      battleGameOver();
    }, 700);
  }
}

function defeatEnemy() {
  enemiesDefeated++;

  let bonusXP = 25;

  if (isBoss) {
    bonusXP = 100;
  }

  xp += bonusXP;

  document.getElementById("xp").innerText = xp;

  const result = document.getElementById("result");

  if (isBoss) {
    result.innerHTML =
      "🏆 BOSS DEFEATED!<br>" +
      "+" + bonusXP + " bonus XP";
  } else {
    result.innerHTML =
      "⚔️ Enemy defeated!<br>" +
      "+" + bonusXP + " bonus XP";
  }

  enemyLevel++;

  setTimeout(() => {
    spawnEnemy();
    loadQuestion();
  }, 1500);
}

function updateBattleUI() {
  const playerHealthBar =
    document.getElementById("playerHealthBar");

  const enemyHealthBar =
    document.getElementById("enemyHealthBar");

  const playerPercent =
    (playerHP / 100) * 100;

  const enemyPercent =
    (enemyHP / enemyMaxHP) * 100;

  if (playerHealthBar) {
    playerHealthBar.style.width =
      Math.max(playerPercent, 0) + "%";
  }

  if (enemyHealthBar) {
    enemyHealthBar.style.width =
      Math.max(enemyPercent, 0) + "%";
  }

  const playerHPText =
    document.getElementById("playerHPText");

  const enemyHPText =
    document.getElementById("enemyHPText");

  if (playerHPText) {
    playerHPText.innerText =
      playerHP + " / 100 HP";
  }

  if (enemyHPText) {
    enemyHPText.innerText =
      enemyHP + " / " +
      enemyMaxHP + " HP";
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

function showDamage(amount, target) {
  const targetElement =
    document.getElementById(
      target === "enemy"
        ? "enemyCharacter"
        : "playerCharacter"
    );

  if (!targetElement) return;

  const damageText =
    document.createElement("div");

  damageText.className = "damage-number";
  damageText.innerText = amount;

  targetElement.appendChild(damageText);

  setTimeout(() => {
    damageText.remove();
  }, 700);
}

function battleGameOver() {
  document.getElementById("question").innerText =
    "💀 You Were Defeated";

  document.getElementById("result").innerHTML =
    "Enemies defeated: " +
    enemiesDefeated +
    "<br>" +
    "Final XP: " +
    xp;

  document.querySelectorAll(".answer")
    .forEach(button => {
      button.style.display = "none";
    });
}
