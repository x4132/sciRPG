var health = 100;
var medkits = 0;
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
var medkitsl = 0;



function attack(choice)
{
    if (choice == 1)
    {
        var enemyMulti = enemyAttack * 1.5;
        enemyHealth -= weapon1Damage;
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
        medkits += 1;
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
        medkits++;
        update();

    }
    if (number == 6)
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
    else if (number == 5)
    {
        text.innerHTML = "You loot the tree and get 5 Large medkits, 10 small medkits,  and a Large SoftNoseHyperBlaster. It does 70 damage.<br> You also find an SoftNoseL+ pistol. It does 55 damage. <br> There is also some level 3 body armor, which you equip. <br> You go into an clearing. There is an AI boss there. it prepares to attack you.";
        medkitsl += 5;
        medkits += 10;
        health += 70;
        weapon1 = "Large SoftNoseHyperBlaster";
        weapon1Damage = 70;
        weapon2 = "SoftNoseL+";
        weapon2Damage = 55;
        enemy = "AI boss";
        enemyHealth = 2000;
        enemyAttack = 30;
        
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
var enemyStat;
var actionStat;
var largeMedkitStat;

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
    medkits = 2;
    largeMedkitStat = document.getElementById("lmedkit");
    largeMedkitStat.innerHTML = 0;
    battle(1);
}

function update()
{
    healthStat.innerHTML = health;
    enemyHealthStat.innerHTML = enemyHealth;
    primaryWeaponStat.innerHTML = weapon1;
    secondaryWeaponStat.innerHTML = weapon2;
    meleeWeaponStat.innerHTML = melee;
    skillLevelStat.innerHTML = medkits;
    primaryWeaponDamage.innerHTML = weapon1Damage;
    secondaryWeaponDamage.innerHTML = weapon2Damage;
    meleeWeaponDamage.innerHTML = meleeDamage;
    enemyStat.innerHTML = enemy;
    largeMedkitStat.innerHTML = medkitsl;
}

function win()
{
    battlenum++;
    battle(battlenum);
    update();
}

function heal()
{
  if (medkits > 0)
  {
    health += 60;
    medkits--;
    actionStat.innerHTML = "You used one medkit. You have " + medkits + " medkit(s) left."
    update();
  }
  else if (medkits <= 0)
  {
      actionStat.innerHTML = "You Have No Medkits Left."
  }
}

function lheal()
{
    if (medkitsl > 0)
    {
        health += 105;
        medkitsl--;
        actionStat.innerHTML = "You used one Large medkit. You Have" + medkitsl + " Large Medkit(s) left.";
    }
    else if(medkitsl <= 0)
    {
        actionStat.innerHTML = "You have no Large medkits left.";
    }
}