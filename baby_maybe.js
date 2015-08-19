var harvester_count = 0;
var builder_count = 0;
var guard_count = 0;
var ranged_guard_count = 0;

var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
//var population_manager = require('population_manager')();

//population_manager.check_population();
//population_manager.balance_population();

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
	for (var i in Game.spawns)
	{
		var possible_spawn = Game.spawns[i];
		if (possible_spawn.canCreateCreep( [WORK, MOVE, CARRY] , undefined, {role: 'harvester'}) == OK)
		{
			possible_spawn.createCreep( [WORK, MOVE, CARRY] , undefined, {role: 'harvester'});
		}
	}
}

if (guard_count < (builder_count || builder_count || ranged_guard_count))
{
	for (var i in Game.spawns)
	{
		var possible_spawn = Game.spawns[i];
		if (possible_spawn.canCreateCreep( [TOUGH, ATTACK, MOVE, CARRY] , undefined, {role: 'guard'}) == OK)
		{
			possible_spawn.createCreep( [WORK, MOVE, CARRY] , undefined, {role: 'guard'});
		}
	}
}

if (builder_count < (harvester_count || guard_count || ranged_guard_count))
{
	for (var i in Game.spawns)
	{
		var possible_spawn = Game.spawns[i];
		if (possible_spawn.canCreateCreep( [WORK, WORK, MOVE, CARRY] , undefined, {role: 'builder'}) == OK)
		{
			possible_spawn.createCreep( [WORK, WORK, MOVE, CARRY] , undefined, {role: 'builder'});
		}
	}
}

if (ranged_guard_count < (builder_count || guard_count || harvester_count))
{
	for (var i in Game.spawns)
	{
		var possible_spawn = Game.spawns[i];
		if (possible_spawn.canCreateCreep( [RANGED_ATTACK, MOVE, MOVE, TOUGH] , undefined, {role: 'ranged_guard'}) == OK)
		{
			possible_spawn.createCreep( [RANGED_ATTACK, MOVE, MOVE, TOUGH] , undefined, {role: 'ranged_guard'});
		}
	}
}




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