var harvester_count = 0;
var builder_count = 0;
var guard_count = 0;
var ranged_guard_count = 0;

var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
var ranged_guard = require('ranged_guard');
var population_manager = require('population_manager');

population_manager();


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
	
	if(creep.memory.role == 'ranged_guard')
	{
	    ranged_guard(creep);
	}

}