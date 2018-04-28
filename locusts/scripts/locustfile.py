from locust import HttpLocust
from locust import TaskSet
from locust import task


class WebsiteTaskSet(TaskSet):

    @task
    def my_task(self):
        self.client.post('/all', json={'name': 'admin'})

class WebsiteLocust(HttpLocust):
    task_set = WebsiteTaskSet
