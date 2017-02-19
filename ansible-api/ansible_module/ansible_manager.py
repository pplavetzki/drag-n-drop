import json

from collections import namedtuple
from ansible.vars import VariableManager
from ansible.inventory import Inventory
from ansible.playbook.play import Play
from ansible.executor.task_queue_manager import TaskQueueManager
from ansible.parsing.dataloader import DataLoader
# from ansible.plugins.callback import CallbackBase

from plugins.callback import CallbackModule


def create_and_run(play):
    Options = namedtuple('Options', ['connection', 'module_path', 'forks', 'become', 'become_method', 'become_user', 'check'])
    # initialize needed objects
    variable_manager = VariableManager()
    loader = DataLoader()
    # this is key the module_path is in relation to the api.py file 
    options = Options(connection='local', module_path='ansible_module/library', forks=10, become=None, become_method=None, become_user=None, check=False)
    passwords = dict(vault_pass='secret')

    # Instantiate our ResultCallback for handling results as they come in
    # results_callback = ResultCallback()
    results_callback = CallbackModule()

    # create inventory and pass to var manager
    inventory = Inventory(loader=loader, variable_manager=variable_manager, host_list=play['host_list'])
    variable_manager.set_inventory(inventory)

    # set up tasks
    playTasks = []

    for task in play['tasks']:
        playTasks.append(dict(action=dict(module=task['module'], 
                              args=dict(host='{{inventory_hostname}}', 
                                        savedir='.', 
                                        user='root', 
                                        passwd='Juniper'))))

    # create play with tasks
    play_source =  dict(
            name = play['name'],
            hosts = play['hosts'],
            gather_facts = 'no',
            tasks = playTasks
            # tasks = [
            #     dict(action=dict(module='junos_get_facts.py', args=dict(host='{{inventory_hostname}}', savedir='.', user='root', passwd='Juniper'))),
            # ]
        )
    play = Play().load(play_source, variable_manager=variable_manager, loader=loader)

    # actually run it
    tqm = None
    try:
        tqm = TaskQueueManager(
                inventory=inventory,
                variable_manager=variable_manager,
                loader=loader,
                options=options,
                passwords=passwords,
                stdout_callback=results_callback,  # Use our custom callback instead of the ``default`` callback plugin
            )
        result = tqm.run(play)

        return result

    finally:
        if tqm is not None:
            tqm.cleanup()

if __name__ == '__main__':
    # play = {'name':'initial play', 'hosts':'all', 'host_list':['150.10.0.3']}
    play = {"name":"play of all plays", "hosts":"all", "host_list":["150.10.0.3"], "tasks":[{"name":"task 1"}, {"name":"task 2"}]}
    print play['name']
    create_and_run(play)

