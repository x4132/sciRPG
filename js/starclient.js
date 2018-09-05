var data;
var shipdata = {
  ship: "",
  structure: 1,
  armor: 1,
  shield: 1,
  weapons: []
};

var target1 = {
  weapon: 0,
  target: 0
};

var target2 = {
  weapon: 0,
  target: 0
};

var target3 = {
  weapon: 0,
  target: 0
};

var target4 = {
  weapon: 0,
  target: 0
};
var targetsActive = {
  target1: false,
  target2: false,
  target3: false,
  target4: false
};
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function (){
  data = JSON.parse(this.responseText);
  console.log(data.ships.pod.type);
};
xmlhttp.open("GET", "data/ships.json", true);
xmlhttp.send();
var weaponSelected = 0;


function attack()
{
}

function battle(number)
{
  switch (number) {
    case 1:
      console.log("Battle 1");
      getShip("alpha");
    break;
  }
}

function update()
{
  if (target1.target > 0)
    {
      targetsActive.target1 = true;
    } else if (target2.target > 0)
    {
      targetsActive.target2 = true;
    } else if (target3.target > 0)
    {
      targetsActive.target3 = true;
    } else if (target4.target > 0)
    {
      targetsActive.target4 = true;
    }
}

function win()
{
}

function heal()
{
}

function selectTarget(targets)
{
  if (weaponSelected == 1)
    {
      if (targetsActive.target1 === false)
        {
          targetsActive.target1 = true;
          target1.target = targets;
          target1.weapon = weaponSelected;
          weaponSelected = 0;
        }
      else {
        weaponSelected = 0;
      }
    }
  if (weaponSelected == 2)
  {
    if (targetsActive.target2 === false)
    {
      targetsActive.target2 = true;
      target2.target = targets;
      target2.weapon = weaponSelected;
      weaponSelected = 0;
    }
    else {
      weaponSelected = 0;
    }
  }
  if (weaponSelected == 3)
  {
    if (targetsActive.target3 === false)
    {
      targetsActive.target3 = true;
      target3.target = targets;
      target3.weapon = weaponSelected;
      weaponSelected = 0;
    }
    else {
      weaponSelected = 0;
    }
  }
  if (weaponSelected == 4)
  {
    if (targetsActive.target4 === false)
    {
      targetsActive.target4 = true;
      target4.target = targets;
      target4.weapon = weaponSelected;
      weaponSelected = 0;
    }
    else {
      weaponSelected = 0;
    }
  }
  
}

function selectWeapon(weapon)
{
  weaponSelected = weapon;
  update();
}

function getShip(ship)
{
  switch(ship) {
      case "pod": 
        shipdata.shield = data.ships.pod.shield;
        shipdata.ship = "pod";
        shipdata.armor = data.ships.alpha.armor;
        shipdata.structure = data.ships.alpha.structure;
        shipdata.weapons = data.ships.alpha.weapons;
      break;
      case "alpha": 
        shipdata.shield = data.ships.alpha.shield;
        shipdata.ship = "alpha";
        shipdata.armor = data.ships.alpha.armor;
        shipdata.structure = data.ships.alpha.structure;
        shipdata.weapons = data.ships.alpha.weapons;
      break;
  }
}

//weapon button stats
var weapon1Stat;
var weapon2Stat;
var weapon3Stat;
var weapon4Stat;

//weapon level stats
var weapon1L;
var weapon2L;
var weapon3L;
var weapon4L;

//weapon Level Power Usage
var weapon1P;
var weapon2P;
var weapon3P;
var weapon4P;

//armor, shield, and structure.
var structureStat;
var armorStat;
var shieldStat;

//Ship general info
var shipStat;
var shipType;

//enemy Stats
var eship1Stat;
var eship1Health;
var eship2Stat;
var eship2Health;

//miscellaneous
var powerStat;
var actionStat;
var enemyStat;
var battleStat;

function init()
{
  console.log("initializing...");
  
  weapon1Stat = document.getElementById("");
  weapon2Stat = document.getElementById("");
  weapon3Stat = document.getElementById("");
  weapon4Stat = document.getElementById("");
  
  weapon1L = document.getElementById("");
  weapon2L = document.getElementById("");
  weapon3L = document.getElementById("");
  weapon4L = document.getElementById("");
  
  weapon1P = document.getElementById("");
  weapon2P = document.getElementById("");
  weapon3P = document.getElementById("");
  weapon4P = document.getElementById("");
  
  structureStat = document.getElementById("");
  armorStat = document.getElementById("");
  shieldStat = document.getElementById("");
  
  shipStat = document.getElementById("");
  shipType = document.getElementById("");
  
  eship1Health = document.getElementById("");
  eship2Health = document.getElementById("");
  
  eship1Stat = document.getElementById("");
  eship2Stat = document.getElementById("");
  battle(1);
  console.log("initialized!");
}