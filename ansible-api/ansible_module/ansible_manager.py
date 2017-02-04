from collections import namedtuple
from ansible.vars import VariableManager
from ansible.inventory import Inventory
from ansible.playbook.play import Play
from ansible.executor.task_queue_manager import TaskQueueManager
from ansible.parsing.dataloader import DataLoader
from ansible.plugins.callback import CallbackBase


def create_and_run(tasks):
    Options = namedtuple('Options', ['connection', 'module_path', 'forks', 'become', 'become_method', 'become_user', 'check'])
    # initialize needed objects
    variable_manager = VariableManager()
    loader = DataLoader()
    options = Options(connection='local', module_path='library', forks=10, become=None, become_method=None, become_user=None, check=False)
    passwords = dict(vault_pass='secret')

    return options