/*This will send an email when attacked*/
/*http://support.screeps.com/hc/en-us/articles/203339002-Defending-your-room*/

// var hostilesCount = {};

// creep.room.find(FIND_HOSTILE_CREEPS, { filter: function(i) { 
//     if(i.owner.username != 'Source Keeper') {
//         hostilesCount[i.owner.username] = hostilesCount[i.owner.username] || 0;
//         hostilesCount[i.owner.username]++;
//     }
// }});

// for(var user in hostilesCount) {
//     Game.notify(hostilesCount[user] + ' enemies spotted: user ' + user + ' in room ' + creep.room.name);
// }


// order of operations http://support.screeps.com/hc/en-us/article_attachments/201375902/action-priorities.png


// Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Builder1' );
// Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Builder1' );
// Builder1
// Memory.creeps.Worker1.role = 'harvester'; Memory.creeps.Worker2.role = 'harvester'; Memory.creeps.Builder1.role = 'builder';
// harvester
// Game.spawns.Spawn1.createCreep( [TOUGH, ATTACK, MOVE, MOVE], 'Guard1', { role: 'guard' } );





var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');

var harvester_count = 0;
var builder_count = 0;
var guard_count = 0;
var ranged_guard_count = 0;

for (var i in Game.creeps)
{
	var creep = Game.creeps[i];

	if (creep.memory.role == 'harvester')
	{
		harvester_count = harvester_count + 1;
	}

	if (creep.memory.role == 'builder')
	{
		builder_count = builder_count + 1;
	}

	if (creep.memory.role == 'guard')
	{
		guard_count = guard_count + 1;
	}

	if (creep.memory.role == 'ranged_guard')
	{
		ranged_guard_count = ranged_guard_count + 1;
	}
}

if (harvester_count <= (builder_count || guard_count || ranged_guard_count))
{
	//var possible_spawn = room.find(FIND_MY_SPAWNS);

	for (var i in Game.spawns)
	{
		var possible_spawn = Game.spawns[i];
		if (possible_spawn.canCreateCreep( [WORK, MOVE, CARRY] , 'Harvester' + (harvester_count + 1)) == OK)
		{
			possible_spawn.createCreep( [WORK, MOVE, CARRY] , 'Harvester' + (harvester_count + 1));
		}
	}
}


// if (Game.creeps.room == 0)
// {
// 	Game.spawns.Spawn1.createCreep( [WORK, WORK, CARRY, MOVE], 'Harvester1' );
// }

for(var name in Game.creeps) 
{
	var creep = Game.creeps[name];

	if(creep.memory.role == 'harvester') 
	{
		harvester(creep);
	}

	if(creep.memory.role == 'builder') 
	{
		builder(creep);
	}

	if(creep.memory.role == 'guard') 
	{
		guard(creep);
	}

}