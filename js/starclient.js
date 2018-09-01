var data;

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
xmlhttp.onReadyStateChange = function (){
  data = JSON.parse(this.responseText);
  console.log(data.ships.pod.type);
};
xmlhttp.open("GET", "data/ships.json", true);
xmlhttp.send();
var weaponSelected = 0;


function attack(choice)
{
}

function battle(number)
{
}


function init()
{
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
          console.log("selected!");
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
      console.log("selected!");
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