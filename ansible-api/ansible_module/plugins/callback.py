import redis
import json

from datetime import datetime

from ansible.plugins.callback import CallbackBase

class CallbackModule(CallbackBase):
    """
    Reference: https://github.com/ansible/ansible/blob/v2.0.0.2-1/lib/ansible/plugins/callback/default.py
    """

    CALLBACK_VERSION = 2.0
    CALLBACK_TYPE = 'stored'
    CALLBACK_NAME = 'redis'

    def __init__(self):
        super(CallbackModule, self).__init__()
        self.start_time = datetime.now()
        self.redis_client = redis.StrictRedis(host='150.10.0.2', port=6379, db=0)
        self.redis_client.publish('ansible-channel', 'Ansible Publishing Connected')

    def v2_runner_on_failed(self, result, ignore_errors=False):
        # host = result._host.get_name()
        self.redis_client.publish('ansible-channel', json.dumps(result._result, indent=4))

    def v2_runner_on_skipped(self, result):
        host = result._host.get_name()
        self.redis_client.publish('ansible-channel', json.dumps({host.name: result._result}, indent=4))

    def v2_runner_on_unreachable(self, result):
        host = result._host.get_name()
        self.redis_client.publish('ansible-channel', json.dumps({host.name: result._result}, indent=4))

    def v2_runner_on_no_hosts(self, task):
        self.redis_client.publish('ansible-channel', "No Hosts")

    def v2_runner_on_ok(self, result, **kwargs):
        """Print a json representation of the result

        This method could store the result in an instance attribute for retrieval later
        """
        host = result._host
        self.redis_client.publish('ansible-channel', json.dumps({host.name: result._result}, indent=4))
    
    '''
    Use this for the task data
    '''
    def v2_playbook_on_task_start(self, task, is_conditional):
        self.redis_client.publish('ansible-channel', "TASK STARTING [%s]" % task.get_name().strip())


    def v2_playbook_on_play_start(self, play):
        name = play.get_name().strip()
        if not name:
            msg = "PLAY"
        else:
            msg = "PLAY [%s]" % name

        self.redis_client.publish('ansible-channel', msg)


    def v2_playbook_item_on_ok(self, result):
        delegated_vars = result._result.get('_ansible_delegated_vars', None)
        if result._task.action == 'include':
            return
        elif result._result.get('changed', False):
            if delegated_vars:
                msg = "changed: [%s -> %s]" % (result._host.get_name(), delegated_vars['ansible_host'])
            else:
                msg = "changed: [%s]" % result._host.get_name()
        else:
            if delegated_vars:
                msg = "ok: [%s -> %s]" % (result._host.get_name(), delegated_vars['ansible_host'])
            else:
                msg = "ok: [%s]" % result._host.get_name()

        msg += " => (item=%s)" % (result._result['item'])

        self.redis_client.publish('ansible-channel', msg)


    def v2_playbook_item_on_failed(self, result):
        delegated_vars = result._result.get('_ansible_delegated_vars', None)
        if 'exception' in result._result:
            # Extract the error message and log it
            error = result._result['exception'].strip().split('\n')[-1]
            self.redis_client.publish('ansible-channel', error)

            # Remove the exception from the result so it's not shown every time
            del result._result['exception']

        if delegated_vars:
            self.redis_client.publish('ansible-channel', "failed: [%s -> %s] => (item=%s) => %s" % (result._host.get_name(), delegated_vars['ansible_host'], result._result['item'], self._dump_results(result._result)))
        else:
            self.redis_client.publish('ansible-channel', "failed: [%s] => (item=%s) => %s" % (result._host.get_name(), result._result['item'], self._dump_results(result._result)))


    def v2_playbook_item_on_skipped(self, result):
        msg = "skipping: [%s] => (item=%s) " % (result._host.get_name(), result._result['item'])
        self.redis_client.publish('ansible-channel', msg)

