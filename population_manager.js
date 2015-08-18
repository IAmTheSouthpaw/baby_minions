

var harvester_count = 0;
var builder_count = 0;
var guard_count = 0;
var ranged_guard_count = 0;

module.exports = function ()
{

	var population_manager = function ()
	{
	};

	population_manager.check_population = function ()
	{
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
	};

	population_manager.balance_population = function ()
	{

		if (harvester_count <= (builder_count || guard_count || ranged_guard_count))
		{
			//var possible_spawn = room.find(FIND_MY_SPAWNS);

			for (var i in Game.spawns)
			{
				var possible_spawn = Game.spawns[i];
				if (possible_spawn.canCreateCreep( [WORK, MOVE, CARRY] , undefined, {role: 'harvester'}) == OK)
				{
					possible_spawn.createCreep( [WORK, MOVE, CARRY] , undefined, {role: 'harvester'});
				}
			}
		}
	};


};