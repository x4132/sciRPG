var health = 100;
var skills = 0;
var weapon1 = "AntiMonsterRifle(Automatic)";
var weapon1Damage = 35;
var weapon2 = "SmLaser+";
var weapon2Damage = 45;
var melee = "amoDiamondPlasmaBroadSword";
var meleeDamage = 70;
var enemy = "";
var enemyHealth = 0;
var enemyAttack = 0;
var battlenum = 0;
var shield;
var shieldProtection;



function attack(choice)
{
    if (choice == 1)
    {
        enemyHealth -= weapon1Damage;
        health -= enemyAttack;
        if(enemyHealth < 0)
        {
            enemyHealth = 0;
            actionStat.innerHTML = "Kiled " + enemy;
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
        var enemyMulti = enemyAttack * 1.5;
        enemyHealth -= weapon2Damage;
        health -= enemyMulti;

        if(enemyHealth < 0)
        {
            enemyHealth = 0;
            update();
            actionStat.innerHTML = "Kiled " + enemy;
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
        var enemyMulti = enemyAttack * 2;
        enemyHealth -= meleeDamage;
        health -= enemyMulti;

        if(enemyHealth < 0)
        {
            enemyHealth = 0;
            actionStat.innerHTML = "Kiled " + enemy;
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
        text.innerHTML = "Congratulations. You Won. You get an medkit and heal up to full health. As You venture deeper into the forest, you encounter an rogue Android. It picks up some rocks and gets ready to throw them at you.";
        enemy = "Rogue Android";
        enemyHealth = 120;
        enemyAttack = 12;
        health = 100;
        update();
    }
    if (number == 4)
    {
        text.innerHTML = "Congratulations. You Won. As you Loot the Android you find an MegaLabBlaster that can inflict 60 damage. you also find an old illegal ElitePlasmaKiller sword that does 130 damage. You also get an small laser shield and an class X medkit. You use it. You see an robotic laser Tree. it fires a few warning shots that singe your hair.";
        weapon1 = "MegaLabBlaster";
        weapon1Damage = 60;
        melee = "ElitePlasmaKiller";
        meleeDamage = 130;
        enemy = "Laser Tree";
        enemyHealth = 360;
        enemyAttack = 20;
        health = 130;
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
        text.innerHTML = "You loot the tree and get an class XV medkit and a Large HyperBlaster. it does 150 damage. there is also some level 3 body armor, which you equip. ";
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
    skill++;
}

/*function heal()
{
  if (skill > 0)
  {
    health += 60;
    skill--;
    update();
  }
}*/
