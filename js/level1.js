var health = 100;
var skills = 0;
var weapon1 = "AntiMonsterRifle(Automatic)";
var weapon1Damage = 45;
var weapon2 = "SmLaser+";
var weapon2Damage = 35;
var melee = "amoDiamondPlasmaBroadSword";
var meleeDamage = 70;
var enemy = "";
var enemyHealth = 0;
var enemyAttack = 0;
var battlenum = 0;



function attack(choice)
{
    if (choice == 1)
    {
        var enemyMulti = enemyAttack * 1.5;
        enemyHealth -= enemyMulti;
        health -= enemyAttack;
        if(enemyHealth < 0)
        {
            enemyHealth = 0;
            actionStat.innerHTML = "Killed " + enemy;
            update();
            win();
        } else if (health <= 0)
        {
            health = 0;
            update();
            alert("YOU DIED");
            location.replace("level1.html");
        } else {
            text.innerHTML = "You atttacked with your " + weapon1 +" And inflicted " + weapon1Damage + " Damage. " + "the enemy Attacked and you took " + enemyAttack + " Damage.";
            actionStat.innerHTML = "Used Primary Weapon";
        }
        update();
    }
    else if (choice == 2)
    {
        enemyHealth -= weapon2Damage;
        health -= enemyAttack;

        if(enemyHealth < 0)
        {
            enemyHealth = 0;
            update();
            actionStat.innerHTML = "Killed " + enemy;
            win();
        } else if (health <= 0)
        {
            health = 0;
            update();
            alert("YOU DIED");
            location.replace("level1.html");
        } else {
            text.innerHTML = "You atttacked with your " + weapon2 +" And inflicted " + weapon2Damage + " Damage. " + "the enemy Attacked and you took " + enemyMulti + " Damage.";
            actionStat.innerHTML = "Used Secondary Weapon";
        }
        update();
    }
    else if (choice == 3)
    {
        enemyMulti = enemyAttack * 2;
        enemyHealth -= meleeDamage;
        health -= enemyMulti;

        if(enemyHealth < 0)
        {
            enemyHealth = 0;
            actionStat.innerHTML = "Killed " + enemy;
            update();
            win();
        } else if (health <= 0)
        {
            health = 0;
            update();
            alert("YOU DIED");
            location.replace("level1.html");
        } else {
            text.innerHTML = "You atttacked with your " + melee +" And inflicted " + meleeDamage + " Damage. " + "the enemy Attacked and you took " + enemyMulti + " Damage.";
            actionStat.innerHTML = "Used Melee Weapon";
        }
        update();
    }
}

function battle(number)
{
    if(number == 1)
    {
        enemy = "Mutated Worm";
        enemyHealth = 80;
        enemyAttack = 4;
        battlenum = 1;
        update();
    }
    if (number == 3)
    {
        text.innerHTML = "Congratulations. You Won. You get an medkit.. As You venture deeper into the forest, you encounter an rogue Android. It picks up some rocks and gets ready to throw them at you.";
        enemy = "Rogue Android";
        enemyHealth = 120;
        enemyAttack = 12;
        skills += 1;
        update();
    }
    if (number == 4)
    {
        text.innerHTML = "Congratulations. You Won. As you Loot the Android you find an MegaLabBlaster that can inflict 50 damage. you also find an old illegal ElitePlasmaKiller sword that does 90 damage. You also get an small laser shield and an medkit. You see an robotic laser Tree. it fires a few warning shots that singe your hair.";
        weapon1 = "MegaLabBlaster";
        weapon1Damage = 50;
        melee = "ElitePlasmaKiller";
        meleeDamage = 90;
        enemy = "Laser Tree";
        enemyHealth = 570;
        enemyAttack = 20;
        health += 20;
        skills++;
        update();

    }
    if (number == 5)
    {
        location.replace("complete.html");
    }
    if (number == 2)
    {
        text.innerHTML = "Congratulations. You Survived your first Battle.As you walk deeper, you see an LongSnake that is mutated. it starts to attack you.";
        enemy = "LongSnake";
        enemyHealth = 100;
        enemyAttack = 8;
        update();
    }
    else if (number == 6)
    {
        text.innerHTML = "You loot the tree and get 5 medkits and a Large HyperBlaster. it does 150 damage. there is also some level 3 body armor, which you equip. ";
        skills += 5;
    }
}

var healthStat;
var enemyHealthStat;
var primaryWeaponStat;
var primaryWeaponDamage;
var secondaryWeaponStat;
var secondaryWeaponDamage;
var meleeWeaponStat;
var meleeWeaponDamage;
var skillLevelStat;
var text;
var ShieldStat;
var enemyStat;
var actionStat;

function init()
{
  enemyStat = document.getElementById("enemy");
    healthStat = document.getElementById("health");
    enemyHealthStat = document.getElementById("enemyHealth");
    primaryWeaponStat = document.getElementById("primaryWeapon");
    secondaryWeaponStat = document.getElementById("secondaryWeapon");
    meleeWeaponStat = document.getElementById("meleeWeapon");
    skillLevelStat = document.getElementById("skillLevel");
    text = document.getElementById("data");
    primaryWeaponDamage = document.getElementById("weapon1Damage");
    secondaryWeaponDamage = document.getElementById("weapon2Damage");
    meleeWeaponDamage = document.getElementById("meleeDamage");
    actionStat = document.getElementById("action");
    skills = 2;
    battle(1);
}

function update()
{
    healthStat.innerHTML = health;
    enemyHealthStat.innerHTML = enemyHealth;
    primaryWeaponStat.innerHTML = weapon1;
    secondaryWeaponStat.innerHTML = weapon2;
    meleeWeaponStat.innerHTML = melee;
    skillLevelStat.innerHTML = skills;
    primaryWeaponDamage.innerHTML = weapon1Damage;
    secondaryWeaponDamage.innerHTML = weapon2Damage;
    meleeWeaponDamage.innerHTML = meleeDamage;
    enemyStat.innerHTML = enemy;
}

function win()
{
    battlenum++;
    battle(battlenum);
    update();
}

function heal()
{
  if (skills > 0)
  {
    health += 60;
    skills--;
    actionStat.innerHTML = "You used one medkit. You have " + skills + " medkits left."
    update();
  }
  else if (skills <= 0)
  {
      actionStat.innerHTML = "You Have No Medkits Left."
  }
}
