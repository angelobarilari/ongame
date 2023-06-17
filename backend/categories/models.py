from django.db import models

from topics.models import Topic

# Create your models here.


class Category(models.Model):
    category_id = models.AutoField(primary_key=True)
    category = models.CharField(max_length=100)
    topic = models.ForeignKey(Topic, "topics.Topic", related_name="category")